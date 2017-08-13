var obj1 = {
  name: "Galkin Anton"
};
var obj2 = Object.preventExtensions(obj1);
obj2.name = 'Ga';
obj2.name2 = 'Ga';
obj2.name3 = 'Ga';
console.log(obj2);
