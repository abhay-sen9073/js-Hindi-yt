/*console.log(2 > 1 );
console.log( 2 >= 1 );
console.log(2 < 1);
console.log(2 == 1);
console.log( 2 != 1);*/


//console.log("2" > 1);
//console.log("02" > 1);

//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);
/* The reason is that an equality check == and comparision
> < >= <= work differently 
Comparision convert null to a number, treating it as 0.
That's ehy (3) null >= 0 is true and (1) null > 0 is false */

//console.log(undefined == 0);
//console.log(undefined > 0);
//console.log(undefined < 0);
//^ These kind of conversion can make us confuse so take care of it 

// === Strict Check

console.log("2" === 2);
