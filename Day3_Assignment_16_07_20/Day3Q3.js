let marks=prompt("Enter marks");
if(marks >= 85)
{
 console.log("Qualified in Grade A");
}
else if(marks >= 70 && marks <= 84 )
{
    console.log("Qualified in Grade B")
}
else if(marks >= 55 && marks <= 69 )
{
    console.log("Qualified in Grade C")
}
/*else if(marks >= 40 && marks <= 54 )
{
    console.log("Qualified in Grade D")
}*/
else if (marks <= 39 )
{
    console.log("Well tried better luch next time")
}

console.log(marks >= 40 && marks <= 54 ? 'Qualified in Grade D' : 'congrats' )