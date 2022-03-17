'use strict';

/**
 * how-to service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::how-to.how-to');
