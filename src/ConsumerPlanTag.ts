/**
 * ConsumerPlanTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {ConsumerPlan} from "./ConsumerPlan";
import {ConsumerPlanCollection} from "./ConsumerPlanCollection";

export class ConsumerPlanTag extends TagAbstract {
    /**
     * Returns a specific plan for the authenticated user
     *
     * @returns {Promise<ConsumerPlan>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(planId: string): Promise<ConsumerPlan> {
        const url = this.parser.url('/consumer/plan/$plan_id<[0-9]+|^~>', {
            'plan_id': planId,
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as ConsumerPlan;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Returns a paginated list of plans which are relevant to the authenticated user
     *
     * @returns {Promise<ConsumerPlanCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<ConsumerPlanCollection> {
        const url = this.parser.url('/consumer/plan', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as ConsumerPlanCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
