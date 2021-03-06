﻿// Require packages.
import axios from 'axios';
import * as util from 'util';
import * as mockconsole from 'mockconsole';
import * as wildemitter from 'wildemitter';

import { IApiRequest, ApiRequest } from '../ApiBase';

/**
 * Emails api interface.
 */
export interface IEmails {

	/**
	* Add email contact.
	* 
	* @param {string}   sessionId		The session id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
   */
	addEmailContactAsync(sessionId: string, requestOptions?: any): void;

	/**
	* Creates outbound email contact.
	* 
	* @param {string}   sessionId		The session id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	createsOutboundEmailContactAsync(sessionId: string, requestOptions?: any): void;

	/**
	* Forwards an email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	forwardsEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Reply to email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	replyToEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Sends email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	sendsEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Transfer email to agent.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	transferEmailToAgentAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Transfer email to skill.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	transferEmailToSkillAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Parks email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	parksEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Un-Parks email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	unParksEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Preview email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	previewEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Restore email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	restoreEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* End email contact.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	endEmailContactAsync(sessionId: string, contactId: number, requestOptions?: any): void;

	/**
	* Save email draft.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	saveDraftAsync(sessionId: string, contactId: number, requestOptions?: any): void;
}

/**
 * Emails api implementation.
 */
export class Emails implements IEmails {

	// global
	apirequest: IApiRequest;

	// global
	config: any;
	logger: any;
	parent: any;
	uniqueID: string;

	/**
     * Emails api implementation.
     * 
     * @param {Object}   emailsOptions  A collection of options.
     *        
     * @example                          
     *  options = {
	 *		debug: true,
     *      domainURIPath: "https://api-a32.nice-incontact.com/inContactAPI",
	 *      baseURIPath: "/services/v15.0/",
	 *      authorization: "Bearer [Token Value]",
	 *      timeout: 10000, // default is '0' (0 seconds timeout)
     *  }
     */
	constructor(public emailsOptions: any) {

		// local.
		let self = this;
		let parent = emailsOptions.parent;
		let uniqueID = "Agent.Emails.";
		let item;

		let options = emailsOptions || {};
		let config = this.config = {
			debug: false,
			domainURIPath: "https://api-a32.nice-incontact.com/inContactAPI",
			baseURIPath: "/services/v15.0/",
			authorization: "Bearer [Token Value]",
			timeout: 0
		};

		// Assign global.
		this.parent = parent;
		this.logger = parent.logger;
		this.uniqueID = uniqueID;

		// set our config from options
		for (item in options) {
			if (options.hasOwnProperty(item)) {
				this.config[item] = options[item];
			}
		}

		// Call WildEmitter constructor.
		wildemitter.mixin(Emails);

		// Create the request instance.
		this.apirequest = new ApiRequest(this.config);
	}

	/**
	* Add email contact.
	* 
	* @param {string}   sessionId		The session id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	addEmailContactAsync(sessionId: string, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Add email contact';
		let localUniqueID = this.uniqueID + "addEmailContactAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/add-email';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Creates outbound email contact.
	* 
	* @param {string}   sessionId		The session id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	createsOutboundEmailContactAsync(sessionId: string, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Creates outbound email contact';
		let localUniqueID = this.uniqueID + "createsOutboundEmailContactAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/email-outbound';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Forwards an email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	forwardsEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Forwards an email';
		let localUniqueID = this.uniqueID + "forwardsEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-forward';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Reply to email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	replyToEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Reply to email';
		let localUniqueID = this.uniqueID + "replyToEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-reply';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Sends email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	sendsEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Sends email';
		let localUniqueID = this.uniqueID + "sendsEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-send';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Transfer email to agent.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	transferEmailToAgentAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Transfer email to agent';
		let localUniqueID = this.uniqueID + "transferEmailToAgentAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/transfer-email-to-agent';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Transfer email to skill.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	transferEmailToSkillAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Transfer email to skill';
		let localUniqueID = this.uniqueID + "transferEmailToSkillAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/transfer-email-to-skill';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Parks email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	parksEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Parks email';
		let localUniqueID = this.uniqueID + "parksEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-park';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Un-Parks email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	unParksEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Un-Parks email';
		let localUniqueID = this.uniqueID + "unParksEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-unpark';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Preview email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	previewEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Preview email';
		let localUniqueID = this.uniqueID + "previewEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-preview';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Restore email.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	restoreEmailAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Restore email';
		let localUniqueID = this.uniqueID + "restoreEmailAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-restore';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* End email contact.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	endEmailContactAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'End email contact';
		let localUniqueID = this.uniqueID + "endEmailContactAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/end';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}

	/**
	* Save email draft.
	* 
	* @param {string}   sessionId		The session id.
    * @param {number}   contactId		The contact id.
	* @param {Object}   requestOptions  A collection of request options.
	* 
	* @example
	*  options = {
	*		timeout: 10000, // default is '0' (0 seconds timeout),
	*		cancelToken: new CancelToken(function (cancel) {}) // 'cancelToken' specifies a cancel token that can be used to cancel the request (see Cancellation section below for details)
	*		
	*		// 'params' are the URL parameters to be sent with the request
	*		// Must be a plain object or a URLSearchParams object
	*		params: { ID: 12345 },
	*
	*		// 'data' is the data to be sent as the request body.
	*		data: { ID: 'Unique' },
	*  }
    */
	saveDraftAsync(sessionId: string, contactId: number, requestOptions?: any): void {

		// Create local refs.
		let localExecute = 'Save email draft';
		let localUniqueID = this.uniqueID + "saveDraftAsync";
		let localUrl = 'agent-sessions/' + sessionId + '/interactions/' + contactId.toString() + '/email-save-draft';
		let localTimeout = this.config.timeout;

		// Assign the request options.
		let options = requestOptions || {};
		let requestConfig = {
			url: localUrl,
			method: 'POST',
			baseURL: this.config.domainURIPath + this.config.baseURIPath,
			headers: {
				'Authorization': this.config.authorization,
				'Content-Type': 'application/json'
			},
			timeout: localTimeout
		};

		// Execute the request.
		this.apirequest.request(localExecute, localUniqueID, requestConfig, options);
	}
}