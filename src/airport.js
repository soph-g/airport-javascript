function Airport(weather) {
  //this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  if (weather !== 'undefined') {
    this.weather = weather;
  } else {
    this.weather = new Weather();
  }
  this.hangar = [];
};


Airport.prototype.clearToLand = function(plane) {
  if(this.weather.isStormy()) {
    throw new Error("error");
  }
  this.hangar.push(plane);
  plane.land(this);
};

Airport.prototype.clearToTakeOff = function(plane) {
  this.hangar.pop();
  return plane
};
