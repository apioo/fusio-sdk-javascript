/**
 * Plan_Contract generated on 2021-01-29
 * {@link https://github.com/apioo}
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

