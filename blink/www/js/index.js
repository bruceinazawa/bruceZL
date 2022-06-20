document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

  var app = {

      initialize: function() {
          document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      },

      onDeviceReady: function() {
          alert("onDeviceReady: function() {...");
          this.receivedEvent('deviceready');
          navigator.geolocation.getCurrentPosition(
              this.onGeolocationSuccess,
              this.onGeolocationError,
              { timeout: 120000 });
      },

      // Update DOM on a Received Event
      receivedEvent: function(id) {
      },

      onGeolocationSuccess: function(position) {
          alert("onGeolocationSuccess: function(position) {...");
          alert('Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' +
                'Altitude: '          + position.coords.altitude          + '\n' +
                'Accuracy: '          + position.coords.accuracy          + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'Heading: '           + position.coords.heading           + '\n' +
                'Speed: '             + position.coords.speed             + '\n' +
                'Timestamp: '         + position.timestamp                + '\n');

          document.getElementById("Latitude").value = position.coords.latitude;
          document.getElementById("Longitude").value = position.coords.longitude;
          document.getElementById("Altitude").value = position.coords.altitude;
          document.getElementById("Accuracy").value = position.coords.accuracy;
          document.getElementById("Altitude Accuracy").value = position.coords.altitudeAccuracy;
          document.getElementById("Heading").value = position.coords.heading;
          document.getElementById("Speed").value = position.coords.Speed;

      },

      onGeolocationError: function(err) {
          alert("onGeolocationError:function(position) {...");
          alert(err.code +" "+err.message);
      }
  };

  app.initialize();

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');


}
