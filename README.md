
# fusio-sdk-javascript

This [SDK](https://github.com/apioo/fusio-sdk-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/fusio/sdk

## Usage

```typescript
const client = Client::build('[access_token]');

// Returns user data of the current authenticated user.
const response = await client.authorization().getwhoami();

// Revoke the access token of the current authenticated user.
const response = await client.authorization().revoke();

// Changes the password of the authenticated user.
const response = await client.backend().account().changepassword(new BackendAccountchangepassword());

// Returns user data of the authenticated user.
const response = await client.backend().account().get();

// Updates user data of the authenticated user.
const response = await client.backend().account().update(new BackendUserupdate());

// Creates a new action.
const response = await client.backend().action().create(new BackendActioncreate());

// Deletes an existing action.
const response = await client.backend().action().delete("action_id");

// Executes a specific action.
const response = await client.backend().action().execute("action_id", new BackendActionexecuterequest());

// Returns a specific action.
const response = await client.backend().action().get("action_id");

// Returns a paginated list of actions.
const response = await client.backend().action().getall(1, 1, "search");

// Returns all available action classes.
const response = await client.backend().action().getclasses();

// Returns a paginated list of action commits.
const response = await client.backend().action().getcommits("action_id", 1, 1, "search");

// Returns the action config form.
const response = await client.backend().action().getform("class");

// Updates an existing action.
const response = await client.backend().action().update("action_id", new BackendActionupdate());

// Creates a new agent.
const response = await client.backend().agent().create(new BackendAgentcreate());

// Deletes an existing agent.
const response = await client.backend().agent().delete("agent_id");

// Returns a specific agent.
const response = await client.backend().agent().get("agent_id");

// Returns a paginated list of agents.
const response = await client.backend().agent().getall(1, 1, "search");

// Returns available tools for an agent.
const response = await client.backend().agent().gettools();

// Returns a paginated list of agent messages.
const response = await client.backend().agent().message().getall("agent_id", "chat_id");

// Submits a new agent message.
const response = await client.backend().agent().message().submit("agent_id", new AgentInput());

// Updates an existing agent.
const response = await client.backend().agent().update("agent_id", new BackendAgentupdate());

// Creates a new app.
const response = await client.backend().app().create(new BackendAppcreate());

// Deletes an existing app.
const response = await client.backend().app().delete("app_id");

// Deletes an existing token from an app.
const response = await client.backend().app().deletetoken("app_id", "token_id");

// Returns a specific app.
const response = await client.backend().app().get("app_id");

// Returns a paginated list of apps.
const response = await client.backend().app().getall(1, 1, "search");

// Updates an existing app.
const response = await client.backend().app().update("app_id", new BackendAppupdate());

// Returns a specific audit.
const response = await client.backend().audit().get("audit_id");

// Returns a paginated list of audits.
const response = await client.backend().audit().getall(1, 1, "search", "from", "to", 1, 1, "event", "ip", "message");

// Generates an backup of the current system.
const response = await client.backend().backup().export();

// Imports an backup to the current system.
const response = await client.backend().backup().import(new BackendBackupimport());

// Creates a new bundle.
const response = await client.backend().bundle().create(new BackendBundlecreate());

// Deletes an existing bundle.
const response = await client.backend().bundle().delete("bundle_id");

// Returns a specific bundle.
const response = await client.backend().bundle().get("bundle_id");

// Returns a paginated list of bundles.
const response = await client.backend().bundle().getall(1, 1, "search");

// Publish an existing bundle to the marketplace.
const response = await client.backend().bundle().publish("bundle_id");

// Updates an existing bundle.
const response = await client.backend().bundle().update("bundle_id", new BackendBundleupdate());

// Creates a new category.
const response = await client.backend().category().create(new BackendCategorycreate());

// Deletes an existing category.
const response = await client.backend().category().delete("category_id");

// Returns a specific category.
const response = await client.backend().category().get("category_id");

// Returns a paginated list of categories.
const response = await client.backend().category().getall(1, 1, "search");

// Updates an existing category.
const response = await client.backend().category().update("category_id", new BackendCategoryupdate());

// Returns a specific config.
const response = await client.backend().config().get("config_id");

// Returns a paginated list of configuration values.
const response = await client.backend().config().getall(1, 1, "search");

// Updates an existing config value.
const response = await client.backend().config().update("config_id", new BackendConfigupdate());

// Sends a message to an agent.
const response = await client.backend().connection().agent().send("connection_id", new AgentInput());

// Creates a new connection.
const response = await client.backend().connection().create(new BackendConnectioncreate());

// Creates a new row at a table on a database.
const response = await client.backend().connection().database().createrow("connection_id", "table_name", new BackendDatabaserow());

// Creates a new table on a database.
const response = await client.backend().connection().database().createtable("connection_id", new BackendDatabasetable());

// Deletes an existing row at a table on a database.
const response = await client.backend().connection().database().deleterow("connection_id", "table_name", "id");

// Deletes an existing table on a database.
const response = await client.backend().connection().database().deletetable("connection_id", "table_name");

// Returns a specific row at a table on a database.
const response = await client.backend().connection().database().getrow("connection_id", "table_name", "id");

// Returns paginated rows at a table on a database.
const response = await client.backend().connection().database().getrows("connection_id", "table_name", 1, 1, "filterBy", "filterOp", "filterValue", "sortBy", "sortOrder", "columns");

// Returns the schema of a specific table on a database.
const response = await client.backend().connection().database().gettable("connection_id", "table_name");

// Returns all available tables on a database.
const response = await client.backend().connection().database().gettables("connection_id", 1, 1);

// Updates an existing row at a table on a database.
const response = await client.backend().connection().database().updaterow("connection_id", "table_name", "id", new BackendDatabaserow());

// Updates an existing table on a database.
const response = await client.backend().connection().database().updatetable("connection_id", "table_name", new BackendDatabasetable());

// Deletes an existing connection.
const response = await client.backend().connection().delete("connection_id");

// Uploads one or more files on the filesystem connection.
const response = await client.backend().connection().filesystem().create("connection_id", new any());

// Deletes an existing file on the filesystem connection.
const response = await client.backend().connection().filesystem().delete("connection_id", "file_id");

// Returns the content of the provided file id on the filesystem connection.
await client.backend().connection().filesystem().get("connection_id", "file_id");

// Returns all available files on the filesystem connection.
const response = await client.backend().connection().filesystem().getall("connection_id", 1, 1);

// Updates an existing file on the filesystem connection.
const response = await client.backend().connection().filesystem().update("connection_id", "file_id", new any());

// Returns a specific connection.
const response = await client.backend().connection().get("connection_id");

// Returns a paginated list of connections.
const response = await client.backend().connection().getall(1, 1, "search", "class");

// Returns all available connection classes.
const response = await client.backend().connection().getclasses();

// Returns the connection config form.
const response = await client.backend().connection().getform("class");

// Returns a redirect url to start the OAuth2 authorization flow for the given connection.
const response = await client.backend().connection().getredirect("connection_id");

// Sends an arbitrary HTTP request to the connection.
const response = await client.backend().connection().http().execute("connection_id", new BackendHttprequest());

// Returns the SDK specification.
const response = await client.backend().connection().sdk().get("connection_id");

// Updates an existing connection.
const response = await client.backend().connection().update("connection_id", new BackendConnectionupdate());

// Creates a new cronjob.
const response = await client.backend().cronjob().create(new BackendCronjobcreate());

// Deletes an existing cronjob.
const response = await client.backend().cronjob().delete("cronjob_id");

// Returns a specific cronjob.
const response = await client.backend().cronjob().get("cronjob_id");

// Returns a paginated list of cronjobs.
const response = await client.backend().cronjob().getall(1, 1, "search", 1);

// Updates an existing cronjob.
const response = await client.backend().cronjob().update("cronjob_id", new BackendCronjobupdate());

// Returns all available dashboard widgets.
const response = await client.backend().dashboard().getall();

// Creates a new event.
const response = await client.backend().event().create(new BackendEventcreate());

// Deletes an existing event.
const response = await client.backend().event().delete("event_id");

// Returns a specific event.
const response = await client.backend().event().get("event_id");

// Returns a paginated list of events.
const response = await client.backend().event().getall(1, 1, "search", 1);

// Updates an existing event.
const response = await client.backend().event().update("event_id", new BackendEventupdate());

// Creates a new firewall rule.
const response = await client.backend().firewall().create(new BackendFirewallcreate());

// Deletes an existing firewall rule.
const response = await client.backend().firewall().delete("firewall_id");

// Returns a specific firewall rule.
const response = await client.backend().firewall().get("firewall_id");

// Returns a paginated list of firewall rules.
const response = await client.backend().firewall().getall(1, 1, "search");

// Updates an existing firewall rule.
const response = await client.backend().firewall().update("firewall_id", new BackendFirewallupdate());

// Creates a new form.
const response = await client.backend().form().create(new BackendFormcreate());

// Deletes an existing form.
const response = await client.backend().form().delete("form_id");

// Returns a specific form.
const response = await client.backend().form().get("form_id");

// Returns a paginated list of forms.
const response = await client.backend().form().getall(1, 1, "search");

// Updates an existing form.
const response = await client.backend().form().update("form_id", new BackendFormupdate());

// Executes a generator with the provided config.
const response = await client.backend().generator().executeprovider("provider", new BackendGeneratorprovider());

// Generates a changelog of all potential changes if you execute this generator with the provided config.
const response = await client.backend().generator().getchangelog("provider", new BackendGeneratorproviderconfig());

// Returns all available generator classes.
const response = await client.backend().generator().getclasses();

// Returns the generator config form.
const response = await client.backend().generator().getform("provider");

// Creates a new identity.
const response = await client.backend().identity().create(new BackendIdentitycreate());

// Deletes an existing identity.
const response = await client.backend().identity().delete("identity_id");

// Returns a specific identity.
const response = await client.backend().identity().get("identity_id");

// Returns a paginated list of identities.
const response = await client.backend().identity().getall(1, 1, "search");

// Returns all available identity classes.
const response = await client.backend().identity().getclasses();

// Returns the identity config form.
const response = await client.backend().identity().getform("class");

// Updates an existing identity.
const response = await client.backend().identity().update("identity_id", new BackendIdentityupdate());

// Returns a specific log.
const response = await client.backend().log().get("log_id");

// Returns a paginated list of logs.
const response = await client.backend().log().getall(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a paginated list of log errors.
const response = await client.backend().log().getallerrors(1, 1, "search");

// Returns a specific error.
const response = await client.backend().log().geterror("error_id");

// Returns a specific marketplace action.
const response = await client.backend().marketplace().action().get("user", "name");

// Returns a paginated list of marketplace actions.
const response = await client.backend().marketplace().action().getall(1, "query");

// Installs an action from the marketplace.
const response = await client.backend().marketplace().action().install(new Marketplaceinstall());

// Upgrades an action from the marketplace.
const response = await client.backend().marketplace().action().upgrade("user", "name");

// Returns a specific marketplace app.
const response = await client.backend().marketplace().app().get("user", "name");

// Returns a paginated list of marketplace apps.
const response = await client.backend().marketplace().app().getall(1, "query");

// Installs an app from the marketplace.
const response = await client.backend().marketplace().app().install(new Marketplaceinstall());

// Upgrades an app from the marketplace.
const response = await client.backend().marketplace().app().upgrade("user", "name");

// Returns a specific marketplace bundle.
const response = await client.backend().marketplace().bundle().get("user", "name");

// Returns a paginated list of marketplace bundles.
const response = await client.backend().marketplace().bundle().getall(1, "query");

// Installs an bundle from the marketplace.
const response = await client.backend().marketplace().bundle().install(new Marketplaceinstall());

// Upgrades an bundle from the marketplace.
const response = await client.backend().marketplace().bundle().upgrade("user", "name");

// Creates a new operation.
const response = await client.backend().operation().create(new BackendOperationcreate());

// Deletes an existing operation.
const response = await client.backend().operation().delete("operation_id");

// Returns a specific operation.
const response = await client.backend().operation().get("operation_id");

// Returns a paginated list of operations.
const response = await client.backend().operation().getall(1, 1, "search", 1);

// Updates an existing operation.
const response = await client.backend().operation().update("operation_id", new BackendOperationupdate());

// Creates a new page.
const response = await client.backend().page().create(new BackendPagecreate());

// Deletes an existing page.
const response = await client.backend().page().delete("page_id");

// Returns a specific page.
const response = await client.backend().page().get("page_id");

// Returns a paginated list of pages.
const response = await client.backend().page().getall(1, 1, "search");

// Updates an existing page.
const response = await client.backend().page().update("page_id", new BackendPageupdate());

// Creates a new plan.
const response = await client.backend().plan().create(new BackendPlancreate());

// Deletes an existing plan.
const response = await client.backend().plan().delete("plan_id");

// Returns a specific plan.
const response = await client.backend().plan().get("plan_id");

// Returns a paginated list of plans.
const response = await client.backend().plan().getall(1, 1, "search");

// Updates an existing plan.
const response = await client.backend().plan().update("plan_id", new BackendPlanupdate());

// Creates a new rate limitation.
const response = await client.backend().rate().create(new BackendRatecreate());

// Deletes an existing rate.
const response = await client.backend().rate().delete("rate_id");

// Returns a specific rate.
const response = await client.backend().rate().get("rate_id");

// Returns a paginated list of rate limitations.
const response = await client.backend().rate().getall(1, 1, "search");

// Updates an existing rate.
const response = await client.backend().rate().update("rate_id", new BackendRateupdate());

// Creates a new role.
const response = await client.backend().role().create(new BackendRolecreate());

// Deletes an existing role.
const response = await client.backend().role().delete("role_id");

// Returns a specific role.
const response = await client.backend().role().get("role_id");

// Returns a paginated list of roles.
const response = await client.backend().role().getall(1, 1, "search");

// Updates an existing role.
const response = await client.backend().role().update("role_id", new BackendRoleupdate());

// Creates a new schema.
const response = await client.backend().schema().create(new BackendSchemacreate());

// Deletes an existing schema.
const response = await client.backend().schema().delete("schema_id");

// Returns a specific schema.
const response = await client.backend().schema().get("schema_id");

// Returns a paginated list of schemas.
const response = await client.backend().schema().getall(1, 1, "search", 1);

// Returns a paginated list of schema commits.
const response = await client.backend().schema().getcommits("schema_id", 1, 1, "search");

// Returns a HTML preview of the provided schema.
const response = await client.backend().schema().getpreview("schema_id");

// Updates an existing schema.
const response = await client.backend().schema().update("schema_id", new BackendSchemaupdate());

// Creates a new scope.
const response = await client.backend().scope().create(new BackendScopecreate());

// Deletes an existing scope.
const response = await client.backend().scope().delete("scope_id");

// Returns a specific scope.
const response = await client.backend().scope().get("scope_id");

// Returns a paginated list of scopes.
const response = await client.backend().scope().getall(1, 1, "search");

// Returns all available scopes grouped by category.
const response = await client.backend().scope().getcategories();

// Updates an existing scope.
const response = await client.backend().scope().update("scope_id", new BackendScopeupdate());

// Generates a specific SDK.
const response = await client.backend().sdk().generate(new BackendSdkgenerate());

// Returns a paginated list of SDKs.
const response = await client.backend().sdk().getall();

// Returns the TypeHub specification.
const response = await client.backend().specification().get();

// Returns the changelog between your current specification and the last tag.
const response = await client.backend().specification().getchangelog();

// Publish the specification.
const response = await client.backend().specification().publish(new BackendSpecificationpublish());

// Creates a new tag of your specification.
const response = await client.backend().specification().tag(new Passthru());

// Returns a statistic containing the activities per user.
const response = await client.backend().statistic().getactivitiesperuser(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the request count.
const response = await client.backend().statistic().getcountrequests(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the errors per operation.
const response = await client.backend().statistic().geterrorsperoperation(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the incoming requests.
const response = await client.backend().statistic().getincomingrequests(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the incoming transactions.
const response = await client.backend().statistic().getincomingtransactions(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the issues tokens.
const response = await client.backend().statistic().getissuedtokens(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the most used activities.
const response = await client.backend().statistic().getmostusedactivities(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the most used apps.
const response = await client.backend().statistic().getmostusedapps(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the most used operations.
const response = await client.backend().statistic().getmostusedoperations(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the requests per ip.
const response = await client.backend().statistic().getrequestsperip(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the requests per operation.
const response = await client.backend().statistic().getrequestsperoperation(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the requests per user.
const response = await client.backend().statistic().getrequestsperuser(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the test coverage.
const response = await client.backend().statistic().gettestcoverage();

// Returns a statistic containing the time average.
const response = await client.backend().statistic().gettimeaverage(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the time per operation.
const response = await client.backend().statistic().gettimeperoperation(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the used points.
const response = await client.backend().statistic().getusedpoints(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the user registrations.
const response = await client.backend().statistic().getuserregistrations(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Creates a new taxonomy.
const response = await client.backend().taxonomy().create(new BackendTaxonomycreate());

// Deletes an existing taxonomy.
const response = await client.backend().taxonomy().delete("taxonomy_id");

// Returns a specific taxonomy.
const response = await client.backend().taxonomy().get("taxonomy_id");

// Returns a paginated list of taxonomies.
const response = await client.backend().taxonomy().getall(1, 1, "search");

// Moves the provided ids to the taxonomy.
const response = await client.backend().taxonomy().move("taxonomy_id", new BackendTaxonomymove());

// Updates an existing taxonomy.
const response = await client.backend().taxonomy().update("taxonomy_id", new BackendTaxonomyupdate());

// Removes an existing tenant.
const response = await client.backend().tenant().remove("tenant_id");

// Setup a new tenant.
const response = await client.backend().tenant().setup("tenant_id");

// Returns a specific test.
const response = await client.backend().test().get("test_id");

// Returns a paginated list of tests.
const response = await client.backend().test().getall(1, 1, "search");

// Refresh all tests.
const response = await client.backend().test().refresh();

// Run all tests.
const response = await client.backend().test().run();

// Updates an existing test.
const response = await client.backend().test().update("test_id", new BackendTest());

// Returns a specific token.
const response = await client.backend().token().get("token_id");

// Returns a paginated list of tokens.
const response = await client.backend().token().getall(1, 1, "search", "from", "to", 1, 1, 1, "scope", "ip");

// Returns a specific transaction.
const response = await client.backend().transaction().get("transaction_id");

// Returns a paginated list of transactions.
const response = await client.backend().transaction().getall(1, 1, "search", "from", "to", 1, 1, 1, "status", "provider", 1);

// Returns all deleted records by trash type.
const response = await client.backend().trash().getallbytype("type", 1, 1, "search");

// Returns all trash types.
const response = await client.backend().trash().gettypes();

// Restores a previously deleted record.
const response = await client.backend().trash().restore("type", new BackendTrashrestore());

// Creates a new trigger.
const response = await client.backend().trigger().create(new BackendTriggercreate());

// Deletes an existing trigger.
const response = await client.backend().trigger().delete("trigger_id");

// Returns a specific trigger.
const response = await client.backend().trigger().get("trigger_id");

// Returns a paginated list of triggers.
const response = await client.backend().trigger().getall(1, 1, "search", 1);

// Updates an existing trigger.
const response = await client.backend().trigger().update("trigger_id", new BackendTriggerupdate());

// Creates a new user.
const response = await client.backend().user().create(new BackendUsercreate());

// Deletes an existing user.
const response = await client.backend().user().delete("user_id");

// Returns a specific user.
const response = await client.backend().user().get("user_id");

// Returns a paginated list of users.
const response = await client.backend().user().getall(1, 1, "search");

// Resend the activation mail to the provided user.
const response = await client.backend().user().resend("user_id", new Passthru());

// Updates an existing user.
const response = await client.backend().user().update("user_id", new BackendUserupdate());

// Creates a new webhook.
const response = await client.backend().webhook().create(new BackendWebhookcreate());

// Deletes an existing webhook.
const response = await client.backend().webhook().delete("webhook_id");

// Returns a specific webhook.
const response = await client.backend().webhook().get("webhook_id");

// Returns a paginated list of webhooks.
const response = await client.backend().webhook().getall(1, 1, "search");

// Updates an existing webhook.
const response = await client.backend().webhook().update("webhook_id", new BackendWebhookupdate());

// Activates an previously registered account through a token which was provided to the user via email.
const response = await client.consumer().account().activate(new ConsumerUseractivate());

// Authorizes the access of a specific app for the authenticated user.
const response = await client.consumer().account().authorize(new ConsumerAuthorizerequest());

// Change the password for the authenticated user.
const response = await client.consumer().account().changepassword(new BackendAccountchangepassword());

// Change the password after the password reset flow was started.
const response = await client.consumer().account().executepasswordreset(new ConsumerUserpasswordreset());

// Returns a user data for the authenticated user.
const response = await client.consumer().account().get();

// Returns information about a specific app to start the OAuth2 authorization code flow.
const response = await client.consumer().account().getapp("client_id", "scope");

// User login by providing a username and password.
const response = await client.consumer().account().login(new ConsumerUserlogin());

// Refresh a previously obtained access token.
const response = await client.consumer().account().refresh(new ConsumerUserrefresh());

// Register a new user account.
const response = await client.consumer().account().register(new ConsumerUserregister());

// Start the password reset flow.
const response = await client.consumer().account().requestpasswordreset(new ConsumerUseremail());

// Updates user data for the authenticated user.
const response = await client.consumer().account().update(new ConsumerUseraccount());

// Returns a specific agent.
const response = await client.consumer().agent().get("agent_id");

// Returns a paginated list of agents.
const response = await client.consumer().agent().getall(1, 1, "search");

// Returns a paginated list of agent messages.
const response = await client.consumer().agent().message().getall("agent_id", "chat_id");

// Submits a new agent message.
const response = await client.consumer().agent().message().submit("agent_id", new AgentInput());

// Creates a new app for the authenticated user.
const response = await client.consumer().app().create(new ConsumerAppcreate());

// Deletes an existing app for the authenticated user.
const response = await client.consumer().app().delete("app_id");

// Returns a specific app for the authenticated user.
const response = await client.consumer().app().get("app_id");

// Returns a paginated list of apps which are assigned to the authenticated user.
const response = await client.consumer().app().getall(1, 1, "search");

// Updates an existing app for the authenticated user.
const response = await client.consumer().app().update("app_id", new ConsumerAppupdate());

// Returns a specific event for the authenticated user.
const response = await client.consumer().event().get("event_id");

// Returns a paginated list of apps which are assigned to the authenticated user.
const response = await client.consumer().event().getall(1, 1, "search");

// Returns a specific form for the authenticated user.
const response = await client.consumer().form().get("form_id");

// Returns a paginated list of forms which are relevant to the authenticated user.
const response = await client.consumer().form().getall(1, 1, "search");

// Deletes an existing grant for an app which was created by the authenticated user.
const response = await client.consumer().grant().delete("grant_id");

// Returns a paginated list of grants which are assigned to the authenticated user.
const response = await client.consumer().grant().getall(1, 1, "search");

// Identity callback endpoint to exchange an access token.
const response = await client.consumer().identity().exchange("identity");

// Returns a paginated list of identities which are relevant to the authenticated user.
const response = await client.consumer().identity().getall(1, "appKey");

// Redirect the user to the configured identity provider.
const response = await client.consumer().identity().redirect("identity");

// Returns a specific log for the authenticated user.
const response = await client.consumer().log().get("log_id");

// Returns a paginated list of logs which are assigned to the authenticated user.
const response = await client.consumer().log().getall(1, 1, "search");

// Returns a specific page for the authenticated user.
const response = await client.consumer().page().get("page_id");

// Returns a paginated list of pages which are relevant to the authenticated user.
const response = await client.consumer().page().getall(1, 1, "search");

// Start the checkout process for a specific plan.
const response = await client.consumer().payment().checkout("provider", new ConsumerPaymentcheckoutrequest());

// Generates a payment portal link for the authenticated user.
const response = await client.consumer().payment().portal("provider", new ConsumerPaymentportalrequest());

// Returns a specific plan for the authenticated user.
const response = await client.consumer().plan().get("plan_id");

// Returns a paginated list of plans which are relevant to the authenticated user.
const response = await client.consumer().plan().getall(1, 1, "search");

// Returns a paginated list of scopes which are assigned to the authenticated user.
const response = await client.consumer().scope().getall(1, 1, "search");

// Returns all scopes by category.
const response = await client.consumer().scope().getcategories();

// Creates a new token for the authenticated user.
const response = await client.consumer().token().create(new ConsumerTokencreate());

// Deletes an existing token for the authenticated user.
const response = await client.consumer().token().delete("token_id");

// Returns a specific token for the authenticated user.
const response = await client.consumer().token().get("token_id");

// Returns a paginated list of tokens which are assigned to the authenticated user.
const response = await client.consumer().token().getall(1, 1, "search");

// Updates an existing token for the authenticated user.
const response = await client.consumer().token().update("token_id", new ConsumerTokenupdate());

// Returns a specific transaction for the authenticated user.
const response = await client.consumer().transaction().get("transaction_id");

// Returns a paginated list of transactions which are assigned to the authenticated user.
const response = await client.consumer().transaction().getall(1, 1, "search");

// Creates a new webhook for the authenticated user.
const response = await client.consumer().webhook().create(new ConsumerWebhookcreate());

// Deletes an existing webhook for the authenticated user.
const response = await client.consumer().webhook().delete("webhook_id");

// Returns a specific webhook for the authenticated user.
const response = await client.consumer().webhook().get("webhook_id");

// Returns a paginated list of webhooks which are assigned to the authenticated user.
const response = await client.consumer().webhook().getall(1, 1, "search");

// Updates an existing webhook for the authenticated user.
const response = await client.consumer().webhook().update("webhook_id", new ConsumerWebhookupdate());

// Connection OAuth2 callback to authorize a connection.
const response = await client.system().connection().callback("name");

// Returns meta information and links about the current installed Fusio version.
const response = await client.system().meta().getabout();

// Debug endpoint which returns the provided data.
const response = await client.system().meta().getdebug(new Passthru());

// Health check endpoint which returns information about the health status of the system.
const response = await client.system().meta().gethealth();

// Returns all available routes.
const response = await client.system().meta().getroutes();

// Returns details of a specific schema.
const response = await client.system().meta().getschema("name");

// Payment webhook endpoint after successful purchase of a plan.
const response = await client.system().payment().webhook("provider");
```
