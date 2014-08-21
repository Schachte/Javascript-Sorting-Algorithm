/*
DEVELOP A SEARCH AND SORT ALGORITHM USING JAVASCRIPT
*/

/****************************************
FILL THE USER ARRAY IN THIS SNIPPET
*****************************************/

var userArrayFiller = [];

function fillUserArray(numericalArray) { 

	var numericalString = prompt('Enter integers, separate by space');

	userArrayFiller = numericalString.split(' ');  				// split the user string user a space operator
}

fillUserArray(userArrayFiller); 				  				//Call array filler function


/****************************************
BEGIN THE SEARCHING AND SORTING LOOP HERE
*****************************************/
	var temp;

	var completed = false;

	while (completed == false) {

		completed = true;

		for (var i = 0; i < userArrayFiller.length-1; i++) { 	     //Run for the duration of the lenght of the array

			if (userArrayFiller[i] > userArrayFiller[i + 1 ]) {      //perform a swap on the integers in this position

				temp = userArrayFiller[i + 1];

				userArrayFiller[i + 1]  = userArrayFiller[i];

				userArrayFiller[i] = temp;

				completed = false;									//swap is now finished
			}														//completed is false because if the while loop accesses the if statement then the bubble sort is not finished
		}
	}

alert('Filled to: ' + userArrayFiller);
