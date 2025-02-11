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

interface PathFinderInterface extends ethers.utils.Interface {
  functions: {
    "addressProvider()": FunctionFragment;
    "bestUniPath(uint256,address,uint256,address,address,uint256,address[])": FunctionFragment;
    "contractsRegister()": FunctionFragment;
    "convertPathToPathV3(address[],uint256)": FunctionFragment;
    "ethToUsdPriceFeed()": FunctionFragment;
    "getClosurePaths(address,address,address,address[])": FunctionFragment;
    "getPrices(address[])": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "version()": FunctionFragment;
    "wethToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bestUniPath",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      string,
      string,
      BigNumberish,
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "contractsRegister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convertPathToPathV3",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ethToUsdPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClosurePaths",
    values: [string, string, string, string[]]
  ): string;
  encodeFunctionData(functionFragment: "getPrices", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bestUniPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertPathToPathV3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethToUsdPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClosurePaths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;

  events: {};
}

export class PathFinder extends BaseContract {
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

  interface: PathFinderInterface;

  functions: {
    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    bestUniPath(
      swapInterface: BigNumberish,
      router: string,
      swapType: BigNumberish,
      from: string,
      to: string,
      amount: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractsRegister(overrides?: CallOverrides): Promise<[string]>;

    convertPathToPathV3(
      path: string[],
      swapType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    ethToUsdPriceFeed(overrides?: CallOverrides): Promise<[string]>;

    getClosurePaths(
      router: string,
      _creditManager: string,
      borrower: string,
      connectorTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPrices(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { prices: BigNumber[] }>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    wethToken(overrides?: CallOverrides): Promise<[string]>;
  };

  addressProvider(overrides?: CallOverrides): Promise<string>;

  bestUniPath(
    swapInterface: BigNumberish,
    router: string,
    swapType: BigNumberish,
    from: string,
    to: string,
    amount: BigNumberish,
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractsRegister(overrides?: CallOverrides): Promise<string>;

  convertPathToPathV3(
    path: string[],
    swapType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  ethToUsdPriceFeed(overrides?: CallOverrides): Promise<string>;

  getClosurePaths(
    router: string,
    _creditManager: string,
    borrower: string,
    connectorTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPrices(tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  wethToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addressProvider(overrides?: CallOverrides): Promise<string>;

    bestUniPath(
      swapInterface: BigNumberish,
      router: string,
      swapType: BigNumberish,
      from: string,
      to: string,
      amount: BigNumberish,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber, BigNumber] & {
        path: string[];
        rate: BigNumber;
        expectedAmount: BigNumber;
      }
    >;

    contractsRegister(overrides?: CallOverrides): Promise<string>;

    convertPathToPathV3(
      path: string[],
      swapType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    ethToUsdPriceFeed(overrides?: CallOverrides): Promise<string>;

    getClosurePaths(
      router: string,
      _creditManager: string,
      borrower: string,
      connectorTokens: string[],
      overrides?: CallOverrides
    ): Promise<
      ([string[], BigNumber, BigNumber] & {
        path: string[];
        rate: BigNumber;
        expectedAmount: BigNumber;
      })[]
    >;

    getPrices(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    bestUniPath(
      swapInterface: BigNumberish,
      router: string,
      swapType: BigNumberish,
      from: string,
      to: string,
      amount: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractsRegister(overrides?: CallOverrides): Promise<BigNumber>;

    convertPathToPathV3(
      path: string[],
      swapType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ethToUsdPriceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    getClosurePaths(
      router: string,
      _creditManager: string,
      borrower: string,
      connectorTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPrices(tokens: string[], overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bestUniPath(
      swapInterface: BigNumberish,
      router: string,
      swapType: BigNumberish,
      from: string,
      to: string,
      amount: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convertPathToPathV3(
      path: string[],
      swapType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethToUsdPriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClosurePaths(
      router: string,
      _creditManager: string,
      borrower: string,
      connectorTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPrices(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
