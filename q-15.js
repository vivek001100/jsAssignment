function f1(object) {
    const obj = { name: "Daniel", age: 27 };
    if (object.age === 20) {
    const obj = { name: "Jack" };
    object.name = "Sam";
    console.log(obj.age);
    } else {
    const obj = { name: "Emily" };
    object = null;
    console.log(obj.name);
    } }
    const ob1 = { name: "Mark", age: 20 };
    const ob2 = { name: "Karl", age: 21 };
    f1(ob1);
    console.log(ob1);
    f1(ob2);
    console.log(ob2);

    // Output:-undefined   //because obj has new value reference uopdated by {name:"Jack"} hence age here is undefined
    //         { name: 'Sam', age: 20 } //
    //         Emily
    //         { name: 'Karl', age: 21 }