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
import { Attribute } from './attribute';


/**
 * input to setUserAttributes
 */
export interface InputSetUserAttributes { 
    /**
     * user id
     */
    user: number;
    attributes: Array<Attribute>;
}

