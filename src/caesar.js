//caesar cipher program
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var alphaCopy = [];

//aware that libraries (ex: lodash) exist that do this
var CopyArray = function(array1){
    for (var i = 0; i < array1.length; i++){
        CopyArray[i] = array1[i];
    }

    return CopyArray;
}

var SetKey = function(userKey){
    var key = input;
}

/* not sure if I want this functionality
var GetKey = function(){
    return key;
}
*/

var BuildCipher = function(key){
    var cipherAlphabet = [];
    alphaCopy = CopyArray(alpha);

    for (var i = 0; i < key.length; i++){
        cipherAlphabet.push(key[i]);
        alphaCopy.splice(alphaCopy.indexOf(key[i],1));
    }

    for (var j = 0; j < alphaCopy.length; j++){
        cipherAlphabet.push(alphaCopy[j]);
    }
    return cipherAlphabet;
}

var Encrypt = function(message, cipherAlphabet){
    var decrypted = [];

    for (var i = 0; i < message.length; i++){
        decrypted.push(cypherAlphabet[alpha.indexOf[message[i]]]);
    }

    return decrypted;
}

var main = function(newKey, messageToEncrypt){
    SetKey(newKey);
    var newAlpha = BuildCipher(key);
    var decryptedMessage = Encrypt(messageToEncrypt, newAlpha);
    return decryptedMessage;
}
//test