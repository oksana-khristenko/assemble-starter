var expect = require("chai").expect;

var config = require('../helpers/modules/config');

describe('config', function() {

    'use strict';

    describe('Arguments validation', function() {

        it('should throw TypeError if config key is not provided', function() {
            var fn = function(){
                config.get();
            };

            expect(fn).to.throw(TypeError, 'config key is not provided');
        });

    });

});