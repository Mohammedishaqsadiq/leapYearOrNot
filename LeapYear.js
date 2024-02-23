let leapYear = +prompt(
  "Give Me A year That I Will Tell You Is LeapYear Or Not"
);

  function leapYearOrNot(leapYear) {
    if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
if(!isNaN(leapYear)){
if (leapYearOrNot(leapYear)) {
  alert("It Is A Leap Year");
} else {
  alert("It Is Not A Leap year");
}
}
