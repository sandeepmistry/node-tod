var util = require('util');

var async = require('async');

var Tod = require('./index');

Tod.discover(function(tod) {
  console.log('found tod: ' + tod.id);
  async.series([
      function(callback) {
        console.log('connect');
        tod.connect(callback);
      },
      // function(callback) {
      //   console.log('readDeviceName');
      //   tod.readDeviceName(function(deviceName) {
      //     console.log('\tdevice name = ' + deviceName);
      //     callback();
      //   });
      // },
      // function(callback) {
      //   console.log('readAppearance');
      //   tod.readAppearance(function(appearance) {
      //     console.log('\tappearance = ' + appearance);
      //     callback();
      //   });
      // },
      // function(callback) {
      //   console.log('readManufacturerName');
      //   tod.readManufacturerName(function(manufacturerName) {
      //     console.log('\tmanufacturer name = ' + manufacturerName);
      //     callback();
      //   });
      // },
      // function(callback) {
      //   console.log('readModelNumber');
      //   tod.readModelNumber(function(modelNumber) {
      //     console.log('\tmodel number = ' + modelNumber);
      //     callback();
      //   });
      // },
      // function(callback) {
      //   console.log('readFirmwareRevision');
      //   tod.readFirmwareRevision(function(firmwareRevision) {
      //     console.log('\tfirmware revision = ' + firmwareRevision);
      //     callback();
      //   });
      // },
      // function(callback) {
      //   console.log('readHardwareRevision');
      //   tod.readHardwareRevision(function(hardwareRevision) {
      //     console.log('\thardware revision = ' + hardwareRevision);
      //     callback();
      //   });
      // },
      function(callback) {
        console.log('readBatteryLevel');
        tod.readBatteryLevel(function(batteryLevel) {
          console.log('\tbattery level = ' + batteryLevel);
          callback();
        });
      },
      function(callback) {
        console.log('readTxPower');
        tod.readTxPower(function(txPower) {
          console.log('\ttx power = ' + txPower);
          callback();
        });
      },
      function(callback) {
        console.log('disconnect');
        tod.disconnect(callback);
      }
    ],
    function() {
      process.exit(0);
    }
  );
});