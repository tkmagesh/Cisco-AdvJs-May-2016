function memoize(fn, context){
	var cache = {};
	var context = context || this;
	return function (){
        var key = [].join.call(arguments, '-');
		if (typeof cache[key] === 'undefined')
			cache[key] = fn.apply(context, arguments);
		return cache[key];
	}
};

/*create a function that returns true/false depending on the given number is prime or not.  Make sure the algorithm to check doesnt run more than once for the given number.*/


var isPrime = memoize(function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i=2; i<= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	});
	
var isEvenOrOdd = memoize(function evenOrOdd(n){
	console.log('processing ', n);
	return n % 2 === 0 ? "even" : "odd";
});

isPrime(100) //=> run the algo
isPrime(101) //=> run the algo
isPrime(102) //=> run the algo
isPrime(103) //=> run the algo

isPrime(100) //=> do NOT run the algo
isPrime(101) //=> do NOT run the algo
isPrime(102) //=> do NOT run the algo
isPrime(103) //=> do NOT run the algo


isEvenOrOdd