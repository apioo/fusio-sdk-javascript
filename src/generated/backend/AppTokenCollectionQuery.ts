/**
 * AppTokenCollectionQuery automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {CollectionQuery} from "./CollectionQuery";
export interface AppTokenCollectionQuery extends CollectionQuery {
    from?: string
    to?: string
    appId?: number
    userId?: number
    status?: number
    scope?: string
    ip?: string
    search?: string
}
