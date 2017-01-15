'use strict';

import $ from 'jquery';

export default class ClosestNumber {

    constructor(nums, num) {
        this.result = this.get(nums, num);
    }

    get lower() {
        return this.result.lower;
    }

    get higher() {
        return this.result.higher;
    }

    get closest() {
        return this.result.closest;
    }

    get(nums, num) {
        var clone = nums.concat();

        clone.sort(function(a, b) {
            return a - b;
        });

        var obj = {
            lower: Math.min(clone[0], num),
            higher: Math.max(clone[clone.length - 1], num),
            closest: num
        };

        for (let cloneNum of clone) {
            if (num > cloneNum) {
                obj.lower = cloneNum;
            }
            else if (num <= cloneNum) {
                obj.higher = cloneNum;
                break;
            }
        }

        obj.closest = (Math.abs(num - obj.lower) < Math.abs(obj.higher - num)) ?
            obj.lower :
            obj.higher;

        return obj;
    }

}