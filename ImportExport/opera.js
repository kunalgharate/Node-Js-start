
// Addition function
 const add = (a,b) =>{

  return a+b;

};

//Substract function

 const sub = (a,b) =>{

  return a-b;

};


//module.exports = add;  // single export

//Multiple Exports

module.exports.add = add;
module.exports.sub = sub;

//module.exports = {add, sub};
