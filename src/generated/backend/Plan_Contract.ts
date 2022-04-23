/**
 * Plan_Contract generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {User} from "./User";
import {Plan} from "./Plan";
export interface Plan_Contract {
    id?: number
    user?: User
    plan?: Plan
    status?: number
    amount?: number
    points?: number
    period?: number
    insertDate?: string
}
