# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

User.create([
	{
		email: 'charles@chaz.com'
		password: '123'
		password_confirmation: '123'
	}
	{
		email: 'baxter@ross.com'
		password: '123'
		password_confirmation: '123'
	}
	{
		email: 'tim@preston.com'
		password: '123'
		password_confirmation: '123'
	}
	])