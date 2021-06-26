/**
 * Log generated on 2021-06-26
 * {@link https://github.com/apioo}
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
