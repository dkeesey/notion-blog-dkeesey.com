'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var fs_1 = require('fs')
// Read the JSON file
var data = fs_1.default.readFileSync(
  './src/lib/notion/col-datastructure.json',
  'utf-8'
)
var jsonData = JSON.parse(data)
// Function to generate the TypeScript interface
function generateInterface(obj, indent) {
  if (indent === void 0) {
    indent = ''
  }
  var result = '{\n'
  for (var key in obj) {
    var value = obj[key]
    result += ''.concat(indent, '  ').concat(key, ': ')
    if (typeof value === 'object' && value !== null) {
      result += generateInterface(value, indent + '  ') + ',\n'
    } else {
      result += typeof value + ',\n'
    }
  }
  result += indent + '}'
  return result
}
// Generate the interface for ColType
var colTypeInterface = 'interface ColType {\n  recordMap: {\n    block: '.concat(
  generateInterface(jsonData.recordMap.block),
  '\n  }\n}'
)
// Write the interface to a new TypeScript file
fs_1.default.writeFileSync('./src/lib/notion/ColType.ts', colTypeInterface)
console.log('Interface generated successfully!')
