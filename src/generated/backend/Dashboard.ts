/**
 * Dashboard generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {Statistic_Chart} from "./Statistic_Chart";
import {Dashboard_Apps} from "./Dashboard_Apps";
import {Dashboard_Requests} from "./Dashboard_Requests";
import {Dashboard_Users} from "./Dashboard_Users";
import {Dashboard_Transactions} from "./Dashboard_Transactions";
export interface Dashboard {
    errorsPerRoute?: Statistic_Chart
    incomingRequests?: Statistic_Chart
    incomingTransactions?: Statistic_Chart
    mostUsedRoutes?: Statistic_Chart
    timePerRoute?: Statistic_Chart
    latestApps?: Dashboard_Apps
    latestRequests?: Dashboard_Requests
    latestUsers?: Dashboard_Users
    latestTransactions?: Dashboard_Transactions
}
