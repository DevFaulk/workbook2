var hourlyRate = 17.3;
var overTimeRate = hourlyRate * 1.5;
var hoursWorked = 45;
var overTimeHours = hoursWorked - 40;

if (hoursWorked > 40) {
  overTimePay = overTimeHours * overTimeRate;
}

var regularPay = (hoursWorked - overTimeHours) * hourlyRate;

var payCheck = overTimePay + regularPay;

console.log(payCheck);
