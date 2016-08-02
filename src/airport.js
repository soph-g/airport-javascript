var Airport = function() {
}

Airport.prototype.land = function() {
  return "clear to land";
}

var airport = new Airport

console.log(airport.land());
