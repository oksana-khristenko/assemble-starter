'use strict';

class Menu {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.pageFetcher = obj && obj.pageFetcher;
        this.pageUrl = obj && obj.pageUrl;
        this.data = obj && obj.data;
    }

    getPageItemData(item) {
        var page = this.pageFetcher.getById(item.pageId),
            url = this.pageUrl.getRootRelativeUrl(page);

        return {
            title: item.title,
            url: url
        };
    }

    getExtenalItemData(item) {
        return {
            title: item.title,
            target: item.target || '_blank',
            url: item.url
        };
    }

    getDownloadItemData(item) {
        return {
            title: item.title,
            url: `/download/${item.file}`
        };
    }

    getAnchorItemData(item) {
        return {
            title: item.title,
            url: item.anchor
        };
    }

    getItemData(item) {
        switch (item.type) {
            case 'page':
                return this.getPageItemData(item);
                break;
            case 'external':
                return this.getExtenalItemData(item);
                break;
            case 'download':
                return this.getDownloadItemData(item);
                break;
            case 'anchor':
                return this.getAnchorItemData(item);
                break;
        }
    };

    get() {
        var menu = [];

        for (var i = 0; i < this.data.length; i++) {
            var item = this.data[i];

            menu.push(
                this.getItemData(item)
            );
        }

        return { items: menu };
    };

}

module.exports = Menu;