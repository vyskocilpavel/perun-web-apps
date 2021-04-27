/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.23.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Group } from './group';
import { Owner } from './owner';
import { RichUser } from './richUser';
import { Facility } from './facility';


export interface ContactGroup { 
    name?: string;
    facility?: Facility;
    groups?: Array<Group>;
    owners?: Array<Owner>;
    users?: Array<RichUser>;
}

