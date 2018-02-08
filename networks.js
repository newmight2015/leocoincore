var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('dab8bf12'),
  addressVersion: 58,
  privKeyVersion: 88,
  P2SHVersion: 186,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('75d377288145398d33f1ba0cb60bf91fb6552f7676961460d67ab84c4c080000'),
    merkle_root: hex('31ca091442d66c9345091c615235774cc3e7fa19950578c762bcb76e60335134'),
    height: 0,
    nonce: 976382,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1509518000,
    bits: 504365055
  },
  dnsSeeds: [
    'dnsseed.leocoin.org',
	'leoseed.leocoin.org',
    'node1.leocoin.org',
	'node2.leocoin.org',
	'node3.leocoin.org',
	'node4.leocoin.org',
	'node5.leocoin.org',
	'node6.leocoin.org',
	'node7.leocoin.org',
	'node8.leocoin.org',
	'node9.leocoin.org',
	'node10.leocoin.org'
  ],
  defaultClientPort: 8878,
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  addressVersion: 18,
  privKeyVersion: 144,
  P2SHVersion: 88,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('cad5df581f1f914a7c8798f0055060bf93b80f5543d8d3821b05796f480b0000'),
    merkle_root: hex('22965d350df74e56b98910bf52722354b0e27f4b3b44165b3bbd4e581cad32b5'),
    height: 0,
    nonce: 40193,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1494070528,
    bits: 486604799
  },
  dnsSeeds: [
    'dnsseed.leocoin.org',
	'leoseed.leocoin.org',
    'node1.leocoin.org',
	'node2.leocoin.org',
	'node3.leocoin.org',
	'node4.leocoin.org',
	'node5.leocoin.org',
	'node6.leocoin.org',
	'node7.leocoin.org',
	'node8.leocoin.org',
	'node9.leocoin.org',
	'node10.leocoin.org'
  ],
  defaultClientPort: 5840,
};
