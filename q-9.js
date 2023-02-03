(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
    })();
// Output:-2
//         4
//         3
//         1
// Explanation :- at first settimeout is add to the callback queue because it execute unsynchronously and wait until the timer 2000ms complete
// and till other are executed synchronously hence 2 is print first
// like first settimeout this second
        