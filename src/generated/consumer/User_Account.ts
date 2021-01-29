/**
 * User_Account generated on 2021-01-29
 * {@link https://github.com/apioo}
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

