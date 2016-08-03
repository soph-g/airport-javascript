describe('airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
    weather = jasmine.createSpyObj('weather', ['isStormy'])
  });

  describe('clearToLand', function() {
    it('clears the plane to land', function() {
      airport.clearToLand(plane);
      expect(plane.land).toHaveBeenCalled();
    });
    it('does not clear plane to land when weather is stormy', function() {
      weather.isStormy.and.returnValue(true);
      expect(function() { airport.clearToLand(plane) }).toThrowError('error');
    });
  });

  describe('planes', function() {
    it('is empty by default', function() {
      expect(airport.hangar).toEqual([]);
    });
    it('returns a landed plane', function(){
      airport.clearToLand(plane)
      expect(airport.hangar).toEqual([plane]);
    });

  });

  describe('clearToTakeOff', function() {
    it('clears the plane to take off', function() {
      expect(airport.clearToTakeOff(plane)).toEqual(plane);
    });
    it('removes the plane from the hangar', function() {
      airport.clearToLand(plane);
      airport.clearToTakeOff(plane);
      expect(airport.hangar).toEqual([]);
    });
  });

});



// beforeEach(function(){
//   weather.isStormy.and.returnValue(true);
// });
//
// it('does not clear planes for takeoff', function() {
//   expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
// });
//
// it('does not clear planes for landing', function() {
//   expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
// });
