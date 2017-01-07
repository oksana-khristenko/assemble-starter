'use strict';

class PageConfig {

    constructor(obj) {
        this.config = obj && obj.config;
        this.pageProperty = obj && obj.pageProperty;
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
    }

    get(key) {
        if (this.config.exists(key)) {

            var pagePropertyExists = this.pageProperty.exists({
                propertyName: key,
                page: this.page
            });

            if (pagePropertyExists) {
                return this.pageProperty.get({
                    propertyName: key,
                    page: this.page
                });
            }

            return this.config.get(key);
        }

        return undefined;
    }

}

module.exports = PageConfig;