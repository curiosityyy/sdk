import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPoolService, IPoolServiceInterface } from "../IPoolService";
export declare class IPoolService__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IPoolServiceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPoolService;
}
