#!/usr/bin/env node

/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fs = require('fs');

const BASE_FILES = [
  '.babelrc',
  '.eslintrc',
  'tsconfig.json',
  'webpack.config.js',
  'webpack.prod.js',
  'src/index.tsx',
  'src/components/App.tsx',
  'public/index.html',
];

function copy(from, to, overwrite = true) {
  if (!fs.existsSync(to) || overwrite) {
    fs.copyFileSync(from, to);
    return true;
  }
  return false;
}

const currentDir = process.cwd();
const projectRoot = __dirname;
const projectPackage = require(`${projectRoot}/package.json`);

const newPackage = {
  name: path.basename(projectRoot),
  descrionption: 'such project, very amazing',
  version: '0.0.1',
  devDependencies: { ...projectPackage.devDependencies },
  dependencies: { ...projectPackage.dependencies },
  scripts: { ...projectPackage.scripts },
};

fs.writeFileSync(`${currentDir}/package.json`, JSON.stringify(newPackage, null, 2));

fs.mkdirSync(`${currentDir}/src`);
fs.mkdirSync(`${currentDir}/src/components`);
fs.mkdirSync(`${currentDir}/public`);

BASE_FILES.forEach((f) => {
  copy(`${projectRoot}/${f}`, `${currentDir}/${f}`);
});

console.log(`
  npm i -> install deps
  npm run dev -> start it (port 9000)
`);
