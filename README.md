node-tod
========

A node.js library for the [tōd](http://www.todhq.com).

__Note__: only tested with stock firmware, tod disconnects automatically.

Install
-------

    npm install tod

Usage
-----

    var Tod = require('tod');

__Discover__

    Tod.discover(callback(tod));

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
