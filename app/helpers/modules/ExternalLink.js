'use strict';

class ExternalLink {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.data = obj && obj.data;
        this.validator = obj && obj.validator;
    }

    getUrl(obj) {
        this.validator.validateGetUrl(obj);

        var result = this.data.data.find(item => item.id === obj.id);

        if (typeof result != 'object' || result === null) {
            throw new ReferenceError(`${this.helperName}: external link with id ${obj.id} does not exist`);
        }

        return result.url;
    };

}

module.exports = ExternalLink;