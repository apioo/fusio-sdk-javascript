/**
 * Action generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import {Action_Config} from "./Action_Config";
export interface Action {
    id?: number
    status?: number
    name?: string
    class?: string
    async?: boolean
    engine?: string
    config?: Action_Config
}
