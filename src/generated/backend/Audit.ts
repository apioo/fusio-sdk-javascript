/**
 * Audit generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


import {App} from "./App";
import {User} from "./User";
import {Audit_Object} from "./Audit_Object";

export interface Audit {
    id?: number
    app?: App
    user?: User
    event?: string
    ip?: string
    message?: string
    content?: Audit_Object
    date?: string
}

