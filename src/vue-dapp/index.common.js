'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var abi$1 = require('@ethersproject/abi');
var vueDemi = require('vue-demi');
var detectEthereumProvider = require('@metamask/detect-provider');
var providers = require('@ethersproject/providers');
require('ethers');
var contracts = require('@ethersproject/contracts');
var utils = require('ethers/lib/utils');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var detectEthereumProvider__default = /*#__PURE__*/_interopDefaultLegacy(detectEthereumProvider);

exports.ChainId = void 0;
(function (ChainId) {
    ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId["xDai"] = 100] = "xDai";
})(exports.ChainId || (exports.ChainId = {}));
const CHAIN_NAMES = {
    [exports.ChainId.Hardhat]: 'Hardhat',
    [exports.ChainId.Mainnet]: 'Mainnet',
    [exports.ChainId.Ropsten]: 'Ropsten',
    [exports.ChainId.Kovan]: 'Kovan',
    [exports.ChainId.Rinkeby]: 'Rinkeby',
    [exports.ChainId.Goerli]: 'Goerli',
    [exports.ChainId.xDai]: 'xDai',
};

const MULTICALL2_ADDRESS = '0x5ba1e12693dc8f9c48aad8770482f4739beed696';

var MULTICALL2_ABI = [
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes[]",
				name: "returnData",
				type: "bytes[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "blockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getBlockNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockCoinbase",
		outputs: [
			{
				internalType: "address",
				name: "coinbase",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockDifficulty",
		outputs: [
			{
				internalType: "uint256",
				name: "difficulty",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockGasLimit",
		outputs: [
			{
				internalType: "uint256",
				name: "gaslimit",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getLastBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryAggregate",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryBlockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var contractName = "ERC20";
var abi = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];
var bytecode = "0x608060405234801561001057600080fd5b506105dd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c01000000000000000000000000000000000000000000000000000000009004806370a082311161007857806370a0823114610166578063a457c2d71461018c578063a9059cbb146101b8578063dd62ed3e146101e4576100a5565b8063095ea7b3146100aa57806318160ddd146100ea57806323b872dd14610104578063395093511461013a575b600080fd5b6100d6600480360360408110156100c057600080fd5b50600160a060020a038135169060200135610212565b604080519115158252519081900360200190f35b6100f2610290565b60408051918252519081900360200190f35b6100d66004803603606081101561011a57600080fd5b50600160a060020a03813581169160208101359091169060400135610296565b6100d66004803603604081101561015057600080fd5b50600160a060020a03813516906020013561035f565b6100f26004803603602081101561017c57600080fd5b5035600160a060020a031661040f565b6100d6600480360360408110156101a257600080fd5b50600160a060020a03813516906020013561042a565b6100d6600480360360408110156101ce57600080fd5b50600160a060020a038135169060200135610475565b6100f2600480360360408110156101fa57600080fd5b50600160a060020a038135811691602001351661048b565b6000600160a060020a038316151561022957600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a03831660009081526001602090815260408083203384529091528120546102ca908363ffffffff6104b616565b600160a060020a03851660009081526001602090815260408083203384529091529020556102f98484846104cb565b600160a060020a0384166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b6000600160a060020a038316151561037657600080fd5b336000908152600160209081526040808320600160a060020a03871684529091529020546103aa908363ffffffff61059816565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a038316151561044157600080fd5b336000908152600160209081526040808320600160a060020a03871684529091529020546103aa908363ffffffff6104b616565b60006104823384846104cb565b50600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156104c557600080fd5b50900390565b600160a060020a03821615156104e057600080fd5b600160a060020a038316600090815260208190526040902054610509908263ffffffff6104b616565b600160a060020a03808516600090815260208190526040808220939093559084168152205461053e908263ffffffff61059816565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000828201838110156105aa57600080fd5b939250505056fea165627a7a72305820722c0187518ce2856a424bdba350d5a263c8f98fcb19cb4cc161372bc3b794c90029";
var deployedBytecode = "0x608060405234801561001057600080fd5b50600436106100a5576000357c01000000000000000000000000000000000000000000000000000000009004806370a082311161007857806370a0823114610166578063a457c2d71461018c578063a9059cbb146101b8578063dd62ed3e146101e4576100a5565b8063095ea7b3146100aa57806318160ddd146100ea57806323b872dd14610104578063395093511461013a575b600080fd5b6100d6600480360360408110156100c057600080fd5b50600160a060020a038135169060200135610212565b604080519115158252519081900360200190f35b6100f2610290565b60408051918252519081900360200190f35b6100d66004803603606081101561011a57600080fd5b50600160a060020a03813581169160208101359091169060400135610296565b6100d66004803603604081101561015057600080fd5b50600160a060020a03813516906020013561035f565b6100f26004803603602081101561017c57600080fd5b5035600160a060020a031661040f565b6100d6600480360360408110156101a257600080fd5b50600160a060020a03813516906020013561042a565b6100d6600480360360408110156101ce57600080fd5b50600160a060020a038135169060200135610475565b6100f2600480360360408110156101fa57600080fd5b50600160a060020a038135811691602001351661048b565b6000600160a060020a038316151561022957600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a03831660009081526001602090815260408083203384529091528120546102ca908363ffffffff6104b616565b600160a060020a03851660009081526001602090815260408083203384529091529020556102f98484846104cb565b600160a060020a0384166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b6000600160a060020a038316151561037657600080fd5b336000908152600160209081526040808320600160a060020a03871684529091529020546103aa908363ffffffff61059816565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a038316151561044157600080fd5b336000908152600160209081526040808320600160a060020a03871684529091529020546103aa908363ffffffff6104b616565b60006104823384846104cb565b50600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156104c557600080fd5b50900390565b600160a060020a03821615156104e057600080fd5b600160a060020a038316600090815260208190526040902054610509908263ffffffff6104b616565b600160a060020a03808516600090815260208190526040808220939093559084168152205461053e908263ffffffff61059816565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000828201838110156105aa57600080fd5b939250505056fea165627a7a72305820722c0187518ce2856a424bdba350d5a263c8f98fcb19cb4cc161372bc3b794c90029";
var compiler = {
	name: "solc",
	version: "0.5.4+commit.9549d8ff.Emscripten.clang"
};
var ERC20 = {
	contractName: contractName,
	abi: abi,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	compiler: compiler
};

const ERC20Interface = new abi$1.Interface(ERC20.abi);

const boardOpen = vueDemi.ref(false);
function useBoard() {
    const open = () => {
        boardOpen.value = true;
    };
    const close = () => {
        boardOpen.value = false;
    };
    return {
        boardOpen,
        open,
        close,
    };
}

class Metamask {
    static async check() {
        // @todo try catch
        const provider = await detectEthereumProvider__default['default']();
        return provider ? true : false;
    }
    static async connect() {
        const provider = (await detectEthereumProvider__default['default']());
        // await provider.request({
        //   method: 'wallet_requestPermissions',
        //   params: [{ eth_accounts: {} }],
        // })
        await provider.request({
            method: 'eth_requestAccounts',
            params: [{ eth_accounts: {} }],
        });
        return provider;
    }
}

const WalletConnectProviderDerived = window.WalletConnectProvider?.default || null;
class Walletconnect {
    static async check() {
        if (!WalletConnectProviderDerived) {
            console.warn('Walletconnect unavailable: please add below script to enable the feature: <script src="https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.6.5/dist/umd/index.min.js"></script>');
            return false;
        }
        return true;
    }
    static async connect(infuraId, options) {
        const provider = new WalletConnectProviderDerived({
            infuraId,
            ...options,
        });
        // fix: If user reject session, provider.enable() will be stuck and can't be resolved.
        // source code: https://github.com/WalletConnect/walletconnect-monorepo/blob/v1.0/packages/providers/web3-provider/src/index.ts
        return new Promise(async (resolve, reject) => {
            provider.wc.on('disconnect', (err, payload) => {
                if (!provider.connected) {
                    console.log(err, payload);
                    reject(new Error('User rejected the request.'));
                }
            });
            try {
                await provider.enable();
            }
            catch (e) {
                reject(new Error(e));
                return;
            }
            resolve(provider);
        });
    }
}

const isActivated = vueDemi.ref(false);
const provider$2 = vueDemi.ref(null);
const signer$1 = vueDemi.ref(null);
const network$1 = vueDemi.ref(null);
const address$1 = vueDemi.ref('');
const balance$1 = vueDemi.ref(BigInt(0));
const deactivate = () => {
    isActivated.value = false;
    provider$2.value = null;
    signer$1.value = null;
    network$1.value = null;
    address$1.value = '';
    balance$1.value = BigInt(0);
};
async function activate(walletProvider) {
    const _provider = new providers.Web3Provider(walletProvider);
    const _signer = _provider.getSigner();
    const _network = await _provider.getNetwork();
    const _address = await _signer.getAddress();
    const _balance = await _signer.getBalance();
    provider$2.value = vueDemi.markRaw(_provider);
    signer$1.value = vueDemi.markRaw(_signer);
    network$1.value = _network;
    address$1.value = _address;
    balance$1.value = _balance.toBigInt();
    isActivated.value = true;
}
function useEthers() {
    const chainId = vueDemi.computed(() => network$1.value?.chainId);
    return {
        // state
        isActivated,
        provider: provider$2,
        signer: signer$1,
        network: network$1,
        address: address$1,
        balance: balance$1,
        // getters
        chainId,
        // methods
        activate,
        deactivate,
    };
}

// ========================= state =========================
const provider$1 = vueDemi.ref(null);
const status = vueDemi.ref('none');
const walletName = vueDemi.ref('none');
const error = vueDemi.ref('');
const onDisconnectCallback = vueDemi.ref(null);
const onAccountsChangedCallback = vueDemi.ref(null);
const onChainChangedCallback = vueDemi.ref(null);
function useWallet(options = { library: 'ethers' }) {
    const { activate, deactivate } = useEthers();
    function clear() {
        provider$1.value = null;
        status.value = 'none';
        walletName.value = 'none';
        error.value = '';
        onDisconnectCallback.value = null;
        onAccountsChangedCallback.value = null;
        onChainChangedCallback.value = null;
        options.library === 'ethers' && deactivate();
    }
    async function connect(_walletName, infuraAPI) {
        let _provider = null;
        error.value = '';
        try {
            status.value = 'connecting';
            switch (_walletName) {
                case 'metamask':
                    _provider = (await Metamask.connect());
                    if (!_provider.isConnected)
                        throw new Error('metamask is not connected');
                    break;
                case 'walletconnect':
                    if (!infuraAPI)
                        throw new Error('You should provide infuraAPI for connecting WalletConnect');
                    _provider = (await Walletconnect.connect(infuraAPI));
                    if (!_provider.connected)
                        throw new Error('walletconnect is not connected');
                    break;
                default:
                    throw new Error('Connect Error: wallet name not found');
            }
        }
        catch (err) {
            clear();
            error.value = `Failed to connect: ${err.message}`;
            return;
        }
        provider$1.value = vueDemi.markRaw(_provider);
        walletName.value = _walletName;
        status.value = 'connected';
        // EIP-1193 subscriber
        subscribeDisconnect();
        subscribeAccountsChanged();
        subscribeChainChanged();
        options.library === 'ethers' && (await activate(provider$1.value));
    }
    async function disconnect() {
        // note: metamask can't disconnect by provider
        if (walletName.value === 'walletconnect') {
            await provider$1.value.disconnect();
        }
        clear();
        onDisconnectCallback.value &&
            onDisconnectCallback.value('Disconnect from Dapp');
    }
    // ========================= EIP-1193 subscriber =========================
    function subscribeDisconnect() {
        switch (walletName.value) {
            case 'metamask':
                provider$1.value.on('disconnect', (err) => {
                    clear();
                    onDisconnectCallback.value &&
                        onDisconnectCallback.value(err.message);
                });
                break;
            case 'walletconnect':
                provider$1.value.on('disconnect', (code, reason) => {
                    clear();
                    onDisconnectCallback.value &&
                        onDisconnectCallback.value(`${code}: ${reason}`);
                });
                break;
        }
    }
    function subscribeAccountsChanged() {
        switch (walletName.value) {
            case 'metamask':
                provider$1.value.on('accountsChanged', async (accounts) => {
                    options.library === 'ethers' &&
                        (await activate(provider$1.value));
                    onAccountsChangedCallback.value &&
                        onAccountsChangedCallback.value(accounts);
                });
                break;
            case 'walletconnect':
                provider$1.value.on('accountsChanged', async (accounts) => {
                    options.library === 'ethers' &&
                        (await activate(provider$1.value));
                    onAccountsChangedCallback.value &&
                        onAccountsChangedCallback.value(accounts);
                });
                break;
        }
    }
    function subscribeChainChanged() {
        switch (walletName.value) {
            case 'metamask':
                provider$1.value.on('chainChanged', async (hexChainId) => {
                    const chainId = parseInt(hexChainId, 16);
                    options.library === 'ethers' &&
                        (await activate(provider$1.value));
                    onChainChangedCallback.value &&
                        onChainChangedCallback.value(chainId);
                });
                break;
            case 'walletconnect':
                provider$1.value.on('chainChanged', async (chainId) => {
                    options.library === 'ethers' &&
                        (await activate(provider$1.value));
                    onChainChangedCallback.value &&
                        onChainChangedCallback.value(chainId);
                });
                break;
        }
    }
    // ========================= callback =========================
    function onDisconnect(callback) {
        onDisconnectCallback.value = callback;
    }
    function onAccountsChanged(callback) {
        onAccountsChangedCallback.value = callback;
    }
    function onChainChanged(callback) {
        onChainChangedCallback.value = callback;
    }
    // ========================= getters =========================
    const isConnected = vueDemi.computed(() => {
        if (status.value === 'connected')
            return true;
        else
            return false;
    });
    return {
        // state
        provider: provider$1,
        status,
        walletName,
        error,
        // getters
        isConnected,
        // methods
        connect,
        disconnect,
        // callback
        onDisconnect,
        onAccountsChanged,
        onChainChanged,
    };
}

function useMulticall(provider) {
    const results = vueDemi.ref([]);
    const blockNumber = vueDemi.ref(0);
    const multicall = vueDemi.markRaw(new contracts.Contract(MULTICALL2_ADDRESS, MULTICALL2_ABI, provider));
    async function call(contractCalls) {
        const calls = contractCalls.map((call) => {
            const iface = getInterface(call.interface);
            return {
                target: call.address,
                callData: iface.encodeFunctionData(call.method, call.args),
            };
        });
        const { blockNumber: blocNum, returnData } = await tryBlockAndAggregate(calls);
        results.value = returnData.map((data, i) => {
            if (!data.success)
                console.error(`Failed to call ${contractCalls[i].method}`);
            const iface = getInterface(contractCalls[i].interface);
            return iface.decodeFunctionResult(contractCalls[i].method, data.returnData);
        });
        blockNumber.value = blocNum.toNumber();
    }
    async function tryBlockAndAggregate(calls) {
        return await multicall.callStatic.tryBlockAndAggregate(false, calls);
    }
    return {
        multicall,
        blockNumber,
        results,
        call,
    };
}
function getInterface(contractInterface) {
    if (abi$1.Interface.isInterface(contractInterface)) {
        return contractInterface;
    }
    return new abi$1.Interface(contractInterface);
}

const { provider, signer, network, address, balance } = useEthers();
function useEthersHooks() {
    const onActivatedHook = vueDemi.ref(null);
    const onDeactivatedHook = vueDemi.ref(null);
    const onChangedHook = vueDemi.ref(null);
    vueDemi.watch(provider, (provider, oldProvider) => {
        if (!oldProvider && provider) {
            onActivatedHook.value &&
                onActivatedHook.value({
                    provider,
                    signer: signer.value,
                    network: network.value,
                    address: address.value,
                    balance: balance.value,
                });
        }
        else if (oldProvider && provider) {
            onChangedHook.value &&
                onChangedHook.value({
                    provider,
                    signer: signer.value,
                    network: network.value,
                    address: address.value,
                    balance: balance.value,
                });
        }
        else if (oldProvider && !provider) {
            onDeactivatedHook.value && onDeactivatedHook.value();
        }
    });
    const onActivated = (hook) => (onActivatedHook.value = hook);
    const onChanged = (hook) => (onChangedHook.value = hook);
    const onDeactivated = (hook) => (onDeactivatedHook.value = hook);
    return {
        onActivated,
        onDeactivated,
        onChanged,
    };
}

async function checkInfuraId(infuraId) {
    try {
        const res = await fetch(`https://mainnet.infura.io/v3/${infuraId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_blockNumber',
                params: [],
            }),
        });
        const data = await res.json();
        console.log('Infura ID is valid.', data);
        return true;
    }
    catch (e) {
        console.warn('Walletconnect unavailable: Failed to connect to infura node, please check if your infura ID is valid.');
        return false;
    }
}
function checkChainId(chainId) {
    if (chainId in exports.ChainId) {
        return true;
    }
    return false;
}

function shortenAddress(address) {
    if (utils.isAddress(address)) {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }
    else {
        return '';
    }
}
function displayEther(balance, fixed = 2) {
    return (+utils.formatEther(balance)).toFixed(fixed);
}
function displayChainName(chainId) {
    if (!checkChainId(chainId)) {
        throw new Error('Error: Invalid chainId');
    }
    return CHAIN_NAMES[chainId].toLowerCase();
}

const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event) => {
            event.stopPropagation();
            if (event.target !== el && !el.contains(event.target)) {
                binding.value(event);
            }
        };
        const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
        setTimeout(() => {
            document.addEventListener(clickHandler, el.clickOutsideEvent);
        }, 0);
    },
    unmounted: (el) => {
        const clickOutsideEvent = el.clickOutsideEvent;
        delete el.clickOutsideEvent;
        const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
        document.removeEventListener(clickHandler, clickOutsideEvent);
    },
};

var script$3 = vueDemi.defineComponent({
    emits: ['close'],
    props: {
        modalOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {
        const closeModal = () => {
            emit('close');
        };
        vueDemi.watch(() => props.modalOpen, (value) => {
            if (value) {
                document.body.classList.add('overflow-hidden');
            }
            else {
                document.body.classList.remove('overflow-hidden');
            }
        });
        vueDemi.onUnmounted(() => {
            document.body.classList.remove('overflow-hidden');
        });
        return {
            closeModal,
        };
    },
});

vue.pushScopeId("data-v-701ac82d");
const _hoisted_1$3 = {
  key: 0,
  class: "modal"
};
const _hoisted_2$3 = { class: "modal-inner" };
const _hoisted_3$3 = { class: "modal-content" };
vue.popScopeId();

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
    vue.createVNode(vue.Transition, { name: "modal-animation" }, {
      default: vue.withCtx(() => [
        (_ctx.modalOpen)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
              vue.createElementVNode("div", _hoisted_2$3, [
                vue.createElementVNode("div", _hoisted_3$3, [
                  vue.createCommentVNode(" Modal Content "),
                  vue.renderSlot(_ctx.$slots, "default")
                ])
              ])
            ]))
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.modal[data-v-701ac82d] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 100vw;\n  height: 100vh;\n  background-color: rgba(107, 114, 128, 0.7);\n  left: 0px;\n  top: 0px;\n  z-index: 50;\n}\n.modal-inner[data-v-701ac82d] {\n  display: flex;\n  background: #ffffff;\n  border-radius: 1rem;\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,\n    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n}\n.modal-animation-enter-active[data-v-701ac82d],\n.modal-animation-leave-active[data-v-701ac82d] {\n  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);\n}\n.modal-animation-enter-from[data-v-701ac82d],\n.modal-animation-leave-to[data-v-701ac82d] {\n  opacity: 0;\n}\n";
styleInject(css_248z$1);

script$3.render = render$3;
script$3.__scopeId = "data-v-701ac82d";
script$3.__file = "src/components/Modal.vue";

const _hoisted_1$2 = {
  height: "246",
  viewBox: "0 0 400 246",
  width: "400",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("path", {
  d: "m81.9180572 48.3416816c65.2149658-63.8508884 170.9493158-63.8508884 236.1642788 0l7.848727 7.6845565c3.260748 3.1925442 3.260748 8.3686816 0 11.5612272l-26.848927 26.2873374c-1.630375 1.5962734-4.273733 1.5962734-5.904108 0l-10.800779-10.5748639c-45.495589-44.5439756-119.258514-44.5439756-164.754105 0l-11.566741 11.3248068c-1.630376 1.5962721-4.273735 1.5962721-5.904108 0l-26.8489263-26.2873375c-3.2607483-3.1925456-3.2607483-8.3686829 0-11.5612272zm291.6903948 54.3649934 23.895596 23.395862c3.260732 3.19253 3.260751 8.368636.000041 11.561187l-107.746894 105.494845c-3.260726 3.192568-8.547443 3.192604-11.808214.000083-.000013-.000013-.000029-.000029-.000042-.000043l-76.472191-74.872762c-.815187-.798136-2.136867-.798136-2.952053 0-.000006.000005-.00001.00001-.000015.000014l-76.470562 74.872708c-3.260715 3.192576-8.547434 3.19263-11.808215.000116-.000019-.000018-.000039-.000037-.000059-.000058l-107.74989297-105.496247c-3.26074695-3.192544-3.26074695-8.368682 0-11.561226l23.89563947-23.395823c3.260747-3.1925446 8.5474652-3.1925446 11.8082136 0l76.4733029 74.873809c.815188.798136 2.136866.798136 2.952054 0 .000012-.000012.000023-.000023.000035-.000032l76.469471-74.873777c3.260673-3.1926181 8.547392-3.1927378 11.808214-.000267.000046.000045.000091.00009.000135.000135l76.473203 74.873909c.815186.798135 2.136866.798135 2.952053 0l76.471967-74.872433c3.260748-3.1925458 8.547465-3.1925458 11.808213 0z",
  fill: "#3b99fc"
}, null, -1 /* HOISTED */);
const _hoisted_3$2 = [
  _hoisted_2$2
];

function render$2(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2))
}

const script$2 = {};


script$2.render = render$2;
script$2.__file = "src/components/logos/WalletConnect.vue";

const _hoisted_1$1 = {
  height: "355",
  viewBox: "0 0 397 355",
  width: "397",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /*#__PURE__*/vue.createStaticVNode("<g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-1 -1)\"><path d=\"m114.622644 327.195472 52.004717 13.810198v-18.05949l4.245283-4.249292h29.716982v21.246459 14.872523h-31.839624l-39.268868-16.997169z\" fill=\"#cdbdb2\"></path><path d=\"m199.528305 327.195472 50.943397 13.810198v-18.05949l4.245283-4.249292h29.716981v21.246459 14.872523h-31.839623l-39.268868-16.997169z\" fill=\"#cdbdb2\" transform=\"matrix(-1 0 0 1 483.96227 0)\"></path><path d=\"m170.872644 287.889523-4.245283 35.056657 5.306604-4.249292h55.18868l6.367925 4.249292-4.245284-35.056657-8.490565-5.311615-42.452832 1.062323z\" fill=\"#393939\"></path><path d=\"m142.216984 50.9915022 25.471698 59.4900858 11.674528 173.158643h41.391511l12.735849-173.158643 23.349056-59.4900858z\" fill=\"#f89c35\"></path><path d=\"m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z\" fill=\"#f89d35\"></path><path d=\"m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z\" fill=\"#d87c30\"></path><path d=\"m87.0283032 192.280457 36.0849058 33.994334v33.994334z\" fill=\"#ea8d3a\"></path><path d=\"m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z\" fill=\"#f89d35\"></path><path d=\"m123.113209 261.331448-8.490565 65.864024 56.25-39.305949z\" fill=\"#eb8f35\"></path><path d=\"m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z\" fill=\"#ea8e3a\"></path><path d=\"m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z\" fill=\"#d87c30\"></path><path d=\"m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z\" fill=\"#eb8f35\"></path><path d=\"m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z\" fill=\"#e8821e\"></path><path d=\"m114.622644 327.195472 56.25-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z\" fill=\"#dfcec3\"></path><path d=\"m229.245286 327.195472 55.18868-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z\" fill=\"#dfcec3\" transform=\"matrix(-1 0 0 1 513.679252 0)\"></path><path d=\"m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z\" fill=\"#393939\" transform=\"matrix(-1 0 0 1 283.372646 0)\"></path><path d=\"m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z\" fill=\"#e88f35\"></path><path d=\"m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z\" fill=\"#8e5a30\"></path><g transform=\"matrix(-1 0 0 1 399.056611 0)\"><path d=\"m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z\" fill=\"#f89d35\"></path><path d=\"m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z\" fill=\"#d87c30\"></path><path d=\"m87.0283032 192.280457 36.0849058 33.994334v33.994334z\" fill=\"#ea8d3a\"></path><path d=\"m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z\" fill=\"#f89d35\"></path><path d=\"m123.113209 261.331448-8.490565 65.864024 55.18868-38.243626z\" fill=\"#eb8f35\"></path><path d=\"m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z\" fill=\"#ea8e3a\"></path><path d=\"m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z\" fill=\"#d87c30\"></path><path d=\"m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z\" fill=\"#eb8f35\"></path><path d=\"m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z\" fill=\"#e8821e\"></path><path d=\"m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z\" fill=\"#393939\" transform=\"matrix(-1 0 0 1 283.372646 0)\"></path><path d=\"m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z\" fill=\"#e88f35\"></path><path d=\"m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z\" fill=\"#8e5a30\"></path></g></g>", 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];

function render$1(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1))
}

const script$1 = {};


script$1.render = render$1;
script$1.__file = "src/components/logos/MetaMask.vue";

var script = vueDemi.defineComponent({
    components: {
        Modal: script$3,
        MetaMaskIcon: script$1,
        WalletConnectIcon: script$2,
    },
    inject: ['infuraId'],
    setup() {
        const { boardOpen, close } = useBoard();
        const { connect, status } = useWallet();
        const metamaskDisabled = vueDemi.ref(true);
        const walletconnectDisabled = vueDemi.ref(true);
        const infuraId = vueDemi.inject('infuraId');
        // check metamask and walletconnect available
        vueDemi.onMounted(async () => {
            if (await Metamask.check()) {
                metamaskDisabled.value = false;
            }
            if (infuraId && (await Walletconnect.check())) {
                walletconnectDisabled.value = false;
            }
        });
        const loadingOpen = vueDemi.ref(false);
        const openLoading = () => {
            loadingOpen.value = true;
        };
        const closeLoading = () => {
            loadingOpen.value = false;
        };
        const connectWallet = async (wallet) => {
            try {
                switch (wallet) {
                    case 'metamask':
                        await connectMetamask();
                        break;
                    case 'walletconnect':
                        await connectWalletconnect();
                        break;
                }
            }
            catch (e) {
                console.error(e.message);
            }
            finally {
                closeLoading();
            }
        };
        const connectMetamask = async () => {
            if (metamaskDisabled.value)
                return;
            // Prevent from closing the board while clicking disabled wallet
            close();
            openLoading();
            await connect('metamask');
        };
        const connectWalletconnect = async () => {
            if (walletconnectDisabled.value)
                return;
            // Prevent from closing the board while clicking disabled wallet
            close();
            openLoading();
            await connect('walletconnect', infuraId);
        };
        return {
            status,
            boardOpen,
            metamaskDisabled,
            walletconnectDisabled,
            close,
            connectWallet,
            // pending modal
            loadingOpen,
            openLoading,
            closeLoading,
        };
    },
});

vue.pushScopeId("data-v-e1ee1034");
const _hoisted_1 = { class: "item" };
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("div", null, "MetaMask or BiFrost", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/vue.createElementVNode("div", { class: "line" }, null, -1 /* HOISTED */);
const _hoisted_4 = { class: "item" };
const _hoisted_5 = /*#__PURE__*/vue.createElementVNode("div", null, "WalletConnect", -1 /* HOISTED */);
const _hoisted_6 = {
  key: 0,
  class: "loading-modal"
};
const _hoisted_7 = /*#__PURE__*/vue.createElementVNode("p", null, "Pending Call Request", -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("p", null, "Approve or reject request using your wallet", -1 /* HOISTED */);
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
];
const _hoisted_10 = { key: 1 };
vue.popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MetaMaskIcon = vue.resolveComponent("MetaMaskIcon");
  const _component_WalletConnectIcon = vue.resolveComponent("WalletConnectIcon");
  const _component_Modal = vue.resolveComponent("Modal");
  const _directive_click_outside = vue.resolveDirective("click-outside");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createVNode(_component_Modal, {
      modalOpen: _ctx.boardOpen,
      onClose: _ctx.close
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", null, [
          vue.createElementVNode("div", {
            onClick: _cache[0] || (_cache[0] = $event => (_ctx.connectWallet('metamask'))),
            class: vue.normalizeClass(["wallet-item", _ctx.metamaskDisabled? 'wallet-disabled' : ''])
          }, [
            vue.createElementVNode("div", _hoisted_1, [
              vue.createVNode(_component_MetaMaskIcon, { class: "logo" }),
              _hoisted_2
            ])
          ], 2 /* CLASS */),
          _hoisted_3,
          vue.createElementVNode("div", {
            onClick: _cache[1] || (_cache[1] = $event => (_ctx.connectWallet('walletconnect'))),
            class: vue.normalizeClass(["wallet-item", _ctx.walletconnectDisabled? 'wallet-disabled' : ''])
          }, [
            vue.createElementVNode("div", _hoisted_4, [
              vue.createVNode(_component_WalletConnectIcon, { class: "logo" }),
              _hoisted_5
            ])
          ], 2 /* CLASS */)
        ], 512 /* NEED_PATCH */), [
          [_directive_click_outside, _ctx.close]
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modalOpen", "onClose"]),
    vue.createVNode(_component_Modal, { modalOpen: _ctx.loadingOpen }, {
      default: vue.withCtx(() => [
        (_ctx.status === 'connecting')
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, _hoisted_9))
          : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" loading between connected to isActivated "),
        (_ctx.status === 'connected')
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10))
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modalOpen"])
  ], 64 /* STABLE_FRAGMENT */))
}

var css_248z = "\n.wallet-item[data-v-e1ee1034] {\n  display: flex;\n  justify-content: center;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  margin: 0.5rem;\n  border-radius: 0.75rem;\n  cursor: pointer;\n}\n.wallet-item[data-v-e1ee1034]:hover {\n  background-color: rgba(243, 244, 246, 0.664);\n}\n@media (min-width: 640px) {\n.wallet-item[data-v-e1ee1034] {\n    width: 24rem;\n}\n}\n.item[data-v-e1ee1034] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.item[data-v-e1ee1034] > :not([hidden]) ~ :not([hidden]) {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.line[data-v-e1ee1034] {\n  color: #e5e7eb;\n  border-width: 0px;\n  border-bottom-width: 1px;\n  border-style: solid;\n}\n.logo[data-v-e1ee1034] {\n  width: 50px;\n  height: 50px;\n}\n.wallet-disabled[data-v-e1ee1034] {\n  opacity: 0.5;\n}\n.wallet-disabled[data-v-e1ee1034]:hover {\n  background-color: rgba(255, 255, 255, 0.623);\n  cursor: default;\n}\n.loading-modal[data-v-e1ee1034] {\n  width: 20rem;\n  padding: 2.5rem;\n  text-align: center;\n}\n.loading-modal > p[data-v-e1ee1034]:first-child {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n@media (min-width: 640px) {\n.loading-modal[data-v-e1ee1034] {\n    width: auto;\n}\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-e1ee1034";
script.__file = "src/components/Board.vue";

const VueDapp = {
    install(app, options) {
        if (!options?.infuraId) {
            console.warn('For enabling WalletConnect, you should provide infura ID in plugin options like "app.use(VueDapp, { infuraId: "<your-id>" })"');
        }
        app.directive('click-outside', clickOutside);
        app.component('vdapp-board', script);
        app.component('vdapp-modal', script$3);
        app.provide('infuraId', options?.infuraId);
    },
};

exports.CHAIN_NAMES = CHAIN_NAMES;
exports.ERC20 = ERC20;
exports.ERC20Interface = ERC20Interface;
exports.MULTICALL2_ABI = MULTICALL2_ABI;
exports.MULTICALL2_ADDRESS = MULTICALL2_ADDRESS;
exports.VueDapp = VueDapp;
exports.checkChainId = checkChainId;
exports.checkInfuraId = checkInfuraId;
exports.displayChainName = displayChainName;
exports.displayEther = displayEther;
exports.shortenAddress = shortenAddress;
exports.useBoard = useBoard;
exports.useEthers = useEthers;
exports.useEthersHooks = useEthersHooks;
exports.useMulticall = useMulticall;
exports.useWallet = useWallet;
