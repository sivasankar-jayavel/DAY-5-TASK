// TASK-1
// Anonymous Function-Print odd numbers in an array
var arr = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
var Result1=function(arr){
    for(var i=0;i<arr.length;i++){
       if(arr[i]%2!=0){
          Odd = Odd+(arr[i])+" ";
       }
    }
    return Odd;
    }
    console.log((Result1(arr)).trim());


// IIFE function-Print odd numbers in an array
var arr = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
(function Result1(arr){
   for(var i=0;i<arr.length;i++){
      if(arr[i]%2!=0){
         Odd = Odd+(arr[i])+" ";
      }
   }
   console.log(Odd);
})(arr);


// Anonymous Function-Convert all the strings to title caps in a string array
var titlecase = function(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i].toLowerCase();
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
    }
    return arr;
}
console.log(titlecase(["sivA", "sAnkar", "yamaHa", "bikE"]));


//  IIFE Function-Convert all the strings to title caps in a string array
var arr = ["sivA", "sAnkar", "yamaHa", "bikE"];
(function titlecaps(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i].toLowerCase();
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
    }
    console.log(arr);
})(arr);


// Anonymous Function-Sum of all numbers in an array
var sum = 0;
var a = function(arr){
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(a([5,6,25,28]));


// IIFE Function-Sum of all numbers in an array
var sum=0;
(function a(arr){
    for(var i=0; i<arr.length; i++){
                sum+=arr[i];
            }
            console.log(sum);
})([5,6,25,28]);


// Anonymous Function-Return all the prime numbers in an array
var arr4=[1,2,3,4,7,13,11,16,19];
var prime = [];
var Result4=function(arr4){
    for(var i=0;i<arr4.length;i++){
        var count=0;
      if(arr4[i]<1){
        break;
      }
    for(var j=2;j<=arr4[i];j++){
      if(arr4[i]%j==0) {
          count++
      }
    }
      if(count<2){
            prime.push(arr4[i]);
      }
    }
   return prime;
}
console.log(Result4(arr4));


// IIFE Function-Return all the prime numbers in an array
var arr4=[1,2,4,7,9,13,14,19,16,23,28];
var prime= [];
(function Result4(arr4){
    for(var i=0;i<arr4.length;i++){
      var count=0;
      if(arr4[i]<1){
        break;
      }
    for(var j=2;j<=arr4[i];j++){
      if(arr4[i]%j==0){
        count++
      }
    }
      if(count<2){
        prime.push(arr4[i]);
      }
    }
    console.log(prime);
    })(arr4);

// Anonymous Function-Return all the palindromes in an array
var temp = [];
var palindrome=function(arr){
    for (var i=0;i<arr.length;i++){
    var str = arr[i];
    var rev = arr[i].split("").reverse().join("")

    if(str == rev){
        temp.push(str);
    }
}
return temp;
}
console.log(palindrome(["mom","mam","161","919","dude"]));


// IIFE Function-Return all the palindromes in an array
var temp = [];
(function palindrome (arr){
        for (var i=0;i<arr.length;i++){
    var str = arr[i];
    var rev = arr[i].split("").reverse().join("")

    if(str == rev){
        temp.push(str);
    }
}
console.log(temp);
})(["mom","mam","161","919","dude"]);


// Anonymous Function - Return median of two sorted arrays of the same size.
var median = function(arr1,arr2){
    var arr = [...arr1,...arr2].sort();
    if(arr.length %2 == 0){
        var med1=arr[arr.length/2];
        var med2=arr[arr.length/2 - 1];
        return(med1+med2)/2;
    }else{
        return arr[Math.floor(arr.length/2)];
    }
};
console.log(median([25,5,99],[28,6,97]));
  

// IIFE Function - Return median of two sorted arrays of the same size.
(function median(arr1,arr2){
    var arr = [...arr1,...arr2].sort();
        if(arr.length %2 == 0){
            var med1=arr[arr.length/2];
            var med2=arr[arr.length/2 - 1];
            (med1+med2)/2;
        }else{
           arr[Math.floor(arr.length/2)];
        }
console.log(median);
    })([25,5,99],[28,6,97]);


// Anonymous function-Remove duplicates from an array
var temp=[];
var ans= function (arr){
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=1;j<arr.length;j++){
if(arr[i]==arr[j]){
    count++;
}
        }   
        if(count<=1){
            temp.push(arr[i]);
        }
     }
     return temp
}
console.log(ans([20,34,28,25,5,6]));


// IIFE function-Remove duplicates from an array
var temp=[];
(function(arr){
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=1;j<arr.length;j++){
if(arr[i]==arr[j]){
    count++;
}
        }   
        if(count<=1){
            temp.push(arr[i]);
        }
     }
     console.log(temp);
})([20,34,28,25,5,6]);


// anonymous function-Rotate an array by k times
var ans=function(arr,reverse){
    if(reverse)arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
}
console.log(ans([2,5,6,8]));


//  IIFE function-Rotate an array by k times
 (function(arr,reverse){
    if(reverse)arr.unshift(arr.pop());
    else arr.push(arr.shift());
    console.log(arr);
 })
 ([2,5,6,8]);




//  TASK-2
 // Arrow function- Print odd numbers in an array
    var arr = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
    var Odd = "";
    var Result1=(arr)=>{
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
               Odd = Odd+(arr[i])+" ";
            }
         }
         return Odd;
    }
    console.log((Result1(arr)).trim());
    
   
 // Arrow Function-Convert all the strings to title caps in a string array
    var arr = ["sivA", "sAnkar", "yamaHa", "bikE"];
    var  titlecase = (arr)=>{
        for(var i=0; i<arr.length; i++){
            arr[i] = arr[i].toLowerCase();
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
        }
        return arr;
    }
    console.log(titlecase(arr));
    
  
// Arrow Function-Sum of all numbers in an array
    var sum=0;
    var a = (arr)=>{
        for(var i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    }
    console.log(a([5,6,25,28]));

    
//Arrow Function-Return all the prime numbers in an array
var arr4=[1,2,4,7,9,13,14,19,16,23,28];
var temp= [];
var Result1=(arr4)=>{
    for(var i=0;i<arr4.length;i++){
        var count=0;
      if(arr4[i]<1){
        break;
      }
    for(var j=2;j<=arr4[i];j++){
      if(arr4[i]%j==0) {
          count++
      }
    }
      if(count<2){
            prime.push(arr4[i]);
      }
    }
   return prime;
}
console.log(Result4(arr4));

    // Arrow Function-Return all the palindromes in an array
    var temp=[];
    var palindrome=(arr)=>{
        for (var i=0;i<arr.length;i++){
                var str = arr[i];
                var rev = arr[i].split("").reverse().join("")
            
                if(str == rev){
                    temp.push(str);
                }
            }
            return temp;
            }
            console.log(palindrome(["mom","mam","161","919","dude"]));