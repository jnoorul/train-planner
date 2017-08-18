'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

it('evaluate end point should return status code 200', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var res;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _supertest2.default)(_app2.default).post('/trainPlanner/evaluate').send({
            runId: '123456',
            teamUrl: 'http://www.abc.heroku.com/sorting',
            callbackUrl: 'http://coordinator.com/result'
          });

        case 2:
          res = _context.sent;

          expect(res.statusCode).toBe(200);
          expect(res.body).toBe('request received');

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

it('evaluate should return 400 if input payload is empty', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
  var res;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _supertest2.default)(_app2.default).post('/trainPlanner/evaluate');

        case 2:
          res = _context2.sent;


          expect(res.statusCode).toBe(400);
          expect(res.body.errors.length).toBe(3);
          expect(res.body.errors[0]).toBe('runId is mandatory for evaluation');
          expect(res.body.errors[1]).toBe('teamUrl is mandatory for evaluation');
          expect(res.body.errors[2]).toBe('callbackUrl is mandatory for evaluation');

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

it('evaluate should return 400 if teamUrl is not empty', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
  var res;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _supertest2.default)(_app2.default).post('/trainPlanner/evaluate').send({
            runId: '123456',
            teamUrl: '',
            callbackUrl: 'http://coordinator.com/result'
          });

        case 2:
          res = _context3.sent;


          expect(res.statusCode).toBe(400);
          expect(res.body.errors.length).toBe(1);
          expect(res.body.errors[0]).toBe('teamUrl is mandatory for evaluation');

        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})));

it('evaluate should return 400 if teamUrl is not empty', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
  var res;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _supertest2.default)(_app2.default).post('/trainPlanner/evaluate').send({
            runId: '123456',
            teamUrl: 'http://www.abc.heroku.com/sorting'
          });

        case 2:
          res = _context4.sent;


          expect(res.statusCode).toBe(400);
          expect(res.body.errors.length).toBe(1);
          expect(res.body.errors[0]).toBe('callbackUrl is mandatory for evaluation');

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
})));