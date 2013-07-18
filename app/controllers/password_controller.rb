class PasswordController < ApplicationController
  def edit
  	# find the user with the passed in code.
  	# then display the reset password form
  	@user = User.find_by(code: params[:code])
  end

  def update
  end
end
