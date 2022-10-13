/**
 * App automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {Metadata} from "./Metadata";
import {AppToken} from "./AppToken";
export interface App {
    id?: number
    userId?: number
    status?: number
    name?: string
    url?: string
    parameters?: string
    appKey?: string
    appSecret?: string
    metadata?: Metadata
    date?: string
    scopes?: Array<string>
    tokens?: Array<AppToken>
}
