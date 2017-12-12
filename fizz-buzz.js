//Initialise user inputs
var value1;
var value2;
var choice;
var loop = "y";

while (loop === "y")
{
	choice = prompt("Do you want to calculate the FizzBuzz result after entering a single interger? y/n?");
		if (choice === "y")
		{
			value1 = parseInt(prompt("Enter a single interger!"));
				if (value1 % 15 == 0)
				//if input is a multiple of 15
					alert((value1)+" is a FizzBuzz");
				else if (value1 % 5 == 0)
				//if input is a multiple of 5
					alert((value1)+" is Buzz");
				else if (value1 % 3 == 0)
					alert((value1)+" is Fizz");
				//if input is a multiple of 3
				else
					alert((value1)+" is neither a Fizz nor Buzz!");		
		}
		else if (choice === "n")
		{
			choice = prompt("Do you want to calculate the FizzBuzz results for 'n' amount of intergers? y/n?");
			if (choice === "y")
			{
				value1 = parseInt(prompt("Enter the total number of intergers you would like to increment through!"));
				console.clear();
				//clears console if the console has been used before to calculate multiple Fizz
				for (var i=1; i <= value1; i++)
				{
						if (i % 15 == 0)
					        console.log((i)+" is a FizzBuzz");
					    else if (i % 5 == 0)
					        console.log((i)+" is Buzz");
					    else if (i % 3 == 0)
					        console.log((i)+" is Fizz");
					    else
					        console.log(i);
				}	
			} 	
		} 
	loop = prompt("Run again, y/n?");
}


