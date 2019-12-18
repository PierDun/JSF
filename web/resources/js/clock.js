window.onload = function () {
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    window.setInterval(
        function () {
            date = new Date();
            document.getElementById("clock").innerHTML = date.toLocaleTimeString();
        },
        11000);
};
