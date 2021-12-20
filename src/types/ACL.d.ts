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

interface ACLInterface extends ethers.utils.Interface {
  functions: {
    "addPausableAdmin(address)": FunctionFragment;
    "addUnpausableAdmin(address)": FunctionFragment;
    "isConfigurator(address)": FunctionFragment;
    "isPausableAdmin(address)": FunctionFragment;
    "isUnpausableAdmin(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pausableAdminSet(address)": FunctionFragment;
    "removePausableAdmin(address)": FunctionFragment;
    "removeUnpausableAdmin(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpausableAdminSet(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPausableAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addUnpausableAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfigurator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPausableAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isUnpausableAdmin",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pausableAdminSet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePausableAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUnpausableAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unpausableAdminSet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addPausableAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUnpausableAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPausableAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUnpausableAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pausableAdminSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePausableAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUnpausableAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpausableAdminSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PausableAdminAdded(address)": EventFragment;
    "PausableAdminRemoved(address)": EventFragment;
    "UnpausableAdminAdded(address)": EventFragment;
    "UnpausableAdminRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausableAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausableAdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausableAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausableAdminRemoved"): EventFragment;
}

export class ACL extends BaseContract {
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

  interface: ACLInterface;

  functions: {
    addPausableAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addUnpausableAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isConfigurator(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isUnpausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removePausableAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeUnpausableAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addPausableAdmin(
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addUnpausableAdmin(
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isConfigurator(account: string, overrides?: CallOverrides): Promise<boolean>;

  isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;

  isUnpausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pausableAdminSet(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removePausableAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeUnpausableAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpausableAdminSet(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addPausableAdmin(
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addUnpausableAdmin(
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isConfigurator(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;

    isUnpausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pausableAdminSet(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removePausableAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeUnpausableAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    PausableAdminAdded(
      newAdmin?: string | null
    ): TypedEventFilter<[string], { newAdmin: string }>;

    PausableAdminRemoved(
      admin?: string | null
    ): TypedEventFilter<[string], { admin: string }>;

    UnpausableAdminAdded(
      newAdmin?: string | null
    ): TypedEventFilter<[string], { newAdmin: string }>;

    UnpausableAdminRemoved(
      admin?: string | null
    ): TypedEventFilter<[string], { admin: string }>;
  };

  estimateGas: {
    addPausableAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addUnpausableAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isConfigurator(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUnpausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removePausableAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeUnpausableAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addPausableAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addUnpausableAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isConfigurator(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUnpausableAdmin(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removePausableAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeUnpausableAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpausableAdminSet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
