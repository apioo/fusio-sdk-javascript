/**
 * BackendConnection automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {BackendConnectionConfig} from "./BackendConnectionConfig";
import {CommonMetadata} from "./CommonMetadata";
export interface BackendConnection {
    id?: number
    name?: string
    class?: string
    oauth2?: boolean
    config?: BackendConnectionConfig
    metadata?: CommonMetadata
}
