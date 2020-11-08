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
  'public/index.html',

  'src/api/index.ts',

  'src/components/Home.tsx',
  'src/components/Login.tsx',
  'src/components/PrivateRoute.tsx',

  'src/constants/index.d.ts',
  'src/constants/types.ts',

  'src/contexts/AuthContext.ts',
  'src/contexts/index.ts',

  'src/index.tsx',
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
fs.mkdirSync(`${currentDir}/src/api`);
fs.mkdirSync(`${currentDir}/src/components`);
fs.mkdirSync(`${currentDir}/src/constants`);
fs.mkdirSync(`${currentDir}/src/contexts`);
fs.mkdirSync(`${currentDir}/public`);

BASE_FILES.forEach((f) => {
  copy(`${projectRoot}/${f}`, `${currentDir}/${f}`);
});

console.log(`
  npm i -> install deps
  npm run dev -> start it (port 9000)
`);
