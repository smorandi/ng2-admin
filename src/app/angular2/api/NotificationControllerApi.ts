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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class NotificationControllerApi {
    protected basePath = 'https://localhost/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * postNotification
     * 
     * @param recipient recipient
     * @param notification notification
     */
    public postNotificationUsingPOST(recipient: string, notification: models.Notification, extraHttpRequestParams?: any): Observable<{}> {
        return this.postNotificationUsingPOSTWithHttpInfo(recipient, notification, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * postNotification
     * 
     * @param notification notification
     */
    public postNotificationUsingPOST1(notification: models.Notification, extraHttpRequestParams?: any): Observable<{}> {
        return this.postNotificationUsingPOST1WithHttpInfo(notification, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * postNotification
     * 
     * @param recipient recipient
     * @param notification notification
     */
    public postNotificationUsingPOSTWithHttpInfo(recipient: string, notification: models.Notification, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/notifications/${recipient}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'recipient' is not null or undefined
        if (recipient === null || recipient === undefined) {
            throw new Error('Required parameter recipient was null or undefined when calling postNotificationUsingPOST.');
        }
        // verify required parameter 'notification' is not null or undefined
        if (notification === null || notification === undefined) {
            throw new Error('Required parameter notification was null or undefined when calling postNotificationUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: notification == null ? '' : JSON.stringify(notification), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * postNotification
     * 
     * @param notification notification
     */
    public postNotificationUsingPOST1WithHttpInfo(notification: models.Notification, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/notifications`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'notification' is not null or undefined
        if (notification === null || notification === undefined) {
            throw new Error('Required parameter notification was null or undefined when calling postNotificationUsingPOST1.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: notification == null ? '' : JSON.stringify(notification), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
