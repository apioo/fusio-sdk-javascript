import {AxiosInstance} from "axios";
import {BaseResource} from "./BaseResource";
import {ActionResource} from "./backend/ActionResource";
import {ConnectionResource} from "./backend/ConnectionResource";
import {AppResource} from "./backend/AppResource";
import {AuditResource} from "./backend/AuditResource";
import {ConfigResource} from "./backend/ConfigResource";
import {CronjobResource} from "./backend/CronjobResource";
import {DashboardResource} from "./backend/DashboardResource";
import {EventResource} from "./backend/EventResource";
import {LogErrorResource} from "./backend/LogErrorResource";
import {LogResource} from "./backend/LogResource";
import {PlanContractResource} from "./backend/PlanContractResource";
import {PlanInvoiceResource} from "./backend/PlanInvoiceResource";
import {PlanResource} from "./backend/PlanResource";
import {RateResource} from "./backend/RateResource";
import {RoutesResource} from "./backend/RoutesResource";
import {SchemaResource} from "./backend/SchemaResource";
import {ScopeResource} from "./backend/ScopeResource";
import {StatisticResource} from "./backend/StatisticResource";
import {TransactionResource} from "./backend/TransactionResource";
import {UserResource} from "./backend/UserResource";
import {TokenResource} from "./backend/TokenResource";

export class Backend extends BaseResource
{
    public action: ActionResource;
    public app: AppResource;
    public audit: AuditResource;
    public config: ConfigResource;
    public connection: ConnectionResource;
    public cronjob: CronjobResource;
    public dashboard: DashboardResource;
    public event: EventResource;
    public logError: LogErrorResource;
    public log: LogResource;
    public planContract: PlanContractResource;
    public planInvoice: PlanInvoiceResource;
    public plan: PlanResource;
    public rate: RateResource;
    public routes: RoutesResource;
    public schema: SchemaResource;
    public scope: ScopeResource;
    public statistic: StatisticResource;
    public token: TokenResource;
    public transaction: TransactionResource;
    public user: UserResource;

    public constructor(baseUrl: string, accessToken: string, httpClient: AxiosInstance)
    {
        super(baseUrl, accessToken, httpClient);

        this.action = new ActionResource(this.baseUrl, this.accessToken, this.httpClient);
        this.app = new AppResource(this.baseUrl, this.accessToken, this.httpClient);
        this.audit = new AuditResource(this.baseUrl, this.accessToken, this.httpClient);
        this.config = new ConfigResource(this.baseUrl, this.accessToken, this.httpClient);
        this.connection = new ConnectionResource(this.baseUrl, this.accessToken, this.httpClient);
        this.cronjob = new CronjobResource(this.baseUrl, this.accessToken, this.httpClient);
        this.dashboard = new DashboardResource(this.baseUrl, this.accessToken, this.httpClient);
        this.event = new EventResource(this.baseUrl, this.accessToken, this.httpClient);
        this.logError = new LogErrorResource(this.baseUrl, this.accessToken, this.httpClient);
        this.log = new LogResource(this.baseUrl, this.accessToken, this.httpClient);
        this.planContract = new PlanContractResource(this.baseUrl, this.accessToken, this.httpClient);
        this.planInvoice = new PlanInvoiceResource(this.baseUrl, this.accessToken, this.httpClient);
        this.plan = new PlanResource(this.baseUrl, this.accessToken, this.httpClient);
        this.rate = new RateResource(this.baseUrl, this.accessToken, this.httpClient);
        this.routes = new RoutesResource(this.baseUrl, this.accessToken, this.httpClient);
        this.schema = new SchemaResource(this.baseUrl, this.accessToken, this.httpClient);
        this.scope = new ScopeResource(this.baseUrl, this.accessToken, this.httpClient);
        this.statistic = new StatisticResource(this.baseUrl, this.accessToken, this.httpClient);
        this.token = new TokenResource(this.baseUrl, this.accessToken, this.httpClient);
        this.transaction = new TransactionResource(this.baseUrl, this.accessToken, this.httpClient);
        this.user = new UserResource(this.baseUrl, this.accessToken, this.httpClient);
    }
}
