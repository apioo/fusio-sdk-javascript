/**
 * Rate generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import {Rate_Allocation} from "./Rate_Allocation";
export interface Rate {
    id?: number
    priority?: number
    name?: string
    rateLimit?: number
    timespan?: string
    allocation?: Array<Rate_Allocation>
}
