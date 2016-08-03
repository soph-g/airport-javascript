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
      expect(airport.planes()).toEqual([]);
    });
    it('returns a landed plane', function(){
      airport.clearToLand(plane)
      expect(airport.planes()).toEqual([plane]);
    });

  });

});
