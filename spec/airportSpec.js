describe('airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe('clearToLand', function() {
    it('clears the plane to land', function() {
      expect(airport.clearToLand(plane)).toEqual(plane);
    });
  });

  // describe('hangar', function() {
  //   it('returns landed planes', function() {
  //     airport.land(plane)
  //     expect(airport.hangar()).toContain('')
  //   })
  // })
});
