const reqBody = require('../main');

test('should be return object', () => {
  expect(reqBody(JSON.stringify('{"test": "aaa"}'))).toBeInstanceOf();
});

test('should not be undefined', () => {
  expect(reqBody({"test": "success!"})).toBeDefined();
})