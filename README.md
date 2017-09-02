# img-size-checker
A images size checker use in pre-commit, you can config the maxsize in you package.json to prevent someone commit unhandle images to git repository


## Installation

```js
npm i -D img-size-checker
```

## Lint-staged

```js
"lint-staged": {
  "*.{jpg,png}": "img-size-checker 100" // size in kb
}
```

## Precommit
```js
"precommit": "lint-staged",
```

## License

  MIT