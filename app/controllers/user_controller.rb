class UserController < ApplicationController

  # GET /history - displays personal user history
  def show
  end

  # GET /register/:code
  def new
    @registrant = Registrant.find_by(code: params[:code])

    if @registrant
      @user = User.new(email: @registrant.email)
    else
      redirect_to register_path, error: "Do-over"
    end
  end

  # POST /user/:code
  def create
    # make new user from registrant
    registrant = Registrant.find_by(code: params[:code])
    @user = User.new(user_params)
    @user.email = registrant.email
    # test to see if password == password_confirmation
    # yes: save user
    #   destroy registrant
    if @user.password == @user.password_confirmation
      @user.save
      session[:user_id] = @user.id
      registrant.destroy
      redirect_to history_path
    end

    # no: display error message
    #   reload page
    # I think this is now unnecessary, since the submit button is disabled
    # if the passwords do not match
  end

  # GET /user/:id - display change password form for user <id>
  def edit
  end

  # POST /user/:id - update password for user <id>
  def update
  end

  # DELETE /user/:id - destroy account for user <id>
  def destroy
  end

  private

  def user_params
    params.require(:user).permit(
      :password,
      :password_confirmation
      )
  end

end








