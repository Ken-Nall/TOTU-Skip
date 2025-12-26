// ==UserScript==
// @name         TOTU Skip
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically close Time Off Task Updated modal
// @author       Ken Nall @kennenal (MDW7)
// @match        https://fclm-portal.amazon.com/employee*
// @updateURL    https://axzile.corp.amazon.com/-/carthamus/download_script/totu-skip.user.js
// @downloadURL  https://axzile.corp.amazon.com/-/carthamus/download_script/totu-skip.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Observer to watch for modal appearance
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.classList && node.classList.contains('ui-dialog')) {
                    const title = node.querySelector('.ui-dialog-title');
                    if (title && title.textContent.trim() === 'Time Off Task Updated') {
                        const okButton = node.querySelector('.ui-dialog-buttonset button');
                        if (okButton) {
                            okButton.click();
                        }
                    }
                }
            });
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();