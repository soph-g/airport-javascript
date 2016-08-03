function Airport() {
  this.hangar = [];
};


Airport.prototype.clearToLand = function(plane) {
  this.hangar.push(plane);
  plane.land(this);
};

Airport.prototype.clearToTakeOff = function(plane) {
  this.hangar.pop();
  return plane
};
