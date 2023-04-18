// Given  an array num of numbers with length of n,find the target 13 in the array.
// Return the index if the target is found else null.

function binary(num, target){
    let  left= 0;
    let right = num.length -1;

    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(num[middle] == target){
            return middle
        }
        else if(num[middle] > target){
            right = middle -1;
        }
        else{
            left = middle +1;
        }

    }
    return null;
}
let num =[2,5,7,9,11,13,15,17,21,25];
let target = 13;

console.log(binary(num, target))

// let nuum = [6,2,3,80]
// console.log(nuum.length -1);

// // my questions
//  function merge_sort(left_part,right_part) 
// {
// 	var i = 0;
// 	var j = 0;
// 	var results = [];

// 	while (i < left_part.length || j < right_part.length) {
// 		if (i === left_part.length) {
// 			// j is the only index left_part
// 			results.push(right_part[j]);
// 			j++;
// 		} 
//       else if (j === right_part.length || left_part[i] <= right_part[j]) {
// 			results.push(left_part[i]);
// 			i++;
// 		} else {
// 			results.push(right_part[j]);
// 			j++;
// 		}
// 	}
// 	return results;
// }

// console.log(merge_sort([1,3,4], [3,7,9]));

// const search  = (val,arr) => {
// 	for(let n = 0; n<arr.length; n++){
// 		if(val === arr[n]){
// 			return n
// 		}
// 	}
// 	return null
// } 
// const values = [3,7,9,1,3];
// console.log(search(38,values));
// Revision
// function getting(nam,trget){
// 	let left = 0
// 	let right = nam.length -1;
	
// 	while(left <= right){
// 		let middle = Math.floor((left + right)/2);
// 		if(nam[middle] == trget){
// 			return middle
// 		}
// 		else if(nam[middle] > trget){
// 			right = middle -1;
	
// 		}
// 		else{
// 			left = middle +1;
// 		}

// 	}
// 	return null;
// }

// let nam = [2,5,7,9,11,13,15,17,21,25];
// let trget = 13

// console.log(getting(nam,trget));

// BInary search
// function binary(number,target){
// 	let left = 0;
// 	let right = number.length -1;

// 	while(left <= right){
// 		let mid = Math.floor((left + right))/2;
// 		if(number[mid] == target){
// 			return mid;
// 		}
// 		else if(number[mid] < target){
// 			left = mid + 1;
// 		}
// 		else{
// 			right = mid -1;
// 		}
// 	}
// 	return null;
// }
// let number = [1,3,5,12,15,7,9]
// target = 12
// console.log(binary(number,target));


function findBin(number,target){
	let left = 0;
	let right = number.length -1;

	while(left <= right){
		let middle = Math.floor((left + right)/2);
		if(number[middle] == target){
			return middle
		}
		else if(number[middle] < target){
			left = middle +1;
		}
		else{
			right = middle -1;
		}
	}
	return null
}
let number = [12,4,5,78,32,1,34,56,7];
target = 34;

console.log(findBin(number,target));


function pracArray(nim,ar){
	let left = 0;
	let right = nim.length -1;

	while(left <= right){
		let mid = Math.floor((left + right)/2);
		if(nim[mid] == ar){
			return mid
		}
		else if(nim[mid] < ar){
			left = mid + 1
		}
		else{
			right = mid - 1
		}
	}
	return null

}
let numar = [2,5,7,9,10,16,3];
ar = 10;
console.log(pracArray(numar,ar));

function binarySearch(num,target){
    let left = 0;
    let right = num.length -1
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(num[middle] == target){
            return num
        }
        else if(num[middle] < target){
            middle = left + 1;
        }
        else{
            middle = right -1;
        }
    }
    return null
}

let numTarget = [2,5,7,9,13,25,78,4];
target = 13;

console.log(binarySearch(numTarget,target));

// Revesion

function findTarget(nam,tageti){
	let left = 0;
	let right = nam.length -1;

	while(left <= right){
		let middle = Math.floor((left + right)/2);
		if(nam[middle] == tageti){
			return middle;
		}
		else if(nam[middle] > tageti){
			right = middle - 1
		}
		else{
			left = middle + 1
		}
	}
	return null
}
let nam =[2,6,4,7,9,,3];
let tageti = 4;
console.log(findTarget(nam,tageti))


