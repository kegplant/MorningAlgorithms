//cyclic reference: ok in JS
const a=[1,2,3];
a[2]=a;

//string immutability: no error but doesn't change either
var a="bc";
a[0]='B';
console.log(a);

//assignment changes reference! and fails if const
var a=[1,2,3] // vs const a
a=[2,3,4]

//