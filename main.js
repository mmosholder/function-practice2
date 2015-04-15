// 1
var namesArr = [
	{name: 'Luisa', age: 25},
	{name: 'Edward', age: 30}
];

var getName = function (arr) {
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i].name);
	}
};

// 2

 var totalLetters = function (arr) {
		var newArr = [];
 	for(var i = 0; i < arr.length; i++) {
 		newArr.push(arr[i]);
 	}

 	var results = newArr.join('');
 	return (results.length);
 };

// 3
var keyValue = function (city, cityName) {
	var newCity = {
		city: cityName
	};

	return newCity;
};

// 4

var negativeIndex = function (arr, x) {
	return (arr.length+x);
};


// 5
var removeM = function (str) {
	var emptyArr = [];
	var newArr = str.split('');
	for(var i = 0; i < newArr.length; i++) {
		if (newArr[i] != 'm') {
			emptyArr.push(newArr[i]);
		} 
	}
	return (emptyArr.join(''));
};

// 6
var printObject = function (obj) {
	for(var key in obj) {
		console.log(key + ' is ' + obj[key]);
	}
};

// 7
var vowels = function(str) {
	var emptyArr = [];
	var newArr = str.split('');
	for(var i = 0; i < newArr.length; i++) {
		if(newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u') {
			emptyArr.push(newArr[i]);
		}
	}

	return emptyArr;	

};

// // 8
var twins = function(arr) {
	for(var i = 0; i < arr.length; i+=2) {
		if(arr[i] != arr[i+1]) {
			return false;
		}
	}
	return true;
};

// 9
var or = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === true) {
			return true;
		}
	}
	return false;
};

// 10 
var unique = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === arr[i]) {
			console.log(arr[i]);
		}
	}	
};	