require "spec_helper"

describe PasswordMailer do
  describe "reset_password" do
    let(:user) { User.new(email: 'to@example.org', name: 'Dan')}
    let(:mail) { PasswordMailer.reset_email(user) }

    it "renders the headers" do
      mail.subject.should eq("Change your credentials")
      mail.to.should eq(["to@example.org"])
      mail.from.should eq(["no-reply@awesomealgorithms.com"])
    end

    it "renders the body" do
      mail.body.encoded.should include("localhost:3000/reset")
    end

    it "personalizes the email" do
      mail.body.encoded.should include("Dan")
    end

  end

end
