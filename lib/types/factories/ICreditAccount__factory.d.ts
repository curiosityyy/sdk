import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICreditAccount, ICreditAccountInterface } from "../ICreditAccount";
export declare class ICreditAccount__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): ICreditAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICreditAccount;
}
