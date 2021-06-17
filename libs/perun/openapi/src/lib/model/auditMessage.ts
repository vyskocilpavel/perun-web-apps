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
import { AuditEvent } from './auditEvent';


export interface AuditMessage { 
    event?: AuditEvent;
    id?: number;
    actor?: string;
    createdAt?: string;
    createdByUid?: number;
}

