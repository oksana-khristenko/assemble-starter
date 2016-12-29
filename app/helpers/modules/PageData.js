'use strict';

var PageProperty = require('./PageProperty');

class PageData {

    constructor(page) {
        this.page = page;
    }

    get title() {
        return this.page.title;
    }

    get shortTitle() {
        return this.page.short_title;
    }

    get summary() {
        return this.page.summary;
    }

    get shortSummary() {
        return this.page.short_summary;
    }

};

module.exports = PageData;