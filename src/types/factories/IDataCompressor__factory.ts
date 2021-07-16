/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDataCompressor } from "../IDataCompressor";

export class IDataCompressor__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDataCompressor {
    return new Contract(address, _abi, signerOrProvider) as IDataCompressor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditAccountData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "bool",
            name: "inUse",
            type: "bool",
          },
          {
            internalType: "address",
            name: "creditManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.TokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataTypes.CreditAccountData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditAccountDataExtended",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "bool",
            name: "inUse",
            type: "bool",
          },
          {
            internalType: "address",
            name: "creditManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.TokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeIndexAtOpen",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "since",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.CreditAccountDataExtended",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditAccountList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "bool",
            name: "inUse",
            type: "bool",
          },
          {
            internalType: "address",
            name: "creditManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.TokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataTypes.CreditAccountData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditManagerData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bool",
            name: "hasAccount",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canBorrow",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "allowedTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "allowedContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "adapter",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.ContractAdapter[]",
            name: "adapters",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataTypes.CreditManagerData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditManagersList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bool",
            name: "hasAccount",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canBorrow",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "allowedTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "allowedContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "adapter",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.ContractAdapter[]",
            name: "adapters",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataTypes.CreditManagerData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getPoolData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "dieselToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "linearCumulativeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidityLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dieselRate_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.PoolData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolsList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "dieselToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "linearCumulativeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidityLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dieselRate_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.PoolData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getTokenData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
        ],
        internalType: "struct DataTypes.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
