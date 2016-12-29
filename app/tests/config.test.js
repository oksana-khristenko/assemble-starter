'use strict';

var expect = require('chai').expect;

var Config = require('../helpers/modules/Config');

describe('Config', function() {

    'use strict';

    describe('Arguments validation', function() {

        it('should throw ReferenceError if config key is not provided', function() {
            var fn = function(){
                var config = new Config();
                config.get();
            };

            expect(fn).to.throw(ReferenceError, 'config key is not provided');
        });

    });

});