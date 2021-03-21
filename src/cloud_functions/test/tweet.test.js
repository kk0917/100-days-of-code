import Tweet from '../../models/Tweet.js'

test('should be the instance of Tweet class', () => {
  const tweet = new Tweet();
  expect(tweet).toBeInstanceOf(Tweet);
});