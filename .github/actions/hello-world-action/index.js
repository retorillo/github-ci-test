const core = require('@actions/core');
var whoToHello = core.getInput('who-to-hello');
console.log('Hello ${whoToHello}');
