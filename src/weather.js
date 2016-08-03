function Weather() {
  this.CHANCE_OF_STORM = 0.2
}

Weather.prototype.isStormy = function() {
  return(Math.random() < this.CHANCE_OF_STORM)
};
