"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `CMS template generator for vue ${chalk.red(
          "generator-vue-cms-generator"
        )}`
      )
    );
    this.log(
      "Please initialize git repository for husky, or your git hooks wont be installed."
    );

    const prompts = [
      {
        name: "name",
        message: "Project Name ?",
        default: "vue-cms-app"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    mkdirp(this.props.name);
    this.destinationRoot(this.destinationPath(this.props.name));
  }

  writing() {
    this.fs.copy(this.templatePath("*"), this.destinationPath(""));
    this.fs.copy(this.templatePath(".*"), this.destinationPath(""));
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
    this.fs.copy(this.templatePath("public"), this.destinationPath("public"));
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("src/views/Home.vue"),
      this.destinationPath("src/views/Home.vue"),
      this.props
    );
  }

  install() {
    this.installDependencies({ bower: false });
    this.log(
      `Thank you for using vue-cms-generator. Your app: ${this.determineAppname()} has been initialized`
    );
  }
};
