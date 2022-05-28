# 0x0C. JavaScript advanced

## Details

      By Johann Kerbrat, Engineering Manager at Uber Works          Weight: 1              Ongoing second chance project - started May 19, 2022 , must end by May 26, 2022           - you're done with 0% of tasks.      Manual QA review must be done          (request it when you are done with the project)      ## Resources

Read or watch:

- [Lexical scoping](https://intranet.hbtn.io/rltoken/g-zr8tvvc7rW022BJACkmQ)

- [Closure](https://intranet.hbtn.io/rltoken/O1oMScZjNIWydX6nnV_k3Q)

- [Call stack](https://intranet.hbtn.io/rltoken/WsNQ1uR0omWQzaIBBbt14Q)

- [Binding](https://intranet.hbtn.io/rltoken/xJPkQ6H1Ph_GFgSeJzFiOg)

- [Callbacks](https://intranet.hbtn.io/rltoken/h1fiqPqwFzQQHNrGR4olxA)

## Learning Objectives

- What is lexical scoping in JavaScript
- What is closure in JavaScript
- How to use closure
- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks

## Requirements

- Allowed editors: `vi` , `vim` , `emacs` , `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension

### Quiz questions

Great! You've completed the quiz successfully! Keep going! (Show quiz)####

        Question #0

Quiz question Body What’s the result of this block of code?
`let i = 12; console.log(i); ` Quiz question Answers \* 10

- 12

- 14

- undefined

Quiz question Tips ####

        Question #1

Quiz question Body What’s the result of this block of code?
`let i = 12; { i = 15; } console.log(i); ` Quiz question Answers \* 10

- 12

- 15

- undefined

Quiz question Tips ####

        Question #2

Quiz question Body What’s the result of this block of code?
`{ let i = 12; } console.log(i); ` Quiz question Answers \* 10

- 12

- 14

- undefined

Quiz question Tips ####

        Question #3

Quiz question Body What’s the result of this block of code?
`let i = 12; function increase() { i += 1; } console.log(i); ` Quiz question Answers \* 10

- 12

- 13

- 14

- undefined

Quiz question Tips ####

        Question #4

Quiz question Body What’s the result of this block of code?
`let i = 12; function increase() { i += 1; } increase(); console.log(i); ` Quiz question Answers \* 10

- 12

- 13

- 14

- undefined

Quiz question Tips ####

        Question #5

Quiz question Body What’s the result of this block of code?
`let i = 12; function increase() { let i = 14; } increase(); console.log(i); ` Quiz question Answers \* 10

- 12

- 13

- 14

- undefined

Quiz question Tips ## Tasks

### 0. Lexical scoping and welcome message

          mandatory         Progress vs Score  Task Body Create a function named   ` welcome `  :

- It takes two arguments: `firstName` (string) and `lastName` (string)
- It contains a variable named `fullName` , that will contains the `firstName` followed by a space and then the `lastName`
- Within the `welcome` function, write a function named `displayFullName` :\* It should display an alert with the message `Welcome` + the variable `fullName` + and exclamation mark.

- Call the function `displayFullName` at the end of the function `welcome`
  How to test
- Open your web inspector in the tab “Console”
- Copy paste your code
- Run `welcome('Holberton', 'School');` should prompt an alert with this content: `Welcome Holberton School!`
- `alert(fullName)` , should return a reference error `fullName is not defined`
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `0-welcome.js`
  Self-paced manual review Panel footer - Controls

### 1. Closure Scope Chain

          mandatory         Progress vs Score  Task Body * Create a variable named  ` globalVariable `  with value  ` Welcome `

- Create a function `outer` that:\* alerts the content of the variable `globalVariable`
- creates a variable named `course` with value `Holberton`
- creates a function `inner` that:\* alerts the content of the variable `globalVariable` and `course` (concatenated)
- creates a variable named `exclamation` with value `!`
- creates a function `inception` that alerts the content of the variable `globalVariable` , `course` , and `exclamation` (concatenated)
- calls the function `inception`

- calls the function `inner`

- Call the function `outer`
  Compose the code:
- Write the function `inception` within `inner`
- Write the function `inner` within `outer`
- Call the function `outer` in the main code (outside any function)
- Call the function `inner` within `outer`
- Call the function `inception` within `inner`
  Requirements:
- Running the script should display three popups one by one with the text `Welcome` , `Welcome Holberton` , and `Welcome Holberton!`
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `1-nested_functions.js`
  Self-paced manual review Panel footer - Controls

### 2. Closure

          mandatory         Progress vs Score  Task Body Write a  function named   ` welcomeMessage `  :

- It accepts one argument `fullName` (string)
- It should be a closure for an alert displaying `Welcome <fullName>`
  After this function definition, create three variables:
- `guillaume` contains a call `welcomeMessage` with `Guillaume` as argument
- `alex` contains a call `welcomeMessage` with `Alex` as argument
- `fred` contains a call `welcomeMessage` with `Fred` as argument
  How to test:
- In your web console, cop/paste your file
- Executing the following in the console:
  `guillaume(); alex(); fred(); ` Should display three alerts like below:
  ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/783cce39c2d154fdd206.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220524T044035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6574627d7ca46e6b390f0753175218602ca6b661405f879da8dc59dc211b4a6e)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/a1ea60145098f4cf67cd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220524T044035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9ea715cfa5df11613e06fe9a0cbe2b863e43ad98ea61d495e7a2ad9d2a27297b)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/0b25941037734e3b83d8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220524T044035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=602279d97efa07b464b55ef6363fb0a3e5b4a420c73bddadf092adfc4503cc3d)

Task URLs Github information Repo:

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `2-function_me.js`
  Self-paced manual review Panel footer - Controls

### 3. Closure and loops

          mandatory         Progress vs Score  Task Body Write a function named   ` createClassRoom `  :

- It takes into argument `numbersOfStudents` (number)
- Inside, it contains a function `studentSeat` , that takes into argument `seat` (number) and returns a function that returns the `seat` number
- After the definition of `studentSeat` , create and populate a variable `students` (array)\* Using a loop from 0 to `numbersOfStudents` , pass the number of iteration + 1 to `studentSeat` and add its return value to the `students` array

- Returns the `students` array
  Create a closure `classRoom` , calling `createClassRoom` with 10 students
  Requirements:
  Executing the following code:
  `console.log(classRoom[0]()); console.log(classRoom[3]()); console.log(classRoom[9]()); ` Should return
  `1 4 10 ` Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `3-classrooms.js`
  Self-paced manual review Panel footer - Controls

### 4. Complex Closure

          mandatory         Progress vs Score  Task Body Create a function   ` divideBy `  :

- It takes into argument `firstNumber` (number)
- It returns a function that takes into argument `secondNumber` (number)\* It returns the second number divided by the first number

Create a function `addBy` :

- It takes into argument `firstNumber` (number)
- It returns a function that takes into argument `secondNumber` (number)\* It returns the sum of the two numbers

Create four closures:

- `addBy100` , that uses the function `addBy` with the number 100
- `addBy1000` , that uses the function `addBy` with the number 1000
- `divideBy10` , that uses the function `divideBy` with the number 10
- `divideBy100` , that uses the function `divideBy` with the number 100
  Requirements:
  Executing the following code:

```bash
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));

```

Should display in the console:
`120 2 2 1020 ` Task URLs Github information Repo:

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `4-math.js`
  Self-paced manual review Panel footer - Controls

### 5. Changing DOM with closure

          mandatory         Progress vs Score  Task Body Create a function named   ` changeMode `  :

- It accepts 5 arguments `size` (number), `weight` (string), `transform` (string), `background` (string), `color` (string)
- Using closure, it changes the style of the entire page and set the `font-size` , `font-weight` , `text-transform` , `background-color` , and `color`
  Write a function named `main` :
- Set a variable named `spooky` that passes the arguments `9` , `bold` , `uppercase` , `pink` , `green` to `changeMode`
- Set a variable named `darkMode` that passes the arguments `12` , `bold` , `capitalize` , `black` , `white` to `changeMode`
- Set a variable named `screamMode` that passes the arguments `12` , `normal` , `lowercase` , `white` , `black` to `changeMode`
- Add a paragraph to the body of the page with the text `Welcome Holberton!`
- Add a button to the body with the text `Spooky`
- Add a button to the body with the text `Dark mode`
- Add a button to the body with the text `Scream mode`
- When clicking on each button, the page CSS should change to the different themes you created previously
  Call the `main` function
  Requirements:
- Use vanilla JavaScript to add the elements to the DOM and change the style of the page
- JQuery not allowed!
  Clicking the `Spooky` button should change the web page to look something like this:
  ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/e44712a9577dbd8425fd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220524T044035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8d9bdc040d871ad394293c4f581c6dbfed389d7faf4419c705bfb91554bc5115)

Clicking the `Dark mode` button should change the web page to look something like this:
![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/39d42bc7735aa787ea40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220524T044035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d9de8425f61daafee2a8edce5be65ade643cc3713168789258cfa40172ca0ec0)

Clicking the `Scream mode` button should change the web page to look something like this:
![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/bd22426bfc6ffed7cf74.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220524T044035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=870b91ed95d6ed0d00b26d833d18505e494313759d99a38b324c986d85009e2d)

Task URLs Github information Repo:

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `5-mode.js`
  Self-paced manual review Panel footer - Controls

### 6. Private methods with closure

          mandatory         Progress vs Score  Task Body Write a module named   ` studentHogwarts `  :

- It contains two variables `privateScore` set to 0, and `name` set to `null`
- It contains one private method `changeScoreBy` , it takes `points` in argument and add it to `privateScore`
- The module gives access to four public methods (return an object):\* `setName` , it takes into argument `newName` , and set the private variable `name`
- `rewardStudent` , it calls the method `changeScoreBy` with 1
- `penalizeStudent` , it calls the method `changeScoreBy` with -1
- `getScore` , it returns `name: score` (ex: `Harry: 14` )

Create one variable named `harry` , that is an instance of `studentHogwarts` :

- Set the name of the object to `Harry`
- Reward the student four times
- Log to the console the name and score
  Create one variable named `draco` , that is an instance of `studentHogwarts` :
- Sets the name of the object to `Draco`
- Reward the student one time
- Penalize the student three times
- Log to the console the name and score
  Requirements:
- Executing the code should display in the console
  `Harry: 4 Draco: -2 ` Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `6-hogwarts.js`
  Self-paced manual review Panel footer - Controls

### 7. Stack order and setTimeout

          mandatory         Progress vs Score  Task Body Write the following commands in the following order:

- Log to the console `Start of the execution queue`
- Log to the console `Final code block to be executed` using `setTimeout` (with delay of 0)
- Using a loop that iterates 100 times, each iteration logs to the console the iteration number
- Log to the console `End of the loop printing`
  Requirements:
- Your code should log to the console the following:
  `Start of the execution queue 1 2 ... 100 End of the loop printing Final code block to be executed ` Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `7-timeout.js`
  Self-paced manual review Panel footer - Controls

### 8. Stack order in functions

          mandatory         Progress vs Score  Task Body Write a function   ` processPayment `  :

- It takes one argument `amount` (number)
- It logs to the console `Collecting payment of <amount>`
  Write a function named `processOrder` :
- It takes two arguments `orderId` (number), and `amount` (number)
- It logs to the console `<orderId> is being processed`
- It calls the function `processPayment`
- It logs to the console `<orderId> has been fully processed`
  In the main part of the code:
- Logs to the console `Processing orders`
- Call `processOrder` with `12321` and `10.99`
- Call `processOrder` with `12322` and `12.99`
- Call `processOrder` with `12323` and `15.0`
- Logs to the console `All the orders have been processed`
  Requirements:
- Your code should log the following to the console

```bash
Processing orders
12321 is being processed
Collecting payment of 10.99
12321 has been fully processed
12322 is being processed
Collecting payment of 12.99
12322 has been fully processed
12323 is being processed
Collecting payment of 15
12323 has been fully processed
All the orders have been processed

```

Task URLs Github information Repo:

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `8-payments.js`
  Self-paced manual review Panel footer - Controls

### 9. Prime numbers & timing execution

          mandatory         Progress vs Score  Task Body Write a function named   ` countPrimeNumbers `  :

- It will return the number of prime numbers from 2 to 100
  Log to the console the time in milliseconds to execute the function in this format: `Execution time of printing countPrimeNumbers was <time used> milliseconds.`
  Requirements:
- You must use `performance` API to measure the time needed to execute the function ( `performance.now()` )
- Your code should display something in the range of `Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds.`
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `9-prime.js`
  Self-paced manual review Panel footer - Controls

### 10. Execution stack & timing execution

          mandatory         Progress vs Score  Task Body Reuse the function   ` countPrimeNumbers `   from   ` 9-prime.js `   (copy/paste)

- Execute the function `countPrimeNumbers` 100 times
- Log to the console the time in milliseconds to execute the function 100 times
  Requirements:
- Your code should display something in the range of `Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds.`
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `10-prime.js`
  Self-paced manual review Panel footer - Controls

### 11. Changing stack order using setTimeout

          mandatory         Progress vs Score  Task Body Reuse the function   ` countPrimeNumbers `   from   ` 10-prime.js `   (copy/paste)

- Log to the console the time in milleseconds to execute the function 100 times
- Find a way to actually do most of the calculation at the end of the execution stack
  Requirements:
- Your code should display something in the range of `Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.`
- Use `setTimeout` keyword to change the stack order
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `11-prime.js`
  Self-paced manual review Panel footer - Controls

### 12. Binding

          mandatory         Progress vs Score  Task Body Create an object named   ` roomDimensions `   with the following three attributes:

- `width` : `50`
- `length` : `100`
- `getArea` : function that returns the surface area of a the object using the `width` and `length`
  Create a variable named `boundGetArea` , that will bind the object `roomDimensions` to the `getArea` function
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `12-room_area.js`
  Self-paced manual review Panel footer - Controls

### 13. Binding + Closure

          mandatory         Progress vs Score  Task Body Write an object   ` user `   with the attributes:

- `hobby` : `Calligraphy`
- `favoriteSport` : `Hockey`
- `astrologicalSign` : `Aries`
- `firstName` : `Buillaume`
- `lastName` : `Ialva`
- `location` : `Telaviv`
- `occupation` : `Engineer`
  Create a function named `logWelcomeUser` :
- It takes one argument `welcomeString` (String)
- It logs to the console `<welcomeString>, <firstName>. Your occupation is: <occupation>`
  Create a variable named `bindLogWelcomeUser` . It binds the `logWelcomeUser` function to the `user` object.
  Call the function with the string `Welcome`
  Requirements:
- Calling `bindLogWelcomeUser('Hello');` should return `Hello, Buillaume. Your occupation is: Engineer`
  Task URLs Github information Repo:
- GitHub repository: `holbertonschool-web_front_end`
- Directory: `0x0C-Javascript_advanced`
- File: `13-bind_user.js`
  Self-paced manual review Panel footer - Controls

### 14. Simple callback

          mandatory         Progress vs Score  Task Body Write a new function named   ` createElement `  :

- It accepts one argument `data` (String)
- It creates a paragraph element
- The content of the paragraph is set to `data`
- It appends to the document `body` the paragraph
  Create a new function named `queryWikipedia` :
- It accepts one argument `callback` (function)
- Using `XMLHttpRequest` , it get the article of Stack Overflow with the URL ```bash
  https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*

```

* Once the fetch is correctly executed, it calls the  ` callback `  function with the  ` extract `  of the API response
Call   ` queryWikipedia `   with   ` createElement `   as callback
Requirements:
* Use vanilla javascript to run the Ajax query (no jQuery or other framework)
* You must not call  ` createElement `  within  ` queryWikipedia `  directly
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end `
* Directory:  ` 0x0C-Javascript_advanced `
* File:  ` 14-wikipedia.js `
 Self-paced manual review  Panel footer - Controls
[Done with the mandatory tasks? Unlock 1 advanced task now!](https://intranet.hbtn.io/projects/625/unlock_optionals)

Ready for a  manual review
```
