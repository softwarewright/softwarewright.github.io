import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";


import {
  faRobot,
  faExclamationCircle,
  faClipboardList,
  faCogs
} from "@fortawesome/free-solid-svg-icons"

import {
  faGithubSquare,
  faLinkedin,
  faTwitter,
  faAws
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faRobot, faExclamationCircle, faClipboardList, faCogs,
  faAws, faLinkedin, faTwitter, faGithubSquare);

Vue.component("fa-icon", FontAwesomeIcon);
