class PasswordController < ApplicationController
  def edit
  	# @code = params[:code]
  	@user = User.new
  end

  def update
  end
end
