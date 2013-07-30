class EmailValidator < ActiveModel::Validator
	def validate(record)
		unless record.email.include? "@"
			record.errors[:email] << "Email must include '@'"
		end
	end
end