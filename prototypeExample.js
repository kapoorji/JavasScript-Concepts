// every function has a prototype because JS doesn't which you want to inherivar t
this.hey = function() {
var a = 5;
this.name = "JOE"; // it will visible outside ,so it will become property of newly created obj i.e obj
return this.name;
}

// prototype refers function himself 
// in prototype we have an constructor and a proto

var obj = new hey(); // hey prototype will become it's proto which is hey function and proto object

hey.prototype.newValue = "DOE";

console.log(obj.newValue); // DOE

