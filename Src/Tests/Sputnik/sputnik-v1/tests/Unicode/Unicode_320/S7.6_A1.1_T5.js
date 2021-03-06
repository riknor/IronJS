// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.6_A1.1_T5;
 * @section: 7.6;
 * @assertion: IdentifierStart :: UnicodeLetter (any character in the Unicode categories "Lu", "Ll", "Lt", "Lm", "Lo", "Nl");
 * @description: UnicodeLetter :: Other letter (Lo).
 * Complex test with eval;
*/

//CHECK
Lo = [[0x01BB, 0x01BB], [0x01C0, 0x01C3], [0x05D0, 0x05EA], [0x05F0, 0x05F2], [0x0621, 0x063A], [0x0641, 0x064A], [0x066E, 0x066F], [0x0671, 0x06D3], [0x06D5, 0x06D5], [0x06FA, 0x06FC], [0x0710, 0x0710], [0x0712, 0x072C], [0x0780, 0x07A5], [0x07B1, 0x07B1], [0x0905, 0x0939], [0x093D, 0x093D], [0x0950, 0x0950], [0x0958, 0x0961], [0x0985, 0x098C], [0x098F, 0x0990], [0x0993, 0x09A8], [0x09AA, 0x09B0], [0x09B2, 0x09B2], [0x09B6, 0x09B9], [0x09DC, 0x09DD], [0x09DF, 0x09E1], [0x09F0, 0x09F1], [0x0A05, 0x0A0A], [0x0A0F, 0x0A10], [0x0A13, 0x0A28], [0x0A2A, 0x0A30], [0x0A32, 0x0A33], [0x0A35, 0x0A36], [0x0A38, 0x0A39], [0x0A59, 0x0A5C], [0x0A5E, 0x0A5E], [0x0A72, 0x0A74], [0x0A85, 0x0A8B], [0x0A8D, 0x0A8D], [0x0A8F, 0x0A91], [0x0A93, 0x0AA8], [0x0AAA, 0x0AB0], [0x0AB2, 0x0AB3], [0x0AB5, 0x0AB9], [0x0ABD, 0x0ABD], [0x0AD0, 0x0AD0], [0x0AE0, 0x0AE0], [0x0B05, 0x0B0C], [0x0B0F, 0x0B10], [0x0B13, 0x0B28], [0x0B2A, 0x0B30], [0x0B32, 0x0B33], [0x0B36, 0x0B39], [0x0B3D, 0x0B3D], [0x0B5C, 0x0B5D], [0x0B5F, 0x0B61], [0x0B83, 0x0B83], [0x0B85, 0x0B8A], [0x0B8E, 0x0B90], [0x0B92, 0x0B95], [0x0B99, 0x0B9A], [0x0B9C, 0x0B9C], [0x0B9E, 0x0B9F], [0x0BA3, 0x0BA4], [0x0BA8, 0x0BAA], [0x0BAE, 0x0BB5], [0x0BB7, 0x0BB9], [0x0C05, 0x0C0C], [0x0C0E, 0x0C10], [0x0C12, 0x0C28], [0x0C2A, 0x0C33], [0x0C35, 0x0C39], [0x0C60, 0x0C61], [0x0C85, 0x0C8C], [0x0C8E, 0x0C90], [0x0C92, 0x0CA8], [0x0CAA, 0x0CB3], [0x0CB5, 0x0CB9], [0x0CDE, 0x0CDE], [0x0CE0, 0x0CE1], [0x0D05, 0x0D0C], [0x0D0E, 0x0D10], [0x0D12, 0x0D28], [0x0D2A, 0x0D39], [0x0D60, 0x0D61], [0x0D85, 0x0D96], [0x0D9A, 0x0DB1], [0x0DB3, 0x0DBB], [0x0DBD, 0x0DBD], [0x0DC0, 0x0DC6], [0x0E01, 0x0E30], [0x0E32, 0x0E33], [0x0E40, 0x0E45], [0x0E81, 0x0E82], [0x0E84, 0x0E84], [0x0E87, 0x0E88], [0x0E8A, 0x0E8A], [0x0E8D, 0x0E8D], [0x0E94, 0x0E97], [0x0E99, 0x0E9F], [0x0EA1, 0x0EA3], [0x0EA5, 0x0EA5], [0x0EA7, 0x0EA7], [0x0EAA, 0x0EAB], [0x0EAD, 0x0EB0], [0x0EB2, 0x0EB3], [0x0EBD, 0x0EBD], [0x0EC0, 0x0EC4], [0x0EDC, 0x0EDD], [0x0F00, 0x0F00], [0x0F40, 0x0F47], [0x0F49, 0x0F6A], [0x0F88, 0x0F8B], [0x1000, 0x1021], [0x1023, 0x1027], [0x1029, 0x102A], [0x1050, 0x1055], [0x10D0, 0x10F8], [0x1100, 0x1159], [0x115F, 0x11A2], [0x11A8, 0x11F9], [0x1200, 0x1206], [0x1208, 0x1246], [0x1248, 0x1248], [0x124A, 0x124D], [0x1250, 0x1256], [0x1258, 0x1258], [0x125A, 0x125D], [0x1260, 0x1286], [0x1288, 0x1288], [0x128A, 0x128D], [0x1290, 0x12AE], [0x12B0, 0x12B0], [0x12B2, 0x12B5], [0x12B8, 0x12BE], [0x12C0, 0x12C0], [0x12C2, 0x12C5], [0x12C8, 0x12CE], [0x12D0, 0x12D6], [0x12D8, 0x12EE], [0x12F0, 0x130E], [0x1310, 0x1310], [0x1312, 0x1315], [0x1318, 0x131E], [0x1320, 0x1346], [0x1348, 0x135A], [0x13A0, 0x13F4], [0x1401, 0x166C], [0x166F, 0x1676], [0x1681, 0x169A], [0x16A0, 0x16EA], [0x1700, 0x170C], [0x170E, 0x1711], [0x1720, 0x1731], [0x1740, 0x1751], [0x1760, 0x176C], [0x176E, 0x1770], [0x1780, 0x17B3], [0x17DC, 0x17DC], [0x1820, 0x1842], [0x1844, 0x1877], [0x1880, 0x18A8], [0x2135, 0x2138], [0x3006, 0x3006], [0x303C, 0x303C], [0x3041, 0x3096], [0x309F, 0x309F], [0x30A1, 0x30FA], [0x30FF, 0x30FF], [0x3105, 0x312C], [0x3131, 0x318E], [0x31A0, 0x31B7], [0x31F0, 0x31FF], [0x3400, 0x4DB5], [0x4E00, 0x9FA5], [0xA000, 0xA48C], [0xAC00, 0xD7A3], [0xF900, 0xFA2D], [0xFA30, 0xFA6A], [0xFB1D, 0xFB1D], [0xFB1F, 0xFB28], [0xFB2A, 0xFB36], [0xFB38, 0xFB3C], [0xFB3E, 0xFB3E], [0xFB40, 0xFB41], [0xFB43, 0xFB44], [0xFB46, 0xFBB1], [0xFBD3, 0xFD3D], [0xFD50, 0xFD8F], [0xFD92, 0xFDC7], [0xFDF0, 0xFDFB], [0xFE70, 0xFE74], [0xFE76, 0xFEFC], [0xFF66, 0xFF6F], [0xFF71, 0xFF9D], [0xFFA0, 0xFFBE], [0xFFC2, 0xFFC7], [0xFFCA, 0xFFCF], [0xFFD2, 0xFFD7], [0xFFDA, 0xFFDC]];

errorCount = 0;
count = 0;
for (indexI = 0; indexI < Lo.length; indexI++) {
  for (indexJ = Lo[indexI][0]; indexJ <= Lo[indexI][1]; indexJ++) {
    try {
      var identifier = String.fromCharCode(indexJ);
      var hex = decimalToHexString(indexJ);
      eval("var " + identifier + "=1");
      if (eval(identifier + "===1") !== true) {
        $ERROR('#' + hex + ' ');
        errorCount++;
      }
    } catch (e) {
      $ERROR('#' + hex + ' ');
      errorCount++;
    }
    count++;
  }
}

if (errorCount > 0) {  
  $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count);
}

function decimalToHexString(n) {
  n = Number(n);
  var h = "";
  for (var i = 3; i >= 0; i--) {
    if (n >= Math.pow(16, i)) {
      var t = Math.floor(n / Math.pow(16, i));
      n -= t * Math.pow(16, i);
      if ( t >= 10 ) {
        if ( t == 10 ) { h += "A"; }
        if ( t == 11 ) { h += "B"; }
        if ( t == 12 ) { h += "C"; }
        if ( t == 13 ) { h += "D"; }
        if ( t == 14 ) { h += "E"; }
        if ( t == 15 ) { h += "F"; }
      } else {
        h += String(t);
      }
    } else {
      h += "0";
    }
  }
  return h;
}
