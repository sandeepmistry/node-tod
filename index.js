/*jshint loopfunc: true */

var events = require('events');
var util = require('util');

var noble = require('noble');

var TOD_UUID                                = '6a8730836c064dfabb5469b2240f9e9f';

var DEVICE_NAME_HANDLE                      = 0x0003;
var APPEARANCE_HANDLE                       = 0x0005;

var MANUFACTURER_NAME_HANDLE                = 0x0008;
var MODEL_NUMBER_HANDLE                     = 0x000b;
var FIRMWARE_REVISION_HANDLE                = 0x000e;
var HARDWARE_REVISION_HANDLE                = 0x0011;
var BATTERY_LEVEL_HANDLE                    = 0x0015;

var TX_POWER_HANDLE                         = 0x0018;

var TOD_SERVICE_HANDLE                      = 0x001f;

// 0x1c = tod service

// 0x20 = tod rx
// 0x24 = tod RX Buffer Count
// 0x27 = tod RX Buffer Clear
// 0x2a = tod TX

function Tod(peripheral) {
  this._peripheral = peripheral;
  this._services = {};
  this._characteristics = {};

  this.uuid = peripheral.uuid;
  this.id = peripheral.advertisement.localName;
}

util.inherits(Tod, events.EventEmitter);


Tod.discover = function(callback) {
  noble.once('stateChange', function() {
    var onDiscover = function(peripheral) {
        noble.removeListener('discover', onDiscover);
        noble.stopScanning();

      var tod = new Tod(peripheral);
      callback(tod);
    };

    noble.on('discover', onDiscover);
    noble.startScanning([TOD_UUID]);
  });
};

Tod.prototype.toString = function() {
  return JSON.stringify({
    uuid: this.uuid,
    id: this.id
  });
};

Tod.prototype.connect = function(callback) {
  this._peripheral.connect(callback);
};

Tod.prototype.disconnect = function(callback) {
  this._peripheral.disconnect(callback);
};

Tod.prototype.readHandle = function(handle, callback) {
  this._peripheral.readHandle(handle, function(error, data) {
    callback(data);
  });
};

Tod.prototype.readStringHandle = function(handle, callback) {
  this.readHandle(handle, function(data) {
    callback(data.toString());
  });
};

Tod.prototype.readUInt8Handle = function(handle, callback) {
  this.readHandle(handle, function(data) {
    callback(data.readUInt8(0));
  });
};

Tod.prototype.readDeviceName = function(callback) {
  this.readStringHandle(DEVICE_NAME_HANDLE, callback);
};

Tod.prototype.readAppearance = function(callback) {
  this.readStringHandle(APPEARANCE_HANDLE, callback);
};

Tod.prototype.readManufacturerName = function(callback) {
  this.readStringHandle(MANUFACTURER_NAME_HANDLE, callback);
};

Tod.prototype.readModelNumber = function(callback) {
  this.readStringHandle(MODEL_NUMBER_HANDLE, callback);
};

Tod.prototype.readFirmwareRevision = function(callback) {
  this.readStringHandle(FIRMWARE_REVISION_HANDLE, callback);
};

Tod.prototype.readHardwareRevision = function(callback) {
  this.readStringHandle(HARDWARE_REVISION_HANDLE, callback);
};

Tod.prototype.readBatteryLevel = function(callback) {
  this.readUInt8Handle(BATTERY_LEVEL_HANDLE, callback);
};

Tod.prototype.readTxPower = function(callback) {
  this.readUInt8Handle(TX_POWER_HANDLE, callback);
};

module.exports = Tod;
