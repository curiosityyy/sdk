import { SupportedToken } from "./token";

export interface PriceFeed {
  token: string;
  priceFeed: string;
}

export enum OracleType {
  CHAINLINK_ORACLE,
  YEARN_TOKEN_ORACLE,
  CURVE_LP_ORACLE,
  YEARN_CURVE_LP_ORACLE,
  ZERO_ORACLE,
  LIKE_CURVE_LP_ORACLE
}

export type PriceFeedData =
  | {
      type: OracleType.CHAINLINK_ORACLE;
      address: string;
      kovan?: string;
    }
  | {
      type: OracleType.YEARN_TOKEN_ORACLE;
      token: SupportedToken;
      deployed?: string;
      deployedKovan?: string;
    }
  | {
      type: OracleType.CURVE_LP_ORACLE;
      assets: Array<SupportedToken>;
    }
  | {
      type: OracleType.YEARN_CURVE_LP_ORACLE;
      curveSymbol: SupportedToken;
    }
  | {
      type: OracleType.ZERO_ORACLE;
    }
  | {
      type: OracleType.LIKE_CURVE_LP_ORACLE;
      curveSymbol: SupportedToken;
    };

export type TokenPriceFeedData = {
  priceFeedETH?: PriceFeedData;
  priceFeedUSD?: PriceFeedData;
};
