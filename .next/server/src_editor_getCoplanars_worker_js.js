/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor/getCoplanars.worker.js":
/*!*******************************************!*\
  !*** ./src/editor/getCoplanars.worker.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parseGeometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseGeometry */ \"./src/editor/parseGeometry.ts\");\n\n\n\nself.onmessage = event => {\n  if (event.data) {\n    const loader = new three__WEBPACK_IMPORTED_MODULE_0__.ObjectLoader();\n    const obj = loader.parse(event.data);\n    obj.updateMatrixWorld(); //const coplanars = getCoplanars(obj);\n\n    const test = (0,_parseGeometry__WEBPACK_IMPORTED_MODULE_1__.convertToBufferGeometry)(obj);\n    self.postMessage(test.toJSON());\n  } else {\n    self.postMessage(undefined);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNhbXBsZS8uL3NyYy9lZGl0b3IvZ2V0Q29wbGFuYXJzLndvcmtlci5qcz83MmM4Il0sIm5hbWVzIjpbInNlbGYiLCJvbm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJsb2FkZXIiLCJUSFJFRSIsIm9iaiIsInBhcnNlIiwidXBkYXRlTWF0cml4V29ybGQiLCJ0ZXN0IiwiY29udmVydFRvQnVmZmVyR2VvbWV0cnkiLCJwb3N0TWVzc2FnZSIsInRvSlNPTiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUFBLElBQUksQ0FBQ0MsU0FBTCxHQUFrQkMsS0FBRCxJQUFVO0FBQ3ZCLE1BQUdBLEtBQUssQ0FBQ0MsSUFBVCxFQUFjO0FBQ1YsVUFBTUMsTUFBTSxHQUFHLElBQUlDLCtDQUFKLEVBQWY7QUFDQSxVQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhTCxLQUFLLENBQUNDLElBQW5CLENBQVo7QUFDQUcsT0FBRyxDQUFDRSxpQkFBSixHQUhVLENBSVY7O0FBQ0EsVUFBTUMsSUFBSSxHQUFDQyx1RUFBdUIsQ0FBQ0osR0FBRCxDQUFsQztBQUVBTixRQUFJLENBQUNXLFdBQUwsQ0FBaUJGLElBQUksQ0FBQ0csTUFBTCxFQUFqQjtBQUNILEdBUkQsTUFRSztBQUNEWixRQUFJLENBQUNXLFdBQUwsQ0FBaUJFLFNBQWpCO0FBQ0g7QUFDSixDQVpEIiwiZmlsZSI6Ii4vc3JjL2VkaXRvci9nZXRDb3BsYW5hcnMud29ya2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgZ2V0Q29wbGFuYXJzLGNvbnZlcnRUb0J1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9wYXJzZUdlb21ldHJ5Jztcblxuc2VsZi5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+e1xuICAgIGlmKGV2ZW50LmRhdGEpe1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuT2JqZWN0TG9hZGVyKCk7XG4gICAgICAgIGNvbnN0IG9iaiA9IGxvYWRlci5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgb2JqLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG4gICAgICAgIC8vY29uc3QgY29wbGFuYXJzID0gZ2V0Q29wbGFuYXJzKG9iaik7XG4gICAgICAgIGNvbnN0IHRlc3Q9Y29udmVydFRvQnVmZmVyR2VvbWV0cnkob2JqKTtcbiAgICAgICAgXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UodGVzdC50b0pTT04oKSk7XG4gICAgfWVsc2V7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/editor/getCoplanars.worker.js\n");

/***/ }),

/***/ "./src/editor/parseGeometry.ts":
/*!*************************************!*\
  !*** ./src/editor/parseGeometry.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertToGeometry\": function() { return /* binding */ convertToGeometry; },\n/* harmony export */   \"convertToBufferGeometry\": function() { return /* binding */ convertToBufferGeometry; },\n/* harmony export */   \"mergeGeometry\": function() { return /* binding */ mergeGeometry; },\n/* harmony export */   \"getCoplanars\": function() { return /* binding */ getCoplanars; },\n/* harmony export */   \"isHorizontalFace\": function() { return /* binding */ isHorizontalFace; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three_examples_jsm_deprecated_Geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/deprecated/Geometry */ \"three/examples/jsm/deprecated/Geometry\");\n/* harmony import */ var three_examples_jsm_deprecated_Geometry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_examples_jsm_deprecated_Geometry__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils.js */ \"three/examples/jsm/utils/BufferGeometryUtils.js\");\n/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FLOOR_RATIO = 0.2;\nconst ANGLE_THRESHOLD = 0.01;\nfunction convertToGeometry(geometry) {\n  if (geometry instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry) {\n    geometry = new three_examples_jsm_deprecated_Geometry__WEBPACK_IMPORTED_MODULE_1__.Geometry().fromBufferGeometry(geometry);\n  }\n\n  return geometry;\n}\nfunction convertToBufferGeometry(geometry) {\n  if (geometry instanceof three_examples_jsm_deprecated_Geometry__WEBPACK_IMPORTED_MODULE_1__.Geometry) {\n    geometry = geometry.toBufferGeometry();\n  }\n\n  return geometry;\n}\nfunction mergeGeometry(obj, tolerance = 1e-2) {\n  const geometries = [];\n  obj.traverse(child => {\n    if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n      const geometry = convertToBufferGeometry(child.geometry).clone(); //r125以降、Geometryクラスはなくなった\n\n      geometry.applyMatrix4(child.matrixWorld);\n      geometries.push(geometry);\n      child.updateMatrix();\n    }\n  });\n  const attributes = [];\n\n  for (let i = 0; i < geometries.length; i++) {\n    const geometry = geometries[i];\n    console.log('geometry.attributes', geometry.attributes);\n    attributes.push(...Object.keys(geometry.attributes));\n  }\n\n  const counts = {}; //merge\n\n  let geometry = null;\n\n  if (geometries.length > 0) {\n    geometry = three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.BufferGeometryUtils.mergeBufferGeometries(geometries);\n    geometry = geometry && three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.BufferGeometryUtils.mergeVertices(geometry, tolerance);\n  }\n\n  return geometry;\n}\nconst getCoplanars = obj => {\n  const BufferGeometry = mergeGeometry(obj);\n  return [];\n};\nfunction isHorizontalFace(face) {\n  return Math.abs(face.normal.x) < ANGLE_THRESHOLD && Math.abs(face.normal.y) > ANGLE_THRESHOLD && Math.abs(face.normal.z) < ANGLE_THRESHOLD;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNhbXBsZS8uL3NyYy9lZGl0b3IvcGFyc2VHZW9tZXRyeS50cz84NzEwIl0sIm5hbWVzIjpbIkZMT09SX1JBVElPIiwiQU5HTEVfVEhSRVNIT0xEIiwiY29udmVydFRvR2VvbWV0cnkiLCJnZW9tZXRyeSIsIlRIUkVFIiwiR2VvbWV0cnkiLCJmcm9tQnVmZmVyR2VvbWV0cnkiLCJjb252ZXJ0VG9CdWZmZXJHZW9tZXRyeSIsInRvQnVmZmVyR2VvbWV0cnkiLCJtZXJnZUdlb21ldHJ5Iiwib2JqIiwidG9sZXJhbmNlIiwiZ2VvbWV0cmllcyIsInRyYXZlcnNlIiwiY2hpbGQiLCJjbG9uZSIsImFwcGx5TWF0cml4NCIsIm1hdHJpeFdvcmxkIiwicHVzaCIsInVwZGF0ZU1hdHJpeCIsImF0dHJpYnV0ZXMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJjb3VudHMiLCJCdWZmZXJHZW9tZXRyeVV0aWxzIiwiZ2V0Q29wbGFuYXJzIiwiQnVmZmVyR2VvbWV0cnkiLCJpc0hvcml6b250YWxGYWNlIiwiZmFjZSIsIk1hdGgiLCJhYnMiLCJub3JtYWwiLCJ4IiwieSIsInoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFDLEdBQWxCO0FBQ0EsTUFBTUMsZUFBZSxHQUFDLElBQXRCO0FBRU8sU0FBU0MsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQStFO0FBQ2xGLE1BQUlBLFFBQVEsWUFBWUMsaURBQXhCLEVBQTZDO0FBQ3pDRCxZQUFRLEdBQUcsSUFBSUUsNEVBQUosR0FBZUMsa0JBQWYsQ0FBa0NILFFBQWxDLENBQVg7QUFDSDs7QUFDRCxTQUFPQSxRQUFQO0FBQ0g7QUFFTSxTQUFTSSx1QkFBVCxDQUFpQ0osUUFBakMsRUFBaUc7QUFDcEcsTUFBSUEsUUFBUSxZQUFZRSw0RUFBeEIsRUFBaUM7QUFDN0JGLFlBQVEsR0FBR0EsUUFBUSxDQUFDSyxnQkFBVCxFQUFYO0FBQ0g7O0FBQ0QsU0FBT0wsUUFBUDtBQUNIO0FBRU0sU0FBU00sYUFBVCxDQUF1QkMsR0FBdkIsRUFBMkNDLFNBQVMsR0FBRyxJQUF2RCxFQUF5RjtBQUM1RixRQUFNQyxVQUFrQyxHQUFHLEVBQTNDO0FBRUFGLEtBQUcsQ0FBQ0csUUFBSixDQUFjQyxLQUFELElBQVM7QUFDbEIsUUFBSUEsS0FBSyxZQUFZVix1Q0FBckIsRUFBZ0M7QUFDNUIsWUFBTUQsUUFBUSxHQUFHSSx1QkFBdUIsQ0FBQ08sS0FBSyxDQUFDWCxRQUFQLENBQXZCLENBQXdDWSxLQUF4QyxFQUFqQixDQUQ0QixDQUNxQzs7QUFDakVaLGNBQVEsQ0FBQ2EsWUFBVCxDQUFzQkYsS0FBSyxDQUFDRyxXQUE1QjtBQUNBTCxnQkFBVSxDQUFDTSxJQUFYLENBQWdCZixRQUFoQjtBQUNBVyxXQUFLLENBQUNLLFlBQU47QUFDSDtBQUNKLEdBUEQ7QUFTQSxRQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxVQUFVLENBQUNVLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDLFVBQU1sQixRQUFRLEdBQUdTLFVBQVUsQ0FBQ1MsQ0FBRCxDQUEzQjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFrQ3JCLFFBQVEsQ0FBQ2lCLFVBQTNDO0FBQ0FBLGNBQVUsQ0FBQ0YsSUFBWCxDQUFnQixHQUFHTyxNQUFNLENBQUNDLElBQVAsQ0FBWXZCLFFBQVEsQ0FBQ2lCLFVBQXJCLENBQW5CO0FBQ0g7O0FBRUQsUUFBTU8sTUFBK0IsR0FBRSxFQUF2QyxDQW5CNEYsQ0FxQjVGOztBQUNBLE1BQUl4QixRQUFxQyxHQUFHLElBQTVDOztBQUNBLE1BQUlTLFVBQVUsQ0FBQ1UsTUFBWCxHQUFvQixDQUF4QixFQUEwQjtBQUN0Qm5CLFlBQVEsR0FBR3lCLHNIQUFBLENBQTBDaEIsVUFBMUMsQ0FBWDtBQUNBVCxZQUFRLEdBQUdBLFFBQVEsSUFBSXlCLDhHQUFBLENBQWtDekIsUUFBbEMsRUFBNENRLFNBQTVDLENBQXZCO0FBQ0g7O0FBQ0QsU0FBT1IsUUFBUDtBQUNIO0FBRU0sTUFBTTBCLFlBQVksR0FBSW5CLEdBQUQsSUFBZ0Q7QUFDeEUsUUFBTW9CLGNBQWMsR0FBRXJCLGFBQWEsQ0FBQ0MsR0FBRCxDQUFuQztBQUNBLFNBQU8sRUFBUDtBQUNILENBSE07QUFLQSxTQUFTcUIsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQStDO0FBQ2xELFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsQ0FBckIsSUFBMEJuQyxlQUExQixJQUE2Q2dDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixJQUFJLENBQUNHLE1BQUwsQ0FBWUUsQ0FBckIsSUFBd0JwQyxlQUFyRSxJQUF3RmdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixJQUFJLENBQUNHLE1BQUwsQ0FBWUcsQ0FBckIsSUFBMEJyQyxlQUF6SDtBQUNIIiwiZmlsZSI6Ii4vc3JjL2VkaXRvci9wYXJzZUdlb21ldHJ5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgR2VvbWV0cnksIEZhY2UzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2RlcHJlY2F0ZWQvR2VvbWV0cnknO1xuaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnlVdGlscyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS91dGlscy9CdWZmZXJHZW9tZXRyeVV0aWxzLmpzJztcblxuY29uc3QgRkxPT1JfUkFUSU89MC4yO1xuY29uc3QgQU5HTEVfVEhSRVNIT0xEPTAuMDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9HZW9tZXRyeShnZW9tZXRyeTogR2VvbWV0cnkgfCBUSFJFRS5CdWZmZXJHZW9tZXRyeSk6IEdlb21ldHJ5e1xuICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIFRIUkVFLkJ1ZmZlckdlb21ldHJ5KXtcbiAgICAgICAgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKS5mcm9tQnVmZmVyR2VvbWV0cnkoZ2VvbWV0cnkpO1xuICAgIH1cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9CdWZmZXJHZW9tZXRyeShnZW9tZXRyeTogR2VvbWV0cnkgfCBUSFJFRS5CdWZmZXJHZW9tZXRyeSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5e1xuICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIEdlb21ldHJ5KXtcbiAgICAgICAgZ2VvbWV0cnkgPSBnZW9tZXRyeS50b0J1ZmZlckdlb21ldHJ5KCk7XG4gICAgfVxuICAgIHJldHVybiBnZW9tZXRyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlR2VvbWV0cnkob2JqOlRIUkVFLk9iamVjdDNELCB0b2xlcmFuY2UgPSAxZS0yKTpUSFJFRS5CdWZmZXJHZW9tZXRyeSB8IG51bGwge1xuICAgIGNvbnN0IGdlb21ldHJpZXM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcblxuICAgIG9iai50cmF2ZXJzZSgoY2hpbGQpPT57XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpe1xuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBjb252ZXJ0VG9CdWZmZXJHZW9tZXRyeShjaGlsZC5nZW9tZXRyeSkuY2xvbmUoKTsvL3IxMjXku6XpmY3jgIFHZW9tZXRyeeOCr+ODqeOCueOBr+OBquOBj+OBquOBo+OBn1xuICAgICAgICAgICAgZ2VvbWV0cnkuYXBwbHlNYXRyaXg0KGNoaWxkLm1hdHJpeFdvcmxkKTtcbiAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tZXRyeSk7XG4gICAgICAgICAgICBjaGlsZC51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpXTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dlb21ldHJ5LmF0dHJpYnV0ZXMnLGdlb21ldHJ5LmF0dHJpYnV0ZXMpO1xuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goLi4uT2JqZWN0LmtleXMoZ2VvbWV0cnkuYXR0cmlidXRlcykpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjb3VudHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnl9ID17fTtcbiAgICBcbiAgICAvL21lcmdlXG4gICAgbGV0IGdlb21ldHJ5OiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB8IG51bGwgPSBudWxsO1xuICAgIGlmIChnZW9tZXRyaWVzLmxlbmd0aCA+IDApe1xuICAgICAgICBnZW9tZXRyeSA9IEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKGdlb21ldHJpZXMpO1xuICAgICAgICBnZW9tZXRyeSA9IGdlb21ldHJ5ICYmIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VWZXJ0aWNlcyhnZW9tZXRyeSwgdG9sZXJhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdlb21ldHJ5XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb3BsYW5hcnMgPSAob2JqOiBUSFJFRS5PYmplY3QzRCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPT57XG4gICAgY29uc3QgQnVmZmVyR2VvbWV0cnkgPW1lcmdlR2VvbWV0cnkob2JqKTtcbiAgICByZXR1cm4gW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbEZhY2UoZmFjZTogRmFjZTMpOiBib29sZWFue1xuICAgIHJldHVybiBNYXRoLmFicyhmYWNlLm5vcm1hbC54KSA8IEFOR0xFX1RIUkVTSE9MRCAmJiBNYXRoLmFicyhmYWNlLm5vcm1hbC55KT5BTkdMRV9USFJFU0hPTEQgJiYgTWF0aC5hYnMoZmFjZS5ub3JtYWwueikgPCBBTkdMRV9USFJFU0hPTEQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/editor/parseGeometry.ts\n");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ (function(module) {

module.exports = require("three");;

/***/ }),

/***/ "three/examples/jsm/deprecated/Geometry":
/*!*********************************************************!*\
  !*** external "three/examples/jsm/deprecated/Geometry" ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = require("three/examples/jsm/deprecated/Geometry");;

/***/ }),

/***/ "three/examples/jsm/utils/BufferGeometryUtils.js":
/*!******************************************************************!*\
  !*** external "three/examples/jsm/utils/BufferGeometryUtils.js" ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = require("three/examples/jsm/utils/BufferGeometryUtils.js");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/editor/getCoplanars.worker.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;