let endDate = new Date("6/26/2022 18:00:00");
console.log(endDate);

function countdown(date) {
  let currentDate = Date.now();
  let dateFromParam = Date.parse(date);

  let timeRemining = dateFromParam - currentDate;
  let daysRemining = timeRemining / 1000 / 60 / 60 / 24;
  let hoursRemining = (daysRemining - Math.floor(daysRemining)) * 24;
  let minutesRemining = (hoursRemining - Math.floor(hoursRemining)) * 60;
  let secondsRemining = (minutesRemining - Math.floor(minutesRemining)) * 60;
  let milisecondsRemining =
    (secondsRemining - Math.floor(secondsRemining)) * 1000;

  console.log(`
      ${Math.floor(daysRemining)} Day  
      ${Math.floor(hoursRemining)}h ${Math.floor(
    minutesRemining
  )}m ${Math.floor(secondsRemining)}sec
      ${Math.floor(milisecondsRemining)} milisec
    `);
}

countdown(endDate);
