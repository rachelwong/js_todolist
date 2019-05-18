# Basic Javascript To-do list application

Tutorial: https://watchandcode.com/

Functions inside functions (to enhance other functions)

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
