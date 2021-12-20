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

interface AddressProviderInterface extends ethers.utils.Interface {
  functions: {
    "ACCOUNT_FACTORY()": FunctionFragment;
    "ACL()": FunctionFragment;
    "CONTRACTS_REGISTER()": FunctionFragment;
    "DATA_COMPRESSOR()": FunctionFragment;
    "GEAR_TOKEN()": FunctionFragment;
    "LEVERAGED_ACTIONS()": FunctionFragment;
    "PRICE_ORACLE()": FunctionFragment;
    "TREASURY_CONTRACT()": FunctionFragment;
    "WETH_GATEWAY()": FunctionFragment;
    "WETH_TOKEN()": FunctionFragment;
    "addresses(bytes32)": FunctionFragment;
    "getACL()": FunctionFragment;
    "getAccountFactory()": FunctionFragment;
    "getContractsRegister()": FunctionFragment;
    "getDataCompressor()": FunctionFragment;
    "getGearToken()": FunctionFragment;
    "getLeveragedActions()": FunctionFragment;
    "getPriceOracle()": FunctionFragment;
    "getTreasuryContract()": FunctionFragment;
    "getWETHGateway()": FunctionFragment;
    "getWethToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setACL(address)": FunctionFragment;
    "setAccountFactory(address)": FunctionFragment;
    "setContractsRegister(address)": FunctionFragment;
    "setDataCompressor(address)": FunctionFragment;
    "setGearToken(address)": FunctionFragment;
    "setLeveragedActions(address)": FunctionFragment;
    "setPriceOracle(address)": FunctionFragment;
    "setTreasuryContract(address)": FunctionFragment;
    "setWETHGateway(address)": FunctionFragment;
    "setWethToken(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ACCOUNT_FACTORY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ACL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CONTRACTS_REGISTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DATA_COMPRESSOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GEAR_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LEVERAGED_ACTIONS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_ORACLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TREASURY_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WETH_GATEWAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WETH_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addresses",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getACL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAccountFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractsRegister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDataCompressor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGearToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLeveragedActions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTreasuryContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWETHGateway",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWethToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setACL", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAccountFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractsRegister",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDataCompressor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setGearToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLeveragedActions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setWETHGateway",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setWethToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "ACCOUNT_FACTORY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ACL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CONTRACTS_REGISTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DATA_COMPRESSOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GEAR_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LEVERAGED_ACTIONS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_ORACLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TREASURY_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WETH_GATEWAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addresses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getACL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccountFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataCompressor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGearToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLeveragedActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTreasuryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWETHGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWethToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setACL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAccountFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDataCompressor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGearToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLeveragedActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWETHGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWethToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "AddressSet(bytes32,address)": EventFragment;
    "Claimed(uint256,address,uint256,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class AddressProvider extends BaseContract {
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

  interface: AddressProviderInterface;

  functions: {
    ACCOUNT_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    ACL(overrides?: CallOverrides): Promise<[string]>;

    CONTRACTS_REGISTER(overrides?: CallOverrides): Promise<[string]>;

    DATA_COMPRESSOR(overrides?: CallOverrides): Promise<[string]>;

    GEAR_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    LEVERAGED_ACTIONS(overrides?: CallOverrides): Promise<[string]>;

    PRICE_ORACLE(overrides?: CallOverrides): Promise<[string]>;

    TREASURY_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    WETH_GATEWAY(overrides?: CallOverrides): Promise<[string]>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getACL(overrides?: CallOverrides): Promise<[string]>;

    getAccountFactory(overrides?: CallOverrides): Promise<[string]>;

    getContractsRegister(overrides?: CallOverrides): Promise<[string]>;

    getDataCompressor(overrides?: CallOverrides): Promise<[string]>;

    getGearToken(overrides?: CallOverrides): Promise<[string]>;

    getLeveragedActions(overrides?: CallOverrides): Promise<[string]>;

    getPriceOracle(overrides?: CallOverrides): Promise<[string]>;

    getTreasuryContract(overrides?: CallOverrides): Promise<[string]>;

    getWETHGateway(overrides?: CallOverrides): Promise<[string]>;

    getWethToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setACL(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAccountFactory(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContractsRegister(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDataCompressor(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGearToken(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLeveragedActions(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceOracle(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryContract(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWETHGateway(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWethToken(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ACCOUNT_FACTORY(overrides?: CallOverrides): Promise<string>;

  ACL(overrides?: CallOverrides): Promise<string>;

  CONTRACTS_REGISTER(overrides?: CallOverrides): Promise<string>;

  DATA_COMPRESSOR(overrides?: CallOverrides): Promise<string>;

  GEAR_TOKEN(overrides?: CallOverrides): Promise<string>;

  LEVERAGED_ACTIONS(overrides?: CallOverrides): Promise<string>;

  PRICE_ORACLE(overrides?: CallOverrides): Promise<string>;

  TREASURY_CONTRACT(overrides?: CallOverrides): Promise<string>;

  WETH_GATEWAY(overrides?: CallOverrides): Promise<string>;

  WETH_TOKEN(overrides?: CallOverrides): Promise<string>;

  addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  getACL(overrides?: CallOverrides): Promise<string>;

  getAccountFactory(overrides?: CallOverrides): Promise<string>;

  getContractsRegister(overrides?: CallOverrides): Promise<string>;

  getDataCompressor(overrides?: CallOverrides): Promise<string>;

  getGearToken(overrides?: CallOverrides): Promise<string>;

  getLeveragedActions(overrides?: CallOverrides): Promise<string>;

  getPriceOracle(overrides?: CallOverrides): Promise<string>;

  getTreasuryContract(overrides?: CallOverrides): Promise<string>;

  getWETHGateway(overrides?: CallOverrides): Promise<string>;

  getWethToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setACL(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAccountFactory(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContractsRegister(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDataCompressor(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGearToken(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLeveragedActions(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceOracle(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryContract(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWETHGateway(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWethToken(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ACCOUNT_FACTORY(overrides?: CallOverrides): Promise<string>;

    ACL(overrides?: CallOverrides): Promise<string>;

    CONTRACTS_REGISTER(overrides?: CallOverrides): Promise<string>;

    DATA_COMPRESSOR(overrides?: CallOverrides): Promise<string>;

    GEAR_TOKEN(overrides?: CallOverrides): Promise<string>;

    LEVERAGED_ACTIONS(overrides?: CallOverrides): Promise<string>;

    PRICE_ORACLE(overrides?: CallOverrides): Promise<string>;

    TREASURY_CONTRACT(overrides?: CallOverrides): Promise<string>;

    WETH_GATEWAY(overrides?: CallOverrides): Promise<string>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<string>;

    addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    getACL(overrides?: CallOverrides): Promise<string>;

    getAccountFactory(overrides?: CallOverrides): Promise<string>;

    getContractsRegister(overrides?: CallOverrides): Promise<string>;

    getDataCompressor(overrides?: CallOverrides): Promise<string>;

    getGearToken(overrides?: CallOverrides): Promise<string>;

    getLeveragedActions(overrides?: CallOverrides): Promise<string>;

    getPriceOracle(overrides?: CallOverrides): Promise<string>;

    getTreasuryContract(overrides?: CallOverrides): Promise<string>;

    getWETHGateway(overrides?: CallOverrides): Promise<string>;

    getWethToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setACL(_address: string, overrides?: CallOverrides): Promise<void>;

    setAccountFactory(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setContractsRegister(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDataCompressor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGearToken(_address: string, overrides?: CallOverrides): Promise<void>;

    setLeveragedActions(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceOracle(_address: string, overrides?: CallOverrides): Promise<void>;

    setTreasuryContract(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWETHGateway(_address: string, overrides?: CallOverrides): Promise<void>;

    setWethToken(_address: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AddressSet(
      service?: BytesLike | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { service: string; newAddress: string }
    >;

    Claimed(
      user_id?: null,
      account?: null,
      amount?: null,
      leaf?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { user_id: BigNumber; account: string; amount: BigNumber; leaf: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    ACCOUNT_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    ACL(overrides?: CallOverrides): Promise<BigNumber>;

    CONTRACTS_REGISTER(overrides?: CallOverrides): Promise<BigNumber>;

    DATA_COMPRESSOR(overrides?: CallOverrides): Promise<BigNumber>;

    GEAR_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    LEVERAGED_ACTIONS(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_ORACLE(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    WETH_GATEWAY(overrides?: CallOverrides): Promise<BigNumber>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getACL(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getContractsRegister(overrides?: CallOverrides): Promise<BigNumber>;

    getDataCompressor(overrides?: CallOverrides): Promise<BigNumber>;

    getGearToken(overrides?: CallOverrides): Promise<BigNumber>;

    getLeveragedActions(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getTreasuryContract(overrides?: CallOverrides): Promise<BigNumber>;

    getWETHGateway(overrides?: CallOverrides): Promise<BigNumber>;

    getWethToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setACL(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAccountFactory(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContractsRegister(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDataCompressor(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGearToken(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLeveragedActions(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceOracle(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryContract(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWETHGateway(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWethToken(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ACCOUNT_FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CONTRACTS_REGISTER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DATA_COMPRESSOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GEAR_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LEVERAGED_ACTIONS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRICE_ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TREASURY_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH_GATEWAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContractsRegister(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDataCompressor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGearToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLeveragedActions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTreasuryContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWETHGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setACL(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAccountFactory(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContractsRegister(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDataCompressor(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGearToken(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLeveragedActions(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceOracle(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryContract(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWETHGateway(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWethToken(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
