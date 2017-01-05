'use strict';

import $ from 'jquery';

export default class ImageLoader {

    constructor(dataSrcAttr) {
        this.dataSrcAttr = dataSrcAttr || 'data-preload-src';
    }

    isInlineImage($el) {
        return $el.is('img');
    }

    getDataSrc($el) {
        return $el.attr(this.dataSrcAttr);
    }

    setInlineImageSrc($el, src) {
        $el.attr('src', src);
    }

    setBackgroundImageUrl($el, src) {
        var val = `url(${src})`;
        $el.css({'background-image': val});
    }

    setSrc($el, src) {
        return this.isInlineImage($el) ?
            this.setInlineImageSrc($el, src) :
            this.setBackgroundImageUrl($el, src);
    }

    getSrc($el) {
        return this.isInlineImage($el) ?
            $el.attr('src') :
            $el.css('background-image').replace(/(url\(|\)|")/g, '');
    }

    isLoaded($el) {
        return this.getSrc($el) === this.getDataSrc($el);
    }

    load($el) {
        return $el.length === 1 ?
            this.loadOne($el) :
            this.loadMany($el);
    }

    loadOne($el) {
        return this.isLoaded($el) ?
            Promise.resolve({$el: $el, loaded: true}) :
            new Promise((resolve, reject) => {
                var img = new Image(),
                    src = this.getDataSrc($el);

                img.src = src;

                img.addEventListener('load', () => {
                    this.setSrc($el, src);
                    resolve({$el: $el});
                });

                img.addEventListener('error', () => {
                    reject(`Error loading image src ${src}`);
                });
            });
    }

    loadMany($els) {
        var len = $els.length,
            promises = [];

        for (let i = 0; i < len; i++) {
            let promise = this.loadSingle($($els[i]));
            promises.push(promise);
        }

        return Promise.all(promises);
    }

}
