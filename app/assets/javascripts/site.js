// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function bubblesort(array) {
	var swaps = 0;	// counts total number of swaps within the array
	var sorted = false;
	var new_array_element = $('p').first().clone().html('');
	var array_for_display = [];

	while (!sorted) {
		var for_testing_if_any_swaps = swaps;
		for (i = 0; i < array.length; i++) {
			if (array[i] > array[i+1]) {
				swap(array, i, i+1);
				swaps++;
			}
		}
		if (for_testing_if_any_swaps === swaps) {
			sorted = true;
		}

	// array_for_display = new_array_element.html(array);
	// console.log(array_for_display);
	// $('.bubblesort').append(array_for_display);

	new_array_element = $('p').first().clone().html(array);
	$('.bubblesort').append(new_array_element);

	}

	$('.bubblesort').append('<p>' + swaps + ' swaps</p>');
	return array;
}

function mergesort(array) {
	if (array.length === 1) {
		return array;
	} else {

	}
}

function swap(array, x, y) {
	// Swaps the positions of two elements in an array
	var temp = array[x];
	array[x] = array[y];
	array[y] = temp;
	return array;
}

$(document).ready(function() {

	var test_array = [0, 3, 5, 2, 8, 7, 9, 4, 1, 6];

	$('p').html('Start: ' + test_array);
	array = bubblesort(test_array);

});
















