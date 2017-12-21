'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand ' + chalk.red('generator-angular-cli-webpack') + ' generator!'
    ));

    this.log(chalk.bold.yellow('This module helps you with code generation for a project created with angular2-webpack-starter'));
    this.log(chalk.bold.yellow('Following commands are available.\n\n'));
    this.log(chalk.bold.yellow('yo angular-cli-webpack:component - Creates a component.'));
    this.log(chalk.bold.yellow('\n\n'));
  }

  references() {
    this.log("How-to-yeoman: https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps");
    this.log("Generator File Operations: https://github.com/SBoudrias/mem-fs-editor");
    process.exit(0);
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
