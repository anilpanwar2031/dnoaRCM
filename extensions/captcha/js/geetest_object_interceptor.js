(function(){var e={};if(typeof items!=="undefined"){e=items}else{if(document.currentScript&&document.currentScript.dataset&&document.currentScript.dataset["parameters"]){try{e=JSON.parse(document.currentScript.dataset["parameters"])}catch(e){}}}var t=typeof e!=="undefined"&&e.delay_onready_callback;var n={};var o;var r;var a=false;Object.defineProperty(window,"initGeetest",{get:function(){return i},set:function(e){r=e},configurable:true});var i=function(e,r){var i=function(){window.postMessagePosteRestante("geetestContentScript",{type:"solveGeetestCaptcha",geetestParameters:{gt:e.gt,challenge:e.challenge,api_server:e.api_server,appendToSelector:e.appendToSelector,getLib:e.getLib}},window.location.href);a=true};var u={appendTo:function(o){if(e.product!=="bind"){var r=c(o);e.appendToSelector=r;d(r);i();setTimeout((function(){if(!t&&typeof n.onReady==="function"){n.onReady()}}),100)}return this},bindForm:function(t){var n=c(t);e.appendToSelector=n;d(n);if(o){f(e.appendToSelector,o)}},onReady:function(t){n.onReady=t;if(e.product==="bind"){if(typeof n.onReady==="function"){n.onReady()}}return this},onSuccess:function(e){n.onSuccessCallback=e;return this},onError:function(e){n.onError=e;return this},onClose:function(e){n.onClose=e;return this},getValidate:function(){d(e.appendToSelector);f(e.appendToSelector,o);return{geetest_challenge:o.challenge,geetest_validate:o.validate,geetest_seccode:o.seccode}},reset:function(){if(a){}},destroy:function(){s(e.appendToSelector)},verify:function(){i()}};if(typeof r==="function"){r(u)}window.addEventListener("message",(function(r){if(!r.data||typeof r.data.receiver=="undefined"||r.data.receiver!="geetestObjectInterceptor"){return}var a=r.data;if(a.type==="geetestTaskSolution"){o=r.data.taskSolution;if(!t){f(e.appendToSelector,o);if(typeof n.onSuccessCallback==="function"){n.onSuccessCallback()}}else{if(typeof n.onReady==="function"){n.onReady()}setTimeout((()=>{f(e.appendToSelector,o);if(typeof n.onSuccessCallback==="function"){n.onSuccessCallback()}}),Math.round(2e3+Math.random()*2e3))}}else if(a.type==="geetestError"){if(typeof n.onError==="function"){n.onError(typeof a.error!=="undefined"?a.error:{})}}}))};function c(e){var t;if(typeof e==="object"&&typeof e.appendChild!=="undefined"){if(e.id){t="#"+e.id}else{var n=document.createElement(e.tagName);n.id="antcpt"+Math.round(Math.random()*1e3);e.appendChild(n);t="#"+n.id}}else if(typeof e==="string"){t=e}else{}return t}function d(e){if(e&&typeof document.querySelector==="function"){var t=u(e);if(t&&t.getElementsByClassName("geetest_form")&&t.getElementsByClassName("geetest_form").length==0){t.insertAdjacentHTML("beforeend",'<div class="geetest_holder geetest_wind geetest_detect" style="width: 300px;">\n'+'    <div class="geetest_form">\n'+'        <input type="hidden" name="geetest_challenge">\n'+'        <input type="hidden" name="geetest_validate">\n'+'        <input type="hidden" name="geetest_seccode">\n'+"    </div>\n"+"</div>")}}}function s(e){if(e&&typeof document.querySelector==="function"){var t=u(e);if(t){var n=t.getElementsByClassName("geetest_holder");if(n&&n.length){Array.from(n).forEach((e=>e.parentElement.removeChild(e)))}}}}function f(e,t){if(e&&typeof document.querySelector==="function"){var n=u(e+" input[name=geetest_challenge]");var o=u(e+" input[name=geetest_validate]");var r=u(e+" input[name=geetest_seccode]");if(n){n.value=t.challenge}if(o){o.value=t.validate}if(r){r.value=t.seccode}}}function u(e){try{return document.querySelector(e)}catch(t){if(typeof CSS.escape==="function"){return document.querySelector(CSS.escape(e))}}}})();