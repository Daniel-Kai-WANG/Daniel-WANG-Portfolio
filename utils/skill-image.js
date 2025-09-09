import angular from "/public/svg/skills/angular.svg";
import aws from "/public/svg/skills/aws.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import css from "/public/svg/skills/css.svg";
import docker from "/public/svg/skills/docker.svg";
import figma from "/public/svg/skills/figma.svg";
import firebase from "/public/svg/skills/firebase.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import materialui from "/public/svg/skills/materialui.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import php from "/public/svg/skills/php.svg";
import python from "/public/svg/skills/python.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import vue from "/public/svg/skills/vue.svg";
import wordpress from "/public/svg/skills/wordpress.svg";
import nestJS from "/public/svg/skills/nestJS.svg";
import jQuery from "/public/svg/skills/jquery.svg";
import expo from "/public/svg/skills/expo.svg";
import sass from "/public/svg/skills/sass.svg";
import styled from "/public/svg/skills/styledcomponents.svg";
import kendo from "/public/svg/skills/kendo-react.svg";
import laravel from "/public/svg/skills/laravel.svg";
import jira from "/public/svg/skills/jira.svg";
import github from "/public/svg/skills/github.svg";
import gitlab from "/public/svg/skills/gitlab.svg";
import postman from "/public/svg/skills/postman.svg"
import xcode from "/public/svg/skills/xcode.svg"
import androidstudio from "/public/svg/skills/androidstudio.svg"

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "scss":
      return sass;
    case "styled components":
      return styled;
    case "kendo react":
      return kendo;
    case "tailwind":
      return tailwind;
    case "bootstrap":
      return bootstrap;
    case "materialui":
      return materialui;

    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
    case "react native":
      return react;
    case "expo":
      return expo;
    case "vue":
      return vue;
    case "angular":
      return angular;
    case "next js":
      return nextJS;
    case "jquery":
      return jQuery;
    case "wordpress":
      return wordpress;

    case "nest js":
      return nestJS;
    case "laravel":
      return laravel;
    case "python":
      return python;

    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;

    case "git":
    case "github":
      return github;
    case "gitlab":
      return gitlab;
    case "docker":
      return docker;
    case "postman":
      return postman;
    case "jira":
      return jira;

    case "aws":
      return aws;
    case "firebase":
      return firebase;

    case "figma":
      return figma;   
    case "xcode":
      return xcode;
    case "androidstudio":
      return androidstudio;

    case "php":
      return php;

    default:
      return null;
  }
};

