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

interface CreditManagerMockForFilterInterface extends ethers.utils.Interface {
  functions: {
    "calcLinearCumulative_RAY()": FunctionFragment;
    "checkAndEnableToken(address,address)": FunctionFragment;
    "checkCollateralChange(address,address,address,uint256,uint256)": FunctionFragment;
    "connectFilter(address,address)": FunctionFragment;
    "feeInterest()": FunctionFragment;
    "feeLiquidation()": FunctionFragment;
    "feeSuccess()": FunctionFragment;
    "healthFactor()": FunctionFragment;
    "initEnabledTokens(address)": FunctionFragment;
    "liquidationDiscount()": FunctionFragment;
    "maxLeverageFactor()": FunctionFragment;
    "minHealthFactor()": FunctionFragment;
    "poolService()": FunctionFragment;
    "setFeeLiquidation(uint256)": FunctionFragment;
    "setLinearCumulative(uint256)": FunctionFragment;
    "setLiquidationDiscount(uint256)": FunctionFragment;
    "setMaxLeverageFactor(uint256)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "updateUnderlyingTokenLiquidationThreshold()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calcLinearCumulative_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkAndEnableToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkCollateralChange",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "connectFilter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "feeInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeLiquidation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeSuccess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "healthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initEnabledTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationDiscount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxLeverageFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minHealthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolService",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeLiquidation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLinearCumulative",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidationDiscount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxLeverageFactor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateUnderlyingTokenLiquidationThreshold",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calcLinearCumulative_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAndEnableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkCollateralChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "connectFilter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeSuccess", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "healthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initEnabledTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverageFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLinearCumulative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidationDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxLeverageFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUnderlyingTokenLiquidationThreshold",
    data: BytesLike
  ): Result;

  events: {};
}

export class CreditManagerMockForFilter extends BaseContract {
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

  interface: CreditManagerMockForFilterInterface;

  functions: {
    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    connectFilter(
      _creditFilterAddress: string,
      _underlyingToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeLiquidation(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeSuccess(overrides?: CallOverrides): Promise<[BigNumber]>;

    healthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidationDiscount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    minHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolService(overrides?: CallOverrides): Promise<[string]>;

    setFeeLiquidation(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLinearCumulative(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidationDiscount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxLeverageFactor(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  checkAndEnableToken(
    creditAccount: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkCollateralChange(
    creditAccount: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    amountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  connectFilter(
    _creditFilterAddress: string,
    _underlyingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeInterest(overrides?: CallOverrides): Promise<BigNumber>;

  feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;

  feeSuccess(overrides?: CallOverrides): Promise<BigNumber>;

  healthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  initEnabledTokens(
    creditAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;

  maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

  minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  poolService(overrides?: CallOverrides): Promise<string>;

  setFeeLiquidation(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLinearCumulative(
    newValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidationDiscount(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxLeverageFactor(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  updateUnderlyingTokenLiquidationThreshold(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    connectFilter(
      _creditFilterAddress: string,
      _underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    feeInterest(overrides?: CallOverrides): Promise<BigNumber>;

    feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;

    feeSuccess(overrides?: CallOverrides): Promise<BigNumber>;

    healthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    poolService(overrides?: CallOverrides): Promise<string>;

    setFeeLiquidation(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLinearCumulative(
      newValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationDiscount(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxLeverageFactor(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    connectFilter(
      _creditFilterAddress: string,
      _underlyingToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeInterest(overrides?: CallOverrides): Promise<BigNumber>;

    feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;

    feeSuccess(overrides?: CallOverrides): Promise<BigNumber>;

    healthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    poolService(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeLiquidation(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLinearCumulative(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidationDiscount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxLeverageFactor(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcLinearCumulative_RAY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    connectFilter(
      _creditFilterAddress: string,
      _underlyingToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeLiquidation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeSuccess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    healthFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidationDiscount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minHealthFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeLiquidation(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLinearCumulative(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationDiscount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxLeverageFactor(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
