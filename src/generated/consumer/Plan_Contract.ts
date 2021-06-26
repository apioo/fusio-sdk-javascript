/**
 * Plan_Contract generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import {Plan} from "./Plan";
import {Plan_Invoice} from "./Plan_Invoice";
export interface Plan_Contract {
    id?: number
    status?: number
    plan?: Plan
    amount?: number
    points?: number
    period?: number
    invoices?: Array<Plan_Invoice>
    insertDate?: string
}
