/**
 * App generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {App_Token} from "./App_Token";
export interface App {
    id?: number
    userId?: number
    status?: number
    name?: string
    url?: string
    parameters?: string
    appKey?: string
    appSecret?: string
    date?: string
    scopes?: Array<string>
    tokens?: Array<App_Token>
}
