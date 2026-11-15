//Q1--------------------------------------
let str ="123";
let num = Number(str) + 7;
console.log(num);
//Q2--------------------------------------
let x =0;
const checkFalsyValues = function(x){
    if(x)return "Valid";
    else return "invalid";
};
console.log(checkFalsyValues(x));
//Q3--------------------------------------
for(let i =0; i<=10;i++){
    if(i%2 ==0)continue;
    console.log(i);
}
//Q4--------------------------------------
let arr =[1,2,3,4,5];
let result = arr.filter((num)=>{
    return num%2 ==0;
},);
console.log(result);
//Q5--------------------------------------
let array1=[1,2,3];
let array2=[4,5,6];
function mergeArrays({arr1,arr2}){
    let arr3 = [...arr1,...arr2];
    return arr3;
}
console.log(mergeArrays(
    {arr1:array1,
     arr2:array2
}));
//Q6--------------------------------------
let dayNum =2;
function weekDay(dayNum){
switch (dayNum) {
    case 1:
     console.log("Sunday");   
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;    
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");    
        break;
    case 7:
        console.log("Saturday");
        break;        
    default:
        console.log(`Not a day on week ${dayNum}`);
        break;
}};
weekDay(dayNum);
//Q7--------------------------------------
let stringArray =["a","ab","abc"];
let lengthResult = stringArray.map((L1)=>{
return L1.length;
},);
console.log(lengthResult);
//Q8--------------------------------------
let number = 15;
function divisibleBy3or5(num){
if(num%3 ==0 && num%5 ==0){
    console.log("Divisible by both");
}else if(num%3 ==0 && num%5 != 0){
    console.log("Divisible only by 3");
}else if(num%5 ==0 && num%3 !=0){
    console.log("Divisible only by 5");
}else{
    console.log("Not Divisibel by both");
}
};
divisibleBy3or5(number);
//Q9--------------------------------------
let Num =5;
const sqrt =(num)=>{
    return num**2
};
console.log(sqrt(Num));
//Q10--------------------------------------
const person ={name:'john',age:25};
function destruct({name,age}){
    return `${name} is ${age} years old`
};
console.log(destruct(person));
//Q11--------------------------------------
function sum(...num){
    let sum =0;
    for(let i=0;i<num.length;i++){
        sum +=num[i];
    }
    return sum;
};
console.log(sum(1,2,3,4,5));
//Q12--------------------------------------------------
function prom(x){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(x){
         resolve(x);
    }else reject("Not success");
    },3000);
    if(!x) reject("Not success");
});
}
let suc = "Success";
prom(suc)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
//Q13--------------------------------------
let array =[1,3,7,2,4];
function largestNumberInArray(num){
    let max =num[0];
    for(let i=0;i<num.length;i++){
  if(max<num[i]){
    max = num[i];
  }
};
  return max;
};
console.log(largestNumberInArray(array));
//Q14--------------------------------------
let anyObject ={
name:'John',
age:30
};
function Keys(object){
    let arr =[];
    for(let i in object){
      arr.push(i);
    }
     console.log(arr);
};
Keys(anyObject);
//Q15--------------------------------------
let theString = "The quick brown fox";
function splits(str,separator){
    let arr =[];
    let part="";
    for(let i=0; i<str.length;i++){
    if(str[i] === separator){
        arr.push(part);
        part ="";
    }else{
        part += str[i];
    }
}
arr.push(part);
return arr;
}
console.log(splits(theString," "));
//---------------------------------------------------------
//B. Part2:Essay Questions.
//-------------------------
//1. forEach: it callback a function for each array element;
//   for...of: it iterates over values of arrays,string,objects,..etc.
//---------------------------------------------------------
//2. Hoisting: its a processing declarations before execute the code so, if you use varibale or function before its line it works
H ="Hoisting";
console.log(H);
var H;
//it doesnot give an ERROR bec. it declared first then code executes
//The TDZ is the period between entering a scope and the point where a let or const is initialized During this period, you cannot access the variable and it ends when the declaration is initialized
{  // TDZ starts
//console.log(name); ---> ReferenceError
//let name = "john"; ---> TDZ ends
//console.log(name); ---> john
}
//--------------------------------------------------------
//3. == : loose_Equality it only compares the value.
//  === : strict_Equality it compares value and data type.
// 3 == "3"---> true  ,  3 === "3"--->false
//--------------------------------------------------------
//4. try_catch: it see if an error happened in try Block it doesnot make an error it catch it and print an error message,and the rest of code executes safely
//if try and catch outer the async operation then, if operation take a time then, try could executes before the operation 
// then, we should use it inside the operation , or use async/await

//--------------------------------------------------------
//5.conversion&coercion: both change the datatype of value but, different ways.
// conversion : you change the datatype by yourself.
let conv = 12;
let convstr = String(12);
console.log(typeof convstr);
// coercion : if js see an comparison with a number or mathimatical operation it changes the datatype to a Number automatically 
let coerstr = "25";
let coerBool = true; // true changed to 1.
console.log(coerstr - coerBool );