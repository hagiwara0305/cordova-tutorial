/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

// sweetAlert2のテストコード
$('.app .sweetalert2-test-button').on('click', function() {
    Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: true,
    });
});

$(function() {

    var $jsTabs = $('.js-tabs');
    var $jsTabsLi = $('.js-tabs li');

    var tabsLiLen = $jsTabsLi.length;
    var tabsLiWid = $jsTabsLi.eq(0).width();

    //タブエリアの横幅指定
    $jsTabs.css('width', tabsLiWid * tabsLiLen);

});

$(function() {
    var ACTIVE_SELECTOR = '.nav-tabs li';

    var $jsTabs = $('.js-tabs');
    var $jsTabsLi = $('.js-tabs li');

    var $scrollContainer = $('.nav-tabs-outer');

    var $hammerObj = new Hammer($('.js-swipe')[0]);
    var tabsLiLen = $jsTabsLi.length;
    var tabsLiWid = $jsTabsLi.eq(0).width();

    //タブエリアの横幅指定
    $jsTabs.css('width', tabsLiWid * tabsLiLen);

    //swipe
    $hammerObj.on("swipeleft", next);
    $hammerObj.on("swiperight", prev);

    function next() {
        tabManager($(ACTIVE_SELECTOR).find('.active').parent().next('li'));
        console.log('left')
    }

    function prev() {
        tabManager($(ACTIVE_SELECTOR).find('.active').parent().prev('li'));
        console.log('right');
    }

    // 指定されたタブをカレントし要素にスクロールする
    function tabManager($nextTarget) {
        $nextTarget.find('a').trigger('click');

        if ($nextTarget.index() != -1) {
            $scrollContainer.scrollLeft($nextTarget.index() * tabsLiWid);

            $('.tab-page p')[0].innerHTML = $nextTarget[0].innerText;
        }
    }

});

// $(function() {
//     $('#tab7').click(function() {
//         $('.tab7').css('display', 'block');
//         $('.tab1').css('display', 'none');
//     });
// })