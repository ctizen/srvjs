/* eslint-disable no-console */
/* eslint-disable no-debugger */

function echo() {
    console.log('Wow!');
}

function echoDelayed() {
    setTimeout(function() {
        console.log('Delayed!');
        // echoDelayed();
    }, 1000);
}

if (process.argv[2] == 'delay') {
    echoDelayed();
} else {
    echo();
}

// Важно понимать, что пока в eventLoop есть запланированные события, процесс не завершается.

