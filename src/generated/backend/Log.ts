/**
 * Log generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {Log_Error} from "./Log_Error";
export interface Log {
    id?: number
    ip?: string
    userAgent?: string
    method?: string
    path?: string
    header?: string
    body?: string
    date?: string
    errors?: Array<Log_Error>
}
