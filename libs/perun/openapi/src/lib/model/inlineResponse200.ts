/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InlineResponse200 { 
    graph?: string;
    format?: InlineResponse200.FormatEnum;
}
export namespace InlineResponse200 {
    export type FormatEnum = 'DOT' | 'TGF';
    export const FormatEnum = {
        DOT: 'DOT' as FormatEnum,
        TGF: 'TGF' as FormatEnum
    };
}


