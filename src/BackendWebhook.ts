/**
 * BackendWebhook automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {BackendWebhookResponse} from "./BackendWebhookResponse";

export interface BackendWebhook {
    id?: number
    eventId?: number
    userId?: number
    name?: string
    endpoint?: string
    responses?: Array<BackendWebhookResponse>
}

