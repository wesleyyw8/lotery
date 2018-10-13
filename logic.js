function nextLoteryDay(dateInserted) {
  var dateInserted;
  if (!dateInserted) {
    dateInserted = new Date();
  } else {
    dateInserted = new Date(dateInserted);
  }
  console.log('date sent: ', dateInserted);
  console.log('next lotery day: ', checkDate(dateInserted));
}
function checkDate(dateInserted) {
  if (!isSunday(dateInserted)
    && (isWednesday(dateInserted) || isSaturday(dateInserted))
    && dateInserted.getHours() <= 20) { //before 20:00
    dateInserted.setHours(20);
    dateInserted.setMinutes(0);
    dateInserted.setSeconds(0);
    return new Date(dateInserted);
  }
  var newDate = new Date(dateInserted.setDate(dateInserted.getDate() + 1));
  newDate = new Date(newDate.setHours(20));
  return checkDate(newDate);
}
function isWednesday(dateInserted) {
  return dateInserted.getDay() % 3 === 0;
}

function isSaturday(dateInserted) {
  return dateInserted.getDay() % 6 === 0;
}

function isSunday(dateInserted) {
  return dateInserted.getDay() === 0;
}

nextLoteryDay('August 19, 1975 23:15:30');

nextLoteryDay();