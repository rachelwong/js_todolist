# Basic Javascript To-do list application

Tutorial: https://watchandcode.com/

## Brain Dump

#### Functions inside functions (to enhance other functions)

```
function logTenNumbers(){
    for (var i = 0; i < 10; i++){
        console.log(i)
    }
}

function runWithDebugger(ourFunction){
    debugger;
    ourFunction();
}

runWithDebugger(function logTenNumbers(){
    for (var i = 0; i < 10; i++){
        console.log(i)
    }
})
```

#### SetTimeout

Run a function after a certain time period

```
setTimeout(function(){}, 5000) // runs function after 5 seconds
```

#### For Each

```
// **version 1**
students = ['jonathan', 'mary', 'elliott']
function logName(name){
  console.log(name)
}

for(var i = 0; i < students.length; i++){
  logName(students[i])
}

// **version 2**

students.forEach(logName)
// convention is array.forEach(function)
// for each elemnt of the array, run the method function
// the function needs to be declared in advance in order to work

// **version 3**

// if function is not declared in advance then, pass in the whole function
students.forEach(function logname(name){
  console.log(name)
})
// in this scenario, you can ommit the name of th unciton that you pass in
// foreach is handling the for loop andapssing in the fucntion.


// **version 4**

// forEach is a built-in function. build this from scratch
function forEach(array, myFunction){
  for(var i = 0; i < array.length; i++>){
    // fun myFunction on every item of the array
    myFunction(array[i])
  }
}
// note: the function needs to be declared in the function call

forEach(students, function(student){
  console.log(student)
})
```

when dealing with an array, the callback function in the forEach() can pass in both a value in the array and the index of the array

forEach() when nested inside a method of an object, it will need to pass in `this` in order to refer to other function of the object.

.forEach(callbackFunction, this)

```
variable.array.forEach(callbackfunction(arrayItem, itemposition){
  //do stuff here
}, this)
```

Adding the `this` allows you to refer to other functions of variable from INSIDE the callbackFunction

#### Event Listening

```
variable.addEventListener('the event', run a function also known as a callback function)

variable.addEventListener('click', function(){
  console.log(event)
  console.log("variable is clicked!")
})
```

#### Other notes

.textContent and .innerHTML are not the same
