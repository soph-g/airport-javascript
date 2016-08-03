var Plane = function() {
  this.airportLocation = [];
}

Plane.prototype.landed = function() {
  return false;
}

Plane.prototype.land = function(airport) {
  this.airportLocation.push(airport);
}

Plane.prototype.location = function() {
  return this.airportLocation;
}
