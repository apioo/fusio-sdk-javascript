/**
 * Event_Subscription generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


import {Event_Subscription_Response} from "./Event_Subscription_Response";

export interface Event_Subscription {
    id?: number
    status?: number
    event?: string
    endpoint?: string
    responses?: Array<Event_Subscription_Response>
}

