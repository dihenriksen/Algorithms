class SessionController < ApplicationController

  # GET /login - sign in form
  def new
  end

  # GET /history/:id - personal history on the site
  def history
  end

  # POST /login - create a new user session
  def create
    if params[:password].blank?
      user = User.find_by(email: params[:email])

    	if user
        user.code = SecureRandom.urlsafe_base64
        user.expires_at = Time.now + 4.hours
        user.save

        # Send the password reset email with the coded link
        PasswordMailer.reset_email(user).deliver
        redirect_to root_url, notice: "A password reset email has been sent to you"
    	end

    else
      user = User.authenticate(params[:email], params[:password])

      if user
        session[:user_id] = user.id
        redirect_to root_url, notice: "You've successfully logged in!"
      else
        render :new
      end
    end
  end

  # GET /logout - logs the user out
  # DELETE /logout
  def destroy
  	session[:user_id] = nil
  	redirect_to login_url
  end
end