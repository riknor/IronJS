// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.5_A4;
 * @section: 15.7.3.5;
 * @assertion: Number.NEGATIVE_INFINITY has the attribute DontEnum;
 * @description: Checking if enumerating Number.NEGATIVE_INFINITY fails;
*/

//CHECK#1
for(x in Number) {
  if(x === "NEGATIVE_INFINITY") {
    $ERROR('#1: Number.NEGATIVE_INFINITY has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('NEGATIVE_INFINITY')) {
  $ERROR('#2: Number.NEGATIVE_INFINITY has the attribute DontEnum');
}
