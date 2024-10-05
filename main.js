//1

// let num = parseInt(prompt("Input a number from 0 to 100: "));
// let minNum = 0;
// let maxNum = 100;
// let midNum;
// let x;
// if (num >= 0 && num <= 100) 
//     {
//     do 
//     {
//         midNum = Math.floor((minNum + maxNum) / 2);
//         x = parseInt(prompt("Input 1 if your number < " + midNum + "\nInput 2 if your number > " + midNum + "\nInput 3 if your number = " + midNum));
//         if (x == 1) 
//         {
//             maxNum = midNum - 1;
//         }
//         if (x == 2) 
//         {
//             minNum = midNum + 1;
//         }
//     }
//     while (x != 3);
// }
// else 
// {
//     alert("ERROR");
// }

// alert("Your number = " + num);


//2

// let result = "";
// for (let i = 0; i <= 100; i++) 
// {
//     if (i % 3 == 0) 
//     {
//         result += i.toString()+" ";
//     }
// }
// alert(result);


//3
// let f = 1;
// let num = parseInt(prompt("Input number: "));
// for (let i = 1; i <= num; i++) 
// {
//     f *= i;
// }
// alert("Factroial = " + f);


//4
// let num;
// let result = 0;
// let miles, km;
// let q = "Choose: \n1 - miles to km,\n2 - km to miles,\n3 - Exit";
// do {
//     num = parseInt(prompt(q, 1));
//     if (num == 1)
//     {
//         miles = parseFloat(prompt("Input miles:", 0));
//         result = miles / 0.6213711922;
//         alert(miles + "miles = " + result + " km ");
//     }
//     else if(num == 2)
//     {
//         km = parseFloat(prompt("Input km:", 0));
//         result = km * 0.6213711922;
//         alert(km + "km = " + result + " miles ");
//     }
//     else if(num != 3)
//     {
//         alert("ERROR")
//     }
// }
// while (num!=3);