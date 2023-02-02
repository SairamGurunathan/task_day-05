//Do the below programs in arrow functions.

/* Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
 var num = (odd) => odd.filter((a)=>a%2)
console.log(num(arr))
OUTPUT:
[1,3,5,7,9,11,13]
--------------------------------------------------------------------------------*/
/* Convert all the strings to title caps in a string array

let str = ["cars","bikes","cycle","train","bus"];
var nam = (cap) => cap.map((a) => a.charAt(0).toUpperCase() + a.slice(1))
console.log(nam(str));
OUTPUT:
['Cars', 'Bikes', 'Cycle', 'Train', 'Bus']
--------------------------------------------------------------------------------*/
/* Sum of all numbers in an array

let num = [12,43,67,8,89,34]
var n = (sum) => sum.reduce((a,b) => a+b)
console.log(n(num))
OUTPUT:
253
--------------------------------------------------------------------------------*/

/* Return all the prime numbers in an array
let num = [1,2,3,4,5,6,7,8,9,11,13,15,17,19,20];
var prime = (n) => {
    let result = [];
    for(let i=0; i<n.length; i++){
        var isPrime = true;
        if(n[i]==1 || n[i]==0){
            isPrime = false;
        }
        else if(n[i]>1){
            for(let j=2;j<n[i]; j++){
                if(n[i]%j == 0){
                    isPrime = false;
                    break;
                }
            }
        }
    
    if(isPrime){
        result.push(n[i]);
    }
}
    return result;
}
console.log(prime(num));
 OUTPUT:
 [2, 3, 5, 7, 11, 13, 17, 19]
--------------------------------------------------------------------------------*/

/* Return all the palindromes in an array
let arr = ["mom","wow","sir","mam"];
var str = (n) => n.filter((a) => a.split('').reverse().join('')===a)
console.log(str(arr))
OUTPUT:
["mom","wow","mam"]
--------------------------------------------------------------------------------*/
