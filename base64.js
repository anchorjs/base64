/**
 * Module definition.
 *
 * Credits:
 *
 * This code is based on code originally written by Tyler Akins <http://rumkin.com/>,
 * as available here:
 *   http://rumkin.com/tools/cipher/js/base64.js
 * 
 * Other implementations known derive from (or include verbatim) this lineage
 * include:
 *   https://github.com/ForbesLindesay/base64-encode
 *   https://github.com/ForbesLindesay/base64-decode
 *   https://github.com/metajack/strophejs/blob/master/src/base64.js
 */
define(['exports'],
function(exports) {
  
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  
  /**
   * Creates a Base64 encoded ASCII string from a JavaScript string.
   *
   * Attempting to encode a Unicode string may result in invalid output.  To
   * avoid this, first UTF-8 encode the string and then Base64 encode it:
   *
   *     base64.encode(utf8.encode(str));
   *
   * @param {String} input
   * @return {String}
   * @api public
   */
  function encode(input) {
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
    
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
    
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
    
      output = output +
        keyStr.charAt(enc1) + keyStr.charAt(enc2) +
        keyStr.charAt(enc3) + keyStr.charAt(enc4);
    };
    
    return output;
  }

  /**
   * Decodes a string which has been encoded using Base64 encoding.
   *
   * @param {String} input
   * @return {String}
   * @api public
   */
  function decode(input) {
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    
    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
    while (i < input.length) {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
    
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
    
      output = output + String.fromCharCode(chr1);
    
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    } 
    
    return output;
  }
  
  /**
   * Expose functions.
   */
  exports.encode = encode;
  exports.decode = decode;
});
