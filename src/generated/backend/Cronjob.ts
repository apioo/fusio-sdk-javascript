/**
 * Cronjob generated on 2022-07-01
 * {@link https://sdkgen.app}
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
