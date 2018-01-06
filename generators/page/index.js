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
      name: 'pageName',
      message: 'Name of the page you wish to create? (singular-allsmall) E.g.: license'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.pageName;
      this.props = props;
    });
  }

  _capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  _pluralize(str) {
    return str + 's';
  }

  _validate(pluralPageName, dirname) {
    if(!pluralPageName) {
      this.log('Component name cannot be empty!');
      process.exit(1);
      return;
    }

    if(this.fs.exists(dirname + '/' + pluralPageName + '.component.ts')) {
      this.log("This page already exists at path: " + dirname);
      process.exit(1);
      return;
    }
  }

  writing() {
    var pageName = this.props.pageName;
    var pluralPageName = this._pluralize(pageName);
    var dirname = this.destinationRoot() + '/src/app/main/content/pages/' + pluralPageName;
    var apidirname = this.destinationRoot() + '/src/api';

    this._validate(pluralPageName, dirname);

    var capitalizedPageName = this._capitalize(pageName);
    var capitalizedPluralPageName = this._capitalize(pluralPageName);

    this.fs.copyTpl(
      this.templatePath('_data.json'),
      this.destinationPath(apidirname + '/' + pluralPageName + '-data.json'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );
    
    this.fs.copyTpl(
      this.templatePath('_component.ts'),
      this.destinationPath(dirname + '/' + pluralPageName + '.component.ts'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_module.ts'),
      this.destinationPath(dirname + '/' + pluralPageName + '.module.ts'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_component.html'),
      this.destinationPath(dirname + '/' + pluralPageName + '.component.html'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_component.scss'),
      this.destinationPath(dirname + '/' + pluralPageName + '.component.scss'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_model.ts'),
      this.destinationPath(dirname + '/' + pluralPageName + '.model.ts'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_component.spec.ts'),
      this.destinationPath(dirname + '/' + pluralPageName + '.component.spec.ts'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_service.ts'),
      this.destinationPath(dirname + '/' + pluralPageName + '.service.ts'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );
    
    this.fs.copyTpl(
      this.templatePath('_list/_list.component.html'),
      this.destinationPath(dirname + '/' + pageName + '-list/' + pageName + '-list.component.html'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );    

    this.fs.copyTpl(
      this.templatePath('_list/_list.component.scss'),
      this.destinationPath(dirname + '/' + pageName + '-list/' + pageName + '-list.component.scss'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_list/_list.component.ts'),
      this.destinationPath(dirname + '/' + pageName + '-list/' + pageName + '-list.component.ts'), {
        pageName: pageName,
        pluralPageName: pluralPageName,
        capitalizedPluralPageName: capitalizedPluralPageName,
        capitalizedPageName: capitalizedPageName
      }
    );        
  }

  end() {
    this.log(chalk.bold.yellow('You need to manually update these files!'));
    this.log("src/app/main/main.module.ts - Add reference to " + this.props.capitalizedPageName + "Module");
    this.log("src/app/navigation/navigation.model.ts - Update sidebar navigation to routes.path in your module file");
  }
};
