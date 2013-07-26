class PasswordMailer < ActionMailer::Base
  # Set the default 'from' line for these emails
  default from: "no-reply@sortkings.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.password_mailer.reset_email.subject
  #

  # create the password reset email and pass it
  def reset_email(user)
    @user = user

    mail to: @user.email, subject: 'Change your credentials'
  end

  def new_user_email(user)
    @user = user

    mail to: @user.email, subject: 'Finish your registration with the Sort Kings'
  end

end
