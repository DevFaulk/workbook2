var salary = 50000;
var fedTaxes = 0.23;
var taxesWithdrawn = salary * fedTaxes;
var netSalary = salary - taxesWithdrawn;
console.log("Here is your net salary: " + netSalary.toFixed(2));