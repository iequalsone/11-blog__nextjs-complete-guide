module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      email,\n      name,\n      message\n    } = req.body;\n\n    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {\n      res.status(422).json({\n        message: 'Invalid input.'\n      });\n      return;\n    }\n\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n    let client;\n\n    try {\n      client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://udemytest:Password01@cluster0.1fzxi.mongodb.net/my-site?retryWrites=true&w=majority');\n    } catch (error) {\n      res.status(500).json({\n        message: 'Could not connect to database.'\n      });\n      return;\n    }\n\n    const db = client.db();\n\n    try {\n      const result = await db.collection('messages').insertOne(newMessage);\n      newMessage.id = result.insertedId;\n    } catch (error) {\n      client.close(500).json({\n        message: 'Storing message failed!'\n      });\n      return;\n    }\n\n    client.close();\n    res.status(201).json({\n      message: 'Successfully stored message!',\n      message: newMessage\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJuZXdNZXNzYWdlIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZXJyb3IiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJpZCIsImluc2VydGVkSWQiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsV0FBRjtBQUFTQyxVQUFUO0FBQWVDO0FBQWYsUUFBMkJMLEdBQUcsQ0FBQ00sSUFBckM7O0FBRUEsUUFDRSxDQUFDSCxLQUFELElBQ0EsQ0FBQ0EsS0FBSyxDQUFDSSxRQUFOLENBQWUsR0FBZixDQURELElBRUEsQ0FBQ0gsSUFGRCxJQUdBQSxJQUFJLENBQUNJLElBQUwsT0FBZ0IsRUFIaEIsSUFJQSxDQUFDSCxPQUpELElBS0FBLE9BQU8sQ0FBQ0csSUFBUixPQUFtQixFQU5yQixFQU9FO0FBQ0FQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDRDs7QUFFRCxVQUFNTSxVQUFVLEdBQUc7QUFDakJSLFdBRGlCO0FBRWpCQyxVQUZpQjtBQUdqQkM7QUFIaUIsS0FBbkI7QUFNQSxRQUFJTyxNQUFKOztBQUVBLFFBQUk7QUFDRkEsWUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsbUdBQXBCLENBQWY7QUFDRCxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RkLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDRDs7QUFFRCxVQUFNVyxFQUFFLEdBQUdKLE1BQU0sQ0FBQ0ksRUFBUCxFQUFYOztBQUVBLFFBQUk7QUFDRixZQUFNQyxNQUFNLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFILENBQWMsVUFBZCxFQUEwQkMsU0FBMUIsQ0FBb0NSLFVBQXBDLENBQXJCO0FBQ0FBLGdCQUFVLENBQUNTLEVBQVgsR0FBZ0JILE1BQU0sQ0FBQ0ksVUFBdkI7QUFDRCxLQUhELENBR0UsT0FBTU4sS0FBTixFQUFhO0FBQ2JILFlBQU0sQ0FBQ1UsS0FBUCxDQUFhLEdBQWIsRUFBa0JaLElBQWxCLENBQXVCO0FBQUNMLGVBQU8sRUFBRTtBQUFWLE9BQXZCO0FBQ0E7QUFDRDs7QUFFRE8sVUFBTSxDQUFDVSxLQUFQO0FBRUFyQixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxhQUFPLEVBQUUsOEJBQVg7QUFBMkNBLGFBQU8sRUFBRU07QUFBcEQsS0FBckI7QUFDRDtBQUNGOztBQUVjWixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBtZXNzYWdlIH0gPSByZXEuYm9keTtcblxuICAgIGlmIChcbiAgICAgICFlbWFpbCB8fFxuICAgICAgIWVtYWlsLmluY2x1ZGVzKCdAJykgfHxcbiAgICAgICFuYW1lIHx8XG4gICAgICBuYW1lLnRyaW0oKSA9PT0gJycgfHxcbiAgICAgICFtZXNzYWdlIHx8XG4gICAgICBtZXNzYWdlLnRyaW0oKSA9PT0gJydcbiAgICApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgaW5wdXQuJ30pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICBtZXNzYWdlXG4gICAgfTtcblxuICAgIGxldCBjbGllbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly91ZGVteXRlc3Q6UGFzc3dvcmQwMUBjbHVzdGVyMC4xZnp4aS5tb25nb2RiLm5ldC9teS1zaXRlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdDb3VsZCBub3QgY29ubmVjdCB0byBkYXRhYmFzZS4nfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLmluc2VydE9uZShuZXdNZXNzYWdlKTtcbiAgICAgIG5ld01lc3NhZ2UuaWQgPSByZXN1bHQuaW5zZXJ0ZWRJZDtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBjbGllbnQuY2xvc2UoNTAwKS5qc29uKHttZXNzYWdlOiAnU3RvcmluZyBtZXNzYWdlIGZhaWxlZCEnfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgc3RvcmVkIG1lc3NhZ2UhJywgbWVzc2FnZTogbmV3TWVzc2FnZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });