/*Create an object 'spinner' exhibiting the following behavior*/

spinner.up(); //=> 1
spinner.up(); //=> 2
spinner.up(); //=> 3
spinner.up(); //=> 4

spinner.down(); //=> 3
spinner.down(); //=> 2
spinner.down(); //=> 1
spinner.down(); //=> 0
spinner.down(); //=> -1

/*Note: Make sure that the value is influenced ONLY by the up() and down() methods*/



function getSpinner(){
	var count = 0;
	function up(){
		return ++count;
	}
	function down(){
		return --count;
	}
	return {
		up : up,
		down : down
	}
}


/*create a function that returns true/false depending on the given number is prime or not.  Make sure the algorithm to check doesnt run more than once for the given number.*/

var isPrime = (function(){
	var cache = {};
	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i=2; i<= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	}
	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
})();

isPrime(100) //=> run the algo
isPrime(101) //=> run the algo
isPrime(102) //=> run the algo
isPrime(103) //=> run the algo

isPrime(100) //=> do NOT run the algo
isPrime(101) //=> do NOT run the algo
isPrime(102) //=> do NOT run the algo
isPrime(103) //=> do NOT run the algo
