!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a,n=o("1WSnx"),l="feedback-form-state",i=document.querySelector(".feedback-form"),u=document.querySelector('[name="email"]'),d=document.querySelector('[name="message"]'),c={};(a=JSON.parse(localStorage.getItem(l)))?(u.value=a.email,d.value=a.message):(u.value="",d.value=""),i.addEventListener("input",(0,n.throttle)((function(e){c[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(c))}),500)),i.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(l));t&&console.log(t);e.currentTarget.reset(),localStorage.removeItem(l)}))}();
//# sourceMappingURL=03-feedback.b7b0b125.js.map