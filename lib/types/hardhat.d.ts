/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "CurveV1Adapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurveV1Adapter__factory>;
    getContractFactory(
      name: "UniswapV2Adapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Adapter__factory>;
    getContractFactory(
      name: "UniswapV3Adapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Adapter__factory>;
    getContractFactory(
      name: "YearnAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnAdapter__factory>;
    getContractFactory(
      name: "AccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccountFactory__factory>;
    getContractFactory(
      name: "AccountMining",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccountMining__factory>;
    getContractFactory(
      name: "ACL",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ACL__factory>;
    getContractFactory(
      name: "ACLTrait",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ACLTrait__factory>;
    getContractFactory(
      name: "AddressProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AddressProvider__factory>;
    getContractFactory(
      name: "ContractsRegister",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContractsRegister__factory>;
    getContractFactory(
      name: "DataCompressor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DataCompressor__factory>;
    getContractFactory(
      name: "WETHGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETHGateway__factory>;
    getContractFactory(
      name: "CreditAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreditAccount__factory>;
    getContractFactory(
      name: "CreditFilter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreditFilter__factory>;
    getContractFactory(
      name: "CreditManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreditManager__factory>;
    getContractFactory(
      name: "LeveragedActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LeveragedActions__factory>;
    getContractFactory(
      name: "AdaptersDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AdaptersDeployer__factory>;
    getContractFactory(
      name: "GenesisDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GenesisDeployer__factory>;
    getContractFactory(
      name: "PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolDeployer__factory>;
    getContractFactory(
      name: "FuzzHarness",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FuzzHarness__factory>;
    getContractFactory(
      name: "ICurvePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurvePool__factory>;
    getContractFactory(
      name: "IQuoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoter__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IYVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYVault__factory>;
    getContractFactory(
      name: "IAppAddressProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppAddressProvider__factory>;
    getContractFactory(
      name: "IAppCreditManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppCreditManager__factory>;
    getContractFactory(
      name: "IAppERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppERC20__factory>;
    getContractFactory(
      name: "IAppPoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppPoolService__factory>;
    getContractFactory(
      name: "IDataCompressor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDataCompressor__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IAccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccountFactory__factory>;
    getContractFactory(
      name: "IAccountMiner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccountMiner__factory>;
    getContractFactory(
      name: "ICreditAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreditAccount__factory>;
    getContractFactory(
      name: "ICreditFilter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreditFilter__factory>;
    getContractFactory(
      name: "ICreditManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreditManager__factory>;
    getContractFactory(
      name: "IGearToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGearToken__factory>;
    getContractFactory(
      name: "IInterestRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInterestRateModel__factory>;
    getContractFactory(
      name: "IMerkleDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMerkleDistributor__factory>;
    getContractFactory(
      name: "IPoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolService__factory>;
    getContractFactory(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracle__factory>;
    getContractFactory(
      name: "IWETHGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETHGateway__factory>;
    getContractFactory(
      name: "Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Errors__factory>;
    getContractFactory(
      name: "FlashLoanAttacker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashLoanAttacker__factory>;
    getContractFactory(
      name: "ACLTraitTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ACLTraitTest__factory>;
    getContractFactory(
      name: "CreditFilterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreditFilterMock__factory>;
    getContractFactory(
      name: "CreditManagerMockForFilter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreditManagerMockForFilter__factory>;
    getContractFactory(
      name: "ExecutorMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExecutorMock__factory>;
    getContractFactory(
      name: "TreasuryMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TreasuryMock__factory>;
    getContractFactory(
      name: "CurveMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurveMock__factory>;
    getContractFactory(
      name: "UniswapRouterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapRouterMock__factory>;
    getContractFactory(
      name: "YearnMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnMock__factory>;
    getContractFactory(
      name: "PercentageMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PercentageMathTest__factory>;
    getContractFactory(
      name: "WadRayMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WadRayMathTest__factory>;
    getContractFactory(
      name: "ChainlinkPriceFeedMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkPriceFeedMock__factory>;
    getContractFactory(
      name: "CreditManagerMockForPoolTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreditManagerMockForPoolTest__factory>;
    getContractFactory(
      name: "MockPoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockPoolService__factory>;
    getContractFactory(
      name: "TestPoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestPoolService__factory>;
    getContractFactory(
      name: "ERC20BlockingMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20BlockingMock__factory>;
    getContractFactory(
      name: "TokenFeeMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenFeeMock__factory>;
    getContractFactory(
      name: "TokenMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenMock__factory>;
    getContractFactory(
      name: "WETHMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETHMock__factory>;
    getContractFactory(
      name: "PriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceOracle__factory>;
    getContractFactory(
      name: "YearnPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnPriceFeed__factory>;
    getContractFactory(
      name: "LinearInterestRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinearInterestRateModel__factory>;
    getContractFactory(
      name: "PoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolService__factory>;
    getContractFactory(
      name: "Multicall2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall2__factory>;
    getContractFactory(
      name: "PathFinder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PathFinder__factory>;
    getContractFactory(
      name: "DieselToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DieselToken__factory>;
    getContractFactory(
      name: "GearToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GearToken__factory>;
    getContractFactory(
      name: "TokenDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenDistributor__factory>;
    getContractFactory(
      name: "StepVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StepVesting__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
