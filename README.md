
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
const response = await client.backend().accountChangepassword(new BackendAccountchangepassword());

// Returns user data of the authenticated user.
const response = await client.backend().accountGet();

// Updates user data of the authenticated user.
const response = await client.backend().accountUpdate(new BackendUserupdate());

// Creates a new action.
const response = await client.backend().actionCreate(new BackendActioncreate());

// Deletes an existing action.
const response = await client.backend().actionDelete("action_id");

// Executes a specific action.
const response = await client.backend().actionExecute("action_id", new BackendActionexecuterequest());

// Returns a specific action.
const response = await client.backend().actionGet("action_id");

// Returns a paginated list of actions.
const response = await client.backend().actionGetall(1, 1, "search");

// Returns all available action classes.
const response = await client.backend().actionGetclasses();

// Returns a paginated list of action commits.
const response = await client.backend().actionGetcommits("action_id", 1, 1, "search");

// Returns the action config form.
const response = await client.backend().actionGetform("class");

// Updates an existing action.
const response = await client.backend().actionUpdate("action_id", new BackendActionupdate());

// Creates a new agent.
const response = await client.backend().agentCreate(new BackendAgentcreate());

// Deletes an existing agent.
const response = await client.backend().agentDelete("agent_id");

// Returns a specific agent.
const response = await client.backend().agentGet("agent_id");

// Returns a paginated list of agents.
const response = await client.backend().agentGetall(1, 1, "search");

// Returns available tools for an agent.
const response = await client.backend().agentGettools();

// Returns a paginated list of agent messages.
const response = await client.backend().agentMessageGetall("agent_id", "chat_id");

// Submits a new agent message.
const response = await client.backend().agentMessageSubmit("agent_id", new AgentInput());

// Updates an existing agent.
const response = await client.backend().agentUpdate("agent_id", new BackendAgentupdate());

// Creates a new app.
const response = await client.backend().appCreate(new BackendAppcreate());

// Deletes an existing app.
const response = await client.backend().appDelete("app_id");

// Deletes an existing token from an app.
const response = await client.backend().appDeletetoken("app_id", "token_id");

// Returns a specific app.
const response = await client.backend().appGet("app_id");

// Returns a paginated list of apps.
const response = await client.backend().appGetall(1, 1, "search");

// Updates an existing app.
const response = await client.backend().appUpdate("app_id", new BackendAppupdate());

// Returns a specific audit.
const response = await client.backend().auditGet("audit_id");

// Returns a paginated list of audits.
const response = await client.backend().auditGetall(1, 1, "search", "from", "to", 1, 1, "event", "ip", "message");

// Generates an backup of the current system.
const response = await client.backend().backupExport();

// Imports an backup to the current system.
const response = await client.backend().backupImport(new BackendBackupimport());

// Creates a new bundle.
const response = await client.backend().bundleCreate(new BackendBundlecreate());

// Deletes an existing bundle.
const response = await client.backend().bundleDelete("bundle_id");

// Returns a specific bundle.
const response = await client.backend().bundleGet("bundle_id");

// Returns a paginated list of bundles.
const response = await client.backend().bundleGetall(1, 1, "search");

// Publish an existing bundle to the marketplace.
const response = await client.backend().bundlePublish("bundle_id");

// Updates an existing bundle.
const response = await client.backend().bundleUpdate("bundle_id", new BackendBundleupdate());

// Creates a new category.
const response = await client.backend().categoryCreate(new BackendCategorycreate());

// Deletes an existing category.
const response = await client.backend().categoryDelete("category_id");

// Returns a specific category.
const response = await client.backend().categoryGet("category_id");

// Returns a paginated list of categories.
const response = await client.backend().categoryGetall(1, 1, "search");

// Updates an existing category.
const response = await client.backend().categoryUpdate("category_id", new BackendCategoryupdate());

// Returns a specific config.
const response = await client.backend().configGet("config_id");

// Returns a paginated list of configuration values.
const response = await client.backend().configGetall(1, 1, "search");

// Updates an existing config value.
const response = await client.backend().configUpdate("config_id", new BackendConfigupdate());

// Sends a message to an agent.
const response = await client.backend().connectionAgentSend("connection_id", new AgentInput());

// Creates a new connection.
const response = await client.backend().connectionCreate(new BackendConnectioncreate());

// Creates a new row at a table on a database.
const response = await client.backend().connectionDatabaseCreaterow("connection_id", "table_name", new BackendDatabaserow());

// Creates a new table on a database.
const response = await client.backend().connectionDatabaseCreatetable("connection_id", new BackendDatabasetable());

// Deletes an existing row at a table on a database.
const response = await client.backend().connectionDatabaseDeleterow("connection_id", "table_name", "id");

// Deletes an existing table on a database.
const response = await client.backend().connectionDatabaseDeletetable("connection_id", "table_name");

// Returns a specific row at a table on a database.
const response = await client.backend().connectionDatabaseGetrow("connection_id", "table_name", "id");

// Returns paginated rows at a table on a database.
const response = await client.backend().connectionDatabaseGetrows("connection_id", "table_name", 1, 1, "filterBy", "filterOp", "filterValue", "sortBy", "sortOrder", "columns");

// Returns the schema of a specific table on a database.
const response = await client.backend().connectionDatabaseGettable("connection_id", "table_name");

// Returns all available tables on a database.
const response = await client.backend().connectionDatabaseGettables("connection_id", 1, 1);

// Updates an existing row at a table on a database.
const response = await client.backend().connectionDatabaseUpdaterow("connection_id", "table_name", "id", new BackendDatabaserow());

// Updates an existing table on a database.
const response = await client.backend().connectionDatabaseUpdatetable("connection_id", "table_name", new BackendDatabasetable());

// Deletes an existing connection.
const response = await client.backend().connectionDelete("connection_id");

// Uploads one or more files on the filesystem connection.
const response = await client.backend().connectionFilesystemCreate("connection_id", new any());

// Deletes an existing file on the filesystem connection.
const response = await client.backend().connectionFilesystemDelete("connection_id", "file_id");

// Returns the content of the provided file id on the filesystem connection.
await client.backend().connectionFilesystemGet("connection_id", "file_id");

// Returns all available files on the filesystem connection.
const response = await client.backend().connectionFilesystemGetall("connection_id", 1, 1);

// Updates an existing file on the filesystem connection.
const response = await client.backend().connectionFilesystemUpdate("connection_id", "file_id", new any());

// Returns a specific connection.
const response = await client.backend().connectionGet("connection_id");

// Returns a paginated list of connections.
const response = await client.backend().connectionGetall(1, 1, "search", "class");

// Returns all available connection classes.
const response = await client.backend().connectionGetclasses();

// Returns the connection config form.
const response = await client.backend().connectionGetform("class");

// Returns a redirect url to start the OAuth2 authorization flow for the given connection.
const response = await client.backend().connectionGetredirect("connection_id");

// Sends an arbitrary HTTP request to the connection.
const response = await client.backend().connectionHttpExecute("connection_id", new BackendHttprequest());

// Returns the SDK specification.
const response = await client.backend().connectionSdkGet("connection_id");

// Updates an existing connection.
const response = await client.backend().connectionUpdate("connection_id", new BackendConnectionupdate());

// Creates a new cronjob.
const response = await client.backend().cronjobCreate(new BackendCronjobcreate());

// Deletes an existing cronjob.
const response = await client.backend().cronjobDelete("cronjob_id");

// Returns a specific cronjob.
const response = await client.backend().cronjobGet("cronjob_id");

// Returns a paginated list of cronjobs.
const response = await client.backend().cronjobGetall(1, 1, "search", 1);

// Updates an existing cronjob.
const response = await client.backend().cronjobUpdate("cronjob_id", new BackendCronjobupdate());

// Returns all available dashboard widgets.
const response = await client.backend().dashboardGetall();

// Creates a new event.
const response = await client.backend().eventCreate(new BackendEventcreate());

// Deletes an existing event.
const response = await client.backend().eventDelete("event_id");

// Returns a specific event.
const response = await client.backend().eventGet("event_id");

// Returns a paginated list of events.
const response = await client.backend().eventGetall(1, 1, "search", 1);

// Updates an existing event.
const response = await client.backend().eventUpdate("event_id", new BackendEventupdate());

// Creates a new firewall rule.
const response = await client.backend().firewallCreate(new BackendFirewallcreate());

// Deletes an existing firewall rule.
const response = await client.backend().firewallDelete("firewall_id");

// Returns a specific firewall rule.
const response = await client.backend().firewallGet("firewall_id");

// Returns a paginated list of firewall rules.
const response = await client.backend().firewallGetall(1, 1, "search");

// Updates an existing firewall rule.
const response = await client.backend().firewallUpdate("firewall_id", new BackendFirewallupdate());

// Creates a new form.
const response = await client.backend().formCreate(new BackendFormcreate());

// Deletes an existing form.
const response = await client.backend().formDelete("form_id");

// Returns a specific form.
const response = await client.backend().formGet("form_id");

// Returns a paginated list of forms.
const response = await client.backend().formGetall(1, 1, "search");

// Updates an existing form.
const response = await client.backend().formUpdate("form_id", new BackendFormupdate());

// Executes a generator with the provided config.
const response = await client.backend().generatorExecuteprovider("provider", new BackendGeneratorprovider());

// Generates a changelog of all potential changes if you execute this generator with the provided config.
const response = await client.backend().generatorGetchangelog("provider", new BackendGeneratorproviderconfig());

// Returns all available generator classes.
const response = await client.backend().generatorGetclasses();

// Returns the generator config form.
const response = await client.backend().generatorGetform("provider");

// Creates a new identity.
const response = await client.backend().identityCreate(new BackendIdentitycreate());

// Deletes an existing identity.
const response = await client.backend().identityDelete("identity_id");

// Returns a specific identity.
const response = await client.backend().identityGet("identity_id");

// Returns a paginated list of identities.
const response = await client.backend().identityGetall(1, 1, "search");

// Returns all available identity classes.
const response = await client.backend().identityGetclasses();

// Returns the identity config form.
const response = await client.backend().identityGetform("class");

// Updates an existing identity.
const response = await client.backend().identityUpdate("identity_id", new BackendIdentityupdate());

// Returns a specific log.
const response = await client.backend().logGet("log_id");

// Returns a paginated list of logs.
const response = await client.backend().logGetall(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a paginated list of log errors.
const response = await client.backend().logGetallerrors(1, 1, "search");

// Returns a specific error.
const response = await client.backend().logGeterror("error_id");

// Returns a specific marketplace action.
const response = await client.backend().marketplaceActionGet("user", "name");

// Returns a paginated list of marketplace actions.
const response = await client.backend().marketplaceActionGetall(1, "query");

// Installs an action from the marketplace.
const response = await client.backend().marketplaceActionInstall(new Marketplaceinstall());

// Upgrades an action from the marketplace.
const response = await client.backend().marketplaceActionUpgrade("user", "name");

// Returns a specific marketplace app.
const response = await client.backend().marketplaceAppGet("user", "name");

// Returns a paginated list of marketplace apps.
const response = await client.backend().marketplaceAppGetall(1, "query");

// Installs an app from the marketplace.
const response = await client.backend().marketplaceAppInstall(new Marketplaceinstall());

// Upgrades an app from the marketplace.
const response = await client.backend().marketplaceAppUpgrade("user", "name");

// Returns a specific marketplace bundle.
const response = await client.backend().marketplaceBundleGet("user", "name");

// Returns a paginated list of marketplace bundles.
const response = await client.backend().marketplaceBundleGetall(1, "query");

// Installs an bundle from the marketplace.
const response = await client.backend().marketplaceBundleInstall(new Marketplaceinstall());

// Upgrades an bundle from the marketplace.
const response = await client.backend().marketplaceBundleUpgrade("user", "name");

// Creates a new operation.
const response = await client.backend().operationCreate(new BackendOperationcreate());

// Deletes an existing operation.
const response = await client.backend().operationDelete("operation_id");

// Returns a specific operation.
const response = await client.backend().operationGet("operation_id");

// Returns a paginated list of operations.
const response = await client.backend().operationGetall(1, 1, "search", 1);

// Updates an existing operation.
const response = await client.backend().operationUpdate("operation_id", new BackendOperationupdate());

// Creates a new page.
const response = await client.backend().pageCreate(new BackendPagecreate());

// Deletes an existing page.
const response = await client.backend().pageDelete("page_id");

// Returns a specific page.
const response = await client.backend().pageGet("page_id");

// Returns a paginated list of pages.
const response = await client.backend().pageGetall(1, 1, "search");

// Updates an existing page.
const response = await client.backend().pageUpdate("page_id", new BackendPageupdate());

// Creates a new plan.
const response = await client.backend().planCreate(new BackendPlancreate());

// Deletes an existing plan.
const response = await client.backend().planDelete("plan_id");

// Returns a specific plan.
const response = await client.backend().planGet("plan_id");

// Returns a paginated list of plans.
const response = await client.backend().planGetall(1, 1, "search");

// Updates an existing plan.
const response = await client.backend().planUpdate("plan_id", new BackendPlanupdate());

// Creates a new rate limitation.
const response = await client.backend().rateCreate(new BackendRatecreate());

// Deletes an existing rate.
const response = await client.backend().rateDelete("rate_id");

// Returns a specific rate.
const response = await client.backend().rateGet("rate_id");

// Returns a paginated list of rate limitations.
const response = await client.backend().rateGetall(1, 1, "search");

// Updates an existing rate.
const response = await client.backend().rateUpdate("rate_id", new BackendRateupdate());

// Creates a new role.
const response = await client.backend().roleCreate(new BackendRolecreate());

// Deletes an existing role.
const response = await client.backend().roleDelete("role_id");

// Returns a specific role.
const response = await client.backend().roleGet("role_id");

// Returns a paginated list of roles.
const response = await client.backend().roleGetall(1, 1, "search");

// Updates an existing role.
const response = await client.backend().roleUpdate("role_id", new BackendRoleupdate());

// Creates a new schema.
const response = await client.backend().schemaCreate(new BackendSchemacreate());

// Deletes an existing schema.
const response = await client.backend().schemaDelete("schema_id");

// Returns a specific schema.
const response = await client.backend().schemaGet("schema_id");

// Returns a paginated list of schemas.
const response = await client.backend().schemaGetall(1, 1, "search", 1);

// Returns a paginated list of schema commits.
const response = await client.backend().schemaGetcommits("schema_id", 1, 1, "search");

// Returns a HTML preview of the provided schema.
const response = await client.backend().schemaGetpreview("schema_id");

// Updates an existing schema.
const response = await client.backend().schemaUpdate("schema_id", new BackendSchemaupdate());

// Creates a new scope.
const response = await client.backend().scopeCreate(new BackendScopecreate());

// Deletes an existing scope.
const response = await client.backend().scopeDelete("scope_id");

// Returns a specific scope.
const response = await client.backend().scopeGet("scope_id");

// Returns a paginated list of scopes.
const response = await client.backend().scopeGetall(1, 1, "search");

// Returns all available scopes grouped by category.
const response = await client.backend().scopeGetcategories();

// Updates an existing scope.
const response = await client.backend().scopeUpdate("scope_id", new BackendScopeupdate());

// Generates a specific SDK.
const response = await client.backend().sdkGenerate(new BackendSdkgenerate());

// Returns a paginated list of SDKs.
const response = await client.backend().sdkGetall();

// Returns the TypeHub specification.
const response = await client.backend().specificationGet();

// Returns the changelog between your current specification and the last tag.
const response = await client.backend().specificationGetchangelog();

// Publish the specification.
const response = await client.backend().specificationPublish(new BackendSpecificationpublish());

// Creates a new tag of your specification.
const response = await client.backend().specificationTag(new Passthru());

// Returns a statistic containing the activities per user.
const response = await client.backend().statisticGetactivitiesperuser(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the request count.
const response = await client.backend().statisticGetcountrequests(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the errors per operation.
const response = await client.backend().statisticGeterrorsperoperation(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the incoming requests.
const response = await client.backend().statisticGetincomingrequests(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the incoming transactions.
const response = await client.backend().statisticGetincomingtransactions(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the issues tokens.
const response = await client.backend().statisticGetissuedtokens(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the most used activities.
const response = await client.backend().statisticGetmostusedactivities(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the most used apps.
const response = await client.backend().statisticGetmostusedapps(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the most used operations.
const response = await client.backend().statisticGetmostusedoperations(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the requests per ip.
const response = await client.backend().statisticGetrequestsperip(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the requests per operation.
const response = await client.backend().statisticGetrequestsperoperation(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the requests per user.
const response = await client.backend().statisticGetrequestsperuser(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the test coverage.
const response = await client.backend().statisticGettestcoverage();

// Returns a statistic containing the time average.
const response = await client.backend().statisticGettimeaverage(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the time per operation.
const response = await client.backend().statisticGettimeperoperation(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the used points.
const response = await client.backend().statisticGetusedpoints(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Returns a statistic containing the user registrations.
const response = await client.backend().statisticGetuserregistrations(1, 1, "search", "from", "to", 1, 1, 1, "ip", "userAgent", "method", "path", "header", "body");

// Creates a new taxonomy.
const response = await client.backend().taxonomyCreate(new BackendTaxonomycreate());

// Deletes an existing taxonomy.
const response = await client.backend().taxonomyDelete("taxonomy_id");

// Returns a specific taxonomy.
const response = await client.backend().taxonomyGet("taxonomy_id");

// Returns a paginated list of taxonomies.
const response = await client.backend().taxonomyGetall(1, 1, "search");

// Moves the provided ids to the taxonomy.
const response = await client.backend().taxonomyMove("taxonomy_id", new BackendTaxonomymove());

// Updates an existing taxonomy.
const response = await client.backend().taxonomyUpdate("taxonomy_id", new BackendTaxonomyupdate());

// Removes an existing tenant.
const response = await client.backend().tenantRemove("tenant_id");

// Setup a new tenant.
const response = await client.backend().tenantSetup("tenant_id");

// Returns a specific test.
const response = await client.backend().testGet("test_id");

// Returns a paginated list of tests.
const response = await client.backend().testGetall(1, 1, "search");

// Refresh all tests.
const response = await client.backend().testRefresh();

// Run all tests.
const response = await client.backend().testRun();

// Updates an existing test.
const response = await client.backend().testUpdate("test_id", new BackendTest());

// Returns a specific token.
const response = await client.backend().tokenGet("token_id");

// Returns a paginated list of tokens.
const response = await client.backend().tokenGetall(1, 1, "search", "from", "to", 1, 1, 1, "scope", "ip");

// Returns a specific transaction.
const response = await client.backend().transactionGet("transaction_id");

// Returns a paginated list of transactions.
const response = await client.backend().transactionGetall(1, 1, "search", "from", "to", 1, 1, 1, "status", "provider", 1);

// Returns all deleted records by trash type.
const response = await client.backend().trashGetallbytype("type", 1, 1, "search");

// Returns all trash types.
const response = await client.backend().trashGettypes();

// Restores a previously deleted record.
const response = await client.backend().trashRestore("type", new BackendTrashrestore());

// Creates a new trigger.
const response = await client.backend().triggerCreate(new BackendTriggercreate());

// Deletes an existing trigger.
const response = await client.backend().triggerDelete("trigger_id");

// Returns a specific trigger.
const response = await client.backend().triggerGet("trigger_id");

// Returns a paginated list of triggers.
const response = await client.backend().triggerGetall(1, 1, "search", 1);

// Updates an existing trigger.
const response = await client.backend().triggerUpdate("trigger_id", new BackendTriggerupdate());

// Creates a new user.
const response = await client.backend().userCreate(new BackendUsercreate());

// Deletes an existing user.
const response = await client.backend().userDelete("user_id");

// Returns a specific user.
const response = await client.backend().userGet("user_id");

// Returns a paginated list of users.
const response = await client.backend().userGetall(1, 1, "search");

// Resend the activation mail to the provided user.
const response = await client.backend().userResend("user_id", new Passthru());

// Updates an existing user.
const response = await client.backend().userUpdate("user_id", new BackendUserupdate());

// Creates a new webhook.
const response = await client.backend().webhookCreate(new BackendWebhookcreate());

// Deletes an existing webhook.
const response = await client.backend().webhookDelete("webhook_id");

// Returns a specific webhook.
const response = await client.backend().webhookGet("webhook_id");

// Returns a paginated list of webhooks.
const response = await client.backend().webhookGetall(1, 1, "search");

// Updates an existing webhook.
const response = await client.backend().webhookUpdate("webhook_id", new BackendWebhookupdate());

// Activates an previously registered account through a token which was provided to the user via email.
const response = await client.consumer().accountActivate(new ConsumerUseractivate());

// Authorizes the access of a specific app for the authenticated user.
const response = await client.consumer().accountAuthorize(new ConsumerAuthorizerequest());

// Change the password for the authenticated user.
const response = await client.consumer().accountChangepassword(new BackendAccountchangepassword());

// Change the password after the password reset flow was started.
const response = await client.consumer().accountExecutepasswordreset(new ConsumerUserpasswordreset());

// Returns a user data for the authenticated user.
const response = await client.consumer().accountGet();

// Returns information about a specific app to start the OAuth2 authorization code flow.
const response = await client.consumer().accountGetapp("client_id", "scope");

// User login by providing a username and password.
const response = await client.consumer().accountLogin(new ConsumerUserlogin());

// Refresh a previously obtained access token.
const response = await client.consumer().accountRefresh(new ConsumerUserrefresh());

// Register a new user account.
const response = await client.consumer().accountRegister(new ConsumerUserregister());

// Start the password reset flow.
const response = await client.consumer().accountRequestpasswordreset(new ConsumerUseremail());

// Updates user data for the authenticated user.
const response = await client.consumer().accountUpdate(new ConsumerUseraccount());

// Returns a specific agent.
const response = await client.consumer().agentGet("agent_id");

// Returns a paginated list of agents.
const response = await client.consumer().agentGetall(1, 1, "search");

// Returns a paginated list of agent messages.
const response = await client.consumer().agentMessageGetall("agent_id", "chat_id");

// Submits a new agent message.
const response = await client.consumer().agentMessageSubmit("agent_id", new AgentInput());

// Creates a new app for the authenticated user.
const response = await client.consumer().appCreate(new ConsumerAppcreate());

// Deletes an existing app for the authenticated user.
const response = await client.consumer().appDelete("app_id");

// Returns a specific app for the authenticated user.
const response = await client.consumer().appGet("app_id");

// Returns a paginated list of apps which are assigned to the authenticated user.
const response = await client.consumer().appGetall(1, 1, "search");

// Updates an existing app for the authenticated user.
const response = await client.consumer().appUpdate("app_id", new ConsumerAppupdate());

// Returns a specific event for the authenticated user.
const response = await client.consumer().eventGet("event_id");

// Returns a paginated list of apps which are assigned to the authenticated user.
const response = await client.consumer().eventGetall(1, 1, "search");

// Returns a specific form for the authenticated user.
const response = await client.consumer().formGet("form_id");

// Returns a paginated list of forms which are relevant to the authenticated user.
const response = await client.consumer().formGetall(1, 1, "search");

// Deletes an existing grant for an app which was created by the authenticated user.
const response = await client.consumer().grantDelete("grant_id");

// Returns a paginated list of grants which are assigned to the authenticated user.
const response = await client.consumer().grantGetall(1, 1, "search");

// Identity callback endpoint to exchange an access token.
const response = await client.consumer().identityExchange("identity");

// Returns a paginated list of identities which are relevant to the authenticated user.
const response = await client.consumer().identityGetall(1, "appKey");

// Redirect the user to the configured identity provider.
const response = await client.consumer().identityRedirect("identity");

// Returns a specific log for the authenticated user.
const response = await client.consumer().logGet("log_id");

// Returns a paginated list of logs which are assigned to the authenticated user.
const response = await client.consumer().logGetall(1, 1, "search");

// Returns a specific page for the authenticated user.
const response = await client.consumer().pageGet("page_id");

// Returns a paginated list of pages which are relevant to the authenticated user.
const response = await client.consumer().pageGetall(1, 1, "search");

// Start the checkout process for a specific plan.
const response = await client.consumer().paymentCheckout("provider", new ConsumerPaymentcheckoutrequest());

// Generates a payment portal link for the authenticated user.
const response = await client.consumer().paymentPortal("provider", new ConsumerPaymentportalrequest());

// Returns a specific plan for the authenticated user.
const response = await client.consumer().planGet("plan_id");

// Returns a paginated list of plans which are relevant to the authenticated user.
const response = await client.consumer().planGetall(1, 1, "search");

// Returns a paginated list of scopes which are assigned to the authenticated user.
const response = await client.consumer().scopeGetall(1, 1, "search");

// Returns all scopes by category.
const response = await client.consumer().scopeGetcategories();

// Creates a new token for the authenticated user.
const response = await client.consumer().tokenCreate(new ConsumerTokencreate());

// Deletes an existing token for the authenticated user.
const response = await client.consumer().tokenDelete("token_id");

// Returns a specific token for the authenticated user.
const response = await client.consumer().tokenGet("token_id");

// Returns a paginated list of tokens which are assigned to the authenticated user.
const response = await client.consumer().tokenGetall(1, 1, "search");

// Updates an existing token for the authenticated user.
const response = await client.consumer().tokenUpdate("token_id", new ConsumerTokenupdate());

// Returns a specific transaction for the authenticated user.
const response = await client.consumer().transactionGet("transaction_id");

// Returns a paginated list of transactions which are assigned to the authenticated user.
const response = await client.consumer().transactionGetall(1, 1, "search");

// Creates a new webhook for the authenticated user.
const response = await client.consumer().webhookCreate(new ConsumerWebhookcreate());

// Deletes an existing webhook for the authenticated user.
const response = await client.consumer().webhookDelete("webhook_id");

// Returns a specific webhook for the authenticated user.
const response = await client.consumer().webhookGet("webhook_id");

// Returns a paginated list of webhooks which are assigned to the authenticated user.
const response = await client.consumer().webhookGetall(1, 1, "search");

// Updates an existing webhook for the authenticated user.
const response = await client.consumer().webhookUpdate("webhook_id", new ConsumerWebhookupdate());

// Connection OAuth2 callback to authorize a connection.
const response = await client.system().connectionCallback("name");

// Returns meta information and links about the current installed Fusio version.
const response = await client.system().metaGetabout();

// Debug endpoint which returns the provided data.
const response = await client.system().metaGetdebug(new Passthru());

// Health check endpoint which returns information about the health status of the system.
const response = await client.system().metaGethealth();

// Returns all available routes.
const response = await client.system().metaGetroutes();

// Returns details of a specific schema.
const response = await client.system().metaGetschema("name");

// Payment webhook endpoint after successful purchase of a plan.
const response = await client.system().paymentWebhook("provider");
```
