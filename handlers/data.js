'use strict';

const Boom = require('boom');

/**
 * Operations on /data
 */
module.exports = {
    /**
     * summary: Starting Page
     * description: 
     * parameters: limit
     * produces: 
     * responses: 200, default
     */
    get: function (request, h) {
 //       return Boom.notImplemented();
        console.log('Request for v1/data/');
        return {
            'name': 'Alex',
            'age': 35
        };
    }
};
