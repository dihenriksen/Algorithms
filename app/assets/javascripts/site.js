// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function bubblesort(array) {
	var arr = array.slice();
	var swaps = 0;	// counts total number of swaps within the array
	var sorted = false;
	var new_array_element = $('p').first().clone().html('');
	var array_for_display = [];

	while (!sorted) {
		var for_testing_if_any_swaps = swaps;
		for (i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i+1]) {
				swap(arr, i, i+1);
				swaps++;
			}
		}
		if (for_testing_if_any_swaps === swaps) {
			sorted = true;
		}

	// array_for_display = new_array_element.html(array);
	// console.log(array_for_display);
	// $('.bubblesort').append(array_for_display);

	new_array_element = $('p').first().clone().html('[' + arr + ']');
	$('.bubblesort').append(new_array_element);

	}

	$('.bubblesort').append('<p>' + swaps + ' swaps</p>');
	return arr;
}

function mergesort(array) {
	var arr = array.slice();
	var new_array_element = $('p').first().clone().html('');

	if (arr.length === 1) {
		return arr;
	} else {
		var mid = Math.floor(arr.length/2);
		var left = arr.slice(0, mid);
		var right = arr.slice(mid);

		left = mergesort(left);
		right = mergesort(right);

		new_array_element = new_array_element.html('[' + left + '] [' + right + ']');
		$('.mergesort').append(new_array_element);

		return merge(left, right);
	}
}

function quicksort(array) {
	var arr = array.slice();

	if (arr.length === 1 || arr.length === 0) {
		return arr;
	} else {
		var pivot = median([arr[0],arr[Math.floor(arr.length/2)],arr[arr.length - 1]]);
		console.log('pivot:' + pivot);

		var end_index = arr.length - 1;

		for (i = 0; i < end_index; i++) {
			if (i < arr.indexOf(pivot) && arr[i] > pivot) {
				arr.push(arr.splice(i,1)[0]);
				end_index--;
				i--;
			} else if (i > arr.indexOf(pivot) && arr[i] < pivot) {
				arr.unshift(arr.splice(i,1)[0]);
			}
		}

		console.log('left: ' + left);
		console.log('right: ' + right);

		var left = quicksort(arr.slice(0,arr.indexOf(pivot)));
		var right = quicksort(arr.slice(arr.indexOf(pivot) + 1));

		arr = left.concat([pivot]).concat(right);
		console.log('arr: ' + arr);
		return left.concat([pivot]).concat(right);
	}
}

function merge(left, right) {
	var arr = [];
	var new_array_element = $('p').first().clone().html('');

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}

	while(left.length) {
		arr.push(left.shift());
	}

	while(right.length) {
		arr.push(right.shift());
	}

	new_array_element = new_array_element.html('[' + arr + ']');
	$('.mergesort').append(new_array_element);

	return arr;
}

function swap(arr, x, y) {
	// Swaps the positions of two elements in an array
	var temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
	return arr;
}

function median(arr) {
	// returns the median of an array of three numbers
	if ((arr[0] < arr[1] && arr[0] > arr[2]) || (arr[0] > arr[1] && arr[0] < arr[2])) {
		return arr[0];
	} else if ((arr[1] < arr[0] && arr[1] > arr[2]) || (arr[1] > arr[0] && arr[1] < arr[2])) {
		return arr[1];
	} else {
		return arr[2];
	}
}



$(document).ready(function() {

	var test_array = [0, 3, 5, 2, 8, 7, 9, 4, 1, 6];

	$('p').html('Start: [' + test_array + ']');
	bubble_array = bubblesort(test_array);

	merge_array = mergesort(test_array);

	quicksort_array = quicksort(test_array);

	console.log('Done');

});
















