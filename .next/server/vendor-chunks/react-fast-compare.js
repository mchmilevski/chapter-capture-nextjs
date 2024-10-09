/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-fast-compare";
exports.ids = ["vendor-chunks/react-fast-compare"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */\n\nvar hasElementType = typeof Element !== 'undefined';\nvar hasMap = typeof Map === 'function';\nvar hasSet = typeof Set === 'function';\nvar hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;\n\n// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js\n\nfunction equal(a, b) {\n  // START: fast-deep-equal es6/index.js 3.1.3\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n    // START: Modifications:\n    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code\n    //    to co-exist with es5.\n    // 2. Replace `for of` with es5 compliant iteration using `for`.\n    //    Basically, take:\n    //\n    //    ```js\n    //    for (i of a.entries())\n    //      if (!b.has(i[0])) return false;\n    //    ```\n    //\n    //    ... and convert to:\n    //\n    //    ```js\n    //    it = a.entries();\n    //    while (!(i = it.next()).done)\n    //      if (!b.has(i.value[0])) return false;\n    //    ```\n    //\n    //    **Note**: `i` access switches to `i.value`.\n    var it;\n    if (hasMap && (a instanceof Map) && (b instanceof Map)) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!b.has(i.value[0])) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!equal(i.value[1], b.get(i.value[0]))) return false;\n      return true;\n    }\n\n    if (hasSet && (a instanceof Set) && (b instanceof Set)) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!b.has(i.value[0])) return false;\n      return true;\n    }\n    // END: Modifications\n\n    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (a[i] !== b[i]) return false;\n      return true;\n    }\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    // START: Modifications:\n    // Apply guards for `Object.create(null)` handling. See:\n    // - https://github.com/FormidableLabs/react-fast-compare/issues/64\n    // - https://github.com/epoberezkin/fast-deep-equal/issues/49\n    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();\n    // END: Modifications\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n    // END: fast-deep-equal\n\n    // START: react-fast-compare\n    // custom handling for DOM elements\n    if (hasElementType && a instanceof Element) return false;\n\n    // custom handling for React/Preact\n    for (i = length; i-- !== 0;) {\n      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {\n        // React-specific: avoid traversing React elements' _owner\n        // Preact-specific: avoid traversing Preact elements' __v and __o\n        //    __v = $_original / $_vnode\n        //    __o = $_owner\n        // These properties contain circular references and are not needed when\n        // comparing the actual elements (and not their owners)\n        // .$$typeof and ._store on just reasonable markers of elements\n\n        continue;\n      }\n\n      // all other properties should be traversed as usual\n      if (!equal(a[keys[i]], b[keys[i]])) return false;\n    }\n    // END: react-fast-compare\n\n    // START: fast-deep-equal\n    return true;\n  }\n\n  return a !== a && b !== b;\n}\n// end fast-deep-equal\n\nmodule.exports = function isEqual(a, b) {\n  try {\n    return equal(a, b);\n  } catch (error) {\n    if (((error.message || '').match(/stack|recursion/i))) {\n      // warn on circular references, don't crash\n      // browsers give this different errors name and messages:\n      // chrome/safari: \"RangeError\", \"Maximum call stack size exceeded\"\n      // firefox: \"InternalError\", too much recursion\"\n      // edge: \"Error\", \"Out of stack space\"\n      console.warn('react-fast-compare cannot handle circular refs');\n      return false;\n    }\n    // some other error. we should definitely know about these\n    throw error;\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhcHRlci1jYXB0dXJlLW5leHRqcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1mYXN0LWNvbXBhcmUvaW5kZXguanM/YTEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgTWFwOnJlYWRvbmx5LCBTZXQ6cmVhZG9ubHksIEFycmF5QnVmZmVyOnJlYWRvbmx5ICovXG5cbnZhciBoYXNFbGVtZW50VHlwZSA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJztcbnZhciBoYXNNYXAgPSB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbic7XG52YXIgaGFzQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgISFBcnJheUJ1ZmZlci5pc1ZpZXc7XG5cbi8vIE5vdGU6IFdlICoqZG9uJ3QqKiBuZWVkIGBlbnZIYXNCaWdJbnQ2NEFycmF5YCBpbiBmZGUgZXM2L2luZGV4LmpzXG5cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgLy8gU1RBUlQ6IGZhc3QtZGVlcC1lcXVhbCBlczYvaW5kZXguanMgMy4xLjNcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFNUQVJUOiBNb2RpZmljYXRpb25zOlxuICAgIC8vIDEuIEV4dHJhIGBoYXM8VHlwZT4gJiZgIGhlbHBlcnMgaW4gaW5pdGlhbCBjb25kaXRpb24gYWxsb3cgZXM2IGNvZGVcbiAgICAvLyAgICB0byBjby1leGlzdCB3aXRoIGVzNS5cbiAgICAvLyAyLiBSZXBsYWNlIGBmb3Igb2ZgIHdpdGggZXM1IGNvbXBsaWFudCBpdGVyYXRpb24gdXNpbmcgYGZvcmAuXG4gICAgLy8gICAgQmFzaWNhbGx5LCB0YWtlOlxuICAgIC8vXG4gICAgLy8gICAgYGBganNcbiAgICAvLyAgICBmb3IgKGkgb2YgYS5lbnRyaWVzKCkpXG4gICAgLy8gICAgICBpZiAoIWIuaGFzKGlbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gICAgYGBgXG4gICAgLy9cbiAgICAvLyAgICAuLi4gYW5kIGNvbnZlcnQgdG86XG4gICAgLy9cbiAgICAvLyAgICBgYGBqc1xuICAgIC8vICAgIGl0ID0gYS5lbnRyaWVzKCk7XG4gICAgLy8gICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSlcbiAgICAvLyAgICAgIGlmICghYi5oYXMoaS52YWx1ZVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICBgYGBcbiAgICAvL1xuICAgIC8vICAgICoqTm90ZSoqOiBgaWAgYWNjZXNzIHN3aXRjaGVzIHRvIGBpLnZhbHVlYC5cbiAgICB2YXIgaXQ7XG4gICAgaWYgKGhhc01hcCAmJiAoYSBpbnN0YW5jZW9mIE1hcCkgJiYgKGIgaW5zdGFuY2VvZiBNYXApKSB7XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICBpdCA9IGEuZW50cmllcygpO1xuICAgICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSlcbiAgICAgICAgaWYgKCFlcXVhbChpLnZhbHVlWzFdLCBiLmdldChpLnZhbHVlWzBdKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChoYXNTZXQgJiYgKGEgaW5zdGFuY2VvZiBTZXQpICYmIChiIGluc3RhbmNlb2YgU2V0KSkge1xuICAgICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICBpdCA9IGEuZW50cmllcygpO1xuICAgICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSlcbiAgICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEVORDogTW9kaWZpY2F0aW9uc1xuXG4gICAgaWYgKGhhc0FycmF5QnVmZmVyICYmIEFycmF5QnVmZmVyLmlzVmlldyhhKSAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcoYikpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIC8vIFNUQVJUOiBNb2RpZmljYXRpb25zOlxuICAgIC8vIEFwcGx5IGd1YXJkcyBmb3IgYE9iamVjdC5jcmVhdGUobnVsbClgIGhhbmRsaW5nLiBTZWU6XG4gICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmVhY3QtZmFzdC1jb21wYXJlL2lzc3Vlcy82NFxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbC9pc3N1ZXMvNDlcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YgJiYgdHlwZW9mIGEudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYi52YWx1ZU9mID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmIHR5cGVvZiBhLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gICAgLy8gRU5EOiBNb2RpZmljYXRpb25zXG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEVORDogZmFzdC1kZWVwLWVxdWFsXG5cbiAgICAvLyBTVEFSVDogcmVhY3QtZmFzdC1jb21wYXJlXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBET00gZWxlbWVudHNcbiAgICBpZiAoaGFzRWxlbWVudFR5cGUgJiYgYSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgUmVhY3QvUHJlYWN0XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBpZiAoKGtleXNbaV0gPT09ICdfb3duZXInIHx8IGtleXNbaV0gPT09ICdfX3YnIHx8IGtleXNbaV0gPT09ICdfX28nKSAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIC8vIFJlYWN0LXNwZWNpZmljOiBhdm9pZCB0cmF2ZXJzaW5nIFJlYWN0IGVsZW1lbnRzJyBfb3duZXJcbiAgICAgICAgLy8gUHJlYWN0LXNwZWNpZmljOiBhdm9pZCB0cmF2ZXJzaW5nIFByZWFjdCBlbGVtZW50cycgX192IGFuZCBfX29cbiAgICAgICAgLy8gICAgX192ID0gJF9vcmlnaW5hbCAvICRfdm5vZGVcbiAgICAgICAgLy8gICAgX19vID0gJF9vd25lclxuICAgICAgICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGNvbnRhaW4gY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgYXJlIG5vdCBuZWVkZWQgd2hlblxuICAgICAgICAvLyBjb21wYXJpbmcgdGhlIGFjdHVhbCBlbGVtZW50cyAoYW5kIG5vdCB0aGVpciBvd25lcnMpXG4gICAgICAgIC8vIC4kJHR5cGVvZiBhbmQgLl9zdG9yZSBvbiBqdXN0IHJlYXNvbmFibGUgbWFya2VycyBvZiBlbGVtZW50c1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG4gICAgICBpZiAoIWVxdWFsKGFba2V5c1tpXV0sIGJba2V5c1tpXV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEVORDogcmVhY3QtZmFzdC1jb21wYXJlXG5cbiAgICAvLyBTVEFSVDogZmFzdC1kZWVwLWVxdWFsXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXF1YWwoYSwgYikge1xuICB0cnkge1xuICAgIHJldHVybiBlcXVhbChhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoKChlcnJvci5tZXNzYWdlIHx8ICcnKS5tYXRjaCgvc3RhY2t8cmVjdXJzaW9uL2kpKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdyZWFjdC1mYXN0LWNvbXBhcmUgY2Fubm90IGhhbmRsZSBjaXJjdWxhciByZWZzJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNvbWUgb3RoZXIgZXJyb3IuIHdlIHNob3VsZCBkZWZpbml0ZWx5IGtub3cgYWJvdXQgdGhlc2VcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-fast-compare/index.js\n");

/***/ })

};
;