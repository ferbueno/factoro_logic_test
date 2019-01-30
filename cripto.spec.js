const cripto = require('./cripto')

test('sending message encrypts it', () => {
  expect(
    cripto('This -- is a secret message! Shhh. Never tell anyone what I did.|SECRETKEYS')
  ).toBe(
    'Llkj -- ml k wcujiv dilceew! Kljy. Rxfip lwpn rrryrc ozev z hbn.'
  )
})