'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageConfig = require('../../helpers/modules/PageConfig');
var Config = require('../doubles/modules/Config');
var PageProperty = require('../doubles/modules/PageProperty');

describe('PageConfig', function() {

    var pageConfig,
        configGetStub,
        configExistsStub,
        pagePropertyExistsStub,
        pagePropertyGetStub;

    beforeEach(function() {
        pageConfig = new PageConfig({
            config: new Config(),
            pageProperty: new PageProperty()
        });

        configExistsStub = sinon.stub(Config.prototype, 'exists');
        configGetStub = sinon.stub(Config.prototype, 'get');
        pagePropertyExistsStub = sinon.stub(PageProperty.prototype, 'exists');
        pagePropertyGetStub = sinon.stub(PageProperty.prototype, 'get');
    });

    afterEach(function() {
        Config.prototype.get.restore();
        Config.prototype.exists.restore();
        PageProperty.prototype.get.restore();
        PageProperty.prototype.exists.restore();
    });

    describe('get', function() {

        describe('property exists in both config and page objects', function() {

            it('should overwrite config property value with page property value', function() {
                var key = 'testConfig';

                configExistsStub.withArgs(key).returns(true);
                pagePropertyExistsStub.withArgs(key).returns(true);
                configGetStub.withArgs(key).returns(1);
                pagePropertyGetStub.withArgs(key).returns(2);

                var actual = pageConfig.get(key);

                expect(actual).to.equal(2);
            });

        });

        describe('property exists in config object but not in page object', function() {

            it('should return config property value', function() {
                var key = 'testConfigVal';

                configExistsStub.withArgs(key).returns(true);
                pagePropertyExistsStub.withArgs(key).returns(false);
                configGetStub.withArgs(key).returns(1);

                var actual = pageConfig.get(key);

                expect(actual).to.equal(1);
            });

        });

        describe('property exists in page object but not in config object', function() {

            it('should return undefined', function() {
                var key = 'testConfigValue';

                configExistsStub.withArgs(key).returns(false);
                pagePropertyExistsStub.withArgs(key).returns(true);
                pagePropertyGetStub.withArgs(key).returns('whatever');

                var actual = pageConfig.get(key);

                expect(actual).to.equal(undefined);
            });

        });

        describe('property does not exist in page or config objects', function() {

            it('should return undefined', function() {
                var key = 'testConfigValue';

                configExistsStub.withArgs(key).returns(false);
                pagePropertyExistsStub.withArgs(key).returns(false);

                var actual = pageConfig.get(key);

                expect(actual).to.equal(undefined);
            });

        });

    });

});