'use strict';

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
aboutController.initAboutPage = function() {
  $('.tab-content').hide();
  $('#about').fadeIn();
}

  module.aboutController = aboutController;
})(window);
