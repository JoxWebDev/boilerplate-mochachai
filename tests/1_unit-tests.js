const assert = require('chai').assert;

suite('Unit Tests', function () {
  // Basic Assertions
  test('#isNull, #isNotNull', function () {
    assert.isNull(null, 'null is null');
    assert.isNotNull(1, '1 is not null');
  });

  test('#isDefined, #isUndefined', function () {
    assert.isDefined('hello', '"hello" is defined');
    assert.isUndefined(undefined, 'undefined is undefined');
  });

  test('#isOk, #isNotOk', function () {
    assert.isOk(1, '1 is truthy');
    assert.isNotOk(0, '0 is falsy');
  });

  test('#isTrue, #isNotTrue', function () {
    assert.isTrue(true, 'true is true');
    assert.isNotTrue(false, 'false is not true');
  });

  // Equality
  test('#equal, #notEqual', function () {
    assert.equal(2, '2', '2 is equal to "2"');
    assert.notEqual(2, 3, '2 is not equal to 3');
  });

  test('#strictEqual, #notStrictEqual', function () {
    assert.strictEqual(2, 2, '2 is strictly equal to 2');
    assert.notStrictEqual(2, '2', '2 is not strictly equal to "2"');
  });

  test('#deepEqual, #notDeepEqual', function () {
    assert.deepEqual({ a: 1 }, { a: 1 }, 'Objects are deeply equal');
    assert.notDeepEqual({ a: 1 }, { a: 2 }, 'Objects are not deeply equal');
  });

  // Comparisons
  test('#isAbove, #isAtMost', function () {
    assert.isAbove(5, 2, '5 is above 2');
    assert.isAtMost(5, 5, '5 is at most 5');
  });

  test('#isBelow, #isAtLeast', function () {
    assert.isBelow(2, 5, '2 is below 5');
    assert.isAtLeast(5, 5, '5 is at least 5');
  });

  test('#approximately', function () {
    assert.approximately(1.5, 1.4, 0.2, '1.5 is approximately 1.4 ± 0.2');
  });

  // Arrays
  test('#isArray, #isNotArray', function () {
    assert.isArray([], '[] is an array');
    assert.isNotArray({}, '{} is not an array');
  });

  test('Array #include, #notInclude', function () {
    assert.include([1, 2, 3], 2, 'Array includes 2');
    assert.notInclude([1, 2, 3], 4, 'Array does not include 4');
  });

  // Strings
  test('#isString, #isNotString', function () {
    assert.isString('hello', '"hello" is a string');
    assert.isNotString(123, '123 is not a string');
  });

  test('String #include, #notInclude', function () {
    assert.include('hello', 'ell', '"hello" includes "ell"');
    assert.notInclude('hello', 'world', '"hello" does not include "world"');
  });

  test('#match, #notMatch', function () {
    assert.match('hello', /^h/, '"hello" starts with "h"');
    assert.notMatch('hello', /^world$/, '"hello" does not match /^world$/');
  });

  // Objects
  test('#property, #notProperty', function () {
    assert.property({ a: 1 }, 'a', 'Object has property "a"');
    assert.notProperty({ a: 1 }, 'b', 'Object does not have property "b"');
  });

  test('#typeOf, #notTypeOf', function () {
    assert.typeOf('hello', 'string', '"hello" is a string');
    assert.notTypeOf(123, 'string', '123 is not a string');
  });

  test('#instanceOf, #notInstanceOf', function () {
    assert.instanceOf(new Date(), Date, 'new Date() is an instance of Date');
    assert.notInstanceOf(123, Date, '123 is not an instance of Date');
  });
});
