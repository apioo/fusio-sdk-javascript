/**
 * Event_Subscription generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {Event_Subscription_Response} from "./Event_Subscription_Response";
export interface Event_Subscription {
    id?: number
    status?: number
    event?: string
    endpoint?: string
    responses?: Array<Event_Subscription_Response>
}
