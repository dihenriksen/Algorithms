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
end
