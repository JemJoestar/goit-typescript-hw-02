/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekdays {
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
  sunday = 7,
}

function isWeekend(weekday: keyof typeof weekdays): boolean {
  if (weekdays[weekday] < 6) {
    return false;
  }else{
    return true
  }
}
