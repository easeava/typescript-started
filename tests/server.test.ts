import App from '@/server';

test('test', () => {
  expect(App.test()).toEqual({
    msg: 'test info',
  });
});
