/**
 * Rate generated on 2022-07-31
 * {@link https://sdkgen.app}
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
