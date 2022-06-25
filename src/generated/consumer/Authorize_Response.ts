/**
 * Authorize_Response generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {Authorize_Response_Token} from "./Authorize_Response_Token";
export interface Authorize_Response {
    type?: string
    token?: Authorize_Response_Token
    code?: string
    redirectUri?: string
}
