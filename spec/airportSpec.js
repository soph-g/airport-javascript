describe('airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  describe('clearToLand', function() {
    it('clears the plane to land', function() {
      airport.clearToLand(plane);
      expect(plane.land).toHaveBeenCalled();
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
