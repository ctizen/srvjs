console.log('Current process PID: ', process.pid);

function doWork(someVar) {
    someVar += 1;
    console.log('Current value: ', someVar);
    
    if (someVar > 10) {
    //    debugger;
    }

    setTimeout(function() {
        doWork(someVar);
    }, 500);
}

doWork(0);

