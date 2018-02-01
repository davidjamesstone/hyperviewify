# superviewify
Browserify transform turning [hyperviews](https://github.com/davidjamesstone/hyperviews) template language to hyperscript

## Transform options
- `name` `String`
  - default: 'view'
- `args` `String`
  - default: 'state actions'

## Example
`browserify template.html -t [hyperviewify] -o bundle.js`
