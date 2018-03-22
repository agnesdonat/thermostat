'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  describe('default temperature', function () {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  });
  describe('temperature up function', function() {
    it('increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });
    describe('powersaving mode on', function(){
      it('will throw an error when trying to raise temperature above 25', function(){
        for (var i = 1; i <= 5; i++) { thermostat.up(); };
        expect(function(){thermostat.up();}).toThrowError('Maximum temperature reached')
      });
    });
  });
  describe('temperature down function', function() {
    it('decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
      });
    it('cannot decrease the temperature below 10 degrees', function() {
      for (var i = 1; i <= 10; i++) { thermostat.down(); };
      expect(function(){ thermostat.down() }).toThrowError('Minimum Temperature is 10 Degrees');
      });
  });
});
