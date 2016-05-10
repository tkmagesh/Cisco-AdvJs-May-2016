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
	describe("Defualt [products by id]", function(){
		function sort(){
			for(var i=0; i<products.length-1; i++)
				for(var j=i+1; j<products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});
	describe("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i<list.length-1; i++)
				for(var j=i+1; j<list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("Products by name", function(){
			sort(products, "name")
			console.table(products);
		});
		describe("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});
	});

	describe("Any list by any comparison", function(){
		function sort(list, comparerFn){
			for(var i=0; i<list.length-1; i++)
				for(var j=i+1; j<list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("Products by value [ cost * units]", function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value === p2Value) return 0;
				return 1;
			};
			sort(products, productComparerByValue);
			console.table(products);
		});
	});
});

describe("Filter", function(){
	describe("Costly products", function(){
		function filterCostlyProducts(){
			var result = [];
			for(var i=0; i<products.length; i++)
				if (products[i].cost > 50)
					result.push(products[i]);
			return result;
		}
		var costlyProducts = filterCostlyProducts();
		console.table(costlyProducts);
	});
	describe("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i<list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}

		var costlyProductCriteria = function(product){
			return product.cost > 50;
		}
		var category1ProductCriteria = function(product){
			return product.category === 1;
		}

		/*var affordableProductCriteria = function(product){
			//return product.cost <= 50;
			return !costlyProductCriteria(product);
		};

		var nonCategory1ProductCriteria = function(product){
			//return product.category !== 1;
			return !category1ProductCriteria(product);
		};*/

		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			}
		}

		var affordableProductCriteria = negate(costlyProductCriteria);
		var nonCategory1ProductCriteria = negate(category1ProductCriteria);

		describe("Costly products", function(){
			var costlyProducts = filter(products,costlyProductCriteria);
			console.table(costlyProducts);
		});
		describe("Affordable products", function(){
			var affordableProducts = filter(products, affordableProductCriteria);
			console.table(affordableProducts);
		})
		describe("Category 1 products", function(){
			var category1Products = filter(products, category1ProductCriteria);
			console.table(category1Products);
		})

		describe("Non category1 products", function(){
			var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
			console.table(nonCategory1Products);
		});
	});
});