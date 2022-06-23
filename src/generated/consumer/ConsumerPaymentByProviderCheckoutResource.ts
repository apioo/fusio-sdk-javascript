/**
 * ConsumerPaymentByProviderCheckoutResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Payment_Checkout_Request} from "./Payment_Checkout_Request";
import {Payment_Checkout_Response} from "./Payment_Checkout_Response";

export default class ConsumerPaymentByProviderCheckoutResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/consumer/payment/"+provider+"/checkout";
    }

    /**
     * @param {Payment_Checkout_Request} data
     * @returns {Promise<AxiosResponse<Payment_Checkout_Response>>}
     */
    public async consumerActionPaymentCheckout(data: Payment_Checkout_Request): Promise<AxiosResponse<Payment_Checkout_Response>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Payment_Checkout_Response>(this.url, data, params);
    }

}
