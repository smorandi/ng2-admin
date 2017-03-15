/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface LegalEntity {
    allocatedSeed?: number;

    authName?: string;

    book?: models.Book;

    classification?: boolean;

    code?: string;

    comment?: string;

    country?: string;

    enteredDate?: Date;

    enteredUser?: string;

    entityId?: number;

    entityState?: models.EntityState;

    entityType?: string;

    externalRef?: string;

    fake?: boolean;

    holidays?: Array<any>;

    id?: number;

    inactiveDate?: models.JDate;

    key?: any;

    legalEntityAttributes?: models.Collection;

    legalEntityFakeAgent?: boolean;

    legalEntityFakeBeneficiary?: boolean;

    legalEntityFakeIntermediary1?: boolean;

    legalEntityFakeIntermediary2?: boolean;

    legalEntityId?: number;

    mutable?: boolean;

    name?: string;

    parentId?: number;

    processingOrg?: models.LegalEntity;

    processingOrgBasedId?: number;

    restrictedRoleList?: Array<string>;

    roleList?: Array<any>;

    status?: string;

    tripartyAllocType?: number;

    user?: string;

    version?: number;

    workflowConfigKey?: models.WorkFlowConfigKey;

}
