/**
 * BackendMarketplaceTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendMarketplaceActionTag} from "./BackendMarketplaceActionTag";
import {BackendMarketplaceAppTag} from "./BackendMarketplaceAppTag";

export class BackendMarketplaceTag extends TagAbstract {
    public action(): BackendMarketplaceActionTag
    {
        return new BackendMarketplaceActionTag(
            this.httpClient,
            this.parser
        );
    }

    public app(): BackendMarketplaceAppTag
    {
        return new BackendMarketplaceAppTag(
            this.httpClient,
            this.parser
        );
    }


}
