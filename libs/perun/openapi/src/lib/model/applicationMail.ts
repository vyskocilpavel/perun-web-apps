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
import { MailText } from './mailText';
import { MailType } from './mailType';
import { AppType } from './appType';


export interface ApplicationMail { 
    id?: number;
    appType?: AppType;
    formId?: number;
    mailType?: MailType;
    send?: boolean;
    message?: { [key: string]: MailText; };
}

