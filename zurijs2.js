const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
     
readline.question('Enter the first number\n', num1 => {
    readline.question('Enter the second number\n', num2 => {
        readline.question('Enter the operation\n', operation => {
            let answer;
            if(!(["+", "-", "/", "x", "*"].includes(operation)) ){
                console.log("Invalid operation input. Calculator only sues the folowing: + , - , / , x and *");
            }else{
                if(operation == "+"){
                    answer = parseInt(num1) + parseInt(num2);
                } 
                if(operation == "-"){
                    answer = parseInt(num1) - parseInt(num2);
                }
                if(operation=="x" || operation=="*"){
                    answer = parseInt(num1) * parseInt(num2);
                }
                if(operation == "/"){
                    answer = parseInt(num1) / parseInt(num2);
                }
                console.log("The answer is "+answer);
            }
            readline.close();
        });
    });
});