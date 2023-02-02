// Do the below programs in anonymous function & IIFE

/*A. Print odd numbers in an array(anonymous function)
var number = [11,12,13,14,15,16,17,18,19,20];

var num = function(odd){
    let result = [];
    for(let i=0; i<odd.length; i++){
        if(odd[i]%2!=0){
            result.push(odd[i]);
        }
    }
    return result;
}
console.log(num(number));
OUTPUT:
[11, 13, 15, 17, 19]
--------------------------------------------------------------------------------------*/
/* Print odd numbers in an array(IIFE function)

(function(odd){
    let result =[];
    for(let i=0; i<odd.length; i++){
        if(odd[i]%2!=0){
            result.push(odd[i]);
        }
    }console.log(result);
})([11,12,13,14,15,16,17,18,19,20]);
OUTPUT:
[11, 13, 15, 17, 19]
---------------------------------------------------------------------------------------*/
/* B. Convert all the strings to title caps in a string array(anonymous function)

var str = ["audi","bmw","jeep","chevy","ford","tata"];

var firstCaps = function(cap){
    let result = [];
    for(let i=0; i<cap.length; i++){
        result.push(cap[i]=cap[i].charAt(0).toUpperCase() + cap[i].slice(1));
    }return result;
}
console.log(firstCaps(str));
OUTPUT:
['Audi', 'Bmw', 'Jeep', 'Chevy', 'Ford', 'Tata']
----------------------------------------------------------------------------------------*/
/* Convert all the strings to title caps in a string array(IIFE function)

(function(cap){
    var result = [];
    for(let i=0; i<cap.length; i++){
        result.push(cap[i]=cap[i].charAt(0).toUpperCase() + cap[i].slice(1));
    }
    console.log(result);
})(["audi","bmw","jeep","chevy","ford","tata"]);
OUTPUT:
['Audi', 'Bmw', 'Jeep', 'Chevy', 'Ford', 'Tata']
--------------------------------------------------------------------------------------------*/

/* C. Sum of all numbers in an array(anonymous function)

var num = [1,45,23,56,88,4,78,67,99];

var number = function(sum){
    let result = sum.reduce((a,b) => a+b);
    return result;
}
    console.log(number(num));
OUTPUT:
461
--------------------------------------------------------------------------------------------*/
/*Sum of all numbers in an array(IIFE function)

(function(sum){
    let result = sum.reduce((a,b) => a+b);
    console.log(result);
})([1,45,23,56,88,4,78,67,99]);
OUTPUT:
461
--------------------------------------------------------------------------------------------*/

/* Return all the prime numbers in an array(anonymous function)

let num = [1,2,3,4,5,6,7,8,9,11,13,15,17,19,20];
var prime = function(n){
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
--------------------------------------------------------------------------------------------*/
/* Return all the prime numbers in an array(IIFE function)

(function(n){
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
}console.log(result);
})([1,2,3,4,5,6,7,8,9,11,13,15,17,19,20]);
OUTPUT:
[2, 3, 5, 7, 11, 13, 17, 19]
--------------------------------------------------------------------------------------------*/

/* D. Return all the palindromes in an array(anonymous function)

let arr = ["mom","wow","sir","mam"];
var str = function(n){
    let result = [];
    for(let i=0; i<n.length; i++){
        let m = n[i].split('').reverse().join('');
        if(n[i]==m){
            result.push(m);
        }
    }return result;
}
console.log(str(arr));
OUTPUT:
['mom', 'wow', 'mam']
--------------------------------------------------------------------------------------------*/
/*D. Return all the palindromes in an array(IIFE function)

(function(arr){
        let result = [];
        for(let i=0; i<arr.length; i++){
            let m = arr[i].split('').reverse().join('');
            if(arr[i]==m){
                result.push(m);
            }
        }
    console.log(result);
})(["mom","wow","sir","mam"]);
OUTPUT:
['mom', 'wow', 'mam']
--------------------------------------------------------------------------------------------*/
// Return median of two sorted arrays of the same size.(anonymous function)
// Return median of two sorted arrays of the same size.(IIFE function)

//--------------------------------------------------------------------------------------------
/* Remove duplicates from an array (anonymous function)
let number = [1,2,3,4,5,3,2,6,7];
let num = function(dup){
    let result = {};
    for(let i=0; i<dup.length; i++){
        result[dup[i]]=0;
    }return Object.keys(result);
}
console.log(num(number));
OUTPUT :
[1,2,3,4,5,6,7]
--------------------------------------------------------------------------------------------*/
/* Remove duplicates from an array (IIFE function)
(function(duplicates){
    let n = function(dup){
        var result ={};
    for(let i=0; i<dup.length; i++){
        result[dup[i]]=0;
    }Object.keys(result);
}
    console.log(n(duplicates));
})([1,2,3,4,5,3,2,6,7]);
OUTPUT :
[1,2,3,4,5,6,7]
--------------------------------------------------------------------------------------------*/
/* Rotate an array by k times(anonymous function)
    let str = [1,2,3,4,5,6,7,8,9,0];
    let k = 5;
    let rotate = function(arr,count){
     for(let i=0; i<count; i++){
         arr.unshift(arr.pop());
     }return arr;
 }
 console.log(rotate(str,k));
 OUTPUT:
 [6,7,8,9,0,1,2,3,4,5]
--------------------------------------------------------------------------------------------*/
/* Rotate an array by k times(IIFE function)

(function(rotate,count){
    for(let i=0; i<count; i++){
        rotate.unshift(rotate.pop());
    }
    console.log((rotate));
})([1,2,3,4,5,6,7,8,9,0],5)
OUTPUT:
 [6,7,8,9,0,1,2,3,4,5]
--------------------------------------------------------------------------------------------*/