"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreditFilter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "protocol",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "adapter",
                type: "address",
            },
        ],
        name: "ContractAllowed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "protocol",
                type: "address",
            },
        ],
        name: "ContractForbidden",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "chiThreshold",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fastCheckDelay",
                type: "uint256",
            },
        ],
        name: "NewFastCheckParameters",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newPriceOracle",
                type: "address",
            },
        ],
        name: "PriceOracleUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "liquidityThreshold",
                type: "uint256",
            },
        ],
        name: "TokenAllowed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "TokenForbidden",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "TransferAccountAllowed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pugin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "TransferPluginAllowed",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "targetContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "adapter",
                type: "address",
            },
        ],
        name: "allowContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "liquidationThreshold",
                type: "uint256",
            },
        ],
        name: "allowToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "allowanceForAccountTransfers",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "allowedContracts",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allowedContractsCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "allowedTokens",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allowedTokensCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "approveAccountTransfers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "calcCreditAccountAccruedInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "calcCreditAccountHealthFactor",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "calcThresholdWeightedValue",
        outputs: [
            {
                internalType: "uint256",
                name: "total",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "calcTotalValue",
        outputs: [
            {
                internalType: "uint256",
                name: "total",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "checkAndEnableToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "checkCollateralChange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "amountIn",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "amountOut",
                type: "uint256[]",
            },
            {
                internalType: "address[]",
                name: "tokenIn",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "tokenOut",
                type: "address[]",
            },
        ],
        name: "checkMultiTokenCollateral",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolService",
                type: "address",
            },
        ],
        name: "connectCreditManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "allowedContract",
                type: "address",
            },
        ],
        name: "contractToAdapter",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "enabledTokens",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "targetContract",
                type: "address",
            },
        ],
        name: "forbidContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "getCreditAccountTokenById",
        outputs: [
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
            {
                internalType: "uint256",
                name: "tv",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "twv",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "initEnabledTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "isTokenAllowed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "liquidationThresholds",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "priceOracle",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "onwer",
                type: "address",
            },
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "revertIfAccountTransferIsNotAllowed",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minHealthFactor",
                type: "uint256",
            },
        ],
        name: "revertIfCantIncreaseBorrowing",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "revertIfTokenNotAllowed",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "underlyingToken",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "updateUnderlyingTokenLiquidationThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ICreditFilter__factory = /** @class */ (function () {
    function ICreditFilter__factory() {
    }
    ICreditFilter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICreditFilter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICreditFilter__factory.abi = _abi;
    return ICreditFilter__factory;
}());
exports.ICreditFilter__factory = ICreditFilter__factory;
