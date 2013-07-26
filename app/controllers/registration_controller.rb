class RegistrationController < ApplicationController
  def new
  	@registrant = Registrant.new
  end

  def create
  	@registrant = Registrant.new(registrant_params)
    @registrant.code = SecureRandom.urlsafe_base64
    @registrant.expires_at = Time.now + 4.hours

  	if @registrant.save
  		PasswordMailer.new_user_email(@registrant).deliver

  		redirect_to root_url, notice: "An email has been sent to complete your registration"
  	else
  		flash.now[:error] = "Unable to process. Please try again later."
  		render :new
  	end
  end

  private

  def registrant_params
  	params.require(:registrant).permit(:email)
  end
end
