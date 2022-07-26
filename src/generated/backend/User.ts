/**
 * User generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {App} from "./App";
import {User_Attributes} from "./User_Attributes";
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
    attributes?: User_Attributes
    date?: string
}
