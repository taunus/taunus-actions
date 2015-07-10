'use strict';

var $ = require('dominus');
var breadcrumb = require('breadcrumb');

function configure (options) {
  var taunus = options.taunus;

  taunus.on('render', function (container, viewModel) {
    $('[data-taunus-action]', container).forEach(function (el) {
      var $el = $(el);
      var action = $el.attr('data-taunus-action');
      var model = $el.attr('data-taunus-model');
      var controller = taunus.state.controllers[action];

      if (!controller) {
        throw new Error('Taunus action not found');
      }

      var componentModel = viewModel;
      if (model) {
        componentModel = breadcrumb(viewModel, model);
      }

      controller(componentModel, $el);
    });
  });
}

module.exports = {
  configure: configure
};
