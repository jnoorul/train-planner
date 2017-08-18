'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

it('should get instructions page', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var res;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _supertest2.default)(_app2.default).get('/trainPlanner/instructions');

        case 2:
          res = _context.sent;

          expect(res.statusCode).toBe(200);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

it('should get instructions page with data', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
  var res;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _supertest2.default)(_app2.default).get('/trainPlanner/instructions');

        case 2:
          res = _context2.sent;

          expect(res.statusCode).toBe(200);
          expect(res.type).toBe('text/html');
          expect(res.text.length).toBeGreaterThan(100);

        case 6:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));