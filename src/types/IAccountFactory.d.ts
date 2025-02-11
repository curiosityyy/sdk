/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IAccountFactoryInterface extends ethers.utils.Interface {
  functions: {
    "countCreditAccounts()": FunctionFragment;
    "countCreditAccountsInStock()": FunctionFragment;
    "creditAccounts(uint256)": FunctionFragment;
    "getNext(address)": FunctionFragment;
    "head()": FunctionFragment;
    "returnCreditAccount(address)": FunctionFragment;
    "tail()": FunctionFragment;
    "takeCreditAccount(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "countCreditAccounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "countCreditAccountsInStock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditAccounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getNext", values: [string]): string;
  encodeFunctionData(functionFragment: "head", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "returnCreditAccount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tail", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "takeCreditAccount",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "countCreditAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countCreditAccountsInStock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNext", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "head", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tail", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "takeCreditAccount",
    data: BytesLike
  ): Result;

  events: {
    "AccountMinerChanged(address)": EventFragment;
    "InitializeCreditAccount(address,address)": EventFragment;
    "NewCreditAccount(address)": EventFragment;
    "ReturnCreditAccount(address)": EventFragment;
    "TakeForever(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountMinerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitializeCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReturnCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TakeForever"): EventFragment;
}

export class IAccountFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IAccountFactoryInterface;

  functions: {
    countCreditAccounts(overrides?: CallOverrides): Promise<[BigNumber]>;

    countCreditAccountsInStock(overrides?: CallOverrides): Promise<[BigNumber]>;

    creditAccounts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNext(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    head(overrides?: CallOverrides): Promise<[string]>;

    returnCreditAccount(
      usedAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tail(overrides?: CallOverrides): Promise<[string]>;

    takeCreditAccount(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  countCreditAccounts(overrides?: CallOverrides): Promise<BigNumber>;

  countCreditAccountsInStock(overrides?: CallOverrides): Promise<BigNumber>;

  creditAccounts(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getNext(creditAccount: string, overrides?: CallOverrides): Promise<string>;

  head(overrides?: CallOverrides): Promise<string>;

  returnCreditAccount(
    usedAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tail(overrides?: CallOverrides): Promise<string>;

  takeCreditAccount(
    _borrowedAmount: BigNumberish,
    _cumulativeIndexAtOpen: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    countCreditAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    countCreditAccountsInStock(overrides?: CallOverrides): Promise<BigNumber>;

    creditAccounts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNext(creditAccount: string, overrides?: CallOverrides): Promise<string>;

    head(overrides?: CallOverrides): Promise<string>;

    returnCreditAccount(
      usedAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tail(overrides?: CallOverrides): Promise<string>;

    takeCreditAccount(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    AccountMinerChanged(
      miner?: string | null
    ): TypedEventFilter<[string], { miner: string }>;

    InitializeCreditAccount(
      account?: string | null,
      creditManager?: string | null
    ): TypedEventFilter<
      [string, string],
      { account: string; creditManager: string }
    >;

    NewCreditAccount(
      account?: string | null
    ): TypedEventFilter<[string], { account: string }>;

    ReturnCreditAccount(
      account?: string | null
    ): TypedEventFilter<[string], { account: string }>;

    TakeForever(
      creditAccount?: string | null,
      to?: string | null
    ): TypedEventFilter<
      [string, string],
      { creditAccount: string; to: string }
    >;
  };

  estimateGas: {
    countCreditAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    countCreditAccountsInStock(overrides?: CallOverrides): Promise<BigNumber>;

    creditAccounts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNext(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    head(overrides?: CallOverrides): Promise<BigNumber>;

    returnCreditAccount(
      usedAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tail(overrides?: CallOverrides): Promise<BigNumber>;

    takeCreditAccount(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    countCreditAccounts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    countCreditAccountsInStock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditAccounts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNext(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    head(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    returnCreditAccount(
      usedAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tail(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    takeCreditAccount(
      _borrowedAmount: BigNumberish,
      _cumulativeIndexAtOpen: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
