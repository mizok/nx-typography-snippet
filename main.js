var snippetNames = require('./key/all-snippet-names');
var fs = require('fs');
var dictstring = JSON.stringify(snippetNames);
fs.writeFile('snippets/snippets.code-snippets', dictstring, function(err, result) {
  if(err) console.log('error', err);
});