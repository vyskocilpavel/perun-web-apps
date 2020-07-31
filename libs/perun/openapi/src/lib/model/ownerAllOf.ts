/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface OwnerAllOf { 
    name?: string;
    contact?: string;
    type?: OwnerAllOf.TypeEnum;
}
export namespace OwnerAllOf {
    export type TypeEnum = 'technical' | 'administrative';
    export const TypeEnum = {
        Technical: 'technical' as TypeEnum,
        Administrative: 'administrative' as TypeEnum
    };
}


