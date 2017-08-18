'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestStore = function () {
  function TestStore() {
    var testCaseDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __dirname + '/../../testdata/';

    _classCallCheck(this, TestStore);

    this.testCaseDir = testCaseDir;
  }

  _createClass(TestStore, [{
    key: 'getTestCases',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(problemName) {
        var dirpath, testCases, filenames, i, content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dirpath = '' + this.testCaseDir + problemName + '/';
                testCases = [];
                _context.next = 4;
                return _fsExtra2.default.readdir(dirpath);

              case 4:
                filenames = _context.sent;
                i = 0;

              case 6:
                if (!(i < filenames.length)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 9;
                return _fsExtra2.default.readFile(dirpath + filenames[i]);

              case 9:
                content = _context.sent;

                testCases.push(JSON.parse(content));

              case 11:
                i += 1;
                _context.next = 6;
                break;

              case 14:
                return _context.abrupt('return', testCases);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTestCases(_x2) {
        return _ref.apply(this, arguments);
      }

      return getTestCases;
    }()
  }]);

  return TestStore;
}();

exports.default = TestStore;