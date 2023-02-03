var c = 1;
var id = setInterval(() => {
    if (c >= 10)
        clearInterval(id);
    console.log(c)
    c++;
}, 1000);