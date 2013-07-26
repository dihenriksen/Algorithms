class RegistrationController < ApplicationController
  after_action :destroy_expired_registrants


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

  def destroy_expired_registrants
    Registrant.where('expires_at < ?', Time.now).destroy_all
  end

  def registrant_params
  	params.require(:registrant).permit(:email)
  end
end
