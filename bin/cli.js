#!/usr/bin/env node
const fs = require("fs");
const { execSync } = require("child_process");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const deleteDir = (path) => {
  try {
    fs.rmSync(path, { recursive: true, force: true });
  } catch (error) {}
};
const deleteFile = (path) => {
  try {
    fs.unlinkSync(path);
  } catch (error) {}
};

const copyFile = (src, dest) => {
  try {
    fs.copyFileSync(src, dest);
  } catch (error) {}
};

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Error running ${command}`, e);
    return false;
  }
  return true;
};

let pmName = "pnpm";
const repoName = process.argv[2];
if (!repoName) {
  console.error("Please provide a project name");
  process.exit(-1);
}
const gitCheckoutCommand = `git clone --depth 1 https://github.com/SojebSikder/create-sojeb-express-ts-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && ${pmName} install`;

// ask which pm to use
// console.log("Select package manager");
// console.log(`1 -> pnpm`);
// console.log(`2 -> yarn`);
// console.log(`3 -> npm`);

// rl.question("Select package manager ", function (value) {
//   switch (value) {
//     case "1":
//       console.log(`1 -> pnpm: selected`);
//       pmName = "pnpm";
//       break;
//     case "2":
//       console.log(`2 -> yarn: selected`);
//       pmName = "yarn";
//       break;
//     case "3":
//       console.log(`3 -> npm: selected`);
//       pmName = "npm";
//       break;
//     default:
//       console.log(`3 -> npm: selected`);
//       pmName = "npm";
//       break;
//   }
//   rl.close();
// });
// rl.on("close", function () {
//   process.exit(0);
// });

console.log(`Creating new project ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

// console.log(`deleting lock files for ${repoName}`);
deleteFile(`${repoName}/yarn.lock`);
deleteFile(`${repoName}/package-lock.json`);
deleteFile(`${repoName}/pnpm-lock.yaml`);

// console.log(`Installing dependencies for ${repoName}`);
// const installedDeps = runCommand(installDepsCommand);
// if (!installedDeps) process.exit(-1);

console.log(`copying .env.example to .env`);
copyFile(`${repoName}/.env.example`, `${repoName}/.env`);
console.log(`deleting unnecessary files for ${repoName}`);
deleteDir(`${repoName}/bin`);
deleteDir(`${repoName}/.github`);
deleteDir(`${repoName}/.git`);

console.log(
  `${repoName} created successfully. Follow the following commands to start`
);
console.log(`cd ${repoName} && ${pmName} start:dev`);
