describe('plane', function() {

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearToLand']);
  });

  describe('landed', function() {
    it('confirms that plane is initally not landed', function() {
      expect(plane.landed()).toBe(false);
    });
    // it('confirms when plane has landed', function() {
    //   airport.land();
    //   expect(plane.landed()).toBe(true);
    // });
  });
  describe('land', function() {
    it('lands a plane at an aiport', function() {
      plane.land(airport);
      expect(airport.clearToLand).toHaveBeenCalled();
    });
  });
});
