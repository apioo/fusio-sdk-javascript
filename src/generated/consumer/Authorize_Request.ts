/**
 * Authorize_Request generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


export interface Authorize_Request {
    responseType: string
    clientId: string
    redirectUri?: string
    scope: string
    state?: string
    allow: boolean
}
