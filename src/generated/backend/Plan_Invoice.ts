/**
 * Plan_Invoice generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {User} from "./User";
export interface Plan_Invoice {
    id?: number
    contractId?: number
    user?: User
    transactionId?: number
    prevId?: number
    displayId?: string
    status?: number
    amount?: number
    points?: number
    fromDate?: string
    toDate?: string
    payDate?: string
    insertDate?: string
}
