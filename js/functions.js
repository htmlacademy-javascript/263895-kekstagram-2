// Проверка, укладывается ли встреча в рабочее время
function isMeetingInWorkTime(startWork, endWork, startMeeting, duration) {
  // Перевод времени 'часы:минуты' в минуты с начала дня
  function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const workStart = timeToMinutes(startWork);
  const workEnd = timeToMinutes(endWork);
  const meetingStart = timeToMinutes(startMeeting);
  const meetingEnd = meetingStart + duration;

  return meetingStart >= workStart && meetingEnd <= workEnd;
}

// Примеры вызова функции для проверки (временно отключены для прохождения линтера)
// console.log(isMeetingInWorkTime('08:00', '17:30', '14:00', 90)); // true
// console.log(isMeetingInWorkTime('8:0', '10:0', '8:0', 120)); // true
// console.log(isMeetingInWorkTime('08:00', '14:30', '14:00', 90)); // false
// console.log(isMeetingInWorkTime('14:00', '17:30', '08:0', 90)); // false
// console.log(isMeetingInWorkTime('8:00', '17:30', '08:00', 900)); // false

export { isMeetingInWorkTime };
