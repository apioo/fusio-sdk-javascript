import {AxiosInstance} from "axios";
import {BaseResource} from "./BaseResource";
import {AccountResource} from "./consumer/AccountResource";
import {AppResource} from "./consumer/AppResource";
import {EventResource} from "./consumer/EventResource";
import {GrantResource} from "./consumer/GrantResource";
import {LoginResource} from "./consumer/LoginResource";
import {PlanContractResource} from "./consumer/PlanContractResource";
import {PlanResource} from "./consumer/PlanResource";
import {ActivateResource} from "./consumer/ActivateResource";
import {RegisterResource} from "./consumer/RegisterResource";
import {ScopeResource} from "./consumer/ScopeResource";
import {SubscriptionResource} from "./consumer/SubscriptionResource";
import {TransactionResource} from "./consumer/TransactionResource";
import {TokenResource} from "./consumer/TokenResource";

export class Consumer extends BaseResource {
    public account: AccountResource;
    public activate: ActivateResource;
    public app: AppResource;
    public event: EventResource;
    public grant: GrantResource;
    public login: LoginResource;
    public planContract: PlanContractResource;
    public plan: PlanResource;
    public register: RegisterResource;
    public scope: ScopeResource;
    public subscription: SubscriptionResource;
    public token: TokenResource;
    public transaction: TransactionResource;

    public constructor(baseUrl: string, accessToken: string, httpClient: AxiosInstance) {
        super(baseUrl, accessToken, httpClient);

        this.account = new AccountResource(this.baseUrl, this.accessToken, this.httpClient);
        this.activate = new ActivateResource(this.baseUrl, this.accessToken, this.httpClient);
        this.app = new AppResource(this.baseUrl, this.accessToken, this.httpClient);
        this.event = new EventResource(this.baseUrl, this.accessToken, this.httpClient);
        this.grant = new GrantResource(this.baseUrl, this.accessToken, this.httpClient);
        this.login = new LoginResource(this.baseUrl, this.accessToken, this.httpClient);
        this.planContract = new PlanContractResource(this.baseUrl, this.accessToken, this.httpClient);
        this.plan = new PlanResource(this.baseUrl, this.accessToken, this.httpClient);
        this.register = new RegisterResource(this.baseUrl, this.accessToken, this.httpClient);
        this.scope = new ScopeResource(this.baseUrl, this.accessToken, this.httpClient);
        this.subscription = new SubscriptionResource(this.baseUrl, this.accessToken, this.httpClient);
        this.token = new TokenResource(this.baseUrl, this.accessToken, this.httpClient);
        this.transaction = new TransactionResource(this.baseUrl, this.accessToken, this.httpClient);
    }
}
