'use strict';

var _TestStore = require('../../store/TestStore');

var _TestStore2 = _interopRequireDefault(_TestStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

it('should retrieve list of test cases', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var testStore, testCases;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          testStore = new _TestStore2.default();
          _context.next = 3;
          return testStore.getTestCases('TrainPlanner');

        case 3:
          testCases = _context.sent;

          expect(testCases.length).toBe(1);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));