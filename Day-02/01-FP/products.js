var products = [
	{id :5, name : "Pen" , cost : 20, units : 60, category : 1},
	{id :9, name : "Hen" , cost : 90, units : 30, category : 1},
	{id :3, name : "Ten" , cost : 60, units : 80, category : 2},
	{id :4, name : "Den" , cost : 40, units : 90, category : 2},
	{id :6, name : "Zen" , cost : 10, units : 10, category : 1}
]

/*
sort
filter
any
all
min
max
sum
aggregate
groupBy
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe("Sort", function(){
	describe("Products by id", function(){
		//sort();
		console.table(products);
	});
	describe("Products by cost", function(){
		//sort()
		console.table(products);
	});
});