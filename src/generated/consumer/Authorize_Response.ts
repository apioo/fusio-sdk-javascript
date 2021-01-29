/**
 * Authorize_Response generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


import {Authorize_Response_Token} from "./Authorize_Response_Token";

export interface Authorize_Response {
    type?: string
    token?: Authorize_Response_Token
    code?: string
    redirectUri?: string
}

