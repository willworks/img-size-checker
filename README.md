# img-size-checker
A images size checker use in pre-commit, you can config the maxsize in you package.json to prevent someone commit unhandle images to git repository


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