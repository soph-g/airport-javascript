describe('weather', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather()
  });

  describe('isStormy', function() {
    it('gives stormy weather', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toBeTruthy();
    });
      it('gives clear weather', function() {
        spyOn(Math, 'random').and.returnValue(1);
        expect(weather.isStormy()).toBeFalsy();
      });
  });
});
