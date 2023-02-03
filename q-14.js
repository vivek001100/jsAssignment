function evenAge(input){
    var names=[]
input.forEach(e => {
    if(e.age%2==0){
        names.push(e.name)
    }
});
return names
}

console.log(evenAge([{name:"A",age:122},{name:"B",age:123},{name:"C",age:126}]));