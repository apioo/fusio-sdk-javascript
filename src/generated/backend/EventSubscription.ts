/**
 * EventSubscription automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {EventSubscriptionResponse} from "./EventSubscriptionResponse";
export interface EventSubscription {
    id?: number
    eventId?: number
    userId?: number
    endpoint?: string
    responses?: Array<EventSubscriptionResponse>
}
