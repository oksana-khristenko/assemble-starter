'use strict';

class PageConfig {

    constructor(obj) {
        this.config = obj && obj.config;
        this.pageProperty = obj && obj.pageProperty;
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
    }

    get(propertyName) {
        if (this.config.exists(propertyName)) {

            var pagePropertyExists = this.pageProperty.exists({
                propertyName,
                page: this.page
            });

            if (pagePropertyExists) {
                return this.pageProperty.get({
                    propertyName,
                    page: this.page
                });
            }

            return this.config.get(propertyName);
        }

        return undefined;
    }

}

module.exports = PageConfig;