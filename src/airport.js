function Airport() {
  this.hangar = [];
};


Airport.prototype.clearToLand = function(plane) {
  this.hangar.push(plane);
  plane.land(this);
};

Airport.prototype.planes = function() {
  return this.hangar;
};
