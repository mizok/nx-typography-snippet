let snippetNames = require('./key/all-snippet-names');
let fs = require('fs');

function translateSnippetsNamesIntoMixinInclude(snippetName) {
  let regex = /\/| /g
  let mixinInclude = snippetName.replace(regex, '-');
  return mixinInclude;
}

function getSnippetsFromSnippetNames(snippetNames) {
  let snippets = {};
  snippetNames.forEach((o) => {
    snippets[o] = {
      'prefix': o.toString(),
      'body': [
        `@include ${translateSnippetsNamesIntoMixinInclude(o)}`
      ],
      'description': o.toString()
    }
  })
  return snippets;
}

function translateSnippetObjectIntoString(snippets) {
  let str = JSON.stringify(snippets);
  return str;
}

let snippets = getSnippetsFromSnippetNames(snippetNames);
let dictstring = translateSnippetObjectIntoString(snippets);

fs.writeFile('snippets/snippets.code-snippets', dictstring, function (err, result) {
  if (err) console.log('error', err);
});