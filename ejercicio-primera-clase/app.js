let name = prompt("Ingrese nombre y apellido").toUpperCase();
// console.log(name);
// console.log(name.slice(0,1));

let firstInitial = name.slice (0,1);
//console.log(firstInitial);

let secondInitial = name.indexOf(" ")+1;

let initialLastName = name.slice(secondInitial, secondInitial+1);

//document.write(firstInitial + initialLastName);
document.write(`Las iniciales son: ${firstInitial}${initialLastName} `);

// template string

//let
//const

//toUpperCase()
//toLowerCase()
