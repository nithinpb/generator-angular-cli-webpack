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

    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'Name of the component you wish to create?'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.componentName;
      this.props = props;
    });
  }

  _capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  _validate(componentName, dirname) {
    if(!componentName) {
      this.log('Component name cannot be empty!');
      process.exit(1);
      return;
    }

    if(this.fs.exists(dirname + '/' + componentName + '.component.ts')) {
      this.log("This component already exists at path: " + dirname);
      process.exit(1);
      return;
    }
  }

  writing() {
    var componentName = this.props.componentName;
    var dirname = this.destinationRoot() + '/src/app/' + componentName;

    this._validate(componentName, dirname);

    var capitalizedComponentName = this._capitalize(componentName);

    this.fs.copyTpl(
      this.templatePath('_component.ts'),
      this.destinationPath(dirname + '/' + componentName + '.component.ts'), {
        componentName: componentName,
        capitalizedComponentName: capitalizedComponentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_module.ts'),
      this.destinationPath(dirname + '/' + componentName + '.module.ts'), {
        componentName: componentName,
        capitalizedComponentName: capitalizedComponentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_template.html'),
      this.destinationPath(dirname + '/' + componentName + '.template.html'), {
        componentName: componentName,
        capitalizedComponentName: capitalizedComponentName
      }
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }

  end() {
    this.log(chalk.bold.yellow('You may need to add references to this component in your routes!'));
    var routeFile = this.destinationRoot() + '/src/app/layout/layout.routes.ts';

    if(this.fs.exists(routeFile)) {
      this.log("Add a reference to: "+ routeFile + "\n\n");
      this.log(this.fs.read(routeFile));
    }
  }
};
