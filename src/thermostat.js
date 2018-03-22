'use strict';

function Thermostat () {
  this._temperature = 20;
  this._powersaving = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature >= this.max()) { throw Error('Maximum temperature reached')}
  this._temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this._temperature <= 10) {throw Error('Minimum Temperature is 10 Degrees')};
  this._temperature -= 1;
}

Thermostat.prototype.max = function() {
  if (this._powersaving) {
    return 25
  }
  return 32
};
Thermostat.prototype._powersavingSwitch = function() {
  this._powersaving = !this._powersaving
}
Thermostat.prototype.reset = function(){
  this._temperature = 20
}
