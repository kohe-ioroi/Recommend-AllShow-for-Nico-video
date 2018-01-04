// ==UserScript==
// @name           Recommend AllShow for Nico-video
// @namespace      Kohe_Ioroi
// @description    Reccomend Video All Show for Nicovideo.jp
// @include        http://www.nicovideo.jp/recommendations*
// ==/UserScript==
(function(){
    if(!document.evaluate('//*[@id="next_recommendations"]',document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null ).snapshotLength){
        return;
    }else{
        for (i=0; i<30; i++) {
            setTimeout(document.getElementById("next_recommendations").click(),100)
        }}})