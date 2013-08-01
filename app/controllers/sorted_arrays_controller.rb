class SortedArraysController < ApplicationController
  before_action :current_user

  def create
  	# puts '*************************************'
  	# puts params[:raw_array]

  	@sorted_array = @current_user.sorted_arrays.new( params.permit(
  		:raw_array,
  		:numStepsBubble,
  		:numStepsMerge,
  		:numStepsMergeNat,
  		:numStepsQuick)
  	)
  	# This will also work, in lieu of the above:
  	# @sorted_array[:raw_array] = params[:raw_array]
  	@sorted_array.save
  end
end
