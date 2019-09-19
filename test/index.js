const test = require('test')
test.setup()

const nodes = require('../')

describe('basic', () => {
    it('print all p2p addresses', () => {
        assert.isArray(nodes)

        console.notice(nodes)
    })
})

test.run(console.DEBUG)