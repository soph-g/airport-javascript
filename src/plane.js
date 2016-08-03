var Plane = function() {
}

Plane.prototype.landed = function() {
  return false;
}

Plane.prototype.land = function(airport) {
  airport.clearToLand(this);
}
