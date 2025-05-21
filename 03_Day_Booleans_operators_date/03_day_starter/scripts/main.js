// this is your main.js script
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Aidan';
let lastName = 'Lonsky';
let country = 'USA';
let age = 29;
let isMarried = false;
let year = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
// 3. Check if parseInt('9.8') is equal to 10
// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
let truthy = "Aidan";
console.log(truthy ? true : false);
truthy = 9;
console.log(truthy ? true : false);
truthy = true;
console.log(truthy ? true : false);

//    2. Write three JavaScript statement which provide falsy value.
let falsy = "";
console.log(falsy ? true : false);
falsy = 0;
console.log(falsy ? true : false);
falsy = null;
console.log(falsy ? true : false);
// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3
console.log(`4 > 3 is ${4 > 3}`);
//    2. 4 >= 3
console.log(`4 >= 3 is ${4 >= 3}`);
//    3. 4 < 3
console.log(`4 < 3 is ${4 < 3}`);
//    4. 4 <= 3
console.log(`4 <= 3 is ${4 <= 3}`);
//    5. 4 == 4
console.log(`4 == 4 is ${4 == 4}`);
//    6. 4 === 4
console.log(`4 === 4 is ${4 === 4}`);
//    7. 4 != 4
console.log(`4 != 4 is ${4 != 4}`);
//    8. 4 !== 4
console.log(`4 !== 4 is ${4 !== 4}`);
//    9. 4 != '4'
console.log(`4 != '4' is ${4 != '4'}`);
//    10. 4 == '4'
console.log(`4 == '4' is ${4 == '4'}`);
//    11. 4 === '4'
console.log(`4 === '4' is ${4 === '4'}`);
//    12. Find the length of python and jargon and make a falsy comparison statement.
console.log(`"python".length != "jargon".length is ${"python".length != "jargon".length}`);
// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12... is true
console.log(`4 > 3 && 10 < 12 is ${4 > 3 && 10 < 12}`);
//    2. 4 > 3 && 10 > 12... is false
console.log(`4 > 3 && 10 > 12 is ${4 > 3 && 10 > 12}`);
//    3. 4 > 3 || 10 < 12... is true
console.log(`4 > 3 || 10 < 12 is ${4 > 3 || 10 < 12}`);
//    4. 4 > 3 || 10 > 12... is true
console.log(`4 > 3 || 10 > 12 is ${4 > 3 || 10 > 12}`);
//    5. !(4 > 3)... is false
console.log(`!(4 > 3) is ${!(4 > 3)}`);
//    6. !(4 < 3)... is true
console.log(`!(4 < 3) is ${!(4 < 3)}`);
//    7. !(false)... is true
console.log(`!(false) is ${!(false)}`);
//    8. !(4 > 3 && 10 < 12)
console.log(`!(4 > 3 && 10 < 12) is ${!(4 > 3 && 10 < 12)}`);
//    9. !(4 > 3 && 10 > 12)
console.log(`!(4 > 3 && 10 > 12) is ${!(4 > 3 && 10 > 12)}`);
//    10. !(4 === '4')
console.log(`!(4 === '4') is ${!(4 === '4')}`);
//    11. There is no 'on' in both dragon and python
console.log(`There is no 'on' in both dragon and python ${!("dragon".includes("on") && "python".includes("on"))}`);
// 7. Use the Date object to do the following activities
//    1. What is the year today?
const now = new Date();
console.log(now.getFullYear());
//    2. What is the month today as a number?
console.log(now.getMonth());
//    3. What is the date today?
console.log(now.getDate());
//    4. What is the day today as a number?
console.log(now.getDay());
//    5. What is the hours now?
console.log(now.getHours());
//    6. What is the minutes now?
console.log(now.getMinutes());
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());

// ### Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//    ```sh
//    Enter base: 20
//    Enter height: 10
//    The area of the triangle is 100
//    ```

// let base = prompt('Enter base: ', 'number goes here');
// let height = prompt('Enter height: ', 'number goes here');
// console.log(`The area of the triangle is ${base * height / 2}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//    ```sh
//    Enter side a: 5
//    Enter side b: 4
//    Enter side c: 3
//    The perimeter of the triangle is 12
//    ```

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// 6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
// 7. Compare the slope of above two questions.
// 8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//     ```sh
//     Enter hours: 40
//     Enter rate per hour: 28
//     Your weekly earning is 1120
//     ```

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// 11. Compare your first name length and your family name length and you should get this output.

//     ```js
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     ```

//     ```sh
//     Your first name, Asabeneh is longer than your family name, Yetayeh
//     ```

// 12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

//    ```js
//    let myAge = 250
//    let yourAge = 25
//    ```

//    ```sh
//    I am 225 years older than you.
//    ```

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//     ```sh

//     Enter birth year: 1995
//     You are 25. You are old enough to drive

//     Enter birth year: 2005
//     You are 15. You will be allowed to drive after 3 years.
//     ```

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//    ```sh
//    Enter number of years you live: 100
//    You lived 3153600000 seconds.
//    ```

// 15. Create a human readable time format using the Date time object
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

const date = now.toLocaleString();  // "5/21/2025, 10:45:30 AM"
console.log(date);

// ### Exercises: Level 3

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const pretty = now.toLocaleString('en-US', {
  weekday: 'long',   // "Wednesday"
  year: 'numeric',   // "2025"
  month: 'long',     // "May"
  day: 'numeric',    // "21"
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
// "Wednesday, May 21, 2025, 10:45:30 AM"
console.log(pretty);
