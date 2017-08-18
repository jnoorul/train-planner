"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getMockOutput(input) {
  if (input.id === 1) {
    return { numberOfTrains: {
        greenLine: 5,
        redLine: 2
      } };
  }

  if (input.id === 2) {
    return { numberOfTrains: {
        greenLine: 3,
        redLine: 1
      } };
  }
  return {};
}

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, input) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", getMockOutput(input));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function execute(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return execute;
}();