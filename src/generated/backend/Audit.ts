/**
 * Audit automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {App} from "./App";
import {User} from "./User";
import {AuditObject} from "./AuditObject";
export interface Audit {
    id?: number
    app?: App
    user?: User
    event?: string
    ip?: string
    message?: string
    content?: AuditObject
    date?: string
}
