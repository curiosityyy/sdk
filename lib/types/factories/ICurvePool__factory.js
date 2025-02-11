"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurvePool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "coins",
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
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "int128",
                name: "j",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "min_dy",
                type: "uint256",
            },
        ],
        name: "exchange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "int128",
                name: "j",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "min_dy",
                type: "uint256",
            },
        ],
        name: "exchange_underlying",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "int128",
                name: "j",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
        ],
        name: "get_dy",
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
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "int128",
                name: "j",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
        ],
        name: "get_dy_underlying",
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
        name: "get_virtual_price",
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
];
var ICurvePool__factory = /** @class */ (function () {
    function ICurvePool__factory() {
    }
    ICurvePool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICurvePool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICurvePool__factory.abi = _abi;
    return ICurvePool__factory;
}());
exports.ICurvePool__factory = ICurvePool__factory;
