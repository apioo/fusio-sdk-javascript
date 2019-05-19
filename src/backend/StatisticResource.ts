import * as StatisticCountRequests
    from "../../gen/backend_statistic_count_requests";
import * as StatisticErrorsPerRoute
    from "../../gen/backend_statistic_errors_per_route";
import * as StatisticIncomingRequests
    from "../../gen/backend_statistic_incoming_requests";
import * as StatisticIncomingTransactions
    from "../../gen/backend_statistic_incoming_transactions";
import * as StatisticIssuedTokens
    from "../../gen/backend_statistic_issued_tokens";
import * as StatisticMostUsedApps
    from "../../gen/backend_statistic_most_used_apps";
import * as StatisticMostUsedRoutes
    from "../../gen/backend_statistic_most_used_routes";
import * as StatisticTimeAverage
    from "../../gen/backend_statistic_time_average";
import * as StatisticTimePerRoute
    from "../../gen/backend_statistic_time_per_route";
import * as StatisticUsedPoints from "../../gen/backend_statistic_used_points";
import {BaseResource} from "../BaseResource";

export class StatisticResource extends BaseResource {
    public countRequests() {
        return new StatisticCountRequests.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public errorsPerRoute() {
        return new StatisticErrorsPerRoute.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public incomingRequests() {
        return new StatisticIncomingRequests.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public incomingTransactions() {
        return new StatisticIncomingTransactions.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public issuedTokens() {
        return new StatisticIssuedTokens.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public mostUsedApps() {
        return new StatisticMostUsedApps.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public mostUsedRoutes() {
        return new StatisticMostUsedRoutes.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public timeAverage() {
        return new StatisticTimeAverage.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public timePerRoute() {
        return new StatisticTimePerRoute.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public usedpoints() {
        return new StatisticUsedPoints.default(this.baseUrl, this.accessToken, this.httpClient);
    }

}
