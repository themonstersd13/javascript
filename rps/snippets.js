//generate random string
const randomString = () => Math.random().toString(36).slice(2);
//generate for given length
// randomString=(length)=>{
//     let result='';
//     while(result.length<length){
//         result+=Math.random().toString(36).slice(2);
//     }
//     return result.slice(0,length);
// };
//


//copy to clipboard
const copyToClipboard = (text) =>navigator.clipboard.writeText(text);
//copyToClipboard("hello world");

//clear all cookies
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie =cookie.replace(/^ +/,'').replace(/=,*/,`=;expires=${new Date(0).toUTCString()};path=/`));
//

//get selected text
const getSelectedText=() => window.getSelection().toString();
//

//scroll to the top of the page
const goToTop = () => window.scrollTo(0,0);
//goToTop();
//

//check whether the user has scrolled to the bottom of a page
const scrolledToBottom =()=>document.documentElement.clientHeight+window.scrollY>=document.documentElement.scrollHeight;
//

//find out whether the current tab active
const isTabInView=()=>!document.hidden;
//

//redirect the user url
const redirect=url=>location.href=url;
//redirect("https://www.google.com");
//

//open print options
const Print = () => window.print();
//


//rondom no.till the range
let range = 10;
const randomNumber = Math.random()*range;
//

//remove duplicates from array
const removeDuplicates = (arr) => [...new Set (arr)];
//pass arrAY
//

//get unique value in array 
const uniqueArr = (arr) => [...new Set(arr)];
//

//check if variable is array 
const isArray =(arr)=>Array.isArray(arr);
//

//check if the date is weekend
const isWeekend =(date)=>[0,6].indexOf(date.getDay()) !==-1;
//

//no of days between two dates
const daysDiff = (date1,date2)=>Math.ceil(Math.abs(date1-date2)/86400000);
//daysDiff(new Date('2023-05-10'),new Date('2024-11-08'))

//day from date
const dayOfYear=(date)=>Math.floor((date - new Date(daate.getFullYear(),0,0))/(1000*60*60*24));
//

//check string is palindrome or not
const isPalindrome=str=>str===str.split('').reverse().join('');
//

//remove vowels
const removeVowels = (str) => str.replace(/[aeiou]/gi, '');
//

//check if string contain a substring
const contains=(str,substr)=>str.includes(substr);
//

//find max value in array
//    Math.max(...array);
//

//get current date and time
const date=new Date().toString();
//

//reverse a string
const reverse = str => str.split('').reverse().join('');
//

//sorting array
const sortA=(array)=>arrray.sort((a,b)>=a-b);

const sortD=(array)=>arrray.sort((a,b)>=b-a);
//


//random color code in hex
const randomColor=()=>`#${Math.random().toString(16).slice(2,8).padEnd(6,'8')}`;
//

//chech is valid
const isHexColor=(hex)=> {
    const regex =/#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/;
    return regex.test(hex);
}
//

//shuffle array
const shuffle = arr => arr.sort(()=> Math.random()-0.5);
//

