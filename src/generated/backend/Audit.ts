/**
 * Audit generated on 2022-04-23
 * {@link https://sdkgen.app}
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
