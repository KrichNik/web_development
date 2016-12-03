/**
 * JS lab
 *
 * 25.11.2016
 * @author Krich
 */
var TODAY = new Date();
var MINUTES_IN_HOUR = 60;
var MILLISECOND_IN_MINUTE = 60000;

/****************************************************
 * Task a)
 ****************************************************/
function getTimeSinceCurMonth() {
    var currentMonth = new Date(2016, 11, 1);
    var totalMinutes = (TODAY - currentMonth) / MILLISECOND_IN_MINUTE;
    var minutes = totalMinutes % MINUTES_IN_HOUR;
    var hours = (totalMinutes - minutes) / MINUTES_IN_HOUR;
    return 'hours: ' + hours + ', min: ' + Math.floor(minutes);
}

submitButton.addEventListener("click", function (event) {
    var text = document.getElementById("text");
    event.preventDefault();
    text.value = getTimeSinceCurMonth();
});

/****************************************************
 * Task b)
 ****************************************************/
function getHoursUntilNewYear() {
    var newYear = new Date(2017, 0, 1);
    var millisecondsInHour = 3600000;
    var millisecondsUntilNewYear = newYear - TODAY;
    return Math.floor(millisecondsUntilNewYear / millisecondsInHour);
}
alert("До Нового года осталось часов - " + getHoursUntilNewYear() + ".");

/****************************************************
 * Task e)
 ****************************************************/
var link = document.getElementById("link");
var result = "";

link.onclick = function () {
    var input = "http://www.ikt.hneu.edu.ua/login/index.php";
    var arr = input.split("/");
    arr.forEach(getLinkIKT);
    alert(result);
    result = "";
};

function getLinkIKT(element) {
    result += element;
}
