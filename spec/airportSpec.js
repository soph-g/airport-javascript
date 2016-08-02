describe('airport', function() {

  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

describe('land', function() {
  it('instructs plane to land',function() {
    expect(airport.land()).toBeDefined();
  });
});
});
