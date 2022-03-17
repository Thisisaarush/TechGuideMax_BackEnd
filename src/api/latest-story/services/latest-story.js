'use strict';

/**
 * latest-story service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-story.latest-story');
