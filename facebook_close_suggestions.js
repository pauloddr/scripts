// ==UserScript==
// @name         Close Facebook Suggestions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Close Facebook suggestions for Pages, Games, new friends, etc.
// @author       @pauloddr
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function main() {
    closeSuggestedPosts();
    closeAnnoyances();
}

function closeAnnoyances() {
    try {
        document.getElementsByClassName('ego_x')[0].click();
        console.log('Closed annoyance');
    } catch (e) {
        // fails silently
    }
    try {
        document.getElementsByClassName('ego_x_visible')[0].click();
        console.log('Closed annoyance');
    } catch (e) {
        // fails silently
    }
}

function closeSuggestedPosts() {
    var spans= document.getElementsByTagName('span');
    var len = spans.length;
    for (var i = 0; i < len; i++) {
        if(spans[i].innerHTML == "Suggested Post" || spans[i].innerHTML == "Recommended Post") {
            closeSpan(spans[i]);
        }
    }
}

function closeSpan(spanElement) {
    var parentNode = spanElement.parentElement.parentElement.parentElement;
    parentNode.parentElement.removeChild(parentNode);
    console.log('Removed Node', spanElement);
}

setInterval(main, 5000);
