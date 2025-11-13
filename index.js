let readLineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readLineSync.question("What is Your Name? ");
console.log(kuler(`\nHello ${userName} welcome to quizify`, "#b91c1c"));
console.log("\nPlease select any options by typing either a/b/c/d\n");
/** Creating data set */
const database = {
    data : [
        {
            question: `let a = {}, b = {} 
    console.log(a == b)
    console.log(a === b)`,
        options : {
            a: "false false",
            b: "false true",
            c: "true false",
            d: "true true"
        },
        correctAnswer: "a"
        },
        {
            question:"Is method chaining possible with forEach?",

            options : {
                a: "Yes",
                b: "No"
            },
            correctAnswer : "b",

        },
        {
            question: "Object.assign(target, source) creates which type of copy?",

            options: {
                a: "Deep Copy",
                b: "Shallow Copy",
                c: "Nested Copy",
                d: "Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: `const myvar;
    myvar = 10;
    console.log(myvar);`,

            options: {
                a:10,
                b:"myvar",
                c:"Error",
                d:"NAN"
            },
            correctAnswer: "c"
        },
        {
            question: "What is diference between java and javascript",

            options: {
                a: "Java is used for backend and javascript used for frontend",
                b: "Java is oops programing language and javascript is procedural language",
                c: "Java is mobile applications and javascript is web applications",
                d: "Java is a multi threaded programing language and javascript is single threaded scripting language "
            },
            correctAnswer: "d"
        },
        {
            question: `let msg;
    msg = "mahesh";
    console.log(msg);`,

            options:{
                a: "Invalid",
                b: "Syntax Error",
                c: "mahesh",
                d: "value error"
            },

            correctAnswer: "c"
        },
        {
            question: `console.log(null == 0)`,
            options: {
                a: "false",
                b: "true",
                c: "Invalid"
            },
            correctAnswer: "a",
        },
        {
            question: `var myVar;
    console.log(myVar);`,
            options: {
                a: "syntax error",
                b: "declaration error",
                c: "null",
                d: "undefined"
            },
            correctAnswer: "d"

        },

        {
            question: `let msg = "Hello";
    let msg = "Hi";
    console.log(msg);`,

            options: {
                a: "Uncaught SyntaxError: Identifier 'msg' has already been declared",
                b: "Hi",
                c: "Hello",
                d: "HlloHi"
            },
            correctAnswer: "a"
        },

        {
            question: `const x = "12";
    const y = 4;
    const z = 5;
    console.log(x + y + z);`,

            options: {
                a: "Uncaught SyntaxError: Identifier 'msg' has already been declared",
                b: 1245,
                c: 21,
                d:129

            },
            correctAnswer: "b"
        }
    ]
}

/** Creating Leader Board */

const leaderBoard = {
    data : [
        {
            name: "Gana",
            score: 1
        },
        {
            name: "Ramu",
            score: 3
        },
        {
            name: "Roja",
            score: 2
        }
    ]
}

/** Main Logic */

function playGame(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log(kuler("Correct Answer", "#059669"));
        score++;
    }else{
        console.log(kuler("Incorrect Answer", "#b91c1c"));
        console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"));
        
        
    }
}

function showQuestionAndOptions(database){
    for(let i = 0; i<database.data.length; i++){
        console.log(`\nQ${i+1}- ${database.data[i].question}\n`);
        for(let key in database.data[i].options){
            console.log(`${key} = ${database.data[i].options[key]}`);
            
        }
        let userAnswer = readLineSync.question("Enter Your Answer- (a/b/c/d) - ").toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer);
        
    }
    
}

function showHighScore(leaderBoard){
    leaderBoard.data.push({name: userName, score: score});
    let sortedScoreList = leaderBoard.data.sort((a,b)=> b.score - a.score);
    console.log(kuler("\nCheck your position on the leader board", "#fde047"));
    for(let leader of sortedScoreList){
        console.log(kuler(`${leader.name} - Score: ${leader.score}`, "#9333ea"));
        
    }
    
}

showQuestionAndOptions(database);
console.log(kuler(`\nYour Score is - ${score}`, "#5eead4"));
showHighScore(leaderBoard);