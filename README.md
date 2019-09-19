## @fibos/nodes

[![NPM version](https://img.shields.io/npm/v/@fibos/nodes.svg)](https://www.npmjs.org/package/@fibos/nodes)
[![Build Status](https://travis-ci.org/fibos-modules/nodes.svg)](https://travis-ci.org/fibos-modules/nodes)

nodes information about fibos nodes, such as p2p addresses:

```
[
    "va-p2p.fibos.io:9870",
    "ca-p2p.fibos.io:9870",
    "sl-p2p.fibos.io:9870",
    ...
]
```
## Usage

```javascript
const p2paddrs = require('@fibos/nodes')

console.log(p2paddrs) // print all fibos nodes' rpc address.
```

## License

[MIT](LICENSE)

