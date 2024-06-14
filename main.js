
"use strict"

// let arr= arr.substr()
// function filterEvenNumber(arr){
//     if(arr.fltir())

//    return arr.fltir((sum) => sum * item)
// }


// console.log(filterEvenNumber([1,2,3,4]))



// function names(params) {
//     return params.filter(function(itmes){
//         return itmes%2===0
//     })
// }


// console.log(names([1,2,3,4]))



// function reverseArr(arr) {

// return arr.toReversed();

    
// }

// console.log(reverseArr([1,2,3,4]))


//    function isSorted(arr) {

//     return arr==arr.toSorted();
    
// }

// console.log(isSorted([1,2,3,4]));
// console.log(isSorted([1,3,2,4]));


// Write a function that takes two arrays and returns an array of elements that are present in both arrays.                            

//  function arrayIntersection(arr1, arr2) {

//     let arr3=[]

//     for (let i = 0; i < arr1.length; i++) {

//         if(arr1.includes(arr2[i])){
//         arr3.push(arr2[i])
//     }
//     }

//     return arr3;
      
// }

// console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); 



// let arr = [1,2,3,4,5,6,7,8,9]


// arr.forEach((taleh)=>{
//     console.log(taleh)
// })


// let arr = [500,800,900,1200,1500]
// let arr2=[]

// arr.map((item)=> {
// arr2.push(item+200)

// })
// console.log(arr2)



// let arr = [500,800,900,1200,1500]



//  const arr2 = arr.map(item =>item+200)


//  console.log(arr2);

// let arr = [500,800,900,1200,1500]

// const arr2=arr.every(taleh=> taleh>100)

// console.log(arr2)

// let arr = [500,800,900,1200,1500]

// const arr2=arr.some(iter => iter>1000)

// console.log(arr2)

// let arr = [500,800,900,1200,1500]

// const arr2 = Array.from("Taleh")

// console.log(arr2)



// function remove_array_element(arr,n) {
    
//     arr2= []
//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i]!=n){

//         arr2.push(arr[i])
//         }
//     }

//     return arr2

    

// }

// console.log(remove_array_element([2,5,9,6],5));


// function findNumbers(text) {

//     result=[]

//     text.split("").map((arr)=>{
        
//         if(!(isNaN(arr)) && !(arr==" ")){
//              result.push(arr)
//           }
    
//       });

    


// console.log(result)

// }

// findNumbers("lorem2 0ipsum 30dolor50")


// let arr = [100,4,200,1,3,63,2,23,1,3,2]
// let arr2=[]
// let arr3=[]


// function longestConsecutive(nums) {

// nums.sort(function(a, b){return a - b});


// let arr3 = nums.reduce(function (acc, curr) {
//     if (!acc.includes(curr)) {
//       acc.push(curr)
//     }
//     return acc
//   }, [])

// for (let i = 0; i < arr3.length; i++) {
//     for (let i = 0; i < arr3[i].length; i++) {
       
        
//     }
// }

// for (let i = 0; i < nums.length; i++) {

//     arr3.reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         initialValue,
//       );
    
// if (!arr3.includes(nums)) {
//     arr3.push(nums[i])
    
// }
    

    
// function totalVolume(...arr) {
//     arr.map((item)=>{
       
//     })
// }



// totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1])

// function compact(arr) {
	
// 	let result = []
// 	arr.forEach((item)=> {
// 		if(!isNaN(item)&& item!==" " && item!=false && item!=null){
// 			 result.push(item)
// 	}
// });
// 	return result;
// }

// console.log(compact([1,2,'t' ," ",false,"banana"]))
// Math.max(arr)


// const startBtn=document.getElementById("Start");
// const stopBtn=document.getElementById("Stop");
// const driveBtn=document.getElementById("Drive");

// const car ={
//     brand:'Ford',
//     model:'Fiesta',
//     fule:100,
//     fuorForHunder:12,
//     isStarted:false,

//     start(){

//         if(this.isStarted){
//             console.log("Avtomibil islek vezyetdeedir");
//         }
//         else{
//             this.isStarted=true
//             console.log("Avtomobil ise dusdu");
//         }        

//     },

//     drive(){

//         if(this.isStarted){
//             if(this.fule<this.fuorForHunder){
//                 alert("Out of Fuel");
//             } else{
//                 this.fule-=this.fuorForHunder;
//                 console.log(`Qalan Yanacaq: ${this.fule}`)
//             }
           
//         }else{
//             console.log("Muherliki ise salin")
//         }



//     },

//     stop(){
        
//         if(this.isStarted==false){
//             console.log("Avtomobil Dayanmis vezyetdedir");
//         }
//         else{
        
//             console.log("Avtomibil dayandirildi");
//         }        

//     }
// }


// startBtn.addEventListener("click", function(){
// return car.start()
// })

// stopBtn.addEventListener("click", function(){
//     return car.stop()
//     })

//     driveBtn.addEventListener("click", function(){
//         return car.drive()
//         })

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
//     };

//     const[player1,player2]= game.players;

//   const[gk1,...filedPlayers1]=player1;
//   const [gk2,...filedPlayers2]=player2;

//   const allPlayers=[...player1,...player2];

//   const players1Final=[...player1,"Taleh","Nicat","Orxan"]
  
//   const {team1,x:draw,team2}=game.odds;

  
//Ev Tapsiriqi

//   function printGoals(arr){
//     arr.forEach((item,i)=>{
//         console.log(`${i+1}.${item } Qol Vurdu`)
//     })
     


//   }
// printGoals(game.scored)

// const allPlayers2=[...players1Final,...player2];

// allPlayers2.forEach((item,i)=>{
//     i=parseInt((i+1)/2)
//     console.log(i)
// });

// console.log(`${game.team1} ${game.odds.team1}\n
// Beraberik: ${game.odds.x}\n
//  ${game.team2} ${game.odds.team2} `
// );

// let newObj=[]


// game.scored.forEach((item)=>{
//     if(!newObj.includes(item)){
//         newObj.push(item)
//             }

// })

// console.log(newObj)


// function capFront(text){


//   let arr=text.split("");

//   let arr2=[]
//   let arr3=[] 
// for(let i = 0; i<arr.length; i++){

//   if(arr[i]==arr[i].toUpperCase()){
//     arr2.push(arr[i])

//   }
//  else if(arr[i]==arr[i].toLowerCase()){
//     arr3.push(arr[i])
//   }
// }
// return arr2.concat(arr3).join();
// }


// console.log(capFront("hAppY"))

// function capFront(text){
//   let text2 = ""
 
//  if (text.length%2==0) {
//   text2 =text.at(text.length/2)
//  }else if(text.length%2==1) {
//   text2 = text.at(text.length/2)+text.at(text.length/2+1)
//  }
     

// }

// console.log(capFront("textq"));

// function capFront(arr){

//   let toplam = 0;
//   arr.forEach(element => {
//     toplam+=element.budget
//   });

//   return  toplam;

// }

// console.log(capFront([{name:"John",age:21,budget:23000},
// {name:"Steve",age:32,budget:40000},
// {name:"Martin",age:16,budget:2700}
// ]));

// function capFront(arr){
 

// let arrFilter = arr.filter((items) => items > 0);

//  arrFilter.sort((a, b) => a - b);

//  return arrFilter[0]+arrFilter[1];

// }


// console.log(capFront([19,5,42,2,77,-1]));

// function capFront(arr){
//   let arr2=[]
//   arr.forEach(element => {
//     if (element.split("").some((item)=>!isNaN(item)&& item !=="")) {

//       arr2.push(element);
//     }
//   });
// return arr2
// }

// console.log(capFront(["1a","a","2b","b"]));

// function capFront(num){
//   let str = String(num)
//   let resault = 0
//   str.split("").map((item) => {
//     resault+=Number(item);
//   });
//   return resault/str.length
// }


// console.log(capFront(666))

// function minMax(arr) {
// 	let arr2=[]
  
// 	arr2.push(Math.min(...arr))
// 	arr2.push(Math.max(...arr))

//   return arr2
  
// }
// minMax([1,5])

// let arr =[1,2,3,4,5,6]
// let arr2 =arr.splice(1,2)

// console.log(arr2);

// function removeDups(arr){
//     let arr2 = []

//     arr.forEach(element => {
        
//         if(!arr2.includes(element)){
//             arr2.push(element)
//         }
//     });

//     arr.find((item)=>arr2.includes(item))

//     return arr2;


// }

// console.log(removeDups([1,0,1,0]));

// function removeDups(arr){
    
// let arr2 = arr.toReversed();
// arr.pop()

// return arr.concat(arr2);

// }



// console.log(removeDups([0,2,4,6]));


// function translateLetter(text) {
//     let text2="";

//     for (let i = 0; i < text.length; i++) {
//         if(text[i]==text[i].toUpperCase()){

//             text2+=text[i].toLowerCase();
         
            
//         }
//         else{
//             text2+=text[i].toUpperCase();
            
//         }
        
//     }

   
//     return text2;
// }
// console.log(translateLetter("hAPPy biRTHday"));


// function dis(a,b) {

//     return a-a*b/100

// }

// console.log(dis(1500,50));

// function squareDigits(num) {
//    let num2 = "";
   
// for(let item of String(num)) {
    
//     num2 += item*item;
    
// }
// num2 = Number(num2);
// return num2;
// }

// console.log(squareDigits(9119));


// ! function commonElements(arr1,arr2) {
//    let allArr = arr1.concat(arr2);
//    let arrCopy=[]
//    let result = []


//   for (const item of allArr) {
//     if (!arrCopy.includes(item)) {
//         arrCopy.push(item);
       
//     }
//     else{

//         if(!result.includes(item)){
//             result.push(item)
//         }
        
//     }
//   }

//   return result;



// }

// console.log(commonElements([1,2,3,4],[1,5,2,2,3,4,7,8]));




// function Calculator() {
 
//   this.read = function(){

//     this.a=+prompt("a?");
//     this.b=+prompt("b?");
    

//   };

//   this.sum = function(){

//    return this.a +this.b;

//   };

//   this.mut = function(){

//     return this.a* this.b;

//   };
// };

// let calculator = new Calculator();

// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mut=" + calculator.mut());


// let accumlator = new Accumulator(6);

// function Accumulator(current) {

//   this.current=current;

// this.read = function(){

// this.current += +prompt("Eded axil et");
// }
  
// }

// accumlator.read();
// accumlator.read();
// alert(accumlator.current);

// let countText = "Hello 3v4ord"

// !function countAll(text) {
  
//   let num = 0
// let textNum = 0

//   for (const item of text) {

//     if(!isNaN(item)){
//       if(item==" "){
//         continue;
//       }
//       else{
//          num++
//       }
     
//     }
//     else{
//       textNum++
//     }
    
//   }

//   return {
//     "Letters": num,
//     "Digits" :textNum
//   }

  
// }

// console.log(countAll(countText));

//! function evenOddTransform(arr,num) {

//    const arr2 =[]


//   for (const item of arr) {
//     if (item%2==0 ) {
//       arr2.push(item-(2*num))
      
//     }else{

//       arr2.push(item+(2*num))
//     }

     

    
//   }
//   return arr2
// }
// console.log(evenOddTransform([3,6,4,6,9],3))

//! function invert(text) {
//   let result =""

// let newText= text.split("").reverse().join("")




// for (const item of newText) {
//   if (item==item.toUpperCase()) {
//     result+=item.toLowerCase()
// }
//   else{
//     result+=item.toUpperCase()
//   }
  
// }

// return result
  
// }

// console.log(invert("dLROW YM sI HsEt"));

//! function textToNumberBinary(text) {
//   let result = ""
// text.split(" ").map(item=> {
//     if (item.toLowerCase()=="one") {
//       result+=1
//     }
//     else if(item.toLowerCase()=="zero"){
//       result+=0
      
//     }
//   })




//  if(result.length%8==0){
//    return result
//  }else{/.
//   return result.slice(0,8)
//  }

  
// }
// console.log(textToNumberBinary("zero one zero one zero one zero one zero one"));


// function removeABC(text) {
    
//     if ((!text.includes("a")&& !text.includes("b")&& !text.includes("c")&&text.includes(" "))) {
//         return null;
//     }
//     return text.split("").filter(item => 
//         item.toLowerCase()!=="a" && item.toLowerCase()!=="b" && item.toLowerCase()!=="c").join("")
            
        
    
// }

// console.log(removeABC("Thisa"));

//! function transformUpvotes(text) {

  

// let result = text.split(" ").map((item)=>{
    
//     if (item.includes("k")) {
//       return parseFloat(item)*1000
//         }
//         else{
//             return+item
//         }
// });




//     return result
// }

// console.log(transformUpvotes("6.8k 13.5k 13.5"));



//! function inclusiveArray(a,b) {

    
//     arr=[]

//   if(b>a){
//     for(let i=a; i<=b; i++){

//         arr.push(i);
//         }
        
//   }
//   else{
//     arr.push(a);
//   }

//   return arr;
    
// }
// console.log(inclusiveArray(22,5));


// let names = []
// let users = [
//   {name: "Join", email: "join@example.com"},
//   {name: "Jason", email: "jason@example.com"},
//   {name: "Jeremy", email: "jeremy@example.com"},
//   {name: "Jacob", email: "jacob@example.com"}
// ]



// for (const {name} of users) {


//   names.push(name)
  
// }

// console.log(names);

// function mapLetters(text) {
// const obj = {}


// }


// mapLetters("objss");

//! function removeSpecial(text) {
//   newText = ""
//   arr =[".",",","!","@","#","$","%","^","&", "\\" ,"*","(",")"]
  
//   for (const item of text) {

//     if(!arr.includes(item)){

//       newText+=item;

//     }
    
//   }

//   return newText
// }


// console.log(removeSpecial("The, ,. quick brown fox!"));


//! function filterUnique(arr) {
  
  
  

//   return arr.filter(item => new Set(String(item)).size === String(item).length);
// }


// console.log(filterUnique(["abb","abc","abcdb","bbb",342,878]));


//! function isSpecialArray(arr){



  // return  arr.map((item,i)=>{
  // if (item%2==i%2) {
  //   return true
  // }else{
  //   return false
  // }
  // }).every(item => item==true);

//   let a = arr.every((a,b)=>(a%2==b%2) )
//   return a




// }

// console.log(isSpecialArray([0,1,4,9,6,1,6,5,6]));

//! function maxPossible(a,b){
//   let c =String(a)
//   let d =String(b)

//   result= ""
//  for (let i = 0; i < c.length; i++) {
//   for(let j=0;j<d.length;j++){
  
//   if (c[i]<d[j]) {
//     c[i]=d[j]
//     c[i].splice(j,1)
//   }
  
  
// }
//  }

//   return c.join("")
// }
    


// console.log(maxPossible(9132,596));

//! function doublleLetters(text) {


// let result = false;
  
// for (let i = 1; i < text.length; i++) {
 
// if (text[i-1]==text[i]) {
// result=true;
// }
  
// }
// return result
  
// }



// console.log(doublleLetters("loop"));
// console.log(doublleLetters("yummy"));
// console.log(doublleLetters("orange"));
// console.log(doublleLetters("munchkin"));



//! function sumMissingNumbers(arr) {

//   let arrEnd = arr.sort().at(-1);  
//   let result= 0;

// for (let i = arr[0]; i <= arrEnd; i++) {

//   if(!arr.includes(i)){

// result+=i;

//   }
// }

//   return result;
// }

// console.log(sumMissingNumbers([4,3,8,1,2]));
// console.log(sumMissingNumbers([17,16,15,10,11,12]));
// console.log(sumMissingNumbers([1,2,3,4,5]));

//! function wordsToSentence(arr) {
//  if(!arr||arr.length==0){
//   return""
//  }



// const myArr=arr.filter(item=>item.length>0);

// const lastword = myArr.pop();
// return myArr.join(", ")+" and "+lastword;

// }
// console.log(wordsToSentence(["edabit"]));
// console.log(wordsToSentence(["Hello", "","Bye"]));
// console.log(wordsToSentence(["Hello", "","Bye","See you soon"]));

// expretion const a= function test(){

// }

// declaration function at(){

// }
// arrow function ()=>{}


// function isRepdigit(num) {


//   if (num<0) {
//     return false;
    
//   }else if(num==0){
//     return true;
//   }
//   const arr=num.toString().split("")

//  for (let i = 0; i < arr.length; i++) {
//   if (arr[i]!==arr[0]) {
//     return false;
//   }
  
//  }


//   return true;




//ikinci metod

// return num.toString().split("").every((item,index,arr)=> item===arr[0])
  
// }



// console.log(isRepdigit(66));
// console.log(isRepdigit(0));
// console.log(isRepdigit(334));


//! function createPhoneNumber(arr) {

//   arr.unshift("(");
//   let result=""

//   arr.map((item,i)=>{
//     result+=item
//     if(i==arr[3]){
//       result+=") "
//     }else if(i==arr[6]){
//       result+="-"
//     }
//   })

//   return result;
  
// }


// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));


let mebleg_text =document.querySelector(".mebleg_text");
let mebleg_input =document.querySelector(".mebleg_input");
let muddet_text =document.querySelector(".muddet_text");
let muddet_input =document.querySelector(".muddet_input");
let faiz_text =document.querySelector(".faiz_text");
let faiz_input =document.querySelector(".faiz_input");
let netice_text =document.querySelector(".netice_text");



mebleg_text.textContent = mebleg_input.value;
mebleg_input.addEventListener("input", (event) => {
  mebleg_text.textContent = event.target.value;
  netice_text.innerHTML =  parseInt((Number(mebleg_text.textContent)+Number(mebleg_text.textContent)*Number(faiz_text.textContent)/100)/Number(muddet_text.textContent))
});

muddet_text.textContent = muddet_input.value;
muddet_input.addEventListener("input", (event) => {
  muddet_text.textContent = event.target.value;
  netice_text.innerHTML =  parseInt((Number(mebleg_text.textContent)+Number(mebleg_text.textContent)*Number(faiz_text.textContent)/100)/Number(muddet_text.textContent))
});

faiz_text.textContent = faiz_input.value;
faiz_input.addEventListener("input", (event) => {
  faiz_text.textContent = event.target.value;

  netice_text.innerHTML = parseInt((Number(mebleg_text.textContent)+Number(mebleg_text.textContent)*Number(faiz_text.textContent)/100)/Number(muddet_text.textContent))
});


// function sevenBoom(arr) {

//   const hasSeven = arr.some(item => item.toString().includes('7'));

//   if (hasSeven) {
//     return "Boom!";
//   } else {
//     return "there is no 7 in the array";
//   }
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); 
// console.log(sevenBoom([1, 2, 3, 4, 5, 6])); 
// console.log(sevenBoom([10, 17, 23, 39, 57])); 
// console.log(sevenBoom([10, 23, 39, 45])); 






// function test(number) {

//   if (number==1) return true;
//   else return false
  
// }


// console.log(test(2));


// function askPassword(ok,fail) {

//   let password = prompt("Password?","");
//   if(password == "rockstar") ok();
//   else fail();
  
// }

// let user = {
//   name: 'John',

//   loginOk() {
//   alert(`${this.name} logged in` );
// },

//  loginFail() {

//   alert(`${this.name} failed to log in` );
// },
// }

// askPassword(user.loginOk.bind(user),user.loginFail.bind(user))



// function askPassword(ok,fail) {

//   let password = prompt("Password?","");
//   if(password == "rockstar") ok();
//   else fail();

// }
  
// let user = {
//   name: 'John',

//   login(result){
//     alert(this.name + (result ? ` logged in`: ` failed to log in`))
//   }
// }
  


// askPassword(user.login.bind(user,true),user.login.bind(user,false))