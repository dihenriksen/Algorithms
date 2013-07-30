require 'spec_helper'

describe Registrant do
	subject(:registrant) { Fabricate(:registrant) }

	it "requires an email address includes the @ symbol" do
		expect(Registrant.new(email: 'good@email.com').valid?).to be_true
		expect(Registrant.new(email: 'bademail.com').valid?).to be_false
	end
end