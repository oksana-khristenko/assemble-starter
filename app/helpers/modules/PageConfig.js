'use strict';

class PageConfig {

    constructor(obj) {
        this.config = obj.config;
        this.pageProperty = obj.pageProperty;
        this.helperName = obj.helperName;
    }

    get(key) {
        if (this.config.exists(key)) {
            return this.pageProperty.exists(key) ? this.pageProperty.get(key) : this.config.get(key);
        }

        return undefined;
    }

}

module.exports = PageConfig;