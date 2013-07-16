require 'spec_helper'

describe SessionsController do
  subject(:user) { Fabricate(:user) }

  describe "POST #create" do
    it 'logs in an authenticated user and redirects to site#index'

    it 'redisplays the login form for authentication failures'

    it 'sets code and expires_at for a password reset request'
  end
end