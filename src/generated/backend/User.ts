/**
 * User automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {App} from "./App";
import {Metadata} from "./Metadata";
export interface User {
    id?: number
    roleId?: number
    planId?: number
    status?: number
    name?: string
    email?: string
    points?: number
    scopes?: Array<string>
    apps?: Array<App>
    metadata?: Metadata
    date?: string
}
