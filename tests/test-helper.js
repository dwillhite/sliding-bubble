import Application from 'sliding-bubble/app';
import config from 'sliding-bubble/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
