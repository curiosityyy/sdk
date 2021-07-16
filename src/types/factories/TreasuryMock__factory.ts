/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TreasuryMock } from "../TreasuryMock";

export class TreasuryMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TreasuryMock> {
    return super.deploy(overrides || {}) as Promise<TreasuryMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TreasuryMock {
    return super.attach(address) as TreasuryMock;
  }
  connect(signer: Signer): TreasuryMock__factory {
    return super.connect(signer) as TreasuryMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryMock {
    return new Contract(address, _abi, signerOrProvider) as TreasuryMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NewDonation",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607c8061001e6000396000f3fe6080604052366041577f8ffa785350fa6b5fee858c4ca63eff2704b9538ff446bd673c1f6c11fc7aca16346040518082815260200191505060405180910390a1005b600080fdfea26469706673582212209515e93baedecdcd0f85772e559c85ea963f1feb6aa576ca18be7bcaede223f464736f6c63430007060033";
