node-tod
========

[![Analytics](https://ga-beacon.appspot.com/UA-56089547-1/sandeepmistry/node-tod?pixel)](https://github.com/igrigorik/ga-beacon)

A node.js library for the [tōd](http://www.todhq.com).

__Note__: only tested with stock firmware, tod disconnects automatically, so read commands must be quick!

Install
-------

    npm install tod

Usage
-----

    var Tod = require('tod');

__Discover__

    Tod.discover(callback(tod));

    var todName = tod.id;

__Connect__

    tod.connect(callback);

__Disconnect__

    tod.disconnect(callback);

__Device Info__

    tod.readDeviceName(callback(deviceName));

    tod.readAppearance(callback(appearance));


    tod.readManufacturerName(callback(manufacturerName));

    tod.readModelNumber(callback(modelNumber));

    tod.readFirmwareRevision(callback(firmwareRevision));

    tod.readHardwareRevision(callback(hardwareRevision));

__Battery Level__

    tod.readBatteryLevel(callback(batteryLevel));

__TX Power__

    tod.readTxPower(callback(txPower));
