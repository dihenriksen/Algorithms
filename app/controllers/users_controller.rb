class UsersController < ApplicationController

  # Everything in Users Controller is for use by administrators

  # GET /users - display all users
  def index
  	@users = User.all
  end

  # GET /users/:id - display detail for user <id>
  def show
  	@user = User.find params[:id]
  end

  # GET /users/new - display a new user form
  def new
  	@user = User.new
  end

  # GET /users/:id/edit - display the edit form for a user
  def edit
  	@user = User.find params[:id]
  end

  # POST /users - create a new user
  def create
  	@user = User.create user_params

  	if @user
      @user.code = SecureRandom.urlsafe_base64
      @user.expires_at = Time.now + 4.hours
      @user.save

      PasswordMailer.new_user_email(@user).deliver
      redirect_to root_url, notice: "An email has been sent to you to complete registration."
  	else
  		render :new
  	end
  end

  # PUT/PATCH /users/:id - update user <id>
  def update
  	@user = User.find params[:id]

  	if @user.update_attributes(user_params)
  		redirect_to users_path, status: 303
  	else
  		render :edit
  	end
  end

  # DELETE /users/:id - destroy user <id>
  def destroy
  	user = User.find params[:id]
  	user.destroy

  	redirect_to users_path, status: 303
  end

  private

  def user_params
  	params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
