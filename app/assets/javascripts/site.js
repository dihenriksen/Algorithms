// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function bubblesort(array) {
	var arr = array.slice();
	var swaps = 0;	// counts total number of swaps within the array
	var sorted = false;
	var new_array_element = $('p').first().clone().html('');
	var array_for_display = [];
	var count = 0;
	color_set = color_setter(array);
	console.log(color_set);

	while (!sorted) {
		var end_index = arr.length;
		var for_testing_if_any_swaps = swaps;
		for (i = 0; i < end_index; i++) {
			count++;
			if (arr[i] > arr[i+1]) {
				swap(arr, i, i+1);
				swaps++;
				count = count + 3;
				render_colors(arr, color_set);
			}
		}
		if (for_testing_if_any_swaps === swaps) {
			sorted = true;
			count++;
		}

		end_index--;
		count++;

		new_array_element = $('#bubblesort').find($('p')).first().clone().html('[' + arr + ']');
		$('#bubblesort').append(new_array_element);

	}

	$('#bubblesort').append('<p>' + swaps + ' swaps</p>');

	hash = {
		arr: arr,
		count: count
	}

	return hash;
}

function mergesort(array, count) {
	var arr = array.slice();
	var new_array_element = $('p').first().clone().html('');

	hash = {
		arr: arr,
		count: count
	}

	if (arr.length === 1) {
		count++;
		hash = {
			arr: arr,
			count: count
		}
		return hash;
	} else {
		var mid = Math.floor(arr.length/2);
		var left = arr.slice(0, mid);
		var right = arr.slice(mid);
		count = count + 3;

		// Put steps into json data

		left = mergesort(left).arr;
		right = mergesort(right).arr;
		count = count + 2;

		new_array_element = new_array_element.html('[' + left + '] [' + right + ']');
		$('#mergesort').append(new_array_element);

		hash = merge(left, right, '#mergesort', count);

		return hash;
	}
}

function mergesort_natural(array, count) {
	var arr = array.slice();
	if (array.length === 1) {
		count++;
		hash = {
			arr: arr,
			count: count
		}
		return hash;
	} else {
		var new_array_element = $('p').first().clone().html('');
		var naturalized = [[]];
		var j = 0;
		var current = 0;
		count = count + 3;

		// test_array = [4,6,5,8,2,3,9,1,0,7]

		while (arr.length) {
			count++;
			current = arr[0];
			naturalized[j].push(arr.shift());
			count++;
			if (arr[0] < current) {
				j++;
				naturalized[j] = [];
				count++;
			}
		}

		while (naturalized.length > 1) {
			count++;
			merged_array = merge(naturalized[0], naturalized[1], '#mergesort_natural', count);
			naturalized[0] = merged_array.arr
			naturalized.splice(1,1);
		}
	}
	arr = naturalized[0];

	hash = {
		arr: arr,
		count: count
	}
	return hash;
}

function quicksort(array, count) {
	var arr = array.slice();
	var new_array_element = $('p').first().clone().html('');

	hash = {
		arr: arr,
		count: count
	}

	if (arr.length === 1 || arr.length === 0) {
		count++;
		hash = {
			arr: arr,
			count: count
		}
		return hash;
	} else {
		var pivot = choose_pivot([arr[0],arr[Math.floor(arr.length/2)],arr[arr.length - 1]]);
		count++;

		var end_index = arr.length;

		for (i = 0; i < end_index; i++) {
			count++;
			if (i < arr.indexOf(pivot) && arr[i] > pivot) {
				arr.push(arr.splice(i,1)[0]);
				end_index--;
				i--;
				count++;
			} else if (i > arr.indexOf(pivot) && arr[i] < pivot) {
				arr.unshift(arr.splice(i,1)[0]);
				count++;
			}
		}

		var left = arr.slice(0,arr.indexOf(pivot));
		var right = arr.slice(arr.indexOf(pivot) + 1);
		count = count + 2;

		new_array_element = new_array_element.html('[' + left + '] [' + pivot + '] [' + right + ']');
		$('#quicksort').append(new_array_element);

		left = quicksort(left, count).arr;
		right = quicksort(right, count).arr;

		var arr = left.concat([pivot]).concat(right);
		$('#quicksort').append('<p>[' + arr + ']</p>');

		hash = {
			arr: arr,
			count: count
		}

		return hash;
	}
}

function merge(left, right, calling_function, count) {
	// merges two arrays, sorting as it goes
	var arr = [];
	var new_array_element = $('p').first().clone().html('');

	while (left.length && right.length) {
		count++;
		if (left[0] < right[0]) {
			arr.push(left.shift());
			count++;
		} else {
			arr.push(right.shift());
			count++;
		}
	}

	while(left.length) {
		count++;
		arr.push(left.shift());
		count++;
	}

	while(right.length) {
		count++;
		arr.push(right.shift());
		count++;
	}

	new_array_element = new_array_element.html('[' + arr + ']');
	$(calling_function).append(new_array_element);

	hash = {
		arr: arr,
		count: count
	}

	return hash;
}

function swap(arr, x, y) {
	// Swaps the positions of two elements in an array
	var temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
	return arr;
}

function choose_pivot(arr) {
	// returns the median of an array of three numbers
	if ((arr[0] < arr[1] && arr[0] > arr[2]) || (arr[0] > arr[1] && arr[0] < arr[2])) {
		return arr[0];
	} else if ((arr[1] < arr[0] && arr[1] > arr[2]) || (arr[1] > arr[0] && arr[1] < arr[2])) {
		return arr[1];
	} else {
		return arr[2];
	}
}

function randomarray() {
	var arr = [];
	var max_length = 30;
	var length = Math.floor(Math.random() * max_length);

	for (i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 255);
		// arr[i] = Math.floor(Math.random() * 200 - 100);
	}
	return arr;
}

function sorts(array) {
	var start_tag = '<p></p>';
	$('#bubblesort').children('p').remove();
	$('#bubblesort').append(start_tag);
	$('#mergesort').children('p').remove();
	$('#mergesort').append(start_tag);
	$('#quicksort').children('p').remove();
	$('#quicksort').append(start_tag);
	$('#mergesort_natural').children('p').remove();
	$('#mergesort_natural').append(start_tag);
	$('#bubble_colors').children().not('h3').remove();

	$('p').html('Start: [' + array + ']');

	bubble_count = bubblesort(array).count;
	merge_count = mergesort(array, 0).count;
	quicksort_count = quicksort(array, 0).count;
	merge_natural_count = mergesort_natural(array, 0).count;

	// render_colors(array);

	return false;
}

function render_colors(array, color_set) {
	var new_colors_container = "<div class = 'colors_container clearfix'><div class='color_div'></div></div>"
	$('#bubble_colors').append(new_colors_container);

	for (i = 0; i < array.length; i++) {
		var color_element = $('.color_div').first().clone();
		if (color_set[0] === "this") {
			var color_string = "rgb(" + array[i] + ", " + color_set[1] + ", " + color_set[2] + ")";
		} else if (color_set[1] === "this") {
			var color_string = "rgb(" + color_set[0] + ", " + array[i] + ", " + color_set[2] + ")";
		} else {
			var color_string = "rgb(" + color_set[0] + ", " + color_set[1] + ", " + array[i] + ")";
		}

		$('#bubble_colors').find($('.colors_container')).last().find($('.color_div')).last().after(color_element);
		$('#bubble_colors').find($('.color_div')).last().css({
			"background-color" : color_string
			});
	}
}

function color_setter(array) {
	if (array[0] % 3 === 0) {
		var r = "this";
		var g = array[1];
		var b = array[2];
	} else if (array[0] % 3 === 1) {
		var r = array[0];
		var g = "this";
		var b = array[2];
	} else {
		var r = array[0];
		var g = array[1];
		var b = "this";
	}
	color_set = [r, g, b];
	return color_set
}

$(document).ready(function() {

	var array = [];
	$('#generator').click(function() {
		array = randomarray();
		$('#random_array').html('[' + array + ']');
		return false;
	});

	$('#sort_button').click(function() {
		sorts(array);
		console.log(JSON.stringify(array));
		$.ajax ({
			type: "POST",
			url: "sorted_arrays/create",
			data: {
				raw_array: JSON.stringify(array),
				numStepsBubble: bubble_count,
				numStepsMerge: merge_count,
				numStepsMergeNat: merge_natural_count,
				numStepsQuick: quicksort_count
			},
			success: function(){ console.log("POST SENT"); },
			error: function(err){console.log(err);}
		})

		return false;
	});

	// test_array = [4,6,5,8,2,3,9,1,0,7]

});
















