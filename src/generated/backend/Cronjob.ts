/**
 * Cronjob generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import {Cronjob_Error} from "./Cronjob_Error";
export interface Cronjob {
    id?: number
    name?: string
    cron?: string
    action?: string
    executeDate?: string
    exitCode?: number
    errors?: Array<Cronjob_Error>
}
