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
        if (this.isInlineImage($el)) {
            this.setInlineImageSrc($el, src);
        }
        else {
            this.setBackgroundImageUrl($el, src);
        }
    }

    load($image) {
        return new Promise((resolve, reject) => {
            var img = new Image(),
                src = this.getDataSrc($image);

            img.src = src;

            img.addEventListener('load', () => {
                this.setSrc($image, src);
                resolve($image);
            });

            img.addEventListener('error', () => {
                reject(`Error loading image src ${src}`);
            });
        });
    }

    loadAll($images) {
        var len = $images.length,
            promises = [];

        for (let i = 0; i < len; i++) {
            let $image = $($images[i]),
                promise = this.load($image);

            promises.push(promise);
        }

        return Promise.all(promises);
    }

}
