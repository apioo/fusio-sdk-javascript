/**
 * App generated on 2021-01-29
 * {@link https://github.com/apioo}
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

