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

export interface JDate {
    bad?: boolean;

    boq?: models.JDate;

    chartableValue?: number;

    date?: Date;

    dateFields?: models.DateComponents;

    dayOfMonth?: number;

    dayOfWeek?: number;

    dayOfWeekAsString?: string;

    dayOfYear?: number;

    eom?: models.JDate;

    eoq?: models.JDate;

    jdatetime?: Date;

    julian?: number;

    julianOffset?: number;

    leapYear?: boolean;

    month?: number;

    monthLength?: number;

    weekEndDay?: boolean;

    year?: number;

}
