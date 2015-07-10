'use strict';

var $ = require('dominus');
var breadcrumb = require('breadcrumb');

function configure (options) {
  var taunus = options.taunus;

  taunus.on('render', function (container, viewModel, route) {
    $('[data-taunus-action]', container).forEach(function (el) {
      var $el = $(el);
      var action = $el.attr('data-taunus-action');
      var controller = taunus.state.controllers[action];

      if (!controller) {
        global.DEBUG && global.DEBUG('[actions] Action not found', action, el); return;
      }

      var crumbs = $el.attr('data-taunus-model');
      var model = crumbs ? breadcrumb(viewModel, crumbs) : viewModel;

      controller(model, el, route);
    });
  });
}

module.exports = {
  configure: configure
};
