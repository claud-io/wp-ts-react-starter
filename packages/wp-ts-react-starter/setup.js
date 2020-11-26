#!/usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const packageJson = require('./package.json');
const fs = require('fs-extra');
const path = require('path');

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-name>')
  .usage(`${chalk.green('<project-name>')}`)
  .action((name) => {
    projectName = name;
  })
  .option('--chakra', 'use the chakra version with pre-loaded login page')
  .option('--antd', 'use the antd version with pre-loaded login page')
  .parse(process.argv);

if (typeof projectName === 'undefined') {
  console.error('Please specify the project name:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<project-name>')}`);
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-graphql-api')}`);
  process.exit(1);
}

const projectDestination = path.join(process.cwd(), projectName);

if (fs.existsSync(projectDestination)) {
  console.log(`The directory ${chalk.green(projectName)} already exists.`);
  process.exit(1);
}

let source = 'vanilla';
if (program.chakra) {
  source = 'with-chakra-ui';
} else if (program.antd) {
  source = 'with-antd';
}

fs.copySync(path.join(__dirname, source), projectDestination);

process.chdir(projectDestination);

execSync('yarn install', { stdio: [0, 1, 2] });
