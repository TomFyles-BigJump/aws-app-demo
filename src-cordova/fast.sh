#!/bin/bash
set -e

cd ..
npm version patch
cd src-cordova

quasar build -m cordova -T ios

cordova build ios --prod
fastlane beta


