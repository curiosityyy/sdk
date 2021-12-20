/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV3Adapter,
  UniswapV3AdapterInterface,
} from "../UniswapV3Adapter";

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
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "creditFilter",
    outputs: [
      {
        internalType: "contract ICreditFilter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManager",
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
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003218380380620032188339818101604052810190620000379190620002c1565b6001600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015620000aa5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b6040518060400160405280600281526020017f5a300000000000000000000000000000000000000000000000000000000000008152509062000124576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011b91906200036f565b60405180910390fd5b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001cf57600080fd5b505afa158015620001e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020a919062000302565b600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000472565b600081519050620002a4816200043e565b92915050565b600081519050620002bb8162000458565b92915050565b60008060408385031215620002d557600080fd5b6000620002e58582860162000293565b9250506020620002f88582860162000293565b9150509250929050565b6000602082840312156200031557600080fd5b60006200032584828501620002aa565b91505092915050565b60006200033b8262000393565b6200034781856200039e565b935062000359818560208601620003f7565b62000364816200042d565b840191505092915050565b600060208201905081810360008301526200038b81846200032e565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620003bc82620003d7565b9050919050565b6000620003d082620003af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b8381101562000417578082015181840152602081019050620003fa565b8381111562000427576000848401525b50505050565b6000601f19601f8301169050919050565b6200044981620003af565b81146200045557600080fd5b50565b6200046381620003c3565b81146200046f57600080fd5b50565b612d9680620004826000396000f3fe6080604052600436106100705760003560e01c8063db3e21981161004e578063db3e219814610100578063f28c049814610130578063f887ea4014610160578063f93f515b1461018b57610070565b8063414bf38914610075578063c04b8d59146100a5578063c12c21c0146100d5575b600080fd5b61008f600480360381019061008a91906124d5565b6101b6565b60405161009c9190612ac0565b60405180910390f35b6100bf60048036038101906100ba9190612494565b61088a565b6040516100cc9190612ac0565b60405180910390f35b3480156100e157600080fd5b506100ea610f75565b6040516100f79190612a29565b60405180910390f35b61011a6004803603810190610115919061256a565b610f9b565b6040516101279190612ac0565b60405180910390f35b61014a60048036038101906101459190612529565b61166f565b6040516101579190612ac0565b60405180910390f35b34801561016c57600080fd5b50610175611d5a565b6040516101829190612910565b60405180910390f35b34801561019757600080fd5b506101a0611d80565b6040516101ad9190612a0e565b60405180910390f35b600060026000541415610231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026000819055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401610296919061292b565b60206040518083038186803b1580156102ae57600080fd5b505afa1580156102c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e6919061242a565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686600001602081019061035d9190612401565b6040518463ffffffff1660e01b815260040161037b93929190612984565b600060405180830381600087803b15801561039557600080fd5b505af11580156103a9573d6000803e3d6000fd5b505050506000838036038101906103c091906124ff565b905081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063414bf38960e01b826040516024016104159190612a66565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000826000015173ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016104b39190612910565b60206040518083038186803b1580156104cb57600080fd5b505afa1580156104df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050391906125be565b90506000836020015173ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016105449190612910565b60206040518083038186803b15801561055c57600080fd5b505afa158015610570573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059491906125be565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b815260040161061793929190612946565b600060405180830381600087803b15801561063157600080fd5b505af1158015610645573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061066e9190612453565b80602001905181019061068191906125be565b9550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d868960000160208101906106d59190612401565b8a60200160208101906106e89190612401565b610787896000015173ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b81526004016107289190612910565b60206040518083038186803b15801561074057600080fd5b505afa158015610754573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077891906125be565b88611da690919063ffffffff16565b610826878b6020015173ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff1660e01b81526004016107c89190612910565b60206040518083038186803b1580156107e057600080fd5b505afa1580156107f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081891906125be565b611da690919063ffffffff16565b6040518663ffffffff1660e01b81526004016108469594939291906129bb565b600060405180830381600087803b15801561086057600080fd5b505af1158015610874573d6000803e3d6000fd5b5050505050505050506001600081905550919050565b600060026000541415610905576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026000819055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b815260040161096a919061292b565b60206040518083038186803b15801561098257600080fd5b505afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba919061242a565b9050600080610a1a8580600001906109d29190612adb565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e29565b91509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401610a9f93929190612984565b600060405180830381600087803b158015610ab957600080fd5b505af1158015610acd573d6000803e3d6000fd5b50505050600085610add90612c65565b905083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060008373ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401610b529190612910565b60206040518083038186803b158015610b6a57600080fd5b505afa158015610b7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba291906125be565b905060008373ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401610bdf9190612910565b60206040518083038186803b158015610bf757600080fd5b505afa158015610c0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2f91906125be565b9050600063c04b8d5960e01b84604051602401610c4c9190612a44565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401610d2c93929190612946565b600060405180830381600087803b158015610d4657600080fd5b505af1158015610d5a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610d839190612453565b806020019051810190610d9691906125be565b975050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d878787610e758a73ffffffffffffffffffffffffffffffffffffffff166370a082318d6040518263ffffffff1660e01b8152600401610e169190612910565b60206040518083038186803b158015610e2e57600080fd5b505afa158015610e42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6691906125be565b88611da690919063ffffffff16565b610f10878b73ffffffffffffffffffffffffffffffffffffffff166370a082318f6040518263ffffffff1660e01b8152600401610eb29190612910565b60206040518083038186803b158015610eca57600080fd5b505afa158015610ede573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0291906125be565b611da690919063ffffffff16565b6040518663ffffffff1660e01b8152600401610f309594939291906129bb565b600060405180830381600087803b158015610f4a57600080fd5b505af1158015610f5e573d6000803e3d6000fd5b505050505050505050506001600081905550919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060026000541415611016576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026000819055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b815260040161107b919061292b565b60206040518083038186803b15801561109357600080fd5b505afa1580156110a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cb919061242a565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660000160208101906111429190612401565b6040518463ffffffff1660e01b815260040161116093929190612984565b600060405180830381600087803b15801561117a57600080fd5b505af115801561118e573d6000803e3d6000fd5b505050506000838036038101906111a59190612594565b905081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063db3e219860e01b826040516024016111fa9190612aa4565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000826000015173ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016112989190612910565b60206040518083038186803b1580156112b057600080fd5b505afa1580156112c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e891906125be565b90506000836020015173ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016113299190612910565b60206040518083038186803b15801561134157600080fd5b505afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137991906125be565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b81526004016113fc93929190612946565b600060405180830381600087803b15801561141657600080fd5b505af115801561142a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906114539190612453565b80602001905181019061146691906125be565b9550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d868960000160208101906114ba9190612401565b8a60200160208101906114cd9190612401565b61156c896000015173ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b815260040161150d9190612910565b60206040518083038186803b15801561152557600080fd5b505afa158015611539573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155d91906125be565b88611da690919063ffffffff16565b61160b878b6020015173ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff1660e01b81526004016115ad9190612910565b60206040518083038186803b1580156115c557600080fd5b505afa1580156115d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fd91906125be565b611da690919063ffffffff16565b6040518663ffffffff1660e01b815260040161162b9594939291906129bb565b600060405180830381600087803b15801561164557600080fd5b505af1158015611659573d6000803e3d6000fd5b5050505050505050506001600081905550919050565b6000600260005414156116ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026000819055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b815260040161174f919061292b565b60206040518083038186803b15801561176757600080fd5b505afa15801561177b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179f919061242a565b90506000806117ff8580600001906117b79190612adb565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e29565b91509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b815260040161188493929190612984565b600060405180830381600087803b15801561189e57600080fd5b505af11580156118b2573d6000803e3d6000fd5b505050506000856118c290612c78565b905083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060008273ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016119379190612910565b60206040518083038186803b15801561194f57600080fd5b505afa158015611963573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198791906125be565b905060008473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b81526004016119c49190612910565b60206040518083038186803b1580156119dc57600080fd5b505afa1580156119f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1491906125be565b9050600063f28c049860e01b84604051602401611a319190612a82565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401611b1193929190612946565b600060405180830381600087803b158015611b2b57600080fd5b505af1158015611b3f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190611b689190612453565b806020019051810190611b7b91906125be565b975050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d878688611c5a8973ffffffffffffffffffffffffffffffffffffffff166370a082318d6040518263ffffffff1660e01b8152600401611bfb9190612910565b60206040518083038186803b158015611c1357600080fd5b505afa158015611c27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c4b91906125be565b88611da690919063ffffffff16565b611cf5878c73ffffffffffffffffffffffffffffffffffffffff166370a082318f6040518263ffffffff1660e01b8152600401611c979190612910565b60206040518083038186803b158015611caf57600080fd5b505afa158015611cc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce791906125be565b611da690919063ffffffff16565b6040518663ffffffff1660e01b8152600401611d159594939291906129bb565b600060405180830381600087803b158015611d2f57600080fd5b505af1158015611d43573d6000803e3d6000fd5b505050505050505050506001600081905550919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082821115611e1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b600080611e40600084611e6090919063ffffffff16565b9150611e59601484510384611e6090919063ffffffff16565b9050915091565b600081601483011015611edb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f416464726573735f6f766572666c6f77000000000000000000000000000081525060200191505060405180910390fd5b6014820183511015611f55576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f746f416464726573735f6f75744f66426f756e6473000000000000000000000081525060200191505060405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b6000611f8c611f8784612b63565b612b32565b905082815260208101848484011115611fa457600080fd5b611faf848285612caf565b509392505050565b6000611fca611fc584612b63565b612b32565b905082815260208101848484011115611fe257600080fd5b611fed848285612cbe565b509392505050565b60008135905061200481612d04565b92915050565b60008151905061201981612d04565b92915050565b600082601f83011261203057600080fd5b8135612040848260208601611f79565b91505092915050565b600082601f83011261205a57600080fd5b815161206a848260208601611fb7565b91505092915050565b600060a0828403121561208557600080fd5b81905092915050565b600060a082840312156120a057600080fd5b6120aa60a0612b32565b9050600082013567ffffffffffffffff8111156120c657600080fd5b6120d28482850161201f565b60008301525060206120e684828501611ff5565b60208301525060406120fa848285016123d7565b604083015250606061210e848285016123d7565b6060830152506080612122848285016123d7565b60808301525092915050565b6000610100828403121561214157600080fd5b81905092915050565b6000610100828403121561215d57600080fd5b612168610100612b32565b9050600061217884828501611ff5565b600083015250602061218c84828501611ff5565b60208301525060406121a0848285016123c2565b60408301525060606121b484828501611ff5565b60608301525060806121c8848285016123d7565b60808301525060a06121dc848285016123d7565b60a08301525060c06121f0848285016123d7565b60c08301525060e0612204848285016123ad565b60e08301525092915050565b600060a0828403121561222257600080fd5b81905092915050565b600060a0828403121561223d57600080fd5b61224760a0612b32565b9050600082013567ffffffffffffffff81111561226357600080fd5b61226f8482850161201f565b600083015250602061228384828501611ff5565b6020830152506040612297848285016123d7565b60408301525060606122ab848285016123d7565b60608301525060806122bf848285016123d7565b60808301525092915050565b600061010082840312156122de57600080fd5b81905092915050565b600061010082840312156122fa57600080fd5b612305610100612b32565b9050600061231584828501611ff5565b600083015250602061232984828501611ff5565b602083015250604061233d848285016123c2565b604083015250606061235184828501611ff5565b6060830152506080612365848285016123d7565b60808301525060a0612379848285016123d7565b60a08301525060c061238d848285016123d7565b60c08301525060e06123a1848285016123ad565b60e08301525092915050565b6000813590506123bc81612d1b565b92915050565b6000813590506123d181612d32565b92915050565b6000813590506123e681612d49565b92915050565b6000815190506123fb81612d49565b92915050565b60006020828403121561241357600080fd5b600061242184828501611ff5565b91505092915050565b60006020828403121561243c57600080fd5b600061244a8482850161200a565b91505092915050565b60006020828403121561246557600080fd5b600082015167ffffffffffffffff81111561247f57600080fd5b61248b84828501612049565b91505092915050565b6000602082840312156124a657600080fd5b600082013567ffffffffffffffff8111156124c057600080fd5b6124cc84828501612073565b91505092915050565b600061010082840312156124e857600080fd5b60006124f68482850161212e565b91505092915050565b6000610100828403121561251257600080fd5b60006125208482850161214a565b91505092915050565b60006020828403121561253b57600080fd5b600082013567ffffffffffffffff81111561255557600080fd5b61256184828501612210565b91505092915050565b6000610100828403121561257d57600080fd5b600061258b848285016122cb565b91505092915050565b600061010082840312156125a757600080fd5b60006125b5848285016122e7565b91505092915050565b6000602082840312156125d057600080fd5b60006125de848285016123ec565b91505092915050565b6125f081612c0b565b82525050565b6125ff81612bc0565b82525050565b61260e81612bc0565b82525050565b600061261f82612b93565b6126298185612b9e565b9350612639818560208601612cbe565b61264281612cf3565b840191505092915050565b600061265882612b93565b6126628185612baf565b9350612672818560208601612cbe565b61267b81612cf3565b840191505092915050565b61268f81612c1d565b82525050565b61269e81612c41565b82525050565b600060a08301600083015184820360008601526126c18282612614565b91505060208301516126d660208601826125f6565b5060408301516126e960408601826128f2565b5060608301516126fc60608601826128f2565b50608083015161270f60808601826128f2565b508091505092915050565b6101008201600082015161273160008501826125f6565b50602082015161274460208501826125f6565b50604082015161275760408501826128e3565b50606082015161276a60608501826125f6565b50608082015161277d60808501826128f2565b5060a082015161279060a08501826128f2565b5060c08201516127a360c08501826128f2565b5060e08201516127b660e08501826128d4565b50505050565b600060a08301600083015184820360008601526127d98282612614565b91505060208301516127ee60208601826125f6565b50604083015161280160408601826128f2565b50606083015161281460608601826128f2565b50608083015161282760808601826128f2565b508091505092915050565b6101008201600082015161284960008501826125f6565b50602082015161285c60208501826125f6565b50604082015161286f60408501826128e3565b50606082015161288260608501826125f6565b50608082015161289560808501826128f2565b5060a08201516128a860a08501826128f2565b5060c08201516128bb60c08501826128f2565b5060e08201516128ce60e08501826128d4565b50505050565b6128dd81612bd2565b82525050565b6128ec81612bf2565b82525050565b6128fb81612c01565b82525050565b61290a81612c01565b82525050565b60006020820190506129256000830184612605565b92915050565b600060208201905061294060008301846125e7565b92915050565b600060608201905061295b60008301866125e7565b6129686020830185612605565b818103604083015261297a818461264d565b9050949350505050565b60006060820190506129996000830186612605565b6129a66020830185612605565b6129b36040830184612605565b949350505050565b600060a0820190506129d06000830188612605565b6129dd6020830187612605565b6129ea6040830186612605565b6129f76060830185612901565b612a046080830184612901565b9695505050505050565b6000602082019050612a236000830184612686565b92915050565b6000602082019050612a3e6000830184612695565b92915050565b60006020820190508181036000830152612a5e81846126a4565b905092915050565b600061010082019050612a7c600083018461271a565b92915050565b60006020820190508181036000830152612a9c81846127bc565b905092915050565b600061010082019050612aba6000830184612832565b92915050565b6000602082019050612ad56000830184612901565b92915050565b60008083356001602003843603038112612af457600080fd5b80840192508235915067ffffffffffffffff821115612b1257600080fd5b602083019250600182023603831315612b2a57600080fd5b509250929050565b6000604051905081810181811067ffffffffffffffff82111715612b5957612b58612cf1565b5b8060405250919050565b600067ffffffffffffffff821115612b7e57612b7d612cf1565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612bcb82612bd2565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062ffffff82169050919050565b6000819050919050565b6000612c1682612c8b565b9050919050565b6000612c2882612c2f565b9050919050565b6000612c3a82612bd2565b9050919050565b6000612c4c82612c53565b9050919050565b6000612c5e82612bd2565b9050919050565b6000612c71368361208e565b9050919050565b6000612c84368361222b565b9050919050565b6000612c9682612c9d565b9050919050565b6000612ca882612bd2565b9050919050565b82818337600083830152505050565b60005b83811015612cdc578082015181840152602081019050612cc1565b83811115612ceb576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b612d0d81612bc0565b8114612d1857600080fd5b50565b612d2481612bd2565b8114612d2f57600080fd5b50565b612d3b81612bf2565b8114612d4657600080fd5b50565b612d5281612c01565b8114612d5d57600080fd5b5056fea2646970667358221220bf1a660b1650f749528709b1d4749fdcca578d9f94da17af8b4055bbee71e82b64736f6c63430007060033";

export class UniswapV3Adapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _creditManager: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3Adapter> {
    return super.deploy(
      _creditManager,
      _router,
      overrides || {}
    ) as Promise<UniswapV3Adapter>;
  }
  getDeployTransaction(
    _creditManager: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_creditManager, _router, overrides || {});
  }
  attach(address: string): UniswapV3Adapter {
    return super.attach(address) as UniswapV3Adapter;
  }
  connect(signer: Signer): UniswapV3Adapter__factory {
    return super.connect(signer) as UniswapV3Adapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3AdapterInterface {
    return new utils.Interface(_abi) as UniswapV3AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Adapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Adapter;
  }
}
