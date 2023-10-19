var people = 38;
var vanCapacity = 15;
var vanPrice = 250;

var vanAmount = people / vanCapacity;
var costPerDay = vanAmount * vanPrice;

var peoplePerVan = people / vanAmount;

var costPerPerson = costPerDay / people;

console.log(
  "The total per day would be: $" +
    costPerDay.toFixed(2) +
    ", but the cost per person will be: $" +
    costPerPerson.toFixed(2) +
    ". There will be " +
    Math.ceil(vanAmount) +
    " vans in total." +
    " There will be " +
    peoplePerVan +
    " in two vans, and 8 in the last van."
);
