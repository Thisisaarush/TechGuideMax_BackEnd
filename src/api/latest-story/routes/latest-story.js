'use strict';

/**
 * latest-story router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-story.latest-story');
