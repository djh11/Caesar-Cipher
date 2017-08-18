/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//caesar cipher program
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaCopy = [];

//aware that libraries (ex: lodash) exist that do this
var CopyArray = function CopyArray(array1) {
    for (var i = 0; i < array1.length; i++) {
        CopyArray[i] = array1[i];
    }

    return CopyArray;
};

var SetKey = function SetKey(userKey) {
    var key = input;
};

/* not sure if I want this functionality
var GetKey = function(){
    return key;
}
*/

var BuildCipher = function BuildCipher(key) {
    var cipherAlphabet = [];
    alphaCopy = CopyArray(alpha);

    for (var i = 0; i < key.length; i++) {
        cipherAlphabet.push(key[i]);
        alphaCopy.splice(alphaCopy.indexOf(key[i], 1));
    }

    for (var j = 0; j < alphaCopy.length; j++) {
        cipherAlphabet.push(alphaCopy[j]);
    }
    return cipherAlphabet;
};

var Encrypt = function Encrypt(message, cipherAlphabet) {
    var decrypted = [];

    for (var i = 0; i < message.length; i++) {
        decrypted.push(cypherAlphabet[alpha.indexOf[message[i]]]);
    }

    return decrypted;
};

var main = function main(newKey, messageToEncrypt) {
    SetKey(newKey);
    var newAlpha = BuildCipher(key);
    var decryptedMessage = Encrypt(messageToEncrypt, newAlpha);
    return decryptedMessage;
};

/***/ })
/******/ ]);