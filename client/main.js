import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { initializeIcons } from '@uifabric/icons';
import { renderRoutes } from '../imports/startup/client/routes.js';
 
Meteor.startup(() => {
  initializeIcons();
  render(renderRoutes(), document.getElementById('app'));
});