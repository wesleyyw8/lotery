function nextLoteryDay(dateInserted) {
  var dateInserted = new Date(dateInserted);
  console.log('date sent: ', dateInserted);
  console.log('next lotery day: ', checkDate(dateInserted));
}
function checkDate(dateInserted) {
  if (dateInserted.getDay() !== 0  //isnt sunday
    && (dateInserted.getDay() % 3 === 0 || dateInserted.getDay() % 6 === 0) //wednesday or saturday
    && dateInserted.getHours() <= 20) { //before 20:00
    return new Date(dateInserted.setHours(20));
  }
  var newDate = new Date(dateInserted.setDate(dateInserted.getDate() + 1));
  newDate = new Date(newDate.setHours(20));
  return checkDate(newDate);
}

nextLoteryDay('August 19, 1975 23:15:30');