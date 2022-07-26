/**
 * BackendStatisticGroup generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendStatisticUsedPointsResource from "./BackendStatisticUsedPointsResource";
import BackendStatisticTimePerRouteResource from "./BackendStatisticTimePerRouteResource";
import BackendStatisticTimeAverageResource from "./BackendStatisticTimeAverageResource";
import BackendStatisticMostUsedRoutesResource from "./BackendStatisticMostUsedRoutesResource";
import BackendStatisticMostUsedAppsResource from "./BackendStatisticMostUsedAppsResource";
import BackendStatisticIssuedTokensResource from "./BackendStatisticIssuedTokensResource";
import BackendStatisticIncomingTransactionsResource from "./BackendStatisticIncomingTransactionsResource";
import BackendStatisticIncomingRequestsResource from "./BackendStatisticIncomingRequestsResource";
import BackendStatisticErrorsPerRouteResource from "./BackendStatisticErrorsPerRouteResource";
import BackendStatisticCountRequestsResource from "./BackendStatisticCountRequestsResource";

export default class BackendStatisticGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/statistic/used_points
     */
    public getBackendStatisticUsedPoints(): BackendStatisticUsedPointsResource
    {
        return new BackendStatisticUsedPointsResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/time_per_route
     */
    public getBackendStatisticTimePerRoute(): BackendStatisticTimePerRouteResource
    {
        return new BackendStatisticTimePerRouteResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/time_average
     */
    public getBackendStatisticTimeAverage(): BackendStatisticTimeAverageResource
    {
        return new BackendStatisticTimeAverageResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/most_used_routes
     */
    public getBackendStatisticMostUsedRoutes(): BackendStatisticMostUsedRoutesResource
    {
        return new BackendStatisticMostUsedRoutesResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/most_used_apps
     */
    public getBackendStatisticMostUsedApps(): BackendStatisticMostUsedAppsResource
    {
        return new BackendStatisticMostUsedAppsResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/issued_tokens
     */
    public getBackendStatisticIssuedTokens(): BackendStatisticIssuedTokensResource
    {
        return new BackendStatisticIssuedTokensResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/incoming_transactions
     */
    public getBackendStatisticIncomingTransactions(): BackendStatisticIncomingTransactionsResource
    {
        return new BackendStatisticIncomingTransactionsResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/incoming_requests
     */
    public getBackendStatisticIncomingRequests(): BackendStatisticIncomingRequestsResource
    {
        return new BackendStatisticIncomingRequestsResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/errors_per_route
     */
    public getBackendStatisticErrorsPerRoute(): BackendStatisticErrorsPerRouteResource
    {
        return new BackendStatisticErrorsPerRouteResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/statistic/count_requests
     */
    public getBackendStatisticCountRequests(): BackendStatisticCountRequestsResource
    {
        return new BackendStatisticCountRequestsResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
