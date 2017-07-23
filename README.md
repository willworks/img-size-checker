# img-size-checker
A images size checker use in pre-commit, you can config the maxsize in you package.json to prevent someone commit unhandle images to git repository


### 1. install
```
npm i -D img-size-checker
```

### 2. use lint-staged

```
"lint-staged": {
  "*.{jpg,png}": "img-size-checker 300" // size in bit
}
```

### 3. config precommit script in package.json
```
"precommit": "lint-staged",
```

### 4. enjoy it!