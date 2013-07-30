class Registrant < ActiveRecord::Base
	# include ActiveModel::Validations
	# validates_with EmailValidator

	# This validation does not work because it is checking the Registrant table
	# but it should be checking the user table
	validates :email, uniqueness: true
end