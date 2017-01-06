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

    var pageConfig;

    beforeEach(function() {
        pageConfig = new PageConfig({
            config: new Config(),
            pageProperty: new PageProperty()
        });
    });

    describe('get', function() {

        describe('property exists in both config and page objects', function() {

            it('should overwrite config property value with page property value', function() {
                var key = 'testConfig';

                var configExistsStub = sinon.stub(Config.prototype, 'exists');
                configExistsStub.withArgs(key).returns(true);

                var pagePropertyExistsStub = sinon.stub(PageProperty.prototype, 'exists');
                pagePropertyExistsStub.withArgs(key).returns(true);

                var configGetStub = sinon.stub(Config.prototype, 'get');
                configGetStub.withArgs(key).returns(1);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs(key).returns(2);

                var actual = pageConfig.get(key);

                expect(actual).to.equal(2);

                Config.prototype.get.restore();
                Config.prototype.exists.restore();
                PageProperty.prototype.get.restore();
                PageProperty.prototype.exists.restore();
            });

        });

        describe('property exists in config object but not in page object', function() {

            it('should return config property value', function() {
                var key = 'testConfigVal';

                var configExistsStub = sinon.stub(Config.prototype, 'exists');
                configExistsStub.withArgs(key).returns(true);

                var pagePropertyExistsStub = sinon.stub(PageProperty.prototype, 'exists');
                pagePropertyExistsStub.withArgs(key).returns(false);

                var configGetStub = sinon.stub(Config.prototype, 'get');
                configGetStub.withArgs(key).returns(1);

                var actual = pageConfig.get(key);

                expect(actual).to.equal(1);

                Config.prototype.get.restore();
                Config.prototype.exists.restore();
                PageProperty.prototype.exists.restore();
            });

        });

        describe('property exists in page object but not in config object', function() {

            it('should return undefined', function() {
                var key = 'testConfigValue';

                var configExistsStub = sinon.stub(Config.prototype, 'exists');
                configExistsStub.withArgs(key).returns(false);

                var pagePropertyExistsStub = sinon.stub(PageProperty.prototype, 'exists');
                pagePropertyExistsStub.withArgs(key).returns(true);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs(key).returns('whatever');

                var actual = pageConfig.get(key);

                expect(actual).to.equal(undefined);

                Config.prototype.exists.restore();
                PageProperty.prototype.get.restore();
                PageProperty.prototype.exists.restore();
            });

        });

        describe('property does not exist in page or config objects', function() {

            it('should return undefined', function() {
                var key = 'testConfigValue';

                var configExistsStub = sinon.stub(Config.prototype, 'exists');
                configExistsStub.withArgs(key).returns(false);

                var pagePropertyExistsStub = sinon.stub(PageProperty.prototype, 'exists');
                pagePropertyExistsStub.withArgs(key).returns(false);

                var actual = pageConfig.get(key);

                expect(actual).to.equal(undefined);

                Config.prototype.exists.restore();
                PageProperty.prototype.exists.restore();
            });

        });

    });

});