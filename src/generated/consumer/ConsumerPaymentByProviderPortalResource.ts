/**
 * ConsumerPaymentByProviderPortalResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Payment_Portal_Response} from "./Payment_Portal_Response";

export default class ConsumerPaymentByProviderPortalResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/consumer/payment/"+provider+"/portal";
    }

    /**
     * @returns {Promise<AxiosResponse<Payment_Portal_Response>>}
     */
    public async consumerActionPaymentPortal(): Promise<AxiosResponse<Payment_Portal_Response>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Payment_Portal_Response>(this.url, null, params);
    }

}
