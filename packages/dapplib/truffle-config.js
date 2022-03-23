require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember slow hope clip olympic slab'; 
let testAccounts = [
"0x0a8d6c7fd9d9489ebb5ed5c5e07431139a9174e338eea3d5ccda5f8d490cf001",
"0x97fd31d9155f2a88415556667c71ebfb1798ed7673f1bb403fa4c784199a5360",
"0xa30eb932bda28e8146235e5cb1186580149bcab3427ac8a5fe758e8ce87b1fd0",
"0xd017c4a457e935287873903a08e2ae0405c35bb9aa4aba7a6fc367e5812da123",
"0x160a88a07c16933fad673eef83a0a8f74e9ac2b69cc2f08c204ebcf373d70409",
"0x18877d24be14ff22c095b3b6e11eef4548292de3e8df6fcfe9e14310e3160dc2",
"0x10599fcac715f18f4a89f0f0e5fdb85327ca4c48153b75762a712d2c7c93ba27",
"0x0234c602dd29aa1e63ca1f2e8df2b05ee22e3b872cbadd1292309370b77553e3",
"0xf920ad28ecec7209351417205af1fe8387b008ba5d09ab72f5b7bbaea7c5fc8f",
"0x4901b2c62586d6779d88a0c70169527856d79ede966f391f8397ee64752bf3a6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

