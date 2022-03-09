//Item A Globals
var itemA = 0.5;
var itemAOfferCount = 0;
var itemAOfferInt = 3;
var itemAOfferAmount = .3;

//Item B Globals
var itemB = 0.3;
var itemBOfferCount = 0;
var itemBOfferInt = 2;
var itemBOfferAmount = .15;

//Item C Globals
var itemC = 0.2;

//Item D Globals
var itemD = 0.12;


var globalItemCount = 0;
var currentTotal = 0;

jQuery(document).ready(function () {

    //Item A click function
    $('#item-a').click(function () {
        itemAOfferCount += 1;
        if (itemAOfferCount == itemAOfferInt) {
            globalItemCount += 1;
            itemAOfferCount = 0;
            currentTotal += itemAOfferAmount;
            alert('free item');
        } else {
            globalItemCount += 1;
            currentTotal += itemA;
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item B click function
    $('#item-b').click(function () {
        itemBOfferCount += 1;
        if (itemBOfferCount == itemBOfferInt) {
            globalItemCount += 1;
            itemBOfferCount = 0;
            currentTotal += itemBOfferAmount;
            alert('free item');
        } else {
            globalItemCount += 1;
            currentTotal += itemB;
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item C click function
    $('#item-c').click(function () {
        globalItemCount += 1;
        currentTotal += itemC;
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item D click function
    $('#item-d').click(function () {
        globalItemCount += 1;
        currentTotal += itemD;
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });
});
