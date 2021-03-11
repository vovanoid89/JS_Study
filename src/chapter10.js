// Exercise1:
$("html").click(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});
// Exercise2:
let direction = 'right';
let offset = 0;

$("#heading").offset({ left: offset, top: offset });

let moveHead = function () {
    if (direction === 'right') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 100) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 100) {
            offset = 100;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 100;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'right';
        }
    }
};

setInterval(moveHead, 20);

// Exercise3:
let direction = 'right';
let offset = 0;

$("#heading").offset({ left: offset, top: offset });

let moveHead = function () {
    if (direction === 'right') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 100) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 100) {
            offset = 100;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 100;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'right';
        }
    }
};

let intervalId = setInterval(moveHead, 20);

$("#heading").click(function () {
    clearInterval(intervalId);
});
//Exercise4:

let direction = 'right';
let offset = 0;
let intervalLength = 120;
let clicks = 0;

$("#heading").offset({ left: offset, top: offset });

let moveHead = function () {
    if (direction === 'right') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 100) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 100) {
            offset = 100;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 100;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'right';
        }
    }
};

let intervalId = setInterval(moveHead, intervalLength);

$("#heading").click(function () {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 10) {
        $("#heading").text("You are winner!");
    } else {
        intervalId = setInterval(moveHead, intervalLength)
    }
});

