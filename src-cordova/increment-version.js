var fs = require('fs');
var xml2js = require('xml2js');

console.log('Auto-incrementing version...');

// Read config.xml
fs.readFile('config.xml', 'utf8', function(err, data) {
  if(err) {
    return console.log(err);
  }

  // Get XML
  var xml = data;

  // Parse XML to JS Obj
  xml2js.parseString(xml, function (err, result) {
    if(err) {
      return console.log(err);
    }

    // Get JS Obj
    var obj = result;

    // Increment version
    var version = obj['widget']['$']['version'];

    var splitVersion = version.split('.');

    splitVersion[splitVersion.length -1]++;

    var newVersion = splitVersion.join('.');

    obj['widget']['$']['version'] = newVersion;

    //Increment Android version code
    var versionCode = obj['widget']['$']['android-versionCode'];
    versionCode++;

    obj['widget']['$']['android-versionCode'] = versionCode;

    // Build XML from JS Obj
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);

    // Write config.xml
    fs.writeFile('config.xml', xml, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log('Version number successfully update to ' + newVersion);
    });

  });
});
