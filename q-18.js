var a = () => {
    console.log("a called");
}
a();//a called
var a = 34;
a();//error
// on 4th line we are executing the a function the output will be "a called" then we are redeclaring 
// a to value of 34 if we execute of a function we will get error