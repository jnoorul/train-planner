'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('isomorphic-fetch');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, input) {
    var problemUrl, response, output;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            problemUrl = url + '/trainPlanner';
            _context.next = 3;
            return fetch(problemUrl, {
              method: 'post',
              body: JSON.stringify(input)
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.text();

          case 6:
            output = _context.sent;
            return _context.abrupt('return', JSON.parse(output));

          case 8:
          case 'end':
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