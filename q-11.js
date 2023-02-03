function calculate(input){
var input=input.trim();
let x= input.split(/\-|\+|\*|\//)
if(x.length<2) console.log("Invalid")
else if(isNaN(x[0])||isNaN(x[1])) console.log("Invalid")
else{let symbol= input[x[0].length];
if(symbol=='+')console.log(Number(x[0])+Number(x[1]))
if(symbol=='/')console.log(Number(x[0])/Number(x[1]))
if(symbol=='*')console.log(Number(x[0])*Number(x[1]))
if(symbol=='-')console.log(Number(x[0])-Number(x[1]))
}
}
calculate('2-9')