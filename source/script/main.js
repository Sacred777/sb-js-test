import "../scss/style.scss"
import "./utils/prism.js";
import {iosVhFix} from "./utils/ios-vh-fix.js";
import { initialSandwichMenu } from "./modules/header/init-page-menu.js";
import { initialDataWork } from "./modules/filter/init-filter.js";

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initialSandwichMenu();
    initialDataWork();
  });
});
