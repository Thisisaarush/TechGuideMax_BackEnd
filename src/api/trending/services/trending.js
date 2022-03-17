'use strict';

/**
 * trending service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending.trending');
