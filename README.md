# img-size-checker

[![NPM version][npm-image]][npm-url]
[![github location][github-tag]][github-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

A images size checker use in pre-commit

## Installation
```js
npm install husky // use husky to run precommit script
npm install lint-staged // lint staged code and we hack this to check images size in staged as well
npm install img-size-checker
```

## Precommit configuration
```js
"precommit": "lint-staged",
```

## Lint-staged configuration
```js
"lint-staged": {
  "*.{jpg,png}": "img-size-checker 100" // size in kb
}
```

## License

  MIT

[npm-image]: https://img.shields.io/npm/v/img-size-checker.svg?style=flat-square
[npm-url]: https://npmjs.org/package/img-size-checker
[github-tag]: http://img.shields.io/github/tag/willworks/img-size-checker.svg?style=flat-square
[github-url]: https://github.com/willworks/img-size-checker/tags
[david-image]: http://img.shields.io/david/willworks/img-size-checker.svg?style=flat-square
[david-url]: https://david-dm.org/willworks/img-size-checker
[license-image]: http://img.shields.io/npm/l/img-size-checker.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/img-size-checker.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/img-size-checker