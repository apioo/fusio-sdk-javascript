/**
 * User generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import {App} from "./App";
import {User_Attributes} from "./User_Attributes";
export interface User {
    id?: number
    roleId?: number
    status?: number
    name?: string
    email?: string
    points?: number
    scopes?: Array<string>
    apps?: Array<App>
    attributes?: User_Attributes
    date?: string
}
