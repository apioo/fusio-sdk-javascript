/**
 * BackendScope automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {BackendScopeOperation} from "./BackendScopeOperation";
import {CommonMetadata} from "./CommonMetadata";

export interface BackendScope {
    id?: number
    name?: string
    description?: string
    operations?: Array<BackendScopeOperation>
    metadata?: CommonMetadata
}

