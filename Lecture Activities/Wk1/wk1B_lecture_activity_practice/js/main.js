/*
	PWA1 JavaScript Practice
*/

// scope wrapper (self executing function)
(function(){
	
/* 
	===============================================
	RESEARCHING
	-----------------------------------------------
	To find documentation, use http://dochub.io
*/	
	
	
/* 
	===============================================
	RECAP:  Data Types
	-----------------------------------------------
	"string"						string literal
	3.14							number literal
	1								number literal
	10e10							number literal
	["a", "b", "c"]					array literal
	function(arg, arg2){}			function literal
	undefined						undefined
*/
	

/*
	===============================================
	RECAP:  Variable Declarations
	-----------------------------------------------
	Comma separated, undefined declarations, recap array syntax and objects
*/

console.log('------Recap Variables ----------');



/*
	===============================================
	RECAP:  Functions
	-----------------------------------------------
	arguments, returns, chaining, variable scope
*/

console.log('------Recap Functions ----------');	
	

	
	
/*
	===============================================
	Conditions & Conditionals
	-----------------------------------------------
	First, a CONDITION is a boolean test between two values, the resulting boolean can be saved 

	>=  <=  !=  !==  !
	Sort: A-Za-z
*/
	
console.log('------Conditionals ----------');



/*  A conditional is a block of code that only runs if the condition is true (example, state switching) */
	
/*
	===============================================
	Because of JavaScript's loose syntax, some values are == false, we call these FALSY.
		
		false 		== false  	| true
		0 			== false	| true
		"" 			== false	| true
		undefined 	== false	| true
		null 		== false	| true
		NaN 		== false	| true
	
	So the following conditional fails...
*/
	
	

	
/*
	== is the equality operator, does not check against data type
	=== is the identity operator, checks data type match
		
	Best Practice:  Use identity operator 99% of the time
*/
	
console.log('------Equals Double vs triple ----------');
	

//  How to test for a variable's existence (typeof)
	
console.log('------typeof ----------');	

	
/*
	===============================================
	Logical Operators
	
	condition1 && condition2	// AND (both must be true)
	condition1 || condition2	// OR (either must be true)
		
	Always put simpler conditions on the left
*/
	
console.log('------Logical Operators ----------');
	


/*
	===============================================
		Converting Data Types
*/

console.log('------Converting Data Types ----------');

	
/*
	===============================================
	Conditional Operator (=== THE WIN)   mood demo
	
	Is a shortcut for if(){}else{}

	( condition ? true : false )
		
*/

console.log('------Conditional Operator ----------');



	
/*
	===============================================
	For / While Loop, basic logic structure
	
	initialize counter;
	loop until condition;
		increment counter;
			
	(beer demo)
*/
console.log('------For / While Loop ----------');

	
	
/*
	===============================================
	For Loop, prebuilt logic structure
	
	for(initialize; condition; increment){}
*/

console.log('------For Loop ----------');

var heroes = [
	'Superman',
	'Batman',
	'Wolverine',
	'Iceman'
];
	

		
/*
	===============================================
	The for-in object loop
	
	for(var key in obj){
		obj[key]
	}
*/

console.log('------For In ----------');






/*
	===============================================
	Advanced sorting uses a function, the return of the function determines the sort
	return 1	puts A before B
	return -1	puts B before A
	return 0	no change
*/

console.log('------Sort ----------');


/*
	===============================================
	ERROR TYPES: syntax, runtime, logic
*/	



})();