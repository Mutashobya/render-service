'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/data',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/data',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
