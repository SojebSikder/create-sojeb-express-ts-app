#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Error running ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/SojebSikder/create-sojeb-express-ts-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`Creating new project ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`deleting lock file for ${repoName}`);
const deletedLockFile = runCommand(`rm -rf ${repoName}/yarn.lock`);
if (!deletedLockFile) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`copying .env.example to .env`);
const copiedEnv = runCommand(`cp ${repoName}/.env.example ${repoName}/.env`);
if (!copiedEnv) process.exit(-1);

console.log(`Deleting bin folder`);
const deletedBin = runCommand(`rm -rf ${repoName}/bin`);
if (!deletedBin) process.exit(-1);

console.log(
  `${repoName} created successfully. Follow the following commands to start`
);
console.log(`cd ${repoName} && yarn watch`);
