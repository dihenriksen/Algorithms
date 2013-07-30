class SortedArraysController < ApplicationController
  def create
  	puts '*************************************'
  	puts params[:raw_array]
  	@sorted_array = SortedArray.new( params.permit(:raw_array, :numStepsBubble) )
  	# @sorted_array[:raw_array] = params[:raw_array]
  	@sorted_array.save

  end
end
