function getDotCoor() {
    const plot_container = document.getElementById("svg-plot");
    let rect = plot_container.getBoundingClientRect();
    let y_dot = (event.clientY - rect.top);
    let x_dot = (event.clientX - rect.left);
    let y = (150 - y_dot);
    let x = (-150 + x_dot);

    let isDotAllowed = validR();
    if (isDotAllowed) {
        let r = getR();
        y = y / 120 * r;
        x = x / 120 * r;
        let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "3");
        dot.setAttribute("cx", Math.round(x_dot));
        dot.setAttribute("cy", Math.round(y_dot));
        document.getElementById("svg-plot").appendChild(dot);
        if (!check(x, y, r)) {
            dot.setAttribute("stroke", "red");
            dot.setAttribute("fill", "red");
        } else {
            dot.setAttribute("stroke", "green");
            dot.setAttribute("fill", "green");
        }
        dot.setAttribute("class", r);
        sendDot([{name: 'x', value: x}, {name: 'y', value: y}, {name: 'r', value: r}]);
    }
}

function changeDotPos() {
    if (validR()) {
        let dotsList = document.querySelectorAll("circle");
        dotsList.forEach(function (dot) {
            let x_dot_prev = parseInt(dot.getAttribute("cx"));
            let y_dot_prev = dot.getAttribute("cy");
            let r_prev = dot.getAttribute("class");
            let y = (150 - y_dot_prev);
            let x = (-150 + x_dot_prev);
            y = y * r_prev;
            x = x * r_prev;
            let r_cur = getR();
            y = y / r_cur;
            x = x / r_cur;
            let x_dot_cur = x + 150;
            let y_dot_cur = 150 - y;
            if (!check((-150 + x_dot_cur) / 120 * r_cur, (150 - y_dot_cur) / 120 * r_cur, r_cur)) {
                dot.setAttribute("stroke", "red");
                dot.setAttribute("fill", "red");
            } else {
                dot.setAttribute("stroke", "green");
                dot.setAttribute("fill", "green");
            }
            dot.setAttribute("cx", Math.round(x_dot_cur));
            dot.setAttribute("cy", Math.round(y_dot_cur));
            dot.setAttribute("class", r_cur);
        })
    }
}

function check(x, y, r) {
    return checkCircle(x, y, r) || checkRectangle(x, y, r) || checkTriangle(x, y, r);
}

function checkRectangle(x, y, r) {
    return (x <= 0.5 * r) && (x >= 0) && (y >= -r) && (y <= 0);
}

function checkCircle(x, y, r) {
    return (x * x + y * y <= r * r) && (x <= 0) && (y >= 0);
}

function checkTriangle(x, y, r) {
    return (-x - r * 0.5 <= y) && (x <= 0) && (y <= 0);
}