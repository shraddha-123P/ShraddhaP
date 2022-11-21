// // 17.10.22
// // // // write a JS program to ind the  area of triangle where length of 3 of its sides are 5,6 and 7
// // // // if else statement


// // // semi perimeter = (5+6+7)/2 = 18/2 = 9


// // // var x=5;
// // // var y=6;
// // // var z=7;
// // // Area of Triangle
// function areaofTriangle (x,y,z) {
//     const perimeter = (x+y+z) /2 ;
//     const area = Math.sqrt(perimeter*(perimeter-x)*(perimeter-y)*(perimeter-z));
//  return area;
//  }
//  console.log(areaofTriangle(5,6,7));
 
//  // // // Area of Reactangle
//  // // // l=3 , b=6
//  // // function areaofRect (l,b) {
//  // //     const formula = l*b;
//  // //     return formula;
//  // // }
//  // // console.log(areaofRect(5,6));
 

// //  18.10.22
//  // // arithamatic operators
//  // // let x = 10;
//  // // // compound operators
//  // // x+=y;
//  // // x=x + y
//  // // x +=1
//  // // x++
//  // // console.log(x);
 
//  // logical operators
// //  let happy = true && true;
// //  console.log(happy);
 
// //  const isLoggedIn = true;
// //  const hasPermissions = false;
 
// //  if (isLoggedIn && hasPermissions) {
// //      console.log("your data is sucessfully deleted")
// //  }else{
// //      console.log("there is no permission");
// //  }
// //  console.log("cat" && "dog");
 
// //  // logical OR || 
// //  const happy = true || false;
// //  console.log(happy);
 
// //  const isLoggedIn = true;
// //  const hasPermissions = false;
// //  if (isLoggedIn || hasPermissions) {
// //      console.log("your data is sucessfully deleted")
// //  }else{
// //      console.log("there is no permission");
// //  }
 
//  // // logical NOT
//  // const happy = false
//  // console.log(!happy);
 
//  // const isLoggedIn = true;
//  // if(!isLoggedIn) {
//  //     console.log("redirect to login page");
//  // }
 
// // assignment
// // const logInForm = {
// //     userName: 'Shraddha',
// //     passWord: 'Uday',
// // }


// // console.log('logInFormUser', logInFormUser)
// // document.getElementById("loginButton").onclick = function() {
// //     fun()
// //     };
// // const btn = document.querySelector("button").addEventListener("click", fun)
// //     // btn.addEventListener("click", fun)
// // function fun(){
// //     const logInFormUser = document.getElementById("username").value;
// // const logInFormPass = document.getElementById("password").value;
// // if (logInFormUser == logInForm.userName && logInFormPass == logInForm.passWord) {
// //     alert ("you're LoggedIn");
// // } else {
// //     alert ("Wrong Credentials");
// // }
// // }


// // // 19.10.22
// // const userRole = "admin";
// // if(userRole === "admin"){
// //     console.log("you are in admin");
// // } else {
// //     console.log("you are not an admin")
// // }

// // userRole === "admin"
// // ? console.log("you ar an admin")
// // : console.log("you are not an admin");

// // comparison OPerator
// // equal(==)
// // not equal (!=)
// // strict equal (===)
// // strict not equal(!==)
// // greater than(>)
// // greater than equal to (>=)
// // less than (<)
// // less than equal to (<=)

// console.log(4 == 4);
// console.log(3>2 && 2>1);

// const flag = new Boolean(true)
// console.log("to string is", flag.toString());
// const isTrue = "codekul";
// console.log(new Boolean(isTrue));


// const data = [
//     {
        
//     }
// ]

// // const isLoggedIn = true;
// // const hasPermission = false;

// // function welcome () {
// //     window.location="welcomehtml.html";
// // }
// // function login() {
// //     window.location="loginhtml.html";
// // }

// // if (isLoggedIn && hasPermission) {
// //   welcome();
// // } else {
// //     login();
// // }

// // // X* 20/100 = 0.2
// // // if its >=50 && <= 300

// // const bill = 275;
// // const tip = bill <= 300 && bill >= 50? bill * 0.15 :
// // bill * 0.2;
// // console.log(`The bill was ${bill}, the tip was ${tip} , and the total value ${bill + tip}`); 

// // const bill=100;

// // take a table show ur name , last name etc 
// // if it is a active then it should show  "isActive"

// //>>>>>>>>>>>>>>>>>>>>>>>>> 31-10-2022<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // Array of Objects
// let arr =['hello', 'codekul','kothrud'];
// let arr1 = arr.shift();
// console.log(arr1);


// // homework read toString
// // join

// const person = ['codekul', 'kothrud', '1234567'];
// const personInfor =['codekul',]
// person.shift()

// // >>>>>>>>>>>>>>>>>>>>>>>>01-11-22<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // var data = 
// // {
// //     name:"ibm",
// //     payment : 2000,
// // };
// // {
// // name: "tcs",
// // payment : 2500,
// // }
// // for (let i=0; i< DataTransfer.length; i++){
// //    data[i].payment = data[i].payment-200
// // }
 
// // data.forEach(element => {
// //     data.payment = data.payment-100 
// // });
// // console.log{data[i]};

// // for (let salary of data) {
// //     salary.payment = salary.payment - 100
// // }
// // console.log (data);

// // filter method
// var data2= [{
//     name: "student",
//     mark : 40
// },
// {
// name : "students",
// mark : 30
// }]
// const failed = student.filter((student)=>{
//  if (student.mark < 35) {
//         return true
// } else {
//    return false
// }
// console.log(failed)

// assignment: now display the passed student
// and concataneation of String List
// const studentArray = [
//     {
//         name :"uday",
//         marks : 30
//     },
//     {
//         name :"shraddha",
//         marks : 60
//     }
// ]
// const result = studentArray.filter((student)=> student.marks < 60 );
// console.log('result',result);
// const failedStudent = [];
// result.forEach((student)=> failedStudent.push(student.name))
//   console.log(failedStudent);

//   >>>>>>>>>>>>>>>>>>>>>>>02-11-22<<<<<<<<<<<<<<<<<<<<<<<
// const movies = [
//     {
//         name:"intersteller",
//         budget: 3000,
//     },
//     {
//         name:"social",
//         budget: 1500,
//     },
//     {
//         name:"matrix",
//         budget: 2000,
//     }, 
// ]
// we can do it in this way

// // Reduce method
// const total = movies.reduce((acc,movie))
// // index of Method


// const user = [
//     {
//     fName : "peter",
//     lastName: "doe"
//     }
// ]
//   console.log(user.fname+user.lastName);


// //   assignment 2
// write a code to clone an Array
// test Data

// display full name using reduce method


// >>>>>>>>>>>>>>>>>>>>>>>>>>04-11-22<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // practice assignment
// const array = [[2,3],[4,5],[6,7],[8,9]];
// for(let item of array){
//   for(let item2 of items){
//     console.log(item2);
//   }
// }

// create a UI which include Login screen (u can do it with the help of
// bootstrap - comopnent  login infor 
// login screen
// email id 
// password 
// add belo to options :
//  1) page will take user t registration page

//  2) (add text as forget password)
// if clicks on forget - ask him for email and mobile no


// monday onwards we will make it responsive


//>>>>>>>>>>>>>>>>>>>>07-11-22<<<<<<<<<<<<<<<<<<<<<
// assignment
// 1) JS prgram to geberate a randm number betwn 2 numbers
// 2) guess randm no
// 3) generate randm strng 

// 4) use nested for loop for below , use break , 
// we need to have the output as below
// i=1 , j=1
// i=1, j=2
// i=1, j=3
// i=3,j=4
// i=3,j=5


// while loop
// break statement using while loop
// let sum = 0, number;
// while(true) {
//   number = parseInt(prompt("enter a number"))
//   // break condition
//   if(number<0){
//     break
//   }
//   sum+= number
// }
// console.log(`the um is $(sum)`);

// // function with return type


// function login (userName,password) {
//   console.log(password);
//   console.log(`${userName} is logged in successfully`)
// }
// login("shraddha","uday")
// login("shraddha")



// const data = [
//     {
//         id:1,
//         name:"codekul",
//         active:true
//     },
//     {
//         id:2,
//         name:"codekul",
//         active:true
//     },
//     {
//         id:3,
//         name:"codekul",
//         active:false
//     }
// ]
// active === "isAction"
// active === "inActive"


