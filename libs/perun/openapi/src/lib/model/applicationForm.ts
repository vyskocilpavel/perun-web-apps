/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.27.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Group } from './group';
import { Vo } from './vo';


export interface ApplicationForm { 
    id?: number;
    vo?: Vo;
    group?: Group;
    automaticApproval?: boolean;
    automaticApprovalExtension?: boolean;
    automaticApprovalEmbedded?: boolean;
    moduleClassName?: string;
}

