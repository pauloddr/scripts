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

function closeAnnoyances() {
    try {
        document.getElementsByClassName('ego_x')[0].click();
        console.log('Closed annoyance');
    } catch (e) {
        // fails silently
    }
}

setInterval(closeAnnoyances, 5000);
