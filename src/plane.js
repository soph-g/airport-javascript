var Plane = function() {
  this.location = [];
}

Plane.prototype.landed = function() {
  return false;
}

Plane.prototype.land = function(airport) {
  this.location.push(airport);
}

Plane.prototype.takeoff = function() {
  this.location.pop();
};
