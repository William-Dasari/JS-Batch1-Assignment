const student = {
    name: "Helsinki",
    lastname:"might be",
    age: 24,
    projects: { 
        diceGame: "Two players dices game using JavaScript"
        }
    }
    const {name,age}= student;
    console.log(name,age);

    const {names,lastname,projects:{diceGame}}=student;
    console.log(lastname,diceGame)