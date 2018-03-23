$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat._powersavingSwitch();
    $('#power-saving-status').text('on');
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat._powersavingSwitch();
    $('#power-saving-status').text('off');
    updateTemperature();
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.usage());
  };
})
