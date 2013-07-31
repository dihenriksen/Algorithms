class SessionController < ApplicationController
  before_action :is_authenticated, only: [ :history ]

  # GET /login - sign in form
  def new
  end

  # GET /history/:id - personal history on the site
  def history
    # How do I make a specific person's history page load?
    current_user # Calls the current_user method in application_controller
                # which returns @current_user
  end

  # POST /login - create a new user session
  def create

    # If password is blank, then they must want to reset the password
    # If email and password are both filled in, then test that they match
    if params[:password].blank?
      user = User.find_by(email: params[:email])

      # If the user exists, make reset password code, and send email
    	if user
        user.code = SecureRandom.urlsafe_base64
        user.expires_at = Time.now + 4.hours
        user.save

        # Send the password reset email with the coded link
        PasswordMailer.reset_email(user).deliver
        redirect_to root_url, notice: "A password reset email has been sent to you"
    	end

    # email and password both entered:
    else
      user = User.authenticate(params[:email], params[:password])

      if user
        # Yes: log the user in, redirect them to their personal history page
        session[:user_id] = user.id
        redirect_to history_path, notice: "You've successfully logged in!"
      else
        # No: reload the signin page, flash an error message.
        flash.now[:error] = "Wrong email or password"
        render :new
      end
    end
  end

  # GET /logout - logs the user out
  # DELETE /logout
  def destroy
  	session[:user_id] = nil
    @current_user = nil
  	redirect_to root_url, notice: "You are now logged out."
  end
end