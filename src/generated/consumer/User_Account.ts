/**
 * User_Account generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {User_Attributes} from "./User_Attributes";
export interface User_Account {
    id?: number
    status?: number
    name?: string
    email?: string
    points?: number
    scopes?: Array<string>
    attributes?: User_Attributes
    date?: string
}
