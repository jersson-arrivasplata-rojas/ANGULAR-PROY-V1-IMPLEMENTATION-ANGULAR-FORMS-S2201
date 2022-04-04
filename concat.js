var concat = require('concat-files');
concat([
    './dist/ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201/main.js',
    './dist/ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201/polyfills.js',
    './dist/ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201/runtime.js',
    './dist/ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201/vendor.js',
    //'./dist/ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201/styles.js'
], './dist/ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201/app.js', function(err) {
    if (err) throw err
    console.log('done');
});