/**
 * Schema generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {Schema_Source} from "./Schema_Source";
import {Schema_Form} from "./Schema_Form";
export interface Schema {
    id?: number
    status?: number
    name?: string
    source?: Schema_Source
    form?: Schema_Form
}
