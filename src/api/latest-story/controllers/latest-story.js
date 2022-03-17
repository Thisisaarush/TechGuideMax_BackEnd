'use strict';

/**
 *  latest-story controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-story.latest-story');
