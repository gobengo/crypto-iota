#!/usr/bin/env node
const iota = new (require('iota.lib.js'))({
  provider: 'https://nodes.iota.cafe:443'
})

const seed = process.argv[2]
const security = 3

if ([1,2,3].indexOf(security) === -1) {
  throw new Error('address security must be in [1,2,3], got '+security)
}

const address = iota.api.getNewAddress(seed, { security }, (err, address, a, b) => {
  if (err) {
    console.error('error getNewAddress', err);
    return process.exit(1)
  }
  console.log(address)
})

