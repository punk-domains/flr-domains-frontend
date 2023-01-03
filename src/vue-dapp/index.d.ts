import { Interface, FunctionFragment, Result } from '@ethersproject/abi';
import * as vue_demi from 'vue-demi';
import { Ref, Plugin } from 'vue-demi';
import { providers, Signer, EventFilter, BigNumberish, BigNumber, PopulatedTransaction, ethers } from 'ethers';
export { Signer } from 'ethers';
import { Web3Provider, Provider, Listener, JsonRpcProvider } from '@ethersproject/providers';
export { Network, Web3Provider } from '@ethersproject/providers';
import { Contract, Overrides, ContractTransaction, CallOverrides, ContractInterface } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Signer as Signer$1 } from '@ethersproject/abstract-signer';
import { Network } from '@ethersproject/networks';

declare enum ChainId {
    Hardhat = 31337,
    Mainnet = 1,
    Ropsten = 3,
    Rinkeby = 4,
    Goerli = 5,
    Kovan = 42,
    xDai = 100
}
declare const CHAIN_NAMES: {
    31337: string;
    1: string;
    3: string;
    42: string;
    4: string;
    5: string;
    100: string;
};

declare const MULTICALL2_ADDRESS = "0x5ba1e12693dc8f9c48aad8770482f4739beed696";

var Multicall2$1 = [
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

declare const ERC20Interface: Interface;

declare function useBoard(): {
    boardOpen: vue_demi.Ref<boolean>;
    open: () => void;
    close: () => void;
};

interface MetaMaskProvider extends providers.ExternalProvider {
    isMetaMask: boolean;
    isConnected: () => boolean;
    request: (request: {
        method: string;
        params?: any[] | undefined;
    }) => Promise<any>;
    on: (event: string, callback: (param: any) => void) => void;
}
interface MetaMaskProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 */
declare class EventEmitter<
  EventTypes extends EventEmitter.ValidEventTypes = string | symbol,
  Context extends any = any,
> {
  static prefixed: string | boolean

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   */
  eventNames(): Array<EventEmitter.EventNames<EventTypes>>

  /**
   * Return the listeners registered for a given event.
   */
  listeners<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
  ): Array<EventEmitter.EventListener<EventTypes, T>>

  /**
   * Return the number of listeners listening to a given event.
   */
  listenerCount(event: EventEmitter.EventNames<EventTypes>): number

  /**
   * Calls each of the listeners registered for a given event.
   */
  emit<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    ...args: EventEmitter.EventArgs<EventTypes, T>
  ): boolean

  /**
   * Add a listener for a given event.
   */
  on<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
  ): this
  addListener<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
  ): this

  /**
   * Add a one-time listener for a given event.
   */
  once<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
  ): this

  /**
   * Remove the listeners of a given event.
   */
  removeListener<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
    once?: boolean,
  ): this
  off<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
    once?: boolean,
  ): this

  /**
   * Remove all listeners, or those of the specified event.
   */
  removeAllListeners(event?: EventEmitter.EventNames<EventTypes>): this
}

declare namespace EventEmitter {
  export interface ListenerFn<Args extends any[] = any[]> {
    (...args: Args): void
  }

  export interface EventEmitterStatic {
    new <
      EventTypes extends ValidEventTypes = string | symbol,
      Context = any,
    >(): EventEmitter<EventTypes, Context>
  }

  /**
   * `object` should be in either of the following forms:
   * ```
   * interface EventTypes {
   *   'event-with-parameters': any[]
   *   'event-with-example-handler': (...args: any[]) => void
   * }
   * ```
   */
  export type ValidEventTypes = string | symbol | object

  export type EventNames<T extends ValidEventTypes> = T extends string | symbol
    ? T
    : keyof T

  export type ArgumentMap<T extends object> = {
    [K in keyof T]: T[K] extends (...args: any[]) => void
      ? Parameters<T[K]>
      : T[K] extends any[]
      ? T[K]
      : any[]
  }

  export type EventListener<
    T extends ValidEventTypes,
    K extends EventNames<T>,
  > = T extends string | symbol
    ? (...args: any[]) => void
    : (
        ...args: ArgumentMap<Exclude<T, string | symbol>>[Extract<K, keyof T>]
      ) => void

  export type EventArgs<
    T extends ValidEventTypes,
    K extends EventNames<T>,
  > = Parameters<EventListener<T, K>>

  export const EventEmitter: EventEmitterStatic
}

interface HTTPConnection extends EventEmitter {
  url: string
  constructor(url: string)
  formatError(
    payload: any,
    message: string,
    code?: number,
  ): {
    error: {
      message: string
      code: number
    }
    id: any
    jsonrpc: any
  }
  send(payload: any, internal?: any): Promise<any>
}

interface IConnector {
  bridge: string
  key: string
  clientId: string
  peerId: string
  readonly clientMeta: IClientMeta | null
  peerMeta: IClientMeta | null
  handshakeTopic: string
  handshakeId: number
  uri: string
  chainId: number
  networkId: number
  accounts: string[]
  rpcUrl: string
  readonly connected: boolean
  readonly pending: boolean
  session: IWalletConnectSession

  on(
    event: string,
    callback: (error: Error | null, payload: any | null) => void,
  ): void
  connect(opts?: ICreateSessionOptions): Promise<ISessionStatus>
  createSession(opts?: ICreateSessionOptions): Promise<void>
  approveSession(sessionStatus: ISessionStatus): void
  rejectSession(sessionError?: ISessionError): void
  updateSession(sessionStatus: ISessionStatus): void
  killSession(sessionError?: ISessionError): Promise<void>

  sendTransaction(tx: ITxData): Promise<any>
  signTransaction(tx: ITxData): Promise<any>
  signMessage(params: any[]): Promise<any>
  signPersonalMessage(params: any[]): Promise<any>
  signTypedData(params: any[]): Promise<any>
  updateChain(chainParams: IUpdateChainParams): Promise<any>

  sendCustomRequest(
    request: Partial<IJsonRpcRequest>,
    options?: IRequestOptions,
  ): Promise<any>
  unsafeSend(
    request: IJsonRpcRequest,
    options?: IRequestOptions,
  ): Promise<IJsonRpcResponseSuccess | IJsonRpcResponseError>

  approveRequest(response: Partial<IJsonRpcResponseSuccess>): void
  rejectRequest(response: Partial<IJsonRpcResponseError>): void
}

interface ISessionStatus {
  chainId: number
  accounts: string[]
  networkId?: number
  rpcUrl?: string
}

interface ISessionError {
  message?: string
}

interface ICallTxData {
  type?: string
  to?: string
  value?: number | string
  gas?: number | string
  gasLimit?: number | string
  gasPrice?: number | string
  nonce?: number | string
  data?: string
}

interface ITxData extends ICallTxData {
  from: string
}

interface IJsonRpcResponseSuccess {
  id: number
  jsonrpc: string
  result: any
}

interface IJsonRpcErrorMessage {
  code?: number
  message: string
}

interface IJsonRpcResponseError {
  id: number
  jsonrpc: string
  error: IJsonRpcErrorMessage
}

interface IJsonRpcRequest {
  id: number
  jsonrpc: string
  method: string
  params: any[]
}

interface IClientMeta {
  description: string
  url: string
  icons: string[]
  name: string
}

interface IWalletConnectSession {
  connected: boolean
  accounts: string[]
  chainId: number
  bridge: string
  key: string
  clientId: string
  clientMeta: IClientMeta | null
  peerId: string
  peerMeta: IClientMeta | null
  handshakeId: number
  handshakeTopic: string
}

interface IUpdateChainParams {
  chainId: number
  networkId: number
  rpcUrl: string
  nativeCurrency: {
    name: string
    symbol: string
  }
}

interface IRPCMap {
  [chainId: number]: string
}

interface IWCRpcConnectionOptions {
  connector?: IConnector
  bridge?: string
  qrcode?: boolean
  chainId?: number
  storageId?: string
  signingMethods?: string[]
  qrcodeModalOptions?: IQRCodeModalOptions
  clientMeta?: IClientMeta
}

interface IWCEthRpcConnectionOptions extends IWCRpcConnectionOptions {
  rpc?: IRPCMap
  infuraId?: string
}

interface IWalletConnectProviderOptions
  extends IWCEthRpcConnectionOptions {
  pollingInterval?: number
  qrcodeModal?: IQRCodeModal
}

interface IRequestOptions {
  forcePushNotification?: boolean
}

interface ICreateSessionOptions {
  chainId?: number
}

interface IQRCodeModal {
  open(uri: string, cb: any, opts?: any): void
  close(): void
}

interface IQRCodeModalOptions {
  mobileLinks?: string[]
  desktopLinks?: string[]
}

interface RequestArguments {
  method: string
  params?: unknown[] | object
}

declare const ProviderEngine: any
declare class WalletConnectProvider extends ProviderEngine {
  bridge: string
  qrcode: boolean
  qrcodeModal: {
    open: (
      uri: string,
      cb: any,
      qrcodeModalOptions?: IQRCodeModalOptions | undefined,
    ) => void
    close: () => void
  }
  qrcodeModalOptions: IQRCodeModalOptions | undefined
  rpc: IRPCMap | null
  infuraId: string
  http: HTTPConnection | null
  wc: IConnector
  isConnecting: boolean
  connected: boolean
  connectCallbacks: any[]
  accounts: string[]
  chainId: number
  rpcUrl: string
  constructor(opts: IWalletConnectProviderOptions)
  get isWalletConnect(): boolean
  get connector(): IConnector
  get walletMeta(): IClientMeta | null
  enable: () => Promise<string[]>
  request: (payload: RequestArguments) => Promise<any>
  send: (payload: any, callback?: any) => Promise<any>
  onConnect: (callback: any) => void
  triggerConnect: (result: any) => void
  disconnect(): Promise<void>
  close(): Promise<void>
  handleRequest(payload: any): Promise<any>
  handleOtherRequests(payload: any): Promise<IJsonRpcResponseSuccess>
  handleReadRequests(payload: any): Promise<IJsonRpcResponseSuccess>
  formatResponse(
    payload: any,
    result: any,
  ): {
    id: any
    jsonrpc: any
    result: any
  }
  getWalletConnector(opts?: {
    disableSessionCreation?: boolean
  }): Promise<IConnector>
  subscribeWalletConnector(): Promise<void>
  onDisconnect(): Promise<void>
  updateState(sessionParams: any): Promise<void>
  updateRpcUrl(chainId: number, rpcUrl?: string | undefined): void
  updateHttpConnection(): void
  sendAsyncPromise(method: string, params: any): Promise<any>
  initialize
  configWallet
}

declare type WalletProvider = MetaMaskProvider | WalletConnectProvider;
declare type ConnectionState = 'none' | 'connecting' | 'connected';
declare type WalletName = 'none' | 'metamask' | 'walletconnect';
declare type OnConnectedCallback = (provider: WalletProvider) => void;
declare type OnDisconnectCallback = (msg: string) => void;
declare type OnAccountsChangedCallback = (accounts: string[]) => void;
declare type OnChainChangedCallback = (chainId: number) => void;
declare type UseWalletOptions = {
    library: 'ethers' | 'web3';
};
declare function useWallet(options?: UseWalletOptions): {
    provider: Ref<WalletProvider | null>;
    status: Ref<ConnectionState>;
    walletName: Ref<WalletName>;
    error: Ref<string>;
    isConnected: vue_demi.ComputedRef<boolean>;
    connect: (_walletName: WalletName, infuraAPI?: string | undefined) => Promise<void>;
    disconnect: () => Promise<void>;
    onDisconnect: (callback: OnDisconnectCallback) => void;
    onAccountsChanged: (callback: OnAccountsChangedCallback) => void;
    onChainChanged: (callback: OnChainChangedCallback) => void;
};

declare function activate(walletProvider: WalletProvider): Promise<void>;
declare function useEthers(): {
    isActivated: Ref<boolean>;
    provider: Ref<Web3Provider | null>;
    signer: Ref<Signer | null>;
    network: Ref<{
        name: string;
        chainId: number;
        ensAddress?: string | undefined;
        _defaultProvider?: ((providers: any, options?: any) => any) | undefined;
    } | null>;
    address: Ref<string>;
    balance: Ref<bigint>;
    chainId: vue_demi.ComputedRef<number | undefined>;
    activate: typeof activate;
    deactivate: () => void;
};

/* Autogenerated file. Do not edit manually. */


interface Multicall2Interface extends ethers.utils.Interface {
  functions: {
    'aggregate(tuple[])': FunctionFragment
    'blockAndAggregate(tuple[])': FunctionFragment
    'getBlockHash(uint256)': FunctionFragment
    'getBlockNumber()': FunctionFragment
    'getCurrentBlockCoinbase()': FunctionFragment
    'getCurrentBlockDifficulty()': FunctionFragment
    'getCurrentBlockGasLimit()': FunctionFragment
    'getCurrentBlockTimestamp()': FunctionFragment
    'getEthBalance(address)': FunctionFragment
    'getLastBlockHash()': FunctionFragment
    'tryAggregate(bool,tuple[])': FunctionFragment
    'tryBlockAndAggregate(bool,tuple[])': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'aggregate',
    values: [{ target: string; callData: BytesLike }[]],
  ): string
  encodeFunctionData(
    functionFragment: 'blockAndAggregate',
    values: [{ target: string; callData: BytesLike }[]],
  ): string
  encodeFunctionData(
    functionFragment: 'getBlockHash',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'getBlockNumber',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getCurrentBlockCoinbase',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getCurrentBlockDifficulty',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getCurrentBlockGasLimit',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getCurrentBlockTimestamp',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getEthBalance',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'getLastBlockHash',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'tryAggregate',
    values: [boolean, { target: string; callData: BytesLike }[]],
  ): string
  encodeFunctionData(
    functionFragment: 'tryBlockAndAggregate',
    values: [boolean, { target: string; callData: BytesLike }[]],
  ): string

  decodeFunctionResult(functionFragment: 'aggregate', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'blockAndAggregate',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getBlockHash',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getBlockNumber',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockCoinbase',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockDifficulty',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockGasLimit',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockTimestamp',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getEthBalance',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getLastBlockHash',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'tryAggregate',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'tryBlockAndAggregate',
    data: BytesLike,
  ): Result

  events: {}
}

declare class Multicall2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: Multicall2Interface

  functions: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'blockAndAggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<{
      blockHash: string
      0: string
    }>

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<{
      blockHash: string
      0: string
    }>

    getBlockNumber(overrides?: CallOverrides): Promise<{
      blockNumber: BigNumber
      0: BigNumber
    }>

    'getBlockNumber()'(overrides?: CallOverrides): Promise<{
      blockNumber: BigNumber
      0: BigNumber
    }>

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<{
      coinbase: string
      0: string
    }>

    'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<{
      coinbase: string
      0: string
    }>

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<{
      difficulty: BigNumber
      0: BigNumber
    }>

    'getCurrentBlockDifficulty()'(overrides?: CallOverrides): Promise<{
      difficulty: BigNumber
      0: BigNumber
    }>

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<{
      gaslimit: BigNumber
      0: BigNumber
    }>

    'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<{
      gaslimit: BigNumber
      0: BigNumber
    }>

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<{
      timestamp: BigNumber
      0: BigNumber
    }>

    'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<{
      timestamp: BigNumber
      0: BigNumber
    }>

    getEthBalance(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<{
      balance: BigNumber
      0: BigNumber
    }>

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<{
      balance: BigNumber
      0: BigNumber
    }>

    getLastBlockHash(overrides?: CallOverrides): Promise<{
      blockHash: string
      0: string
    }>

    'getLastBlockHash()'(overrides?: CallOverrides): Promise<{
      blockHash: string
      0: string
    }>

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'tryAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'tryBlockAndAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>
  }

  aggregate(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'aggregate(tuple[])'(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  blockAndAggregate(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'blockAndAggregate(tuple[])'(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  getBlockHash(
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  'getBlockHash(uint256)'(
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>

  'getBlockNumber()'(overrides?: CallOverrides): Promise<BigNumber>

  getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>

  'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<string>

  getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>

  'getCurrentBlockDifficulty()'(overrides?: CallOverrides): Promise<BigNumber>

  getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>

  'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<BigNumber>

  getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>

  'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<BigNumber>

  getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>

  'getEthBalance(address)'(
    addr: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  getLastBlockHash(overrides?: CallOverrides): Promise<string>

  'getLastBlockHash()'(overrides?: CallOverrides): Promise<string>

  tryAggregate(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'tryAggregate(bool,tuple[])'(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'tryBlockAndAggregate(bool,tuple[])'(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  callStatic: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<{
      blockNumber: BigNumber
      returnData: string[]
      0: BigNumber
      1: string[]
    }>

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<{
      blockNumber: BigNumber
      returnData: string[]
      0: BigNumber
      1: string[]
    }>

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<{
      blockNumber: BigNumber
      blockHash: string
      returnData: {
        success: boolean
        returnData: string
        0: boolean
        1: string
      }[]
      0: BigNumber
      1: string
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[]
    }>

    'blockAndAggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<{
      blockNumber: BigNumber
      blockHash: string
      returnData: {
        success: boolean
        returnData: string
        0: boolean
        1: string
      }[]
      0: BigNumber
      1: string
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[]
    }>

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>

    'getBlockNumber()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>

    'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<string>

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockDifficulty()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<BigNumber>

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getLastBlockHash(overrides?: CallOverrides): Promise<string>

    'getLastBlockHash()'(overrides?: CallOverrides): Promise<string>

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<
      { success: boolean; returnData: string; 0: boolean; 1: string }[]
    >

    'tryAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<
      { success: boolean; returnData: string; 0: boolean; 1: string }[]
    >

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<{
      blockNumber: BigNumber
      blockHash: string
      returnData: {
        success: boolean
        returnData: string
        0: boolean
        1: string
      }[]
      0: BigNumber
      1: string
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[]
    }>

    'tryBlockAndAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<{
      blockNumber: BigNumber
      blockHash: string
      returnData: {
        success: boolean
        returnData: string
        0: boolean
        1: string
      }[]
      0: BigNumber
      1: string
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[]
    }>
  }

  filters: {}

  estimateGas: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    'blockAndAggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>

    'getBlockNumber()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockDifficulty()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<BigNumber>

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>

    'getLastBlockHash()'(overrides?: CallOverrides): Promise<BigNumber>

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    'tryAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    'tryBlockAndAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'blockAndAggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getBlockNumber()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getCurrentBlockCoinbase(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getCurrentBlockCoinbase()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getCurrentBlockDifficulty(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getCurrentBlockDifficulty()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getCurrentBlockGasLimit(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getCurrentBlockGasLimit()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getCurrentBlockTimestamp(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getCurrentBlockTimestamp()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getEthBalance(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getLastBlockHash()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'tryAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'tryBlockAndAggregate(bool,tuple[])'(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>
  }
}

declare type ContractCall = {
    interface: ContractInterface;
    address: string;
    method: string;
    args?: any[];
};
declare function useMulticall(provider: Web3Provider | JsonRpcProvider): {
    multicall: Multicall2;
    blockNumber: vue_demi.Ref<number>;
    results: vue_demi.Ref<{
        [x: string]: any;
        [x: number]: any;
        readonly length: number;
        toString: () => string;
        toLocaleString: () => string;
        concat: {
            (...items: ConcatArray<any>[]): any[];
            (...items: any[]): any[];
        };
        join: (separator?: string | undefined) => string;
        slice: (start?: number | undefined, end?: number | undefined) => any[];
        indexOf: (searchElement: any, fromIndex?: number | undefined) => number;
        lastIndexOf: (searchElement: any, fromIndex?: number | undefined) => number;
        every: {
            <S extends any>(predicate: (value: any, index: number, array: readonly any[]) => value is S, thisArg?: any): this is readonly S[];
            (predicate: (value: any, index: number, array: readonly any[]) => unknown, thisArg?: any): boolean;
        };
        some: (predicate: (value: any, index: number, array: readonly any[]) => unknown, thisArg?: any) => boolean;
        forEach: (callbackfn: (value: any, index: number, array: readonly any[]) => void, thisArg?: any) => void;
        map: <U>(callbackfn: (value: any, index: number, array: readonly any[]) => U, thisArg?: any) => U[];
        filter: {
            <S_1 extends any>(predicate: (value: any, index: number, array: readonly any[]) => value is S_1, thisArg?: any): S_1[];
            (predicate: (value: any, index: number, array: readonly any[]) => unknown, thisArg?: any): any[];
        };
        reduce: {
            (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: readonly any[]) => any): any;
            (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: readonly any[]) => any, initialValue: any): any;
            <U_1>(callbackfn: (previousValue: U_1, currentValue: any, currentIndex: number, array: readonly any[]) => U_1, initialValue: U_1): U_1;
        };
        reduceRight: {
            (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: readonly any[]) => any): any;
            (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: readonly any[]) => any, initialValue: any): any;
            <U_2>(callbackfn: (previousValue: U_2, currentValue: any, currentIndex: number, array: readonly any[]) => U_2, initialValue: U_2): U_2;
        };
        find: {
            <S_2 extends any>(predicate: (this: void, value: any, index: number, obj: readonly any[]) => value is S_2, thisArg?: any): S_2 | undefined;
            (predicate: (value: any, index: number, obj: readonly any[]) => unknown, thisArg?: any): any;
        };
        findIndex: (predicate: (value: any, index: number, obj: readonly any[]) => unknown, thisArg?: any) => number;
        entries: () => IterableIterator<[number, any]>;
        keys: () => IterableIterator<number>;
        values: () => IterableIterator<any>;
        includes: (searchElement: any, fromIndex?: number | undefined) => boolean;
        flatMap: <U_3, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[];
        flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[];
        [Symbol.iterator]: () => IterableIterator<any>;
    }[]>;
    call: (contractCalls: ContractCall[]) => Promise<void>;
};

declare type EthersHooksContext = {
    provider: Web3Provider;
    signer: Signer$1;
    network: Network;
    address: string;
    balance: bigint;
};
declare type OnActivatedHook = (context: EthersHooksContext) => void;
declare type OnChangedHook = (context: EthersHooksContext) => void;
declare type OnDeactivatedHook = () => void;
declare function useEthersHooks(): {
    onActivated: (hook: OnActivatedHook) => OnActivatedHook;
    onDeactivated: (hook: OnDeactivatedHook) => OnDeactivatedHook;
    onChanged: (hook: OnChangedHook) => OnChangedHook;
};

declare global {
    interface Window {
        WalletConnectProvider?: {
            default: typeof WalletConnectProvider;
        };
    }
}

declare function shortenAddress(address: string): string;
declare function displayEther(balance: BigNumber | bigint, fixed?: number): string;
declare function displayChainName(chainId: number): string;

declare function checkInfuraId(infuraId: string): Promise<boolean>;
declare function checkChainId(chainId: number): boolean;

declare type PluginOptions = {
    infuraId?: string;
};
declare const VueDapp: Plugin;

export { CHAIN_NAMES, ChainId, ConnectionState, ContractCall, ERC20, ERC20Interface, EthersHooksContext, Multicall2$1 as MULTICALL2_ABI, MULTICALL2_ADDRESS, MetaMaskProvider, MetaMaskProviderRpcError, OnAccountsChangedCallback, OnActivatedHook, OnChainChangedCallback, OnChangedHook, OnConnectedCallback, OnDeactivatedHook, OnDisconnectCallback, PluginOptions, UseWalletOptions, VueDapp, WalletName, WalletProvider, checkChainId, checkInfuraId, displayChainName, displayEther, shortenAddress, useBoard, useEthers, useEthersHooks, useMulticall, useWallet };
