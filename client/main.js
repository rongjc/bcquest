import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { initializeIcons } from '@uifabric/icons';
import { renderRoutes } from '../imports/startup/client/routes.js';
import '../imports/api/contracts.js';

Meteor.startup(() => {
  initializeIcons();
  render(renderRoutes(), document.getElementById('app'));
  process.env.REACT_APP_REGISTRY_ADDRESS='{"1":"0x445b4c58113C784640a978cfE39b0065118B91A5","3":"0xD4543Fe1ded1637768516A3Ef35614F91F715370","4":"0x16C25e1139fC96E8705A59E7a4F132d11DfFeE4E","42":"0x3d9EE1B10a002B9113e5dAeF8F19067503d6162A","12648430":"0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab","77":"0x058faf0b1248a6de96ef51696564fe5d64b5e231","99":"0x41D420ED515E51A4023fBa2945a46186274181d6"}'
});