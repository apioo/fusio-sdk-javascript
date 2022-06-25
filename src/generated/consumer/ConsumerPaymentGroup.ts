/**
 * ConsumerPaymentGroup generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerPaymentByProviderCheckoutResource from "./ConsumerPaymentByProviderCheckoutResource";
import ConsumerPaymentByProviderPortalResource from "./ConsumerPaymentByProviderPortalResource";

export default class ConsumerPaymentGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/payment/:provider/checkout
     */
    public getConsumerPaymentByProviderCheckout(provider: string): ConsumerPaymentByProviderCheckoutResource
    {
        return new ConsumerPaymentByProviderCheckoutResource(
            provider,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/payment/:provider/portal
     */
    public getConsumerPaymentByProviderPortal(provider: string): ConsumerPaymentByProviderPortalResource
    {
        return new ConsumerPaymentByProviderPortalResource(
            provider,
            this.baseUrl,
            this.httpClient
        );
    }

}
