//Initialise user inputs
var value1;
var value2;
var choice;
var loop = "y";

while (loop === "y")
{
	choice = prompt("Do you want to calculate the FizzBuzz result after entering one interger number? y/n?");
		if (choice === "y")
		{
			value1 = parseInt(prompt("Enter first interger number!"));
				if (value1 % 15 === 0)
					alert("FizzBuzz");
				else if (value1 % 5 === 0)
					alert("Buzz");
				else if (value1 % 3 === 0)
					alert("Fizz");
				else
					alert("This is neither a Fizz nor Buzz!");		
		}
		else if (choice === "n")
		{
			choice = prompt("Do you want to calculate the FizzBuzz results for 'n' amount of intergers? y/n?");
			if (choice === "y")
			{
				value1 = parseInt(prompt("Enter the total number of intergers you would like to increment through!"));
						for (var i=1; i <= value1; i++)
						{
								if (i % 15 === 0)
							        console.log("FizzBuzz");
							    else if (i % 5 === 0)
							        console.log("Buzz");
							    else if (i % 3 === 0)
							        console.log("Fizz");
							    else 
							        console.log(i);
						}	
			} 	
		} 
	loop = prompt("Run again, y/n?");
}


