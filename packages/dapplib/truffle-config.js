require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth rifle unusual install casual flower gift'; 
let testAccounts = [
"0x22b7477314f7be19e71f57091ca6919f1996f39bf40cd72ff866271a10386dae",
"0x7f9c9aba2f84e55a535b6f7ebf637e87f106ea79844f520c873d4d9f14376e79",
"0xa7bd256c214a5f1aa9be4ed20e8d03f145b9742f50e1542ccc239d7ea718952f",
"0xe5ac67158dd8f91be5022b52e822e8a2778541f26313bdee2d32015e346ea560",
"0xf8119501a64c0a1d240b0139d5afb11230e0f246614ce73cef469b9c07786f4f",
"0xac03450eeedc163fea7499bd92681dd2603c9a30b7b9df97380be2248f7ca06b",
"0xf79f4aed849e72e938e0ca4e5b9c1d0a594fd38e7f60879bd4ef9089322b18d4",
"0xa5406e7cea1cf92f7104104c62d126aee9165b2faa82199d6c5c060a533c48de",
"0xf31a2ad73f982bc8e5466544aa374e5c89d921c46042f596a7a3a5915f4fe046",
"0x872587c6c1858e4b28cd33c8cf55177018ef25b89a4372a985ff84264f2e6444"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


