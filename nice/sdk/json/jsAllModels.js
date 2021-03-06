var AssignEntitiesRequest_AddressBook = {
  "entityType": "",
  "addressBookAssignments": [
    {
      "entityId": 0
    }
  ]
};
var AssignEntitiesResponse_AddressBook = {
  "assignResults": [
    {
      "success": true,
      "entityId": 0,
      "error": "",
      "entityType": ""
    }
  ]
};
var CreateDynamicEntitiesRequest_AddressBook = {
    "fullLoad": false,
    "addressBookEntries": [
    {
      "externalId": "",
      "stateId": 0,
      "externalState": "",
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "company": "",
      "phone": "",
      "mobile": "",
      "email": ""
    }
  ]
};
var CreateDynamicEntitiesResponse_AddressBook = {
  "entryResults": [
    {
      "success": true,
      "created": true,
      "addressBookEntryId": 0,
      "externalId": 0,
      "error": ""
    }
  ]
};
var CreateRequest_AddressBook = {
  "addressBookName": "",
  "addressBookType": ""
};
var CreateResponse_AddressBook = {
  "resultSet": {
    "addressBookId": 0,
    "addressBookType": "",
    "addressBookName": ""
  }
};
var CreateStandardEntitiesRequest_AddressBook = {
  "addressBookEntries": [
    {
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "company": "",
      "phone": "",
      "mobile": "",
      "email": ""
    }
  ]
};
var CreateStandardEntitiesResponse_AddressBook = {
  "entryResults": [
    {
      "success": true,
      "addressBookEntryId": 0,
      "error": ""
    }
  ]
};
var DynamicEntitiesRequest_AddressBook = {
	"fields": "",
	"top": "",
	"skip": "",
	"orderBy": "",
	"fullLoad": "",
	"updatedSince": "",
	"searchString": ""
};
var DynamicEntitiesResponse_AddressBook = {
  "totalRecords": 0,
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "addressBook": {
    "addressBookName": "",
    "addressBookId": 0,
    "addressBookType": "",
    "fullLoad": true,
    "serverTime": "2020-07-26T23:59:59.678Z",
    "addressBookEntries": [
		{
			"addressBookEntryId": 0,
			"externalId": 0,
			"stateId": 0,
			"externalState": "",
			"firstName": "",
			"middleName": "",
			"lastName": "",
			"company": "",
			"phone": "",
			"mobile": "",
			"email": "",
			"isDeleted": true,
			"lastUpdateTime": "2020-07-26T23:59:59.678Z"
		}
    ]
  }
};
var GetAgentsRequest_AddressBook = {
  "includeEntries": true,
  "updatedSince": ""
};
var GetAgentsResponse_AddressBook = {
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"addressBooks": [
		{
			"addressBookName": "",
			"addressBookId": 0,
			"addressBookType": "",
			"appId": ""
		}
	]
};
var GetCampaignsRequest_AddressBook = {
  "includeEntries": true,
  "updatedSince": ""
};
var GetCampaignsResponse_AddressBook = {
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"addressBooks": [
		{
			"addressBookName": "",
			"addressBookId": 0,
			"addressBookType": "",
			"appId": ""
		}
	]
};
var GetResponse_AddressBook = {
  "addressBooks": [
    {
      "addressBookName": "",
      "addressBookId": 0,
      "addressBookType": "",
      "appId": "",
      "agents": [
        {
          "agentId": 0,
          "userName": ""
        }
      ],
      "teams": [
        {
          "teamId": 0,
          "teamName": ""
        }
      ],
      "skills": [
        {
          "skillId": 0,
          "skillName": ""
        }
      ],
      "campaigns": [
        {
          "campaignId": 0,
          "campaignName": ""
        }
      ]
    }
  ]
};
var GetSkillsRequest_AddressBook = {
  "includeEntries": true,
  "updatedSince": ""
};
var GetSkillsResponse_AddressBook = {
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"addressBooks": [
		{
			"addressBookName": "",
			"addressBookId": 0,
			"addressBookType": "",
			"appId": ""
		}
	]
};
var GetTeamsRequest_AddressBook = {
  "includeEntries": true,
  "updatedSince": ""
};
var GetTeamsResponse_AddressBook = {
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"addressBooks": [
		{
			"addressBookName": "",
			"addressBookId": 0,
			"addressBookType": "",
			"appId": ""
		}
	]
}
;
var StandardEntitiesRequest_AddressBook = {
	"searchString": "",
	"fields": "",
	"skip": "",
	"top": "",
	"orderBy": "",
	"updatedSince": ""
};
var StandardEntitiesResponse_AddressBook = {
	"_links": {
		"self": "",
		"next": "",
		"previous": ""
	},
	"businessUnitId": 0,
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"totalRecords": 0,
	"addressBook": {
		"addressBookName": "",
		"addressBookId": 0,
		"addressBookType": "",
		"addressBookEntries": [
			{
				"addressBookEntryId": 0,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"company": "",
				"phone": "",
				"mobile": "",
				"email": ""
			}
		]
	}
};
var UpdateStandardEntitiesRequest_AddressBook = {
  "addressBookEntries": [
    {
      "addressBookEntryId": 0,
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "company": "",
      "phone": "",
      "mobile": "",
      "email": ""
    }
  ]
};
var UpdateStandardEntitiesResponse_AddressBook = {
  "entryResults": [
    {
      "success": true,
      "addressBookEntryId": 0,
      "error": ""
    }
  ]
};
var DialAgentPhoneRequest_AgentPhone = {

};
var DialAgentPhoneResponse_AgentPhone = {

};
var EndAgentPhoneCallRequest_AgentPhone = {

};
var EndAgentPhoneCallResponse_AgentPhone = {

};
var MuteAgentPhoneRequest_AgentPhone = {

};
var MuteAgentPhoneResponse_AgentPhone = {

};
var UnMuteAgentPhoneRequest_AgentPhone = {

};
var UnMuteAgentPhoneResponse_AgentPhone = {

};
var ChangeSkillForAgentRequest_Agents = {
	"skills": [
		{
			"skillId": 0,
			"proficiency": 0,
			"isActive": true
		}
	]
};
var ChangeSkillForAgentResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"skillResults": [
			{
				"success": true,
				"skillId": 0,
				"error": ""
			}
		]
	}
};
var CreateAccessKeyRequest_Agents = {
	"agentId":  0
};
var CreateAccessKeyResponse_Agents = {
	"accesskeys": [
		{
			"accessKeyId": "",
			"accessKeySecret": "",
			"agentId": 0,
			"billingId": 0,
			"isActive": true
		}
	]
};
var CreateAgentMessageRequest_Agents = {
	"agentMessages": [
		{
			"expireMinutes": 0,
			"message": "",
			"messageType": 0,
			"startDate": "",
			"subject": "",
			"targetId": 0,
			"targetType": 1,
			"validUntil": ""
		}
	]
};
var CreateAgentMessageResponse_Agents = {
	"errorCount": 0,
	"agentMessageResults": [
		{
			"agentMessageId": 0,
			"success": true,
			"error": ""
		}
	]
}

;
var CreateAgentRequest_Agents = {
  "agents": [
	{
		"firstName": "",
		"middleName": "",
		"lastName": "",
		"teamId": "",
		"teamUuid": "",
		"reportToId": 0,
		"internalId": "",
		"profileId": 0,
		"roleId": "",
		"password": "",
		"forceChangeOnLogon": true,
		"emailAddress": "",
		"userName": "",
		"userId": "",
		"timeZone": "",
		"country": "",
		"state": "",
		"city": "",
		"chatRefusalTimeout": 0,
		"phoneRefusalTimeout": 0,
		"workItemRefusalTimeout": 0,
		"defaultDialingPattern": 0,
		"useTeamMaxConcurrentChats": true,
		"maxConcurrentChats": 0,
		"isActive": true,
		"locationId": 0,
		"notes": "",
		"hireDate": "",
		"terminationDate": "",
		"hourlyCost": 0,
		"rehireStatus": true,
		"employmentType": "1",
		"referral": "",
		"atHome": true,
		"hiringSource": 0,
		"ntLoginName": "",
		"custom1": "",
		"custom2": "",
		"custom3": "",
		"custom4": "",
		"custom5": "",
		"scheduleNotification": "",
		"federatedId": "",
		"useTeamEmailAutoParkingLimit": true,
		"maxEmailAutoParkingLimit": 0,
		"sipUser": "",
		"systemUser": "",
		"systemDomain": "",
		"crmUserName": "",
		"useAgentTimeZone": true,
		"timeDisplayFormat": 0,
		"sendEmailNotifications": true,
		"apiKey": "",
		"telephone1": "",
		"telephone2": "",
		"userType": "",
		"isWhatIfAgent": true,
		"requestContact": true,
		"chatThreshold": 0,
		"useTeamChatThreshold": true,
		"emailThreshold": 0,
		"useTeamEmailThreshold": true,
		"workItemThreshold": 0,
		"useTeamWorkItemThreshold": true,
		"contactAutoFocus": true,
		"useTeamContactAutoFocus": true,
		"useTeamRequestContact": true,
		"recordingNumbers": true,
		"subject": "",
		"issuer": "",
		"isOpenIdProfileComplete": true,
		"maxPreview": true,
		"deliveryMode": "",
		"totalContactCount": "",
		"useTeamDeliveryModeSettings": true,
		"emailRefusalTimeOut": 0,
		"voicemailRefusalTimeOut": 0,
		"smsRefusalTimeout": 0
	}
  ]
};
var CreateAgentResponse_Agents = {
	"errorCount": 0,
	"results": [
		{
			"success": true,
			"teamId": 0,
			"error": ""
		}
	]
};
var CreateCustomAgentEventRequest_Agents = {
	"eventName": "",
	"persistInMemory": false,
	"data": ""
};
var CreateCustomAgentEventResponse_Agents = {
};
var CreateTeamRequest_Agents = {
  "teams": [
	{
		"teamName": "",
		"isActive": true,
		"maxConcurrentChats": 0,
		"wfoEnabled": true,
		"wfm2Enabled": true,
		"qm2Enabled": true,
		"inViewEnabled": true,
		"inViewGamificationEnabled": true,
		"inViewChatEnabled": true,
		"inViewLMSEnabled": true,
		"notes": "",
		"maxEmailAutoParkingLimit": 0,
		"analyticsEnabled": true,
		"requestContact": true,
		"contactAutoFocus": true,
		"chatThreshold": 0,
		"emailThreshold": 0,
		"workItemThreshold": 0,
		"voiceThreshold": 0,
		"teamLeadId": "",
		"totalContactCount": 0,
		"niceAudioRecordingEnabled": true,
		"niceCoachingEnabled": true,
		"niceDesktopAnalyticsEnabled": true,
		"niceLessonManagementEnabled": true,
		"nicePerformanceManagementEnabled": true,
		"niceQmEnabled": true,
		"niceQualityOptimizationEnabled": true,
		"niceScreenRecordingEnabled": true,
		"niceShiftBiddingEnabled": true,
		"niceSpeechAnalyticsEnabled": true,
		"niceStrategicPlannerEnabled": true,
		"niceSurvey_CustomerEnabled": true,
		"niceWfmEnabled": true,
		"niceWfoAdvancedEnabled": true,
		"niceWfoEssentialsEnabled": true
	}
  ]
};
var CreateTeamResponse_Agents = {
  "errorCount": 0,
  "results": [
	{
		"success": true,
		"teamId": 0,
		"error": ""
	}
  ]
};
var DeleteAccessKeyRequest_Agents = {

};
var DeleteAccessKeyResponse_Agents = {

};
var DeleteAgentMessageRequest_Agents = {
};
var DeleteAgentMessageResponse_Agents = {
};
var EndAgentSessionRequest_Agents = {
};
var EndAgentSessionResponse_Agents = {
};
var GetAccessKeyRequest_Agents = {
};
var GetAccessKeyResponse_Agents = {
	"accessKey": {
		"accessKeyId": "",
		"agentId": 0,
		"billingId": 0,
		"isActive": true,
		"lastUsedDate": ""
	}
};
var GetAccessKeysRequest_Agents = {
	"fields": "",
	"agentId": "",
	"orderBy": "",
	"skip": "",
	"top": ""
};
var GetAccessKeysResponse_Agents = {
	"totalRecords": 0,
	"accesskeys": [
		{
			"accessKeyId": "",
			"agentId": 0,
			"billingId": 0,
			"isActive": true,
			"lastUsedDate": ""
		}
	]
};
var GetAgentContactsBySkillRequest_Agents = {
	"startDate": "",
	"endDate": ""
};
var GetAgentContactsBySkillResponse_Agents = {
	"agentSkillData": {
		"agents": [
			{
				"agent": 0,
				"skills": [
					{
						"SkillNo": 0,
						"OfferedContacts": 0,
						"AnsweredContacts": 0,
						"HoldCalls": 0,
						"TalkTime": 0,
						"HeldTime": 0,
						"ACWTime": 0
					}
				]
			}
		]
	}
};
var GetAgentDialingPatternsRequest_Agents = {
};
var GetAgentDialingPatternsResponse_Agents = {
	"dialingPatterns": [
		{
			"patternId": 0,
			"patternName": "",
			"input": "",
			"output": ""
		}
	]
};
var GetAgentIndicatorRequest_Agents = {
};
var GetAgentIndicatorResponse_Agents = {
	"indicators": [
		{
			"indicatorName": "",
			"senderContactId": 0,
			"imageFile": "",
			"actionType": "",
			"action": "",
			"toolTip": "",
			"enable": true
		}
	]
};
var GetAgentMessageRequest_Agents = {
};
var GetAgentMessageResponse_Agents = {
	"messages": [
		{
			"messageId": 0,
			"messageText": "",
			"expireTimer": 0,
			"messageHint": "",
			"indicatorId": 0,
			"subject": "",
			"validUntil": "2020-07-26T23:59:59.678Z",
			"startDate": "2020-07-26T23:59:59.678Z"
		}
	]
};
var GetAgentQuickRepliesRequest_Agents = {

};
var GetAgentQuickRepliesResponse_Agents = {
	"quickReplies": [
		{
			"quickReplyId": 0,
			"title": "",
			"keyWords": "",
			"content": "",
			"isFavorite": 0,
			"skills": [
				{
					"skillId": 0,
					"skillName": ""
				}
			]
		}
	]
};
var GetAgentRequest_Agents = {
	"fields": ""
};
var GetAgentResponse_Agents = {
  "agents": [
	{
		"agentId": 0,
		"userName": "",
		"firstName": "",
		"middleName": "",
		"lastName": "",
		"userID": "",
		"emailAddress": "",
		"isActive": true,
		"teamId": 0,
		"teamName": "",
		"reportToId": 0,
		"reportToName": "",
		"isSupervisor": true,
		"lastLogin": "2019-04-14T22:53:25.761Z",
		"lastUpdated": "2019-04-14T22:53:25.761Z",
		"location": "",
		"custom1": "",
		"custom2": "",
		"custom3": "",
		"custom4": "",
		"custom5": "",
		"internalId": "",
		"profileId": 0,
		"profileName": "",
		"timeZone": "",
		"country": "",
		"countryName": "",
		"state": "",
		"city": "",
		"chatRefusalTimeout": 0,
		"phoneRefusalTimeout": 0,
		"workItemRefusalTimeout": 0,
		"defaultDialingPattern": 0,
		"defaultDialingPatternName": "",
		"useTeamMaxConcurrentChats": true,
		"maxConcurrentChats": 0,
		"notes": "",
		"createDate": "2020-07-26T23:59:59.678Z",
		"inactiveDate": "2020-07-26T23:59:59.678Z",
		"hireDate": "2020-07-26T23:59:59.678Z",
		"terminationDate": "2020-07-26T23:59:59.678Z",
		"hourlyCost": 0,
		"rehireStatus": true,
		"employmentType": 0,
		"employmentTypeName": "",
		"referral": "",
		"atHome": true,
		"hiringSource": 0,
		"ntLoginName": "",
		"scheduleNotification": "",
		"federatedId": "",
		"useTeamEmailAutoParkingLimit": true,
		"maxEmailAutoParkingLimit": 0,
		"sipUser": "",
		"systemUser": "",
		"systemDomain": "",
		"crmUserName": "",
		"useAgentTimeZone": true,
		"timeDisplayFormat": "",
		"sendEmailNotifications": true,
		"apiKey": "",
		"telephone1": "",
		"telephone2": "",
		"userType": "",
		"isWhatIfAgent": true,
		"timeZoneOffset": "",
		"requestContact": true,
		"chatThreshold": 0,
		"useTeamChatThreshold": true,
		"emailThreshold": 0,
		"useTeamEmailThreshold": true,
		"workItemThreshold": 0,
		"useTeamWorkItemThreshold": true,
		"contactAutoFocus": true,
		"useTeamContactAutoFocus": true,
		"useTeamRequestContact": true,
		"subject": "",
		"issuer": "",
		"recordingNumbers": [
			{
				"number": ""
			}
		],
		"isOpenIdProfileComplete": true,
		"teamUuId": "",
		"maxPreview": true,
		"deliveryMode": "",
		"totalContactCount": 0,
		"useTeamDeliveryModeSettings": true,
		"emailRefusalTimeout": 0,
		"voicemailRefusalTimeout": 0,
		"smsRefusalTimeout": 0
	}
  ]
};
var GetAgentsContactsBySkillRequest_Agents = {
	"startDate": "",
	"endDate": ""
};
var GetAgentsContactsBySkillResponse_Agents = {
	"agentSkillData": {
		"agents": [
			{
				"agent": 0,
				"skills": [
					{
						"SkillNo": 0,
						"OfferedContacts": 0,
						"AnsweredContacts": 0,
						"HoldCalls": 0,
						"TalkTime": 0,
						"HeldTime": 0,
						"ACWTime": 0
					}
				]
			}
		]
	}
};
var GetAgentsRequest_Agents = {
	"updatedSince": "",
	"isActive": "",
	"searchString": "",
	"fields": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetAgentsResponse_Agents = {
	"businessUnitId": 0,
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"totalRecords": 0,
	"agents": [
		{
			"agentId": 0,
			"userName": "",
			"firstName": "",
			"middleName": "",
			"lastName": "",
			"userID": "",
			"emailAddress": "",
			"isActive": true,
			"teamId": 0,
			"teamName": "",
			"reportToId": 0,
			"reportToName": "",
			"isSupervisor": true,
			"lastLogin": "2020-07-26T23:59:59.678Z",
			"lastUpdated": "2020-07-26T23:59:59.678Z",
			"location": "",
			"custom1": "",
			"custom2": "",
			"custom3": "",
			"custom4": "",
			"custom5": "",
			"internalId": "",
			"profileId": 0,
			"profileName": "",
			"timeZone": "",
			"country": "",
			"countryName": "",
			"state": "",
			"city": "",
			"chatRefusalTimeout": 0,
			"phoneRefusalTimeout": 0,
			"workItemRefusalTimeout": 0,
			"defaultDialingPattern": 0,
			"defaultDialingPatternName": "",
			"useTeamMaxConcurrentChats": true,
			"maxConcurrentChats": 0,
			"notes": "",
			"createDate": "2020-07-26T23:59:59.678Z",
			"inactiveDate": "2020-07-26T23:59:59.678Z",
			"hireDate": "2020-07-26T23:59:59.678Z",
			"terminationDate": "2020-07-26T23:59:59.678Z",
			"hourlyCost": 0,
			"rehireStatus": true,
			"employmentType": 0,
			"employmentTypeName": "",
			"referral": "",
			"atHome": true,
			"hiringSource": "",
			"ntLoginName": "",
			"scheduleNotification": 0,
			"federatedId": "",
			"useTeamEmailAutoParkingLimit": true,
			"maxEmailAutoParkingLimit": 0,
			"sipUser": "",
			"systemUser": "",
			"systemDomain": "",
			"crmUserName": "",
			"useAgentTimeZone": true,
			"timeDisplayFormat": "",
			"sendEmailNotifications": true,
			"apiKey": "",
			"telephone1": "",
			"telephone2": "",
			"userType": "",
			"isWhatIfAgent": true,
			"timeZoneOffset": "",
			"requestContact": true,
			"chatThreshold": 0,
			"useTeamChatThreshold": true,
			"emailThreshold": 0,
			"useTeamEmailThreshold": true,
			"workItemThreshold": 0,
			"useTeamWorkItemThreshold": true,
			"contactAutoFocus": true,
			"useTeamContactAutoFocus": true,
			"useTeamRequestContact": true,
			"subject": "",
			"issuer": "",
			"recordingNumbers": [
				{
					"number": ""
				}
			],
			"isOpenIdProfileComplete": true,
			"teamUuId": "",
			"maxPreview": true,
			"deliveryMode": "",
			"totalContactCount": 0,
			"useTeamDeliveryModeSettings": true,
			"emailRefusalTimeout": 0,
			"voicemailRefusalTimeout": 0,
			"smsRefusalTimeout": 0
		}
	]
};
var GetAgentStatesRequest_Agents = {
};
var GetAgentStatesResponse_Agents = {
	"agentStates": [
		{
			"agentStateId": 0,
			"agentStateName": ""
		}
	]
};
var GetGroupsAgentAssignedRequest_Agents = {
	"fields": ""
};
var GetGroupsAgentAssignedResponse_Agents = {
	"agentGroups": [
		{
			"groupId": 0,
			"groupName": "",
			"isActive": true,
			"notes": "",
			"lastUpdated": "2020-07-26T23:59:59.678Z"
		}
	]
};
var GetOutstatesValidForTeamRequest_Agents = {
	"activeOnly": ""
};
var GetOutstatesValidForTeamResponse_Agents = {
	"resultSet": {
		"teamId": 0,
		"teamName": "",
		"teamUuid": "",
		"unavailableCodes": [
			{
				"outStateId": 0,
				"outStateName": "",
				"isActive": true,
				"isAcw": true,
				"agentTimeoutMins": 0
			}
		]
	}
};
var GetQuickRepliesRequest_Agents = {
};
var GetQuickRepliesResponse_Agents = {
	"quickReplies": [
		{
			"quickReplyId": 0,
			"title": "",
			"keyWords": "",
			"content": "",
			"skills": [
				{
					"skillId": 0,
					"skillName": ""
				}
			]
		}
	]
};
var GetSkillsAssignedToAgentRequest_Agents = {
	"fields": "",
	"updatedSince": "",
	"searchString": "",
	"mediaTypeId": "",
	"outboundStrategy": "",
	"isSkillActive": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetSkillsAssignedToAgentResponse_Agents = {
	"_links": {
		"self": "",
		"next": "",
		"previous": ""
	},
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"businessUnitId": 0,
	"totalRecords": 0,
	"agentSkillAssignments": [
		{
			"agentId": 0,
			"firstName": "",
			"middleName": "",
			"lastName": "",
			"agentProficencyValue": 0,
			"agentProficencyName": "",
			"campaignId": 0,
			"campaignName": "",
			"emailFromAddress": "",
			"internalId": "",
			"isActive": true,
			"isSkillActive": true,
			"isDialer": true,
			"isNaturalCalling": true,
			"isNaturalCallingRunning": true,
			"isOutbound": true,
			"lastUpdateTime": "2020-07-26T23:59:59.678Z",
			"mediaTypeId": 0,
			"mediaTypeName": "",
			"notes": "",
			"outboundStrategy": "",
			"priorityBlending": true,
			"requireDisposition": true,
			"scriptDisposition": true,
			"skillId": 0,
			"skillName": "",
			"teamId": 0,
			"teamName": "",
			"useACW": true,
			"useDisposition": true,
			"useSecondaryDispositions": true,
			"screenPopTriggerEvent": ""
		}
	]
};
var GetSkillsAssignedToAgentsRequest_Agents = {
	"fields": "",
	"updatedSince": "",
	"searchString": "",
	"mediaTypeId": "",
	"outboundStrategy": "",
	"isSkillActive": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetSkillsAssignedToAgentsResponse_Agents = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"businessUnitId": 0,
		"totalRecords": 0,
		"agentSkillAssignments": [
			{
				"isActive": true,
				"agentProficencyValue": 0,
				"agentProficencyName": "",
				"internalId": "",
				"agentId": 0,
				"teamId": 0,
				"agentName": "",
				"campaignId": 0,
				"emailFromAddress": "",
				"isSkillActive": true,
				"isDialer": true,
				"isNaturalCalling": true,
				"isOutbound": true,
				"lastUpdateTime": "2020-07-26T23:59:59.678Z",
				"mediaType": 0,
				"notes": "",
				"requireDisposition": true,
				"scriptDisposition": true,
				"skillId": 0,
				"skillName": "",
				"useACW": true,
				"useDisposition": true,
				"useSecondaryDispositions": true,
				"outboundStrategy": "",
				"campaignName": "",
				"priorityBlending": true,
				"isNaturalCallingRunning": true,
				"mediaTypeName": "",
				"screenPopTriggerEvent": "",
				"lastPollTime": "2020-07-26T23:59:59.678Z"
			}
		]
	}
};
var GetSkillsNotAssignedToAgentRequest_Agents = {
	"fields": "",
	"searchString": "",
	"mediaTypeId": "",
	"outboundStrategy": "",
	"isSkillActive": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetSkillsNotAssignedToAgentResponse_Agents = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"businessUnitId": 0,
		"totalRecords": 0,
		"skills": [
			{
				"skillId": 0,
				"skillName": "",
				"isSkillActive": true,
				"mediaTypeId": 0,
				"mediaTypeName": "",
				"campaignId": 0,
				"campaignName": ""
			}
		]
	}
};
var GetTeamAgentsRequest_Agents = {
	"fields": "",
	"searchString": "",
	"skip": "",
	"top": "",
	"orderBy": "",
	"updatedSince": ""
};
var GetTeamAgentsResponse_Agents = {
	"teamId": 0,
	"teamName": "",
	"isActive": true,
	"description": "",
	"notes": "",
	"lastUpdateTime": "2020-07-26T23:59:59.678Z",
	"inViewEnabled": true,
	"wfoEnabled": true,
	"wfm2Enabled": true,
	"qm2Enabled": true,
	"maxConcurrentChats": 0,
	"agentCount": 0,
	"maxEmailAutoParkingLimit": 0,
	"inViewGamificationEnabled": true,
	"inViewChatEnabled": true,
	"inViewLMSEnabled": true,
	"analyticsEnabled": true,
	"requestContact": true,
	"contactAutoFocus": true,
	"chatThreshold": 0,
	"emailThreshold": 0,
	"workItemThreshold": 0,
	"voiceThreshold": 0,
	"socialThreshold": 0,
	"agents": [
		{
			"agentId": 0,
			"userName": "",
			"firstName": "",
			"middleName": "",
			"lastName": "",
			"userID": "",
			"emailAddress": "",
			"isActive": true,
			"teamId": 0,
			"teamName": "",
			"reportToId": 0,
			"reportToName": "",
			"isSupervisor": true,
			"lastLogin": "2020-07-26T23:59:59.678Z",
			"lastUpdated": "2020-07-26T23:59:59.678Z",
			"location": "",
			"custom1": "",
			"custom2": "",
			"custom3": "",
			"custom4": "",
			"custom5": "",
			"internalId": "",
			"profileId": 0,
			"profileName": "",
			"timeZone": "",
			"country": "",
			"countryName": "",
			"state": "",
			"city": "",
			"chatRefusalTimeout": 0,
			"phoneRefusalTimeout": 0,
			"workItemRefusalTimeout": 0,
			"defaultDialingPattern": 0,
			"defaultDialingPatternName": "",
			"useTeamMaxConcurrentChats": true,
			"maxConcurrentChats": 0,
			"notes": "",
			"createDate": "2020-07-26T23:59:59.678Z",
			"inactiveDate": "2020-07-26T23:59:59.678Z",
			"hireDate": "2020-07-26T23:59:59.678Z",
			"terminationDate": "2020-07-26T23:59:59.678Z",
			"hourlyCost": 0,
			"rehireStatus": true,
			"employmentType": 0,
			"employmentTypeName": "",
			"referral": "",
			"atHome": true,
			"hiringSource": 0,
			"ntLoginName": "",
			"scheduleNotification": 0,
			"federatedId": "",
			"useTeamEmailAutoParkingLimit": true,
			"maxEmailAutoParkingLimit": 0,
			"sipUser": "",
			"systemUser": "",
			"systemDomain": "",
			"crmUserName": "",
			"useAgentTimeZone": true,
			"timeDisplayFormat": "",
			"sendEmailNotifications": true,
			"apiKey": "",
			"telephone1": "",
			"telephone2": "",
			"userType": "",
			"isWhatIfAgent": true,
			"timeZoneOffset": "",
			"requestContact": true,
			"chatThreshold": 0,
			"useTeamChatThreshold": true,
			"emailThreshold": 0,
			"useTeamEmailThreshold": true,
			"workItemThreshold": 0,
			"useTeamWorkItemThreshold": true,
			"contactAutoFocus": true,
			"useTeamContactAutoFocus": true,
			"useTeamRequestContact": true,
			"subject": "",
			"issuer": "",
			"recordingNumbers": [
				{
					"number": ""
				}
			],
			"isOpenIdProfileComplete": true,
			"teamUuId": "",
			"maxPreview": true,
			"deliveryMode": "",
			"totalContactCount": 0,
			"useTeamDeliveryModeSettings": true,
			"emailRefusalTimeout": 0,
			"voicemailRefusalTimeout": 0,
			"smsRefusalTimeout": 0
		}
	]
};
var GetTeamRequest_Agents = {
	"fields": ""
};
var GetTeamResponse_Agents = {
	"businessUnitId": 0,
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"teams": [
		{
			"teamId": 0,
			"teamName": "",
			"isActive": true,
			"description": "",
			"notes": "",
			"lastUpdateTime": "2020-07-26T23:59:59.678Z",
			"inViewEnabled": true,
			"wfoEnabled": true,
			"wfm2Enabled": true,
			"qm2Enabled": true,
			"maxConcurrentChats": 0,
			"agentCount": 0,
			"maxEmailAutoParkingLimit": 0,
			"inViewGamificationEnabled": true,
			"inViewChatEnabled": true,
			"inViewLMSEnabled": true,
			"analyticsEnabled": true,
			"requestContact": true,
			"contactAutoFocus": true,
			"chatThreshold": 0,
			"emailThreshold": 0,
			"workItemThreshold": 0,
			"voiceThreshold": 0,
			"evolveTeamId": "",
			"teamLeadUuid": "",
			"deliveryMode": "",
			"totalContactCount": 0,
			"niceAudioRecordingEnabled": true,
			"niceDesktopAnalyticsEnabled": true,
			"niceQmEnabled": true,
			"niceScreenRecordingEnabled": true,
			"niceSpeechAnalyticsEnabled": true,
			"niceWfmEnabled": true,
			"niceQualityOptimizationEnabled": true,
			"niceSurvey_CustomerEnabled": true,
			"nicePerformanceManagementEnabled": true,
			"niceAnalyticsEnabled": true,
			"niceLessonManagementEnabled": true,
			"niceCoachingEnabled": true,
			"niceStrategicPlannerEnabled": true,
			"niceShiftBiddingEnabled": true,
			"niceWfoAdvancedEnabled": true,
			"niceWfoEssentialsEnabled": true,
			"agents": [
				{
					"agentId": 0,
					"firstName": "",
					"lastName": ""
				}
			]
		}
	]
};
var GetTeamsAgentsRequest_Agents = {
	"fields": "",
	"updatedSince": ""
};
var GetTeamsAgentsResponse_Agents = {
	"lastPollTime": "",
	"teams": [
		{
			"teamId": 0,
			"teamName": "",
			"isActive": true,
			"description": "",
			"notes": "",
			"lastUpdateTime": "",
			"inViewEnabled": true,
			"wfoEnabled": true,
			"wfm2Enabled": true,
			"qm2Enabled": true,
			"maxConcurrentChats": 0,
			"agentCount": 0,
			"maxEmailAutoParkingLimit": 0,
			"inViewGamificationEnabled": true,
			"inViewChatEnabled": true,
			"inViewLMSEnabled": true,
			"analyticsEnabled": true,
			"agents": [
				{
					"agentId": 0,
					"userName": "",
					"firstName": "",
					"middleName": "",
					"lastName": "",
					"emailAddress": "",
					"isActive": true,
					"teamId": 0,
					"teamName": "",
					"reportToId": 0,
					"reportToName": "",
					"isSupervisor": true,
					"lastLogin": "2020-07-26T23:59:59.678Z",
					"lastUpdated": "2020-07-26T23:59:59.678Z",
					"location": "",
					"custom1": "",
					"custom2": "",
					"custom3": "",
					"custom4": "",
					"custom5": "",
					"internalId": "",
					"profileId": 0,
					"profileName": "",
					"timeZone": "",
					"country": "",
					"countryName": "",
					"state": "",
					"city": "",
					"chatRefusalTimeout": 0,
					"phoneRefusalTimeout": 0,
					"workItemRefusalTimeout": 0,
					"defaultDialingPattern": 0,
					"defaultDialingPatternName": "",
					"useTeamMaxConcurrentChats": true,
					"maxConcurrentChats": 0,
					"notes": "",
					"createDate": "",
					"inactiveDate": "",
					"hireDate": "2020-07-26T23:59:59.678Z",
					"terminationDate": "2020-07-26T23:59:59.678Z",
					"hourlyCost": 0,
					"rehireStatus": true,
					"employmentType": 0,
					"employmentTypeName": "",
					"referral": "",
					"atHome": true,
					"hiringSource": 0,
					"ntLoginName": "",
					"scheduleNotification": 0,
					"federatedId": "",
					"useTeamEmailAutoParkingLimit": true,
					"maxEmailAutoParkingLimit": 0,
					"sipUser": "",
					"systemUser": "",
					"systemDomain": "",
					"crmUserName": "",
					"useAgentTimeZone": true,
					"timeDisplayFormat": "",
					"sendEmailNotifications": true,
					"apiKey": "",
					"telephone1": "",
					"telephone2": "",
					"userType": "",
					"isWhatIfAgent": true,
					"timeZoneOffset": "",
					"requestContact": true,
					"chatThreshold": 0,
					"useTeamChatThreshold": true,
					"emailThreshold": 0,
					"useTeamEmailThreshold": true,
					"workItemThreshold": 0,
					"useTeamWorkItemThreshold": true,
					"contactAutoFocus": true,
					"useTeamContactAutoFocus": true,
					"useTeamRequestContact": true,
					"subject": "",
					"issuer": "",
					"recordingNumbers": [
						{
							"number": ""
						}
					],
					"isOpenIdProfileComplete": true
				}
			]
		}
	]
};
var GetTeamsRequest_Agents = {
	"fields": "",
	"updatedSince": "",
	"isActive": "",
	"searchString": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetTeamsResponse_Agents = {
	"_links": {
		"self": "",
		"next": "",
		"previous": ""
	},
	"businessUnitId": 0,
	"lastPollTime": "2020-07-26T23:59:59.678Z",
	"totalRecords": 0,
	"teams": [
		{
			"teamId": 0,
			"teamName": "",
			"isActive": true,
			"description": "",
			"notes": "",
			"lastUpdateTime": "2020-07-26T23:59:59.678Z",
			"inViewEnabled": true,
			"wfoEnabled": true,
			"wfm2Enabled": true,
			"qm2Enabled": true,
			"maxConcurrentChats": 0,
			"agentCount": 0,
			"maxEmailAutoParkingLimit": 0,
			"inViewGamificationEnabled": true,
			"inViewChatEnabled": true,
			"inViewLMSEnabled": true,
			"analyticsEnabled": true,
			"requestContact": true,
			"contactAutoFocus": true,
			"chatThreshold": 0,
			"emailThreshold": 0,
			"workItemThreshold": 0,
			"voiceThreshold": 0,
			"evolveTeamId": "",
			"teamLeadUuid": "",
			"niceAudioRecordingEnabled": true,
			"niceDesktopAnalyticsEnabled": true,
			"niceQmEnabled": true,
			"niceScreenRecordingEnabled": true,
			"niceSpeechAnalyticsEnabled": true,
			"niceWfmEnabled": true,
			"niceQualityOptimizationEnabled": true,
			"niceSurvey_CustomerEnabled": true,
			"nicePerformanceManagementEnabled": true,
			"niceAnalyticsEnabled": true,
			"niceLessonManagementEnabled": true,
			"niceCoachingEnabled": true,
			"niceStrategicPlannerEnabled": true,
			"niceShiftBiddingEnabled": true,
			"niceWfoAdvancedEnabled": true,
			"niceWfoEssentialsEnabled": true
		}
	]
};
var RemoveAgentsFromTeamRequest_Agents = {
	"transferTeamId": 0,
	"agents": [
		{
			"agentId": 0
		}
	]
};
var RemoveAgentsFromTeamResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"agentResults": [
			{
				"success": true,
				"agentId": 0,
				"error": true
			}
		]
	}
};
var RemoveSkillAssignedToAgentRequest_Agents = {
	"skills": [
		{
			"skillId": 0
		}
	]
};
var RemoveSkillAssignedToAgentResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"skillResults": [
			{
				"success": true,
				"skillId": 0,
				"error": ""
			}
		]
	}
};
var RemoveUnavailableCodesFromTeamRequest_Agents = {
	"codes": [
		{
			"outstateId": 0
		}
	]
};
var RemoveUnavailableCodesFromTeamResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"codeResults": [
			{
				"success": true,
				"outstateId": 0,
				"error": true
			}
		]
	}
};
var SetAgentStateRequest_Agents = {
	"state": "",
	"outStateId": 0
};
var SetAgentStateResponse_Agents = {
};
var SetSkillsToAgentRequest_Agents = {
	"skills": [
		{
			"skillId": 0,
			"proficiency": 0,
			"isActive": true
		}
	]
};
var SetSkillsToAgentResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"skillResults": [
			{
				"success": true,
				"skillId": 0,
				"error": ""
			}
		]
	}
};
var SetTeamAgentsRequest_Agents = {
	"agents": [
		{
			"agentId": 0
		}
	]
};
var SetTeamAgentsResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"agentResults": [
			{
				"success": true,
				"agentId": 0,
				"error": true
			}
		]
	}
}

;
var SetUnavailableCodesToTeamRequest_Agents = {
	"codes": [
		{
			"outstateId": 0
		}
	]
};
var SetUnavailableCodesToTeamResponse_Agents = {
	"resultSet": {
		"errorCount": 0,
		"codeResults": [
			{
				"success": true,
				"outstateId": 0,
				"error": true
			}
		]
	}
};
var SetUnavailableCodeToTeamsRequest_Agents = {
	"SecurityUser": "",
	"teams": [
		{
			"teamId": 0
		}
	]
};
var SetUnavailableCodeToTeamsResponse_Agents = {
	"error": "",
	"error_Description": ""
};
var UpdateAccessKeyRequest_Agents = {
	"isActive":  false
};
var UpdateAccessKeyResponse_Agents = {
};
var UpdateAgentRequest_Agents = {
	"agent": {
		"firstName": "",
		"middleName": "",
		"lastName": "",
		"teamId": "",
		"teamUuid": "",
		"reportToId": 0,
		"internalId": "",
		"profileId": 0,
		"roleId": "",
		"emailAddress": "",
		"userName": "",
		"userId": "",
		"timeZone": "",
		"country": "",
		"state": "",
		"city": "",
		"chatRefusalTimeout": 0,
		"phoneRefusalTimeout": 0,
		"workItemRefusalTimeout": 0,
		"defaultDialingPattern": 0,
		"useTeamMaxConcurrentChats": true,
		"maxConcurrentChats": 0,
		"isActive": true,
		"locationId": 0,
		"notes": "",
		"hireDate": "",
		"terminationDate": "",
		"hourlyCost": 0,
		"rehireStatus": true,
		"employmentType": "",
		"referral": "",
		"atHome": true,
		"hiringSource": 0,
		"ntLoginName": "",
		"custom1": "",
		"custom2": "",
		"custom3": "",
		"custom4": "",
		"custom5": "",
		"scheduleNotification": "",
		"federatedId": "",
		"useTeamEmailAutoParkingLimit": true,
		"maxEmailAutoParkingLimit": 0,
		"sipUser": "",
		"systemUser": "",
		"systemDomain": "",
		"crmUserName": "",
		"useAgentTimeZone": true,
		"timeDisplayFormat": 0,
		"sendEmailNotifications": true,
		"apiKey": "",
		"telephone1": "",
		"telephone2": "",
		"userType": "",
		"isWhatIfAgent": true,
		"requestContact": true,
		"chatThreshold": 0,
		"useTeamChatThreshold": true,
		"emailThreshold": 0,
		"useTeamEmailThreshold": true,
		"workItemThreshold": 0,
		"useTeamWorkItemThreshold": true,
		"contactAutoFocus": true,
		"useTeamContactAutoFocus": true,
		"useTeamRequestContact": true,
		"recordingNumbers": [
			{
				"number": ""
			}
		],
		"subject": "",
		"issuer": "",
		"isOpenIdProfileComplete": true
	}
};
var UpdateAgentResponse_Agents = {
};
var UpdateTeamRequest_Agents = {
	"forceInactive": true,
	"team": {
		"isActive": true,
		"maxConcurrentChats": 0,
		"wfoEnabled": true,
		"wfm2Enabled": true,
		"qm2Enabled": true,
		"inViewEnabled": true,
		"inViewGamificationEnabled": true,
		"inViewChatEnabled": true,
		"inViewLMSEnabled": true,
		"maxEmailAutoParkingLimit": 0,
		"analyticsEnabled": true,
		"requestContact": true,
		"contactAutoFocus": true,
		"chatThreshold": 0,
		"emailThreshold": 0,
		"workItemThreshold": 0,
		"voiceThreshold": 0,
		"teamLeadId": "",
		"niceAudioRecordingEnabled": true,
		"niceDesktopAnalyticsEnabled": true,
		"niceQmEnabled": true,
		"niceScreenRecordingEnabled": true,
		"niceSpeechAnalyticsEnabled": true,
		"niceWfmEnabled": true,
		"niceQualityOptimizationEnabled": true,
		"niceSurvey_CustomerEnabled": true,
		"nicePerformanceManagementEnabled": true,
		"niceAnalyticsEnabled": true,
		"niceLessonManagementEnabled": true,
		"niceCoachingEnabled": true,
		"niceStrategicPlannerEnabled": true,
		"niceShiftBiddingEnabled": true,
		"niceWfoAdvancedEnabled": true,
		"niceWfoEssentialsEnabled": true
	}
};
var UpdateTeamResponse_Agents = {
};
var UpdateUnavailableCodeRequest_Agents = {
	"unavailableCodeName": "",
	"postContact": true,
	"agentTimeout": 0,
	"isActive": true
};
var UpdateUnavailableCodeResponse_Agents = {
};
var UpdateUnavailableCodesForTeamRequest_Agents = {
	"unavailableCodes": [
		{
			"outStateId": 0
		}
	]
};
var UpdateUnavailableCodesForTeamResponse_Agents = {
};
var RefreshTokenRequest_Auth = {
  "grant_type": "",
  "refresh_token": "",
  "refresh_token_server_uri": ""
};
var RefreshTokenResponse_Auth = {
  "access_token": "",
  "token_type": "",
  "expires_in": 3600,
  "refresh_token": "",
  "refresh_token_server_uri": "",
  "resource_server_base_uri": "",
  "scope": "",
  "agent_id": 645328,
  "team_id": 103748
};
var TokenClientRequest_Auth = {
  "grant_type": "",
  "scope": ""
};
var TokenClientResponse_Auth = {
  "access_token": "",
  "token_type": "",
  "expires_in": 3600,
  "resource_server_base_uri": "",
  "scope": "",
  "agent_id": 645328,
  "team_id": 103748
};
var TokenImplicitRequest_Auth = {
  "state": "",
  "response_type": "",
  "client_id": "",
  "redirect_uri": "",
  "scope": ""
};
var TokenImplicitResponse_Auth = {
  "state": "",
  "scope": "",
  "access_token": "",
  "token_type": "",
  "expires_in": 5184000,
  "resource_server_base_uri": ""
};
var TokenPasswordRequest_Auth = {
  "grant_type": "",
  "username": "",
  "password": "",
  "scope": ""
};
var TokenPasswordResponse_Auth = {
  "access_token": "",
  "token_type": "",
  "expires_in": 3600,
  "refresh_token": "",
  "refresh_token_server_uri": "",
  "resource_server_base_uri": "",
  "scope": "",
  "agent_id": 645328,
  "team_id": 103748
};
var UserCreateAccessKeyRequest_Auth = {
	"userId": "",
	"tenantId": ""
};
var UserCreateAccessKeyResponse_Auth = {
	"accessKey": {
		"accessKeyId": "",
		"accessKeySecret": "",
		"userId": "",
		"tenantId": "",
		"isActive": true
	}
} ;
var UserGenerateTokenRequest_Auth = {
	"accessKeyId": "",
	"accessKeySecret": ""
};
var UserGenerateTokenResponse_Auth = {
	"access_token": "",
	"token_type": "",
	"expires_in": 3600,
	"refresh_token": "",
	"refresh_token_expires_in": 3600,
	"id_token": ""
};
var UserRefreshTokenRequest_Auth = {
	"token": ""
};
var UserRefreshTokenResponse_Auth = {
	"token": "",
	"tokenExpirationTimeSec": 3600,
	"refreshToken": "",
	"refreshTokenExpirationTimeSec": 0,
	"sessionId": ""
} ;
var ChangeAgentPasswordRequest_Authenticate = {
  "currentPassword": "",
  "newPassword": ""
};
var ChangeAgentPasswordResponse_Authenticate = {
  "noResponse": ""
};
var ResetAgentPasswordRequest_Authenticate = {
  "requestedPassword": "",
  "forceChangeOnLogon": false
};
var ResetAgentPasswordResponse_Authenticate = {
  "noResponse": ""
};
var RequestImmediateCallbackRequest_Callback = {
  "phoneNumber": "",
  "callerID": "",
  "callDelaySec": 0,
  "skill": 0,
  "taretAgent": 0,
  "priorityManagement": "",
  "intialPriority": 0,
  "acceleration": 0,
  "maxPriority": 0,
  "sequence": "",
  "zipTone": "",
  "screenPopSrc": "",
  "screenPopUrl": "",
  "timeout": 0
};
var RequestImmediateCallbackResponse_Callback = {

};
var ScheduleCallbackRequest_Callback = {
  "firstName": "",
  "lastName": "",
  "phoneNumber": "",
  "skill": 0,
  "taretAgent": 0,
  "promiseDate": "",
  "promiseTime": "",
  "notes": "",
  "timeZone": ""
};
var ScheduleCallbackResponse_Callback = {

};
var ChatProfileConfigRequest_ChatRequests = {

};
var ChatProfileConfigResponse_ChatRequests = {
  "chatProfile": {
    "chatProfileId": 0,
    "chatProfileName": "",
    "chatInterfaceTypeId": 0,
    "chatAppearance": {
      "primaryColor": "",
      "primaryTextColor": "",
      "agentColor": "",
      "agentInitialColor": "",
      "font": "",
      "chatButtonPosition": ""
    },
    "preChatFormEnabled": true,
    "preChatWelcomeMessage": "",
    "preChatFields": [
      {
        "fieldType": "",
        "fieldLabel": "",
        "fieldIsRequired": true,
        "fieldOptions": [
          {
            "label": ""
          }
        ]
      }
    ],
    "waitingEnabled": true,
    "waitingMessage": "",
    "waitingBackgroundColor": "",
    "waitingTextColor": "",
    "waitingLogo": "",
    "heroImage": ""
  }
};
var EndsActiveChatSessionRequest_ChatRequests = {

};
var EndsActiveChatSessionResponse_ChatRequests = {
  "errorDescription": ""
};
var GetsInboundChatActiveChatSessionRequest_ChatRequests = {
  "timeout": ""
};
var GetsInboundChatActiveChatSessionResponse_ChatRequests = {
  "chatSession": "",
  "messages": [
	{
		"Label": "",
		"PartyTypeId": 0,
		"PartyTypeValue": "",
		"Text": "",
		"Timestamp": "2020-07-26T23:59:59.678Z"
	}
  ]
};
var NotifyAgentPatronTypingRequest_ChatRequests = {
  "isTyping": false,
  "isTextEntered": false,
  "label": ""
};
var NotifyAgentPatronTypingResponse_ChatRequests = {

};
var SendsAgentChatPreviewRequest_ChatRequests = {
  "previewText": "",
  "label": ""
};
var SendsAgentChatPreviewResponse_ChatRequests = {

};
var SendsChatTranscriptEmailRequest_ChatRequests = {
  "fromAddress": "",
  "toAddress": "",
  "emailBody": ""
};
var SendsChatTranscriptEmailResponse_ChatRequests = {

};
var SendsTextMembersChatSessionRequest_ChatRequests = {
	"label": "",
	"message": "",
	"chatTarget": ""
};
var SendsTextMembersChatSessionResponse_ChatRequests = {

};
var StartsChatSessionRequest_ChatRequests = {
	"pointOfContact": "",
	"fromAddress": "",
	"chatRoomID": 0,
	"parameters": [
		{
			"parameter": ""
		}
	],
	"mediaType": 0
};
var StartsChatSessionResponse_ChatRequests = {
  "chatSessionId": "",
  "contactId": 0
};
var AcceptChatContactRequest_ChatRequests1 = {

};
var AcceptChatContactResponse_ChatRequests1 = {

};
var AddChatContactRequest_ChatRequests1 = {

};
var AddChatContactResponse_ChatRequests1 = {

};
var AddSMSChatContactRequest_ChatRequests1 = {
	"mediaType": 0
};
var AddSMSChatContactResponse_ChatRequests1 = {
};
var EndChatContactRequest_ChatRequests1 = {
};
var EndChatContactResponse_ChatRequests1 = {

};
var NotifyPatronAgentTypingRequest_ChatRequests1 = {
  "isTyping": false,
  "isTextEntered": false
};
var NotifyPatronAgentTypingResponse_ChatRequests1 = {

};
var RejectChatContactRequest_ChatRequests1 = {

};
var RejectChatContactResponse_ChatRequests1 = {

};
var RestoreChatActiveStateRequest_ChatRequests1 = {

};
var RestoreChatActiveStateResponse_ChatRequests1 = {

};
var SendChatTextPatronRequest_ChatRequests1 = {
	"chatText": "",
	"chatTarget": ""
};
var SendChatTextPatronResponse_ChatRequests1 = {

};
var TransferToAgentRequest_ChatRequests1 = {
  "targetAgentId": 0
};
var TransferToAgentResponse_ChatRequests1 = {

};
var TransferToSkillRequest_ChatRequests1 = {
  "targetSkillId": 0
};
var TransferToSkillResponse_ChatRequests1 = {

};
var AssignTagsRequest_Contacts = {
  "tags": [
    {
      "tagId": 0
    }
  ]
};
var AssignTagsResponse_Contacts = {
  "resultSet": {
    "errorCount": 0,
    "tagResults": [
      {
        "success": true,
        "tagId": 0,
        "error": ""
      }
    ]
  }
};
var CreateSignalRequest_Contacts = {
  "p1": "",
  "p2": "",
  "p3": "",
  "p4": "",
  "p5": "",
  "p6": "",
  "p7": "",
  "p8": "",
  "p9": ""
};
var CreateSignalResponse_Contacts = {

};
var ForceDisconnectRequest_Contacts = {

};
var ForceDisconnectResponse_Contacts = {

};
var GetChatTranscriptRequest_Contacts = {

};
var GetChatTranscriptResponse_Contacts = {
  "messages": {
    "Messages": [
		{
			"Text": "",
			"TimeStamp": "2020-07-26T23:59:59.678Z",
			"PartyType": "",
			"Label": "",
			"RoomId": 0
		}
    ]
  }
};
var GetEmailTranscriptRequest_Contacts = {
  "includeAttachments": ""
};
var GetEmailTranscriptResponse_Contacts = {
  "emails": [
	{
		"emailTypeId": 0,
		"sentDate": "2020-07-26T23:59:59.678Z",
		"fromAddress": "",
		"toAddress": "",
		"ccAddress": "",
		"bccAddress": "",
		"subject": "",
		"bodyHtml": "",
		"hasAttachments": true,
		"attachments": [
			{
				"attachmentName": "",
				"attachment": ""
			}
		]
	}
  ]
};
var GetFilesRequest_Contacts = {
  "fields": ""
};
var GetFilesResponse_Contacts = {
  "files": [
	{
		"isDeleted": true,
		"businessUnitId": 0,
		"fileName": "",
		"fullFileName": "",
		"weblink": true,
		"contactId": 0,
		"createDate": "2020-07-26T23:59:59.678Z",
		"modifiedDate": "2020-07-26T23:59:59.678Z",
		"accessDate": "2020-07-26T23:59:59.678Z",
		"authorId": 0,
		"modifiedId": 0,
		"size": 0,
		"physicalBytes": 0,
		"deleteDate": "2020-07-26T23:59:59.678Z",
		"purposeId": 0,
		"purposeName": 0,
		"mailStatusId": 0,
		"mailStatusName": ""
	}
  ]
};
var GetPastSMSContactsRequest_Contacts = {
	"ani": "",
	"skillId": "",
	"businessUnitId": ""
};
var GetPastSMSContactsResponse_Contacts = {
};
var GetSMSTranscriptRequest_Contacts = {
	"businessUnitId": ""
};
var GetSMSTranscriptResponse_Contacts = {
};
var GetStateRequest_Contacts = {

};
var GetStateResponse_Contacts = {
  "contactStateDescriptions": [
    {
      "ContactStateCategory": "",
      "ContactStateDescription": "",
      "ContactStateId": 0
    }
  ]
};
var GetStatesRequest_Contacts = {

};
var GetStatesResponse_Contacts = {
  "contactStateDescriptions": [
    {
      "ContactStateCategory": "",
      "ContactStateDescription": "",
      "ContactStateId": 0
    }
  ]
};
var StartMonitoringPhoneCallRequest_Contacts = {
  "phoneNumber": 0
};
var StartMonitoringPhoneCallResponse_Contacts = {

};
var StartRecordingPhoneCallRequest_Contacts = {

};
var StartRecordingPhoneCallResponse_Contacts = {

};
var AddEmailContactRequest_Emails = {

};
var AddEmailContactResponse_Emails = {

};
var CreatesOutboundEmailContactRequest_Emails = {
  "skillId": 0,
  "toAddress": "",
  "parentContactId": 0
};
var CreatesOutboundEmailContactResponse_Emails = {

};
var EndEmailContactRequest_Emails = {
};
var EndEmailContactResponse_Emails = {
};
var ForwardsEmailRequest_Emails = {
  "skillId": 0,
  "toAddress": "",
  "fromAddress": "",
  "ccAddress": "",
  "bccAddress": "",
  "subject": "",
  "bodyHtml": "",
  "attachments": "",
  "attachmentNames": "",
  "originalAttachmentNames": ""
};
var ForwardsEmailResponse_Emails = {

};
var ParksEmailRequest_Emails = {
  "toAddress": "",
  "fromAddress": "",
  "ccAddress": "",
  "bccAddress": "",
  "subject": "",
  "bodyHtml": "",
  "attachments": "",
  "attachmentNames": "",
  "isDraft": false,
  "primaryDispositionId": "",
  "secondaryDispositionId": "",
  "tags": "",
  "notes": "",
  "originalAttachmentNames": ""
};
var ParksEmailResponse_Emails = {

};
var PreviewEmailRequest_Emails = {

};
var PreviewEmailResponse_Emails = {

};
var ReplyToEmailRequest_Emails = {
  "skillId": 0,
  "toAddress": "",
  "fromAddress": "",
  "ccAddress": "",
  "bccAddress": "",
  "subject": "",
  "bodyHtml": "",
  "attachments": "",
  "attachmentNames": ""
};
var ReplyToEmailResponse_Emails = {

};
var RestoreEmailRequest_Emails = {

};
var RestoreEmailResponse_Emails = {

};
var SaveDraftRequest_Emails = {
	"toAddress": "",
	"fromAddress": "",
	"ccAddress": "",
	"bccAddress": "",
	"subject": "",
	"bodyHtml": "",
	"attachments": "",
	"attachmentNames": "",
	"draftEmailGuidStr": "",
	"primaryDispositionId": "",
	"secondaryDispositionId": "",
	"tags": "",
	"notes": "",
	"originalAttachmentNames": ""
};
var SaveDraftResponse_Emails = {
};
var SendsEmailRequest_Emails = {
  "skillId": 0,
  "toAddress": "",
  "fromAddress": "",
  "ccAddress": "",
  "bccAddress": "",
  "subject": "",
  "bodyHtml": "",
  "attachments": "",
  "attachmentNames": ""
};
var SendsEmailResponse_Emails = {

};
var TransferEmailToAgentRequest_Emails = {
	"targetAgentId": 0,
	"toAddress": "",
	"fromAddress": "",
	"ccAddress": "",
	"bccAddress": "",
	"subject": "",
	"bodyHtml": "",
	"attachments": "",
	"attachmentNames": "",
	"isDraft": false,
	"draftEmailGuidStr": "",
	"primaryDispositionId": "",
	"secondaryDispositionId": "",
	"tags": "",
	"notes": "",
	"originalAttachmentNames": ""
};
var TransferEmailToAgentResponse_Emails = {

};
var TransferEmailToSkillRequest_Emails = {
	"targetSkillId": 0,
	"toAddress": "",
	"fromAddress": "",
	"ccAddress": "",
	"bccAddress": "",
	"subject": "",
	"bodyHtml": "",
	"attachments": "",
	"attachmentNames": "",
	"isDraft": false,
	"draftEmailGuidStr": "",
	"primaryDispositionId": "",
	"secondaryDispositionId": "",
	"tags": "",
	"notes": "",
	"originalAttachmentNames": ""
};
var TransferEmailToSkillResponse_Emails = {

};
var UnParksEmailRequest_Emails = {
  "isImmediate": false 
};
var UnParksEmailResponse_Emails = {

};
var CreateHiringSourceRequest_General = {
	"sourceName": ""
};
var CreateHiringSourceResponse_General = {
	"sourceId": 0
};
var CreateHoursOperationProfileRequest_General = {
	"profileName": ""
};
var CreateHoursOperationProfileResponse_General = {
	"profileId": 0,
	"profileName": ""
};
var CreateMessageTemplateRequest_General = {
	"templateName": "",
	"templateTypeId": 0,
	"subject": "",
	"body": "",
	"isHTML": false,
	"ccAddress": "",
	"bccAddress": "",
	"replyToAddress": "",
	"fromName": "",
	"fromAddress": "",
	"smsContent": ""
};
var CreateMessageTemplateResponse_General = {
	"templateId": 0
};
var CreatePointOfContactRequest_General = {
	"pointOfContact": "",
	"pointOfContactName": "",
	"skillId": 0,
	"isActive": true,
	"mediaTypeId": 0,
	"scriptName": "",
	"ivrReportingEnabled": true
};
var CreatePointOfContactResponse_General = {
	"error": "",
	"error_Description": ""
};
var CreateTagRequest_General = {
	"tagName": "",
	"notes": ""
};
var CreateTagResponse_General = {
	"tagId": 0
};
var CreateUnavailableCodeRequest_General = {
	"unavailableCodeName": "",
	"postContact": true,
	"isActive": true
};
var CreateUnavailableCodeResponse_General = {
	"error": "",
	"error_Description": ""
};
var DeleteFolderRequest_General = {
	"folderName": "" 
};
var DeleteFolderResponse_General = {
};
var GetAgentPermissionsRequest_General = {
};
var GetAgentPermissionsResponse_General = {
	"permissions": [
		{
			"BusinessUnitId": 0,
			"Key": "",
			"Value": ""
		}
	]
};
var GetBrandingProfileRequest_General = {
	"businessUnitId": "",
	"fields": ""
};
var GetBrandingProfileResponse_General = {
	"resultSet": {
		"profileId": 0,
		"profileName": "",
		"brandName": "",
		"adminEmail": "",
		"active": true,
		"subdomain": "",
		"stylePackName": "",
		"coBrand": true
	}
};
var GetBusinessUnitConfigRequest_General = {
	"includeTrustedBusinessUnits": "",
	"fields": ""
};
var GetBusinessUnitConfigResponse_General = {
	"businessUnits": [
		{
			"businessUnitId": 0,
			"businessUnitName": "",
			"globalCallerId": "",
			"phoneTimeout": 0,
			"userSessionTimeout": 0,
			"startDayOfWeek": 0,
			"defaultTimeZone": "",
			"agentsUseDefaultTimeZone": true,
			"maxScriptHistory": 0,
			"authGUID": "",
			"coBrand": true,
			"coBrandProfileId": 0,
			"coBrandProfileName": "",
			"connectivityType": "",
			"clientConnectorPort": 0,
			"callSuppression": true,
			"priorityBasedBlending": true,
			"enableFiltering": true,
			"allowPredictiveDialing": true,
			"enableTrueBlending": true,
			"enableSkillAbandonRate": true,
			"abandonRateScope": 0,
			"defaultConfirmationDeliveryModeId": 0,
			"defaultConfirmationDeliveryMode": "",
			"defaultComplianceRecordTypeId": 0,
			"defaultComplianceRecordType": "",
			"defaultContactExpirationMinutes": 0,
			"daysUntilListSourceIsFlaggedForDeletion": 0,
			"scriptNamespace": "",
			"apiPublishedLimit": 0,
			"concurrentPortLimit": 0,
			"ivrSurveyCallbackLimit": 0,
			"stationLimit": 0,
			"userLimit": 0,
			"concurrentAgentLimit": 0,
			"outboundPortLimit": 0,
			"agentlessPortLimit": 0,
			"maxConferenceParties": 0,
			"custom1": "",
			"custom2": "",
			"custom3": "",
			"custom4": "",
			"custom5": "",
			"isActive": true,
			"presenceMasterId": 0,
			"tenantId": "",
			"parentTenantId": "",
			"features": [
				{
					"productId": 0,
					"productDescription": "",
					"isEnabled": true
				}
			],
			"fileExtensions": [
				{
					"extension": ""
				}
			],
			"timeZones": [
				{
					"displayName": "",
					"standardName": ""
				}
			],
			"parentBusinessUnitID": 0,
			"isIntegratedTenant": true,
			"niceEngageConfigId": 0,
			"niceWFMConfigID": 0,
			"niceQMTenantID": 0,
			"niceWFMTenantId": 0,
			"ieX_CustomerName": "",
			"isMultiContactHandling": true
		}
	]
};
var GetConfigurablePhoneNumbersRequest_General = {
	"searchString": "",
	"skip": "",
	"top":  ""
};
var GetConfigurablePhoneNumbersResponse_General = {
	"_links": {
		"self": "",
		"next": "",
		"previous": ""
	},
	"totalRecords": 0,
	"phoneCollection": [
		{
			"phonenumber": ""
		}
	]
};
var GetCountriesRequest_General = {

};
var GetCountriesResponse_General = {
	"countries": [
		{
			"countryId": 0,
			"countryCode": "",
			"countryName": ""
		}
	]
};
var GetDataTypesRequest_General = {
};
var GetDataTypesResponse_General = {
	"dataTypes": [
		{
			"dataTypeId": 0,
			"dataTypeName": ""
		}
	]
};
var GetDirectoriesRequest_General = {
	"folderName": ""
};
var GetDirectoriesResponse_General = {
};
var GetDispositionsRequest_General = {
	"fields": "",
	"skip": "",
	"top": "",
	"searchString": "",
	"orderBy": "",
	"isPreviewDispositions": "",
	"updatedSince": ""
};
var GetDispositionsResponse_General = {
	"businessUnitId": 0,
	"totalRecords": 0,
	"dispositions": [
		{
			"dispositionId": 0,
			"dispositionName": "",
			"notes": "",
			"lastUpdated": "",
			"classificationId": "",
			"systemOutcome": "",
			"isPreviewDisposition": true
		}
	]
};
var GetFeedbackCategoriesPrioritiesRequest_General = {
};
var GetFeedbackCategoriesPrioritiesResponse_General = {
	"categoriesAndPriorities": {
		"feedbackCategories": [
			{
				"title": 0,
				"name": ""
			}
		],
		"feedbackPriorities": [
			{
				"name": ""
			}
		]
	}
};
var GetFileRequest_General = {
	"fileName": ""
};
var GetFileResponse_General = {
	"files": {
		"file": "",
		"fileName": ""
	}
};
var GetHiringSourcesRequest_General = {
};
var GetHiringSourcesResponse_General = {
	"sources": [
		{
			"sourceId": 0,
			"sourceName": ""
		}
	]
};
var GetHourOperationProfileRequest_General = {
	"fields": ""
};
var GetHourOperationProfileResponse_General = {
	"resultSet": {
		"hoursOfOperationProfiles": [
			{
				"profileId": 0,
				"profileName": "",
				"description": "",
				"notes": "",
				"overrideBranch": "",
				"overrideExpirationDate": "2020-07-26T23:59:59.678Z",
				"lastUpdateTime": "2020-07-26T23:59:59.678Z",
				"days": [
					{
						"day": "",
						"openTime": "",
						"closeTime": "",
						"hasAdditionalHours": true,
						"additionalOpenTime": "",
						"additionalCloseTime": "",
						"isClosedAllDay": true
					}
				],
				"holidays": [
					{
						"day": "",
						"openTime": "",
						"closeTime": "",
						"hasAdditionalHours": true,
						"additionalOpenTime": "",
						"additionalCloseTime": "",
						"isClosedAllDay": true
					}
				],
				"scripts": [
					{
						"scriptId": 0,
						"scriptName": ""
					}
				]
			}
		]
	}
};
var GetHoursOperationProfilesRequest_General = {
	"fields": "",
	"updatedSince": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetHoursOperationProfilesResponse_General = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"businessUnitId": 0,
		"totalRecords": 0,
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"hoursOfOperationProfiles": [
			{
				"profileId": 0,
				"profileName": "",
				"description": "",
				"notes": "",
				"overrideBranch": "",
				"overrideExpirationDate": "2020-07-26T23:59:59.678Z",
				"lastUpdateTime": "2020-07-26T23:59:59.678Z",
				"days": [
					{
						"day": "",
						"openTime": "",
						"closeTime": "",
						"hasAdditionalHours": true,
						"additionalOpenTime": "",
						"additionalCloseTime": "",
						"isClosedAllDay": true
					}
				],
				"holidays": [
					{
						"day": "",
						"openTime": "",
						"closeTime": "",
						"hasAdditionalHours": true,
						"additionalOpenTime": "",
						"additionalCloseTime": "",
						"isClosedAllDay": true
					}
				],
				"scripts": [
					{
						"scriptId": 0,
						"scriptName": ""
					}
				]
			}
		]
	}
};
var GetLocationsRequest_General = {
	"includeAgents": ""
};
var GetLocationsResponse_General = {
	"locations": [
		{
			"locationId": 0,
			"locationName": "",
			"agents": [
				{
					"agentId": 0,
					"firstName": "",
					"lastName": ""
				}
			]
		}
	]
};
var GetMediaTypeRequest_General = {
};
var GetMediaTypeResponse_General = {
	"mediaTypes": [
		{
			"MediaTypeId": 0,
			"MediaTypeName": ""
		}
	]
};
var GetMediaTypesRequest_General = {
};
var GetMediaTypesResponse_General = {
	"mediaTypes": [
		{
			"MediaTypeId": 0,
			"MediaTypeName": ""
		}
	]
};
var GetMessageTemplateRequest_General = {
};
var GetMessageTemplateResponse_General = {
	"messageTemplate": {
		"templateId": 0,
		"templateName": "",
		"templateTypeId": 0,
		"templateTypeDesc": "",
		"isActive": true,
		"isHTML": true,
		"ccAddress": "",
		"bccAddress": "",
		"replyToAddress": "",
		"fromName": "",
		"fromAddress": "",
		"body": "",
		"subject": "",
		"smsContent": ""
	}
};
var GetMessageTemplatesRequest_General = {
};
var GetMessageTemplatesResponse_General = {
	"messageTemplates": [
		{
			"templateId": 0,
			"templateName": "",
			"templateTypeId": 0,
			"templateTypeDesc": "",
			"isActive": true,
			"isHTML": true,
			"ccAddress": "",
			"bccAddress": "",
			"replyToAddress": "",
			"fromName": "",
			"fromAddress": "",
			"body": "",
			"subject": ""
		}
	]
};
var GetOutStatesForBusinessUnitRequest_General = {
	"activeOnly": ""
};
var GetOutStatesForBusinessUnitResponse_General = {
	"teamId": 0,
	"teamName": "",
	"teamUuid": "",
	"unavailableCodes": [
		{
			"OutStateId": 0,
			"OutStateName": "",
			"IsAcw": true,
			"AgentTimeoutMins": "",
			"IsActive": true
		}
	]
};
var GetPermissionsRequest_General = {
};
var GetPermissionsResponse_General = {
	"permissions": [
		{
			"BusinessUnitId": 0,
			"Key": "",
			"Value": ""
		}
	]
};
var GetPointOfContactRequest_General = {
};
var GetPointOfContactResponse_General = {
	"pointsOfContact": [
		{
			"BusinessUnitId": 0,
			"ContactAddress": "",
			"ContactCode": 0,
			"ContactDescription": "",
			"DefaultSkillId": 0,
			"IsActive": true,
			"MediaTypeId": 0,
			"MediaTypeName": "",
			"Notes": "",
			"OutboundSkill": true,
			"ScriptName": ""
		}
	]
};
var GetPointsOfContactRequest_General = {
};
var GetPointsOfContactResponse_General = {
	"pointsOfContact": [
		{
			"BusinessUnitId": 0,
			"ContactAddress": "",
			"ContactCode": 0,
			"ContactDescription": "",
			"DefaultSkillId": 0,
			"IsActive": true,
			"MediaTypeId": 0,
			"MediaTypeName": "",
			"Notes": "",
			"OutboundSkill": true,
			"ScriptName": ""
		}
	]
};
var GetScriptsRequest_General = {
	"mediaTypeId": "",
	"isActive": "",
	"searchString": "",
	"fields": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var GetScriptsResponse_General = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"businessUnitId": 0,
		"totalRecords": 0,
		"scripts": [
			{
				"scriptId": 0,
				"scriptName": "",
				"isActive": true,
				"hidden": true,
				"readOnly": true,
				"isLocked": true,
				"lockedBy": 0,
				"mediaTypeId": 0,
				"mediaTypeName": ""
			}
		]
	}
};
var GetSecurityProfileRequest_General = {
};
var GetSecurityProfileResponse_General = {
	"profile": {
		"profileId": 0,
		"profileName": "",
		"description": "",
		"isActive": true,
		"isExternal": true,
		"pwUseRandom": true,
		"pwMinLength": 0,
		"pwMinLower": 0,
		"pwMinUpper": 0,
		"pwMinNumeric": 0,
		"pwMinNonAlpha": 0,
		"assignedAgents": [
			{
				"agentId": 0,
				"firstName": "",
				"lastName": ""
			}
		]
	}
};
var GetSecurityProfilesRequest_General = {
	"isExternal": "",
	"isActive": ""
};
var GetSecurityProfilesResponse_General = {
	"profiles": [
		{
			"profileId": 0,
			"profileName": "",
			"description": "",
			"isActive": true,
			"isExternal": true,
			"pwUseRandom": true,
			"pwMinLength": 0,
			"pwMinLower": 0,
			"pwMinUpper": 0,
			"pwMinNumeric": 0,
			"pwMinNonAlpha": 0
		}
	]
};
var GetServerTimeRequest_General = {
};
var GetServerTimeResponse_General = {
	"ServerTime": "2020-07-26T23:59:59.678Z"
};
var GetSMSPhoneCodesRequest_General = {
};
var GetSMSPhoneCodesResponse_General = {
	"phoneCodes": [
		{
			"transportCode": 0,
			"transportTypeId": 0,
			"transportTypeDesc": "",
			"note": ""
		}
	]
}

;
var GetStatesProvincesRequest_General = {
};
var GetStatesProvincesResponse_General = {
	"resultSet": {
		"countryId": 0,
		"countryName": "",
		"states": [
			{
				"stateId": 0,
				"stateName": "",
				"stateCode": ""
			}
		]
	}
};
var GetTagRequest_General = {
};
var GetTagResponse_General = {
	"tags": [
		{
			"tagId": 0,
			"tagName": "",
			"isActive": true,
			"notes": ""
		}
	]
};
var GetTagsRequest_General = {
	"searchString": "",
	"isActive": ""
};
var GetTagsResponse_General = {
	"tags": [
		{
			"tagId": 0,
			"tagName": "",
			"isActive": true,
			"notes": ""
		}
	]
}

;
var GetTimeZonesRequest_General = {
};
var GetTimeZonesResponse_General = {
	"timeZones": [
		{
			"displayName": "",
			"standardName": "",
			"offset": ""
		}
	]
};
var GetUnprocessedFilesRequest_General = {
	"folderPath": ""
};
var GetUnprocessedFilesResponse_General = {
	"files": [
		{
			"fileName": "",
			"fileNameWithPath": "",
			"needsProcessing": true
		}
	]
};
var MarkFileAsProcessedRequest_General = {
	"fileName": "",
	"needsProcessing": false
};
var MarkFileAsProcessedResponse_General = {
};
var MarkFileForProcessingRequest_General = {
	"fileName": "",
	"file": "",
	"overwrite": false,
	"needsProcessing": false
};
var MarkFileForProcessingResponse_General = {
};
var MoveRenameFileRequest_General = {
	"oldPath": "",
	"newPath": "",
	"overwrite": true
};
var MoveRenameFileResponse_General = {
};
var RemoveFileRequest_General = {
	"fileName": ""
};
var RemoveFileResponse_General = {
};
var StartScriptRequest_General = {
	"skillId": 0,
	"startDate": "",
	"parameters": ""
};
var StartScriptResponse_General = {
	"contactId": 0
};
var UpdateHoursOperationProfileRequest_General = {

};
var UpdateHoursOperationProfileResponse_General = {
};
var UpdateMessageTemplateRequest_General = {
	"templateName": "",
	"isActive": false,
	"subject": "",
	"body": "",
	"isHTML": false,
	"ccAddress": "",
	"bccAddress": "",
	"replyToAddress": "",
	"fromName": "",
	"fromAddress": "",
	"smsContent": ""
};
var UpdateMessageTemplateResponse_General = {
};
var UpdatePointOfContactRequest_General = {
	"pointOfContactName": "",
	"skillId": 0,
	"isActive": true,
	"scriptName": "",
	"ivrReportingEnabled": true
};
var UpdatePointOfContactResponse_General = {
	"error": "",
	"error_Description": ""
};
var UpdateTagRequest_General = {
	"tagName": "",
	"notes": "",
	"isActive": false
};
var UpdateTagResponse_General = {
};
var UploadFileRequest_General = {
	"fileName": "",
	"file": "",
	"overwrite": false
};
var UploadFileResponse_General = {
};
var AssignAgentsRequest_Groups = {
  "agents": [
    {
      "agentId": 0
    }
  ]
};
var AssignAgentsResponse_Groups = {
  "agents": [
    {
      "agentId": 0
    }
  ]
};
var CreateRequest_Groups = {
  "groups": [
    {
      "groupName": "",
      "isActive": "",
      "notes": ""
    }
  ]
};
var CreateResponse_Groups = {
  "errorCount": 0,
  "groupResults": [
    {
      "success": true,
      "groupId": 0,
      "error": ""
    }
  ]
};
var GetAgentsAssignedRequest_Groups = {
  "assigned": "",
  "top": "",
  "skip": "",
  "orderBy": "",
  "fields": "",
  "searchString": ""
};
var GetAgentsAssignedResponse_Groups = {
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "totalRecords": 0,
  "agents": [
    {
      "agentId": 0,
      "userName": "",
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "emailAddress": "",
      "isActive": true,
      "teamId": 0,
      "teamName": "",
      "reportToId": 0,
      "reportToName": "",
      "isSupervisor": true,
      "lastLogin": "",
      "lastUpdated": "",
      "location": "",
      "custom1": "",
      "custom2": "",
      "custom3": "",
      "custom4": "",
      "custom5": "",
      "internalId": "",
      "profileId": 0,
      "profileName": "",
      "timeZone": "",
      "country": "",
      "countryName": "",
      "state": "",
      "city": "",
      "chatRefusalTimeout": 0,
      "phoneRefusalTimeout": 0,
      "workItemRefusalTimeout": 0,
      "defaultDialingPattern": 0,
      "defaultDialingPatternName": "",
      "useTeamMaxConcurrentChats": true,
      "maxConcurrentChats": 0,
      "notes": "",
      "createDate": "",
      "inactiveDate": "",
      "hireDate": "",
      "terminationDate": "",
      "hourlyCost": 0,
      "rehireStatus": true,
      "employmentType": 0,
      "employmentTypeName": "",
      "referral": "",
      "atHome": true,
      "hiringSource": 0,
      "ntLoginName": "",
      "scheduleNotification": 0,
      "federatedId": "",
      "useTeamEmailAutoParkingLimit": true,
      "maxEmailAutoParkingLimit": 0,
      "sipUser": "",
      "systemUser": "",
      "systemDomain": "",
      "crmUserName": "",
      "useAgentTimeZone": true,
      "timeDisplayFormat": "",
      "sendEmailNotifications": true,
      "apiKey": "",
      "telephone1": "",
      "telephone2": "",
      "userType": "",
      "isWhatIfAgent": true,
      "timeZoneOffset": "",
      "requestContact": true,
      "chatThreshold": 0,
      "useTeamChatThreshold": true,
      "emailThreshold": 0,
      "useTeamEmailThreshold": true,
      "workItemThreshold": 0,
      "useTeamWorkItemThreshold": true,
      "contactAutoFocus": true,
      "useTeamContactAutoFocus": true,
      "useTeamRequestContact": true,
      "subject": "",
      "issuer": "",
      "recordingNumbers": [
        {
          "number": ""
        }
      ],
      "isOpenIdProfileComplete": true
    }
  ]
};
var GetConfigurationRequest_Groups = {
  "fields": ""
};
var GetConfigurationResponse_Groups = {
  "totalRecords": 0,
  "groups": [
    {
      "groupId": 0,
      "groupName": "",
      "notes": "",
      "isActive": true,
      "lastUpdated": ""
    }
  ]
}

;
var GetRequest_Groups = {
  "top": "",
  "skip": "",
  "orderBy": "",
  "searchString": "",
  "isActive": "",
  "fields": ""
};
var GetResponse_Groups = {
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "totalRecords": 0,
  "groups": [
    {
      "groupId": 0,
      "groupName": "",
      "notes": "",
      "isActive": true,
      "lastUpdated": ""
    }
  ]
};
var ModifyRequest_Groups = {
  "groupName": "",
  "isActive": "",
  "notes": ""
};
var ModifyResponse_Groups = {

};
var RemoveAgentsRequest_Groups = {
  "agents": [
    {
      "agentId": 0
    }
  ]
};
var RemoveAgentsResponse_Groups = {
  "errorCount": 0,
  "agentResults": [
    {
      "agentId": 0,
      "success": true,
      "error": ""
    }
  ]
}

;
var AddRecordsDoNotCallGroupRequest_Lists = {
  "dncGroupRecords": [
    {
      "phoneNumber": ""
    }
  ]
};
var AddRecordsDoNotCallGroupResponse_Lists = {
  "resultSet": {
    "errorCount": 0,
    "recordResults": [
      {
        "success": true,
        "formattedPhone": "",
        "error": "",
        "phoneNumber": ""
      }
    ]
  }
};
var AssignContributingSkillRequest_Lists = {

};
var AssignContributingSkillResponse_Lists = {

};
var AssignScrubbedSkillRequest_Lists = {

};
var AssignScrubbedSkillResponse_Lists = {

};
var CancelListProcessRequest_Lists = {

};
var CancelListProcessResponse_Lists = {

};
var CreateCallingListMappingRequest_Lists = {
  "listName": "",
  "listExpirationDate": "",
  "externalIdColumn": "",
  "scoreColumn": "",
  "customer1Column": "",
  "customer2Column": "",
  "callerIdColumn": "",
  "priorityColumn": "",
  "complianceReqColumn": "",
  "firstNameColumn": "",
  "lastNameColumn": "",
  "addressColumn": "",
  "cityColumn": "",
  "stateColumn": "",
  "zipColumn": "",
  "timeZoneColumn": "",
  "confirmReqColumn": "",
  "overrideFinalizationColumn": "",
  "agentIdColumn": "",
  "callRequestTimeColumn": "",
  "callRequestStaleColumn": "",
  "notesColumn": "",
  "expirationDateColumn": "",
  "destinationMappings": [
    {
      "fieldName": "",
      "fieldValue": ""
    }
  ],
  "customFieldMappings": [
    {
      "fieldName": "",
      "fieldValue": ""
    }
  ]
};
var CreateCallingListMappingResponse_Lists = {
  "listId": 0
};
var CreateDoNotCallGroupRequest_Lists = {
  "dncGroupName": "",
  "dncGroupDescription": ""
};
var CreateDoNotCallGroupResponse_Lists = {
  "dncGroups": [
	{
		"dncGroupId": 0,
		"dncGroupName": "",
		"dncGroupDescription": "",
		"validRecords": 0,
		"isActive": true,
		"isRemoved": true,
		"createDate": "2020-07-26T23:59:59.678Z",
		"lastUpdateTime": "2020-07-26T23:59:59.678Z"
	}
  ]
};
var DownloadCallingListAttemptsRequest_Lists = {
  "updatedSince": "",
  "finalized": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var DownloadCallingListAttemptsResponse_Lists = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"listName": "",
		"prospectiveContactCount": 0,
		"status": "",
		"totalRecords": 0,
		"validRecords": 0,
		"invalidRecords": 0,
		"finalizedRecords": 0,
		"createDate": "2020-07-26T23:59:59.678Z",
		"uploadDate": "2020-07-26T23:59:59.678Z",
		"updateDate": "2020-07-26T23:59:59.678Z",
		"removeDate": "2020-07-26T23:59:59.678Z",
		"contactAttempts": [
			{
				"contactId": 0,
				"externalId": "",
				"formattedPhone": "",
				"dateOfCall": "2020-07-26T23:59:59.678Z",
				"lastDuration": "2020-07-26T23:59:59.678Z",
				"systemClass": 0,
				"systemClassName": "",
				"agentDisp": 0,
				"agentDispDesc": "",
				"agentId": 0,
				"confirmReq": true,
				"complianceRec": true,
				"deliveryType": "",
				"callNotes": "",
				"commitAmount": "",
				"callbackDate": "2020-07-26T23:59:59.678ZZ",
				"amDefinedExperience": "",
				"amWaveFile": "",
				"callerIdUsed": "",
				"callRequestDate": "2020-07-26T23:59:59.678Z",
				"causeCode": 0,
				"deliveredAgentSpecific": true,
				"deliveredAsCallback": true,
				"deliveredPriority": true,
				"detectionType": "",
				"pcDestinationDesc": "",
				"pcDestinationValue": "",
				"targetAgent": 0,
				"timeZone": ""
			}
		]
	}
};
var DownloadCallingListRequest_Lists = {
  "updatedSince": "",
  "finalized": "",
  "includeRecords": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var DownloadCallingListResponse_Lists = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"listName": "",
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"prospectiveContactCount": 0,
		"status": "",
		"totalRecords": 0,
		"invalidRecords": 0,
		"validRecords": 0,
		"finalizedRecords": 0,
		"createDate": "2020-07-26T23:59:59.678Z",
		"uploadDate": "2020-07-26T23:59:59.678Z",
		"updateDate": "2020-07-26T23:59:59.678Z",
		"removeDate": "2020-07-26T23:59:59.678Z",
		"listExpirationDate": "2020-07-26T23:59:59.678Z",
		"skills": [
			{
				"skillId": 0,
				"skillName": "",
				"totalRecords": 0,
				"freshRecords": 0,
				"finalizedRecords": 0,
				"retriedRecords": 0
			}
		],
		"contactRecords": [
			{
				"externalId": "",
				"score": 0,
				"customer1": "",
				"customer2": "",
				"callerId": "",
				"priority": "",
				"complianceReq": true,
				"firstName": "",
				"lastName": "",
				"address": "",
				"city": "",
				"state": "",
				"zip": "",
				"timeZone": "",
				"confirmReq": true,
				"agentId": 0,
				"overrideFinalization": true,
				"callRequestTime": "2020-07-26T23:59:59.678Z",
				"callRequestStaleMins": 0,
				"notes": "",
				"expirationDate": "2020-07-26T23:59:59.678Z",
				"icAttempts": 0,
				"icFinalStatus": "",
				"icAssignedSkillId": 0,
				"icConfirmationReq": true,
				"icComplianceRecord": true,
				"icPriority": true,
				"icSourceActive": true,
				"icSourceRemoved": true,
				"icTimeZoneNames": "",
				"icTargetAgent": 0,
				"icTargetAgentName": "",
				"icDateOfLastCall": "2020-07-26T23:59:59.678Z",
				"icLastCallDuration": "2020-07-26T23:59:59.678Z",
				"icSystemClassification": 0,
				"icSystemClassificationName": "",
				"icAgentDisposition": 0,
				"icAgentDispositionDesc": "",
				"icAgentNo": 0,
				"icAgentName": "",
				"icCallNotes": "",
				"icCommitmentAmount": 0,
				"icCallerIdUsed": true,
				"icDeliveredComplianceRecord": true,
				"icDeliveredConfirmationRequired": true,
				"icContactDeliveryType": "",
				"icDeliveredPriority": true,
				"icDeliveredAsCallback": true,
				"icDeliveredAgentSpecific": true,
				"icCallbackDateTime": "2020-07-26T23:59:59.678Z",
				"icCallbackAgent": "2020-07-26T23:59:59.678Z",
				"icCallbackAgentName": 0,
				"icCallbackNumber": "",
				"icCallbackNotes": "",
				"icCreateDate": "2020-07-26T23:59:59.678Z",
				"icModifiedDate": "2020-07-26T23:59:59.678Z",
				"icProspectiveContactDestValue": 0,
				"icProspectiveContactDestDesc": "",
				"icProspectiveContactExpireDate": "2020-07-26T23:59:59.678Z",
				"icCallRequestTime": "2020-07-26T23:59:59.678Z",
				"icCallRequestStaleMins": 0,
				"destinations": [
					{
						"formattedDestination": "",
						"description": "",
						"compliance": true,
						"maxAttempts": 0
					}
				],
				"otherFields": [
					{
						"fieldName": "",
						"fieldMapping": "",
						"fieldValue": true
					}
				]
			}
		]
	}
};
var ExpireRecordsDoNotCallGroupRequest_Lists = {
  "dncGroupRecords": [
    {
      "phoneNumber": ""
    }
  ]
};
var ExpireRecordsDoNotCallGroupResponse_Lists = {
  "resultSet": {
    "errorCount": 0,
    "recordResults": [
      {
        "success": true,
        "formattedPhone": "",
        "error": "",
        "phoneNumber": ""
      }
    ]
  }
};
var GetCallingListsRequest_Lists = {

};
var GetCallingListsResponse_Lists = {
  "callingLists": [
	{
		"listId": 0,
		"listName": "",
		"prospectiveContactCount": 0,
		"status": "",
		"totalRecords": 0,
		"invalidRecords": 0,
		"validRecords": 0,
		"finalizedRecords": 0,
		"createDate": "2020-07-26T23:59:59.678Z",
		"uploadDate": "2020-07-26T23:59:59.678Z",
		"updateDate": "2020-07-26T23:59:59.678Z",
		"removeDate": "2020-07-26T23:59:59.678Z"
	}
  ]
};
var GetContributingSkillsDoNotCallGroupRequest_Lists = {

};
var GetContributingSkillsDoNotCallGroupResponse_Lists = {
  "contributingSkills": [
    {
      "skillId": 0,
      "skillName": ""
    }
  ]
};
var GetDoNotCallGroupRequest_Lists = {
  "fields": ""
};
var GetDoNotCallGroupResponse_Lists = {
  "resultSet": {
    "dncGroups": [
		{
			"dncGroupId": 0,
			"dncGroupName": "",
			"dncGroupDescription": "",
			"validRecords": 0,
			"isActive": true,
			"isRemoved": true,
			"createDate": "2020-07-26T23:59:59.678Z",
			"lastUpdateTime": "2020-07-26T23:59:59.678Z"
		}
    ]
  }
};
var GetDoNotCallGroupsRequest_Lists = {
  "fields": "",
  "updatedSince": ""
};
var GetDoNotCallGroupsResponse_Lists = {
  "resultSet": {
    "totalGroups": 0,
    "dncGroups": [
		{
			"dncGroupId": 0,
			"dncGroupName": "",
			"dncGroupDescription": "",
			"validRecords": 0,
			"isActive": true,
			"isRemoved": true,
			"createDate": "2020-07-26T23:59:59.678Z",
			"lastUpdateTime": "2020-07-26T23:59:59.678Z"
		}
    ]
  }
};
var GetRecordsDoNotCallGroupRequest_Lists = {
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var GetRecordsDoNotCallGroupResponse_Lists = {
  "resultSet": {
    "totalRecords": 0,
    "dncRecords": [
      {
        "recordId": true,
        "createdBy": 0,
        "phoneNumber": "",
        "formattedPhone": ""
      }
    ]
  }
};
var GetScrubbedSkillsDoNotCallGroupRequest_Lists = {

};
var GetScrubbedSkillsDoNotCallGroupResponse_Lists = {
  "scrubbedSkills": [
    {
      "skillId": 0,
      "skillName": ""
    }
  ]
};
var GetStatusCallingListUploadJobRequest_Lists = {
  "fields": ""
};
var GetStatusCallingListUploadJobResponse_Lists = {
  "uploadJobs": [
    {
      "jobId": 0,
      "listId": 0,
      "listName": "",
      "startDate": "",
      "submitDate": "",
      "isComplete": true,
      "isCancelled": true,
      "completedDate": ""
    }
  ]
};
var GetStatusCallingListUploadJobsRequest_Lists = {
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": "",
  "startDate": "",
  "endDate": ""
};
var GetStatusCallingListUploadJobsResponse_Lists = {
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "businessUnitId": 0,
  "lastPollTime": "",
  "totalRecords": 0,
  "uploadJobs": [
    {
      "jobId": 0,
      "listId": 0,
      "listName": "",
      "startDate": "",
      "submitDate": "",
      "isComplete": true,
      "isCancelled": true,
      "completedDate": ""
    }
  ]
};
var RemoveCallingListRequest_Lists = {
  "forceInactive": "",
  "forceDelete": ""
};
var RemoveCallingListResponse_Lists = {

};
var RemoveContributingSkillRequest_Lists = {

};
var RemoveContributingSkillResponse_Lists = {

};
var RemoveScrubbedSkillRequest_Lists = {

};
var RemoveScrubbedSkillResponse_Lists = {

};
var SearchPhoneNumberRequest_Lists = {
  "phoneNumber": ""
};
var SearchPhoneNumberResponse_Lists = {
  "searchResults": [
    {
      "dncGroupId": 0,
      "dncGroupName": "",
      "dncGroupDescription": 0,
      "formattedPhone": ""
    }
  ]
};
var UpdateDoNotCallGroupRequest_Lists = {
  "dncGroupName": "",
  "dncGroupDescription": "",
  "isActive": false
};
var UpdateDoNotCallGroupResponse_Lists = {
  "dncGroups": [
	{
		"dncGroupId": 0,
		"dncGroupName": "",
		"dncGroupDescription": "",
		"validRecords": 0,
		"isActive": true,
		"isRemoved": true,
		"createDate": "2020-07-26T23:59:59.678Z",
		"lastUpdateTime": "2020-07-26T23:59:59.678Z"
	}
  ]
};
var UploadRecordsCallListRequest_Lists = {
  "skillId": 0,
  "fileName": "",
  "forceOverwrite": false,
  "defaultTimeZone": "",
  "expirationDate": "",
  "listFile": "",
  "startSkill": false
};
var UploadRecordsCallListResponse_Lists = {
  "resultSet": {
    "sourceId": 0,
    "importStatus": true,
    "procRecords": 0,
    "validRecords": 0,
    "invalidRecords": 0,
    "errorResults": ""
  }
};
var LogIntoDialerCampaignRequest_PersonalCon = {
  "skillName": ""
};
var LogIntoDialerCampaignResponse_PersonalCon = {

};
var LogOutDialerCampaignRequest_PersonalCon = {

};
var LogOutDialerCampaignResponse_PersonalCon = {

};
var SnoozePreviewContactRequest_PersonalCon = {

};
var SnoozePreviewContactResponse_PersonalCon = {

};
var AcceptConsultRequest_PhoneCalls = {

};
var AcceptConsultResponse_PhoneCalls = {

};
var ConferenceCallRequest_PhoneCalls = {

};
var ConferenceCallResponse_PhoneCalls = {

};
var DialAgentConsultRequest_PhoneCalls = {
  "targetAgentId": 0,
  "parentContactId": 0
};
var DialAgentConsultResponse_PhoneCalls = {

};
var DialAgentPersonalQueueRequest_PhoneCalls = {
  "targetAgentId": 0,
  "parentContactId": 0
};
var DialAgentPersonalQueueResponse_PhoneCalls = {

};
var DialIndependentCallRequest_PhoneCalls = {

};
var DialIndependentCallResponse_PhoneCalls = {

};
var DialOutboundCallRequest_PhoneCalls = {
  "phoneNumber": "",
  "skillId": 0,
  "parentContactId": 0
};
var DialOutboundCallResponse_PhoneCalls = {

};
var DialSkillRequest_PhoneCalls = {
  "skillId": 0,
  "parentContactId": 0
};
var DialSkillResponse_PhoneCalls = {

};
var DispositionIndependentCallRequest_PhoneCalls = {
  "outcome": ""
};
var DispositionIndependentCallResponse_PhoneCalls = {

};
var EndCallRequest_PhoneCalls = {
};
var EndCallResponse_PhoneCalls = {
};
var MaskRecordingRequest_PhoneCalls = {

};
var MaskRecordingResponse_PhoneCalls = {

};
var OverrideAmdCallRequest_PhoneCalls = {
  "type": ""
};
var OverrideAmdCallResponse_PhoneCalls = {

};
var PlaceContactOnHoldRequest_PhoneCalls = {
};
var PlaceContactOnHoldResponse_PhoneCalls = {
};
var RecordCallRequest_PhoneCalls = {

};
var RecordCallResponse_PhoneCalls = {

};
var ResumeCallRequest_PhoneCalls = {
};
var ResumeCallResponse_PhoneCalls = {
};
var SendDtmfTonesRequest_PhoneCalls = {
  "dtmfSequence": "",
  "toneDurationMs": 0,
  "toneSpacingMs": 0
};
var SendDtmfTonesResponse_PhoneCalls = {

};
var StopMaskingRecordingRequest_PhoneCalls = {

};
var StopMaskingRecordingResponse_PhoneCalls = {

};
var TransferCallRequest_PhoneCalls = {

};
var TransferCallResponse_PhoneCalls = {

};
var ActiveContactsRequest_RealTime = {
  "updatedSince": "",
  "fields": "",
  "mediaTypeId": "",
  "skillId": "",
  "campaignId": "",
  "agentId": "",
  "teamId": "",
  "toAddr": "",
  "fromAddr": "",
  "stateId": ""
};
var ActiveContactsResponse_RealTime = {
	"resultSet": {
		"businessUnitId": 0,
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"activeContacts": [
			{
				"agentId": 0,
				"campaignId": 0,
				"campaignName": "",
				"contactId": 0,
				"contactStart": "2020-07-26T23:59:59.678Z",
				"fileName": "",
				"firstName": "",
				"fromAddr": "",
				"isLogged": true,
				"isOutbound": true,
				"isTakeover": true,
				"lastName": "",
				"lastUpdateTime": "2020-07-26T23:59:59.678Z",
				"masterContactId": 0,
				"mediaType": 0,
				"mediaTypeName": "",
				"pointOfContactId": 0,
				"pointOfContactName": "",
				"skillId": 0,
				"skillName": "",
				"state": "",
				"stateId": 0,
				"targetAgentId": 0,
				"teamId": 0,
				"teamName": "",
				"toAddr": "",
				"transferIndicatorId": "",
				"transferIndicatorName": ""
			}
		]
	}
};
var ActiveContactStatesRequest_RealTime = {
  "agentId": "",
  "updatedSince": ""
};
var ActiveContactStatesResponse_RealTime = {
  "contactStates": [
	{
		"AgentId": 0,
		"BusinessUnitId": 0,
		"CampaignName": "",
		"CampaignId": 0,
		"ContactId": 0,
		"ContactStateCode": 0,
		"CurrentContactState": "",
		"FirstName": "",
		"FromAddr": "",
		"LastName": "",
		"LastPollTime": "2020-07-26T23:59:59.678Z",
		"LastUpdateTime": "2020-07-26T23:59:59.678Z",
		"MasterContactId": 0,
		"MediaName": "",
		"MediaType": 0,
		"SkillName": "",
		"SkillId": 0,
		"TeamName": "",
		"TeamId": 0,
		"Toaddr": ""
	}
  ]
};
var ActivityAllSkillsRequest_RealTime = {
  "updatedSince": "",
  "fields": ""
};
var ActivityAllSkillsResponse_RealTime = {
	"resultSet": {
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"skillActivity": [
			{
				"serverTime": "2020-07-26T23:59:59.678Z",
				"businessUnitId": 0,
				"agentsACW": 0,
				"agentsAvailable": 0,
				"agentsIdle": 0,
				"agentsLoggedIn": 0,
				"agentsUnavailable": 0,
				"agentsWorking": 0,
				"campaignId": 0,
				"campaignName": "",
				"contactsActive": 0,
				"isOutbound": true,
				"mediaTypeId": 0,
				"mediaTypeName": "",
				"queueCount": 0,
				"serviceLevel": 0,
				"serviceLevelGoal": 0,
				"serviceLevelThreshold": 0,
				"skillName": "",
				"skillId": 0,
				"skillQueueCount": 0,
				"personalQueueCount": 0,
				"parkedCount": 0
			}
		]
	}
};
var ActivitySkillRequest_RealTime = {
  "updatedSince": "",
  "fields": ""
};
var ActivitySkillResponse_RealTime = {
	"resultSet": {
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"skillActivity": [
			{
				"serverTime": "2020-07-26T23:59:59.678Z",
				"businessUnitId": 0,
				"agentsACW": 0,
				"agentsAvailable": 0,
				"agentsIdle": 0,
				"agentsLoggedIn": 0,
				"agentsUnavailable": 0,
				"agentsWorking": 0,
				"campaignId": 0,
				"campaignName": "",
				"contactsActive": 0,
				"isOutbound": true,
				"mediaTypeId": 0,
				"mediaTypeName": "",
				"queueCount": 0,
				"serviceLevel": 0,
				"serviceLevelGoal": 0,
				"serviceLevelThreshold": 0,
				"skillName": "",
				"skillId": 0,
				"skillQueueCount": 0,
				"personalQueueCount": 0,
				"parkedCount": 0
			}
		]
	}
};
var ParkedContactsRequest_RealTime = {
  "updatedSince": "",
  "fields": "",
  "mediaTypeId": "",
  "skillId": "",
  "campaignId": "",
  "agentId": "",
  "teamId": "",
  "toAddr": "",
  "fromAddr": ""
};
var ParkedContactsResponse_RealTime = {
	"resultSet": {
		"businessUnitId": 0,
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"parkedContacts": [
			{
				"agentId": 0,
				"campaignId": 0,
				"campaignName": "",
				"contactId": 0,
				"contactStart": "2020-07-26T23:59:59.678Z",
				"fileName": "",
				"firstName": "",
				"fromAddr": "",
				"isLogged": true,
				"isOutbound": true,
				"isTakeover": true,
				"lastName": "",
				"lastUpdateTime": "2020-07-26T23:59:59.678Z",
				"masterContactId": 0,
				"mediaType": 0,
				"mediaTypeName": "",
				"pointOfContactId": 0,
				"pointOfContactName": "",
				"primaryDispositionId": 0,
				"secondaryDispositionId": 0,
				"skillId": 0,
				"skillName": "",
				"state": "",
				"stateId": 0,
				"targetAgentId": 0,
				"teamId": 0,
				"teamName": "",
				"toAddr": "",
				"transferIndicatorId": "",
				"transferIndicatorName": ""
			}
		]
	}
};
var StateAgentRequest_RealTime = {
  "updatedSince": "",
  "fields": ""
};
var StateAgentResponse_RealTime = {
  "agentStates": [
    {
      "agentId": 0,
      "agentStateId": 0,
      "agentStateName": "",
      "businessUnitId": 0,
      "contactId": 0,
      "isACW": true,
      "isOutbound": true,
      "firstName": "",
      "fromAddress": "",
      "lastName": "",
      "mediaName": "",
      "mediaType": 0,
      "openContacts": 0,
      "outStateDescription": "",
      "outStateId": 0,
      "skillId": 0,
      "skillName": "",
      "stationId": 0,
      "stationPhoneNumber": "",
      "teamId": 0,
      "teamName": "",
      "toAddress": ""
    }
  ]
};
var StateAllAgentsRequest_RealTime = {
  "updatedSince": "",
  "fields": ""
};
var StateAllAgentsResponse_RealTime = {
  "agentStates": [
	{
		"agentId": 0,
		"agentStateId": 0,
		"agentStateName": "",
		"businessUnitId": 0,
		"contactId": 0,
		"isActive": true,
		"isAcw": true,
		"isOutbound": true,
		"firstName": "",
		"fromAddress": "",
		"lastName": "",
		"lastPollTime": "",
		"lastUpdateTime": "",
		"mediaName": "",
		"mediaType": 0,
		"openContacts": 0,
		"outStateDescription": "",
		"outStateId": 0,
		"skillId": 0,
		"skillName": "",
		"startDate": "2020-07-26T23:59:59.678Z",
		"stationId": 0,
		"stationPhoneNumber": "",
		"teamId": 0,
		"teamName": "",
		"toAddress": "",
		"userName": ""
	}
  ]
};
var AgentLoginHistoryRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "searchString": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var AgentLoginHistoryResponse_Reporting = {
  "resultSet": {
    "_links": {
      "self": "",
      "next": "",
      "previous": ""
    },
    "totalRecords": 0,
    "agentLogins": [
		{
			"phoneNumber": 0,
			"callerId": 0,
			"stationId": 0,
			"stationName": "",
			"loginDate": "2020-07-26T23:59:59.678Z"
		}
    ]
  }
};
var ASIMetadataRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var ASIMetadataResponse_Reporting = {
  "wfoAgentSpecificStats": [
	{
		"agentNo": 0,
		"teamName": "",
		"teamNo": 0,
		"businessUnitId": 0,
		"businessUnitName": "",
		"firstName": "",
		"lastName": "",
		"status": "",
		"createDate": "2020-07-26T23:59:59.678Z",
		"modDateTime": "2020-07-26T23:59:59.678Z",
		"productId": 0,
		"ntLoginName": ""
	}
  ]
};
var CompletedContactsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "updatedSince": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": "",
  "mediaTypeId": "",
  "skillId": "",
  "campaignId": "",
  "agentId": "",
  "teamId": "",
  "toAddr": "",
  "fromAddr": "",
  "isLogged": "",
  "isRefused": "",
  "isTakeover": "",
  "tags": "",
  "analyticsProcessed": ""
};
var CompletedContactsResponse_Reporting = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"businessUnitId": 0,
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"completedContacts": [
			{
				"abandoned": true,
				"abandonSeconds": 0,
				"ACWSeconds": "",
				"agentId": 0,
				"agentSeconds": 0,
				"callbackTime": "2020-07-26T23:59:59.678Z",
				"campaignId": 0,
				"campaignName": "",
				"confSeconds": 0,
				"contactId": 0,
				"contactStart": "2020-07-26T23:59:59.678Z",
				"dateACWWarehoused": "2020-07-26T23:59:59.678Z",
				"dateContactWarehoused": "2020-07-26T23:59:59.678Z",
				"dispositionNotes": "",
				"firstName": "",
				"fromAddr": "",
				"holdCount": 0,
				"holdSeconds": 0,
				"inQueueSeconds": 0,
				"isLogged": true,
				"isOutbound": true,
				"isRefused": true,
				"isShortAbandon": true,
				"isTakeover": true,
				"lastName": "",
				"lastUpdateTime": "2020-07-26T23:59:59.678Z",
				"masterContactId": 0,
				"mediaType": 0,
				"mediaTypeName": "",
				"pointOfContactId": 0,
				"pointOfContactName": "",
				"postQueueSeconds": 0,
				"preQueueSeconds": 0,
				"primaryDispositionId": 0,
				"refuseReason": "",
				"refuseTime": "2020-07-26T23:59:59.678Z",
				"releaseSeconds": 0,
				"routingTime": "2020-07-26T23:59:59.678Z",
				"secondaryDispositionId": 0,
				"serviceLevelFlag": "",
				"skillId": 0,
				"skillName": "",
				"teamId": 0,
				"teamName": "",
				"toAddr": "",
				"totalDurationSeconds": 0,
				"transferIndicatorId": "",
				"transferIndicatorName": "",
				"tags": [
					{
						"tagId": 0,
						"tagName": ""
					}
				],
				"analyticsProcessedDate": "2020-07-26T23:59:59.678Z"
			}
		]
	}
};
var ContactCallQualityResponse_Reporting = {
  "contactId": 0,
  "endDateTime": "2018-11-20T22:32:42.972Z",
  "businessUnitId": 0,
  "dnis": "string",
  "ani": "string",
  "lineType": "string",
  "jitter": 0,
  "packetLoss": 0,
  "latency": 0
};
var ContactCustomDataResponse_Reporting = {
  "contactCustomData": [
    {
      "name": "",
      "value": ""
    }
  ]
};
var ContactDetailsRequest_Reporting = {
  "fields": ""
};
var ContactDetailsResponse_Reporting = {
	"resultSet": {
		"abandoned": true,
		"abandonSeconds": 0,
		"ACWSeconds": "",
		"agentId": 0,
		"agentSeconds": 0,
		"callbackTime": "2020-07-26T23:59:59.678Z",
		"campaignId": 0,
		"campaignName": "",
		"confSeconds": 0,
		"contactId": 0,
		"contactStart": "2020-07-26T23:59:59.678Z",
		"dateACWWarehoused": "2020-07-26T23:59:59.678Z",
		"dateContactWarehoused": "2020-07-26T23:59:59.678Z",
		"dispositionNotes": "",
		"firstName": "",
		"fromAddr": "",
		"holdCount": 0,
		"holdSeconds": 0,
		"inQueueSeconds": 0,
		"isLogged": true,
		"isOutbound": true,
		"isRefused": true,
		"isShortAbandon": true,
		"isTakeover": true,
		"lastName": "",
		"lastUpdateTime": "2020-07-26T23:59:59.678Z",
		"masterContactId": 0,
		"mediaType": 0,
		"mediaTypeName": "",
		"pointOfContactId": 0,
		"pointOfContactName": "",
		"postQueueSeconds": 0,
		"preQueueSeconds": 0,
		"primaryDispositionId": 0,
		"refuseReason": "",
		"refuseTime": "2020-07-26T23:59:59.678Z",
		"releaseSeconds": 0,
		"routingTime": "2020-07-26T23:59:59.678Z",
		"secondaryDispositionId": 0,
		"serviceLevelFlag": "",
		"skillId": 0,
		"skillName": "",
		"teamId": 0,
		"teamName": "",
		"toAddr": "",
		"totalDurationSeconds": 0,
		"transferIndicatorId": "",
		"transferIndicatorName": "",
		"tags": [
			{
				"tagId": 0,
				"tagName": ""
			}
		]
	}
};
var ContactHistoryRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "updatedSince": "",
  "mediaTypeId": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var ContactHistoryResponse_Reporting = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"businessUnitId": 0,
		"contactStates": [
			{
				"transferIndicatorId": 0,
				"transferIndicatorName": "",
				"contactId": 0,
				"masterContactId": 0,
				"targetAgentId": 0,
				"fileName": "",
				"pointOfContact": "",
				"mediaType": 0,
				"mediaTypeName": "",
				"agentId": 0,
				"firstName": "",
				"lastName": "",
				"teamId": 0,
				"teamName": "",
				"campaignId": 0,
				"campaignName": "",
				"skillId": 0,
				"skillName": "",
				"isOutbound": true,
				"fromAddr": "",
				"toAddr": "",
				"primaryDispositionId": "",
				"secondaryDispositionId": ""
			}
		]
	}
};
var ContactStateHistoryResponse_Reporting = {
  "contactStateHistory": [
	{
		"stateIndex": 0,
		"contactId": 0,
		"contactStateId": 0,
		"contactStateName": "",
		"startDate": "2020-07-26T23:59:59.678Z",
		"isWarehoused": true,
		"agentId": 0,
		"skillId": 0,
		"skillName": "",
		"duration": 0
	}
  ]
};
var CSIStatisticsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var CSIStatisticsResponse_Reporting = {
  "wfoContactStats": [
	{
		"businessUnitId": 0,
		"businessUnitName": "",
		"intervalStartDate": "2020-07-26T23:59:59.678Z",
		"skillId": 0,
		"skillName": "",
		"serviceLevel": 0,
		"mediaTypeId": 0,
		"mediaTypeName": "",
		"wfoTotalContacts": 0,
		"wfoTotalHandled": 0,
		"wfoAverageHandleTime": 0,
		"wfoAbandonCount": 0,
		"wfoAverageSpeedOfAnswer": 0,
		"totalContactTime": 0
	}
  ]
};
var FTCIAdherenceStatisticsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var FTCIAdherenceStatisticsResponse_Reporting = {
  "wfoAgentStats": [
    {}
  ]
};
var GeneratesLinkToDatadownloadReportRequest_Reporting = {
  "fileName": "",
  "saveAsFile": true,
  "startDate": "",
  "endDate": ""
};
var GeneratesLinkToDatadownloadReportResponse_Reporting = {
 
};
var ListCustomReportsResponse_Reporting = {
  "reports": [
    {
      "businessUnitId": 0,
      "reportId": 0,
      "reportName": "",
      "reportType": "",
      "reportDataSourceTypes": ""
    }
  ]
};
var ListReportingJobsRequest_Reporting = {
  "fields": "",
  "reportId": "",
  "jobStatus": "",
  "jobSpan": ""
};
var ListReportingJobsResponse_Reporting = {
  "runningJobs": [
	{
		"jobId": 0,
		"reportId": 0,
		"reportName": "",
		"jobStart": "2020-07-26T23:59:59.678Z"
	}
  ],
  "completedJobs": [
	{
		"jobId": 0,
		"reportId": 0,
		"reportName": "",
		"jobStart": "2020-07-26T23:59:59.678Z",
		"jobEnd": "2020-07-26T23:59:59.678Z",
		"fileName": "",
		"resultFileURL": ""
	}
  ]
};
var OSIStatisticsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var OSIStatisticsResponse_Reporting = {
  "wfoOutboundStats": [
	{
		"businessUnitId": 0,
		"intervalStartDate": "2020-07-26T23:59:59.678Z",
		"skillId": 0,
		"skillName": "",
		"dials": 0,
		"connects": 0,
		"rightPartyConnects": 0,
		"abandons": 0
	}
  ]
};
var PerformanceSummaryOfAllTeamsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var PerformanceSummaryOfAllTeamsResponse_Reporting = {
  "teamPerformanceTotal": [
	{
		"teamId": 0,
		"inboundTalkTime": "",
		"inboundAvgTalkTime": "",
		"outboundHandled": 0,
		"outboundTalkTime": "",
		"outboundAvgTalkTime": "",
		"totalHandled": 0,
		"totalAvgHandled": 0,
		"totalTalkTime": "",
		"totalAvgTalkTime": "",
		"refused": 0,
		"percentRefused": 0,
		"loginTime": "2020-07-26T23:59:59.678Z",
		"workingRate": 0,
		"occupancy": 0
	}
  ]
};
var PerformanceSummaryOfATeamRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var PerformanceSummaryOfATeamResponse_Reporting = {
  "teamPerformanceTotal": [
	{
		"teamId": 0,
		"inboundTalkTime": "",
		"inboundAvgTalkTime": "",
		"outboundHandled": 0,
		"outboundTalkTime": "",
		"outboundAvgTalkTime": "",
		"totalHandled": 0,
		"totalAvgHandled": 0,
		"totalTalkTime": "",
		"totalAvgTalkTime": "",
		"consultTime": "",
		"availableTime": "",
		"unavailableTime": "",
		"avgUnavailableTime": "",
		"acwTime": "",
		"refused": 0,
		"percentRefused": 0,
		"loginTime": "2020-07-26T23:59:59.678Z",
		"workingRate": 0,
		"occupancy": 0
	}
  ]
};
var PerformanceSummaryRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var PerformanceSummaryResponse_Reporting = {
  "agentPerformance": [
	{
		"agentId": 0,
		"teamId": 0,
		"agentOffered": 0,
		"inboundHandled": 0,
		"inboundTime": "",
		"inboundTalkTime": "",
		"inboundAvgTalkTime": "",
		"outboundHandled": 0,
		"outboundTime": "",
		"outboundTalkTime": "",
		"outboundAvgTalkTime": "",
		"totalHandled": 0,
		"totalTalkTime": "",
		"totalAvgTalkTime": "",
		"totalAvgHandleTime": "",
		"consultTime": "",
		"availableTime": "",
		"unavailableTime": "",
		"acwTime": "",
		"refused": 0,
		"percentRefused": 0,
		"loginTime": "2020-07-26T23:59:59.678Z",
		"workingRate": 0,
		"occupancy": 0
	}
  ]
};
var QualityManagementStatisticsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var QualityManagementStatisticsResponse_Reporting = {
  "wfoQmContactEvaluationStats": [
    {}
  ]
};
var RecentContactsRequest_Reporting = {
  "top": "",
  "fields": "",
  "startDate": "",
  "endDate": ""
};
var RecentContactsResponse_Reporting = {
  "resultSet": {
    "agentId": 0,
    "firstName": "",
    "lastName": "",
    "contactData": [
      {
        "toAgentId": 0,
        "toAgentFirstName": "",
        "toAgentLastName": "",
        "toSkillId": 0,
        "toSkillName": "",
        "toAddr": ""
      }
    ]
  }
};
var ReportingJobRequest_Reporting = {
  "fields": ""
};
var ReportingJobResponse_Reporting = {
	"jobId": 0,
	"reportId": 0,
	"reportName": "",
	"jobStart": "2020-07-26T23:59:59.678Z",
	"jobEnd": "2020-07-26T23:59:59.678Z",
	"fileName": "",
	"resultFileURL": "",
	"deleteTime": "2020-07-26T23:59:59.678Z"
};
var ScorecardStatisticsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "fields": ""
};
var ScorecardStatisticsResponse_Reporting = {
  "wfoScorecardStats": [
	{
		"businessUnitId": 0,
		"agentId": 0,
		"loginTime": "2020-07-26T23:59:59.678Z",
		"totalTime": 0,
		"talkTime": 0,
		"acwTime": 0,
		"holdTime": 0,
		"totalCalls": 0,
		"abandonedCalls": 0,
		"auxTime": 0,
		"auxInTime": 0,
		"auxOutTime": 0,
		"idleTime": 0,
		"actualCalls": 0
	}
  ]
};
var SLASummaryForAllSkillsRequest_Reporting = {
  "startDate": "",
  "endDate": ""
};
var SLASummaryForAllSkillsResponse_Reporting = {
  "serviceLevelSummaries": [
    {
      "BusinessUnitId": 0,
      "SkillId": 0,
      "SkillName": "",
      "ContactsWithinSLA": 0,
      "ContactsOutOfSLA": 0,
      "TotalContacts": 0,
      "ServiceLevel": 0
    }
  ]
};
var SLASummaryForASkillRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "listVar": ""
};
var SLASummaryForASkillResponse_Reporting = {
  "serviceLevelSummaries": [
    {
      "BusinessUnitId": 0,
      "SkillId": 0,
      "SkillName": "",
      "ContactsWithinSLA": 0,
      "ContactsOutOfSLA": 0,
      "TotalContacts": 0,
      "ServiceLevel": 0
    }
  ]
};
var SMSContactTranscriptsRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "transportCode": "",
  "skip": "",
  "top": ""
};
var SMSContactTranscriptsResponse_Reporting = {
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "businessUnitId": 0,
  "totalRecords": 0,
  "smsTranscripts": [
    {
      "messageStart": "",
      "messageBody": "",
      "from": ""
    }
  ]
};
var SMSTranscriptsRequest_Reporting = {
	"agentId": "",
	"startDate": "",
	"endDate": "",
	"transportCode": "",
	"skip": "",
	"top": "",
	"orderBy": ""
};
var SMSTranscriptsResponse_Reporting = {
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "businessUnitId": 0,
  "totalRecords": 0,
  "smsTranscripts": [
    {
      "messageStart": "",
      "messageBody": "",
      "from": "",
      "contactId": 0
    }
  ]
};
var StartCustomReportingJobRequest_Reporting = {
  "fileType": "",
  "includeHeaders": false,
  "appendDate": false,
  "deleteAfter": 0,
  "overwrite": false,
  "startDate": "",
  "endDate": ""
};
var StartCustomReportingJobResponse_Reporting = {
  "jobId": 0
};
var StateDurationRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "mediaTypeId": "",
  "searchString": "",
  "outboundStrategy": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": "",
  "updatedSince": ""
};
var StateDurationResponse_Reporting = {
	"stateIndex": 0,
	"startDate": "2020-07-26T23:59:59.678Z",
	"agentStateId": 0,
	"agentStateName": "",
	"agentSessionId": 0,
	"skillId": 0,
	"skillName": "",
	"mediaTypeId": 0,
	"mediaTypeName": "",
	"fromAddress": "",
	"toAddress": "",
	"outStateId": 0,
	"outStateDescription": "",
	"duration": 0,
	"isOutbound": true,
	"isNaturualCalling": true,
	"stationId": 0
};
var StatisticsForAllSkillsRequest_Reporting = {
  "startDate": "",
  "endDate": ""
};
var StatisticsForAllSkillsResponse_Reporting = {
  "skillSummaries": [
    {
      "BusinessUnitId": 0,
      "AbandonCount": 0,
      "AbandonRate": 0,
      "AgentsACW": 0,
      "AgentsAvaliable": 0,
      "AgentsIdle": 0,
      "AgentsLoggedIn": 0,
      "AgentsUnavaliable": 0,
      "AgentsWorking": 0,
      "AverageHandleTime": 0,
      "AverageInqueueTime": 0,
      "AverageSpeedToAnswer": 0,
      "AverageTalkTime": 0,
      "AverageWrapTime": 0,
      "CampaignId": 0,
      "CampaignName": "",
      "ContactsActive": 0,
      "ContactsHandled": 0,
      "ContactsOffered": 0,
      "ContactsQueued": 0,
      "ContactsOutOfSLA": 0,
      "ContactsWithinSLA": 0,
      "HoldTime": 0,
      "IsOutbound": true,
      "LongestQueueDuration": 0,
      "MediaTypeId": 0,
      "MediaTypeName": "",
      "QueueCount": 0,
      "ServiceLevel": 0,
      "SkillName": "",
      "SkillId": 0,
      "ServiceLevelGoal": 0,
      "ServiceLevelThreshold": 0
    }
  ]
};
var StatisticsForASkillRequest_Reporting = {
  "startDate": "",
  "endDate": "",
  "listVar": ""
};
var StatisticsForASkillResponse_Reporting = {
  "skillSummaries": [
    {
      "BusinessUnitId": 0,
      "AbandonCount": 0,
      "AbandonRate": 0,
      "AgentsACW": 0,
      "AgentsAvaliable": 0,
      "AgentsIdle": 0,
      "AgentsLoggedIn": 0,
      "AgentsUnavaliable": 0,
      "AgentsWorking": 0,
      "AverageHandleTime": 0,
      "AverageInqueueTime": 0,
      "AverageSpeedToAnswer": 0,
      "AverageTalkTime": 0,
      "AverageWrapTime": 0,
      "CampaignId": 0,
      "CampaignName": "",
      "ContactsActive": 0,
      "ContactsHandled": 0,
      "ContactsOffered": 0,
      "ContactsQueued": 0,
      "ContactsOutOfSLA": 0,
      "ContactsWithinSLA": 0,
      "HoldTime": 0,
      "IsOutbound": true,
      "LongestQueueDuration": 0,
      "MediaTypeId": 0,
      "MediaTypeName": "",
      "QueueCount": 0,
      "ServiceLevel": 0,
      "SkillName": "",
      "SkillId": 0,
      "ServiceLevelGoal": 0,
      "ServiceLevelThreshold": 0
    }
  ]
};
var CancelRequest_ScheduledCallbacks = {
  "notes": "" 
};
var CancelResponse_ScheduledCallbacks = {

};
var DialRequest_ScheduledCallbacks = {

};
var DialResponse_ScheduledCallbacks = {

};
var RescheduleRequest_ScheduledCallbacks = {
  "rescheduleDate": ""
};
var RescheduleResponse_ScheduledCallbacks = {

};
var CreateRequest_ScheduledCallbacks1 = {
  "phoneNumber": "",
  "skillId": 0,
  "scheduleDate": "",
  "firstName": "",
  "lastName": "",
  "targetAgentId": 0,
  "notes": ""
};
var CreateResponse_ScheduledCallbacks1 = {
  "callbackId": 0
};
var DeleteRequest_ScheduledCallbacks1 = {

};
var DeleteResponse_ScheduledCallbacks1 = {

};
var GetRequest_ScheduledCallbacks1 = {

};
var GetResponse_ScheduledCallbacks1 = {
  "callbacks": [
	{
		"callbackId": 0,
		"target": "",
		"agentId": 0,
		"skillId": 0,
		"dialNumber": "",
		"origNumber": "",
		"firstName": "",
		"lastName": "",
		"notes": "",
		"callbackTime": "2020-07-26T23:59:59.678Z"
	}
  ]
};
var GetSkillCallbackRequest_ScheduledCallbacks1 = {

};
var GetSkillCallbackResponse_ScheduledCallbacks1 = {
  "callbacks": [
	{
		"callbackId": 0,
		"target": "",
		"agentId": 0,
		"skillId": 0,
		"dialNumber": "",
		"origNumber": "",
		"firstName": "",
		"lastName": "",
		"notes": "",
		"callbackTime": "2020-07-26T23:59:59.678Z"
	}
  ]
};
var UpdateRequest_ScheduledCallbacks1 = {
  "phoneNumber": "",
  "skillId": 0,
  "scheduleDate": "",
  "firstName": "",
  "lastName": "",
  "targetAgentId": 0,
  "notes": ""
};
var UpdateResponse_ScheduledCallbacks1 = {

};
var AcceptRequest_Sessions = {
};
var AcceptResponse_Sessions = {
};
var AddMediaTypeRouteRequest_Sessions = {
  "chat": false,
  "email": false,
  "workitem": false
};
var AddMediaTypeRouteResponse_Sessions = {

};
var ContinueReskillRequest_Sessions = {
  "continueReskill": false
};
var ContinueReskillResponse_Sessions = {

};
var DispositionContactRequest_Sessions = {
  "primaryDispositionId": 0,
  "primaryDispositionNotes": "",
  "primaryCommitmentAmount": 0.0,
  "primaryCallbackTime": "",
  "primaryCallbackNumber": "",
  "secondaryDispositionId": 0,
  "previewDispositionId": 0
};
var DispositionContactResponse_Sessions = {

};
var EndRequest_Sessions = {
};
var EndResponse_Sessions = {
};
var EndSessionRequest_Sessions = {
  "forceLogOff": false,
  "endContacts": false,
  "ignorePersonalQueue": false
};
var EndSessionResponse_Sessions = {

};
var GetEventDescriptionRequest_Sessions = {
  "timeout": ""
};
var GetEventDescriptionResponse_Sessions = {
	"sessionId": "",
	"events": [
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"BusNo": 4500,
			"AgentId": 12214,
			"SessionId": "",
			"StationPhoneNumber": "",
			"StationCallerId": "",
			"DialerCampaign": "",
			"DialerCampaignStartTime": "2020-07-26T23:59:59.678Z",
			"SupervisorPermissionLevel": 4,
			"CanMask": true,
			"AgentSchedulePermission": true,
			"ScoreRecordingsPermission": true,
			"HideAgentStatePermission": true,
			"CanMultiPartyConference": true
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"Success": true,
			"Message": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"Message": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"CurrentState": "",
			"CurrentOutReason": "",
			"NextStates": [
				{
					"State": "",
					"OutReason": ""
				}
			],
			"StartTimeUTC": "2020-07-26T23:59:59.678Z",
			"IsAcw": true,
			"AcwTimeout": 0
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"AgentLegId": 2200339882,
			"Status": "",
			"FinalState": true
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"Command": "",
			"ResultCode": "",
			"ContactID": 2200339882,
			"Target": "",
			"ErrorLevel": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"Empty": true
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ContactID": 1569815,
			"Status": "",
			"OriginalState": true,
			"CallType": "",
			"DNIS": "",
			"ANI": "",
			"Skill": 1507,
			"IsInbound": true,
			"StartTimeUTC": "2020-07-26T23:59:59.678Z",
			"LastStateChangeTimeUTC": "2020-07-26T23:59:59.678Z",
			"ScreenPopUrl": "",
			"DisconnectCode": "",
			"IsLogging": true,
			"Timeout": 45,
			"AllowDispositions": true,
			"Label": "",
			"IsLinked": true,
			"TimeZones": "",
			"FinalState": true,
			"OtherInformation": "",
			"BlendingToSkillName": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ContactID": 1569819,
			"Status": "",
			"WorkItemId": 3920,
			"WorkItemPayload": "",
			"WorkItemType": "",
			"AgentId": 1218,
			"SkillId": 1528,
			"StartTimeUTC": "2020-07-26T23:59:59.678Z",
			"LastStateChangeTimeUTC": "2020-07-26T23:59:59.678Z",
			"ScreenPopUrl": "",
			"ScreenPopUrlVariables": [
				{
					"variable2": ""
				},
				{
					"variable3": ""
				}
			],
			"RefusalTimeout": 45,
			"FinalState": true
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"Name": "",
			"ImageUri": "",
			"ActionType": "",
			"ActionUri": "",
			"ToolTip": "",
			"IndicatorState": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ContactID": 1569819,
			"Action": "",
			"PageUri": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ContactID": 1569822,
			"RoomId": 2,
			"Status": "",
			"Skill": 1509,
			"StartTime": "2020-07-26T23:59:59.678Z",
			"LastStateChangeTime": "2020-07-26T23:59:59.678Z",
			"ScreenPopUrl": "",
			"RefusalTimeout": 45,
			"IsActive": true,
			"Messages": [
				{
					"Text": "",
					"TimeStamp": "2020-07-26T23:59:59.678Z",
					"PartyType": ""
				}
			],
			"FinalState": true
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"RoomId": 2,
			"Label": "",
			"Message": "",
			"PartyType": "",
			"TimeStamp": "2020-07-26T23:59:59.678Z"
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ContactID": 1569822,
			"TakeOverDate": "2020-07-26T23:59:59.678Z"
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ContactID": 6550071587,
			"Status": "",
			"OriginalState": true,
			"CallType": "",
			"DNIS": "",
			"ANI": "",
			"Skill": 50883,
			"IsInbound": true,
			"StartTimeUTC": "2020-07-26T23:59:59.678Z",
			"LastStateChangeTimeUTC": "2020-07-26T23:59:59.678Z",
			"ScreenPopUrl": "",
			"DisconnectCode": "",
			"IsLogging": true,
			"Timeout": 45,
			"AllowDispositions": true,
			"Label": "",
			"IsLinked": true,
			"TimeZones": "",
			"FinalState": true,
			"OtherInformation": ""
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"MonitorStartTime": "2020-07-26T23:59:59.678Z",
			"TargetAgentId": 9011,
			"FinalState": true
		},
		{
			"IISHost": "",
			"VCHost": "",
			"Type": "",
			"ShowContinueReskill": true
		}
	]
};
var HoldRequest_Sessions = {
};
var HoldResponse_Sessions = {
};
var JoinExistingSessionRequest_Sessions = {
  "asAgentId": 0
};
var JoinExistingSessionResponse_Sessions = {
  "sessionId": ""
};
var MoveEmailIntoFocusRequest_Sessions = {

};
var MoveEmailIntoFocusResponse_Sessions = {

};
var PostCustomDataToContactRequest_Sessions = {
  "indicatorName": "",
  "data": ""
};
var PostCustomDataToContactResponse_Sessions = {

};
var PostFeedbackRequest_Sessions = {
  "categoryId": 0,
  "priority": "",
  "comment": "",
  "customData": ""
};
var PostFeedbackResponse_Sessions = {

};
var RejectRequest_Sessions = {
};
var RejectResponse_Sessions = {
};
var ResumeRequest_Sessions = {
};
var ResumeResponse_Sessions = {
};
var SetAgentStateRequest_Sessions = {
  "state": "",
  "reason": ""
};
var SetAgentStateResponse_Sessions = {

};
var StartsSessionRequest_Sessions = {
  "stationId": "",
  "stationPhoneNumber": "",
  "inactivityTimeout": 0,
  "inactivityForceLogout": false,
  "asAgentId": 0
};
var StartsSessionResponse_Sessions = {
  "sessionId": ""
};
var AssignAgentsToSkillRequest_Skills = {
  "agents": [
    {
      "agentId": 0,
      "isActive": true,
      "proficency": 1
    }
  ]
};
var AssignAgentsToSkillResponse_Skills = {
  "resultSet": {
    "errorCount": 0,
    "agentResults": [
      {
        "success": true,
        "agentId": 0,
        "error": true
      }
    ]
  }
};
var AssignTagRequest_Skills = {
  "tags": [
    {
      "tagId": 0
    }
  ]
};
var AssignTagResponse_Skills = {
  "resultSet": {
    "errorCount": 0,
    "tagResults": [
      {
        "success": true,
        "tagId": 0,
        "error": ""
      }
    ]
  }
};
var ChangeDispositionRequest_Skills = {
  "dispositionName": "",
  "isPreviewDisposition": false,
  "classificationId": 0,
  "isActive": false
};
var ChangeDispositionResponse_Skills = {

};
var CreateCampaignRequest_Skills = {
	"campaigns": [
		{
			"campaignName": "",
			"isActive": true,
			"description": "",
			"notes": ""
		}
	]
};
var CreateCampaignResponse_Skills = {
	"errorCount": 0,
	"campaignResults": [
		{
			"campaignId": 0,
			"success": true,
			"error": ""
		}
	]
};
var CreateDispositionRequest_Skills = {
  "dispositions": [
    {
      "dispositionName": "",
      "isPreviewDisposition": true
    }
  ]
};
var CreateDispositionResponse_Skills = {
  "errorCount": 0,
  "dispositionResults": [
    {
      "dispositionId": 0,
      "success": true,
      "error": ""
    }
  ]
}

;
var CreateSkillRequest_Skills = {
  "skills": [
    {
      "mediaTypeId": 0,
      "skillName": "",
      "campaignId": 0,
      "useScreenPops": true,
      "screenPopTriggerEvent": 0,
      "useCustomScreenPops": true,
      "screenPopType": "",
      "screenPopDetails": "",
      "initialPriority": 0,
      "acceleration": 0,
      "maxPriority": 0,
      "serviceLevelThreshold": 0,
      "serviceLevelGoal": 0,
      "enableShortAbandon": true,
      "shortAbandonThreshold": 0,
      "countShortAbandons": true,
      "countOtherAbandons": true,
      "chatWarningThreshold": 0,
      "agentTypingIndicator": true,
      "smsTransportCodeId": 0,
      "messageTemplateId": 0,
      "dispositions": [
        {
          "dispositionId": 0,
          "priority": 0
        }
      ]
    }
  ]
};
var CreateSkillResponse_Skills = {
  "errorCount": 0,
  "skillsResults": [
    {
      "success": true,
      "error": ""
    }
  ]
};
var DeleteCampaignSkillRequest_Skills = {
	"skills": [
		{
			"skillId": 0,
			"transferCampaignId": 0
		}
	]
};
var DeleteCampaignSkillResponse_Skills = {
	"errorCount": 0,
	"results": [
		{
			"skillId": 0,
			"transferCampaignId": 0,
			"success": true,
			"error": ""
		}
	]
};
var GetAgentsAssignedToSkillRequest_Skills = {
  "updatedSince": "",
  "searchString": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var GetAgentsAssignedToSkillResponse_Skills = {
	"resultSet": {
		"_links": {
			"self": "",
			"next": "",
			"previous": ""
		},
		"lastPollTime": "2020-07-26T23:59:59.678Z",
		"businessUnitId": 0,
		"totalRecords": 0,
		"agentSkillAssignments": [
			{
				"agentId": 0,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"agentProficiencyValue": 0,
				"agentProficiencyName": "",
				"campaignId": 0,
				"campaignName": "",
				"emailFromAddress": "",
				"internalId": "",
				"isActive": true,
				"isSkillActive": true,
				"isDialer": true,
				"isNaturalCalling": true,
				"isNaturalCallingRunning": true,
				"isOutbound": true,
				"mediaTypeId": 0,
				"mediaTypeName": "",
				"notes": "",
				"outboundStrategy": "",
				"priorityBlending": true,
				"requireDisposition": true,
				"scriptDisposition": true,
				"skillId": 0,
				"skillName": "",
				"teamId": 0,
				"teamName": "",
				"useACW": true,
				"useDisposition": true,
				"useSecondaryDispositions": true,
				"screenPopTriggerEvent": ""
			}
		]
	}
};
var GetAgentsNotAssignedSkillRequest_Skills = {
  "searchString": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var GetAgentsNotAssignedSkillResponse_Skills = {
  "resultSet": {
    "_links": {
      "self": "",
      "next": "",
      "previous": ""
    },
    "totalRecords": 0,
    "agents": [
      {
        "agentId": 0,
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "isActive": true,
        "teamId": 0,
        "teamName": ""
      }
    ]
  }
};
var GetCampaignRequest_Skills = {

};
var GetCampaignResponse_Skills = {
	"campaign": {
		"campaignId": 0,
		"campaignName": "",
		"isActive": true,
		"description": "",
		"notes": "",
		"lastUpdateTime": "2020-07-26T23:59:59.678Z"
	}
};
var GetCampaignsRequest_Skills = {
  "isActive": "",
  "fields": "",
  "searchString": "",
  "skip": "",
  "top": "",
  "orderby": ""
};
var GetCampaignsResponse_Skills = {
  "resultSet": {
    "_links": {
      "self": "",
      "next": "",
      "previous": ""
    },
    "businessUnitId": 0,
    "totalRecords": 0,
    "campaigns": [
		{
			"campaignId": 0,
			"campaignName": "",
			"isActive": true,
			"description": "",
			"notes": "",
			"lastUpdateTime": "2020-07-26T23:59:59.678Z"
		}
    ]
  }
};
var GetConfigurationThankYouPageRequest_Skills = {

};
var GetConfigurationThankYouPageResponse_Skills = {
  "canDownloadChatTranscript": true,
  "chatThankPopURL": "",
  "displayChatThankPage": true,
  "thankMessage": "",
  "useChatThankPopURL": true,
  "fromAddress": ""
};
var GetCPAManagementConfigurationSkillRequest_Skills = {
  "fields": ""
};
var GetCPAManagementConfigurationSkillResponse_Skills = {
  
};
var GetDeliveryPreferencesConfigurationSkillRequest_Skills = {
  "fields": ""
};
var GetDeliveryPreferencesConfigurationSkillResponse_Skills = {

};
var GetDispositionClassificationsRequest_Skills = {
  "fields": ""
};
var GetDispositionClassificationsResponse_Skills = {
  "classificationResults": [
    {
      "classificationId": 0,
      "businessUnitId": 0,
      "classificationName": "",
      "classificationTypeID": 0,
      "direction": 0,
      "dialingOutcomeID": 0,
      "reportingGroupID": 0,
      "description": "",
      "showCommitmentAmount": true,
      "showRescheduleDate": true,
      "isAgentSpecific": true,
      "isDestinationFinal": true,
      "isContactFinal": true,
      "excludeFromSerialDelivery": true,
      "carryoverForCallback": true
    }
  ]
};
var GetDispositionRequest_Skills = {
  "fields": ""
};
var GetDispositionResponse_Skills = {
  "dispositionId": 0,
  "dispositionName": "",
  "notes": "",
  "lastUpdated": "",
  "classificationId": 0,
  "systemOutcome": "",
  "isPreviewDisposition": true
};
var GetDispositionsSkillAssignmentRequest_Skills = {
	"fields": "",
	"updatedSince": "",
	"isActive": "",
	"searchString": "",
	"orderBy": "",
	"skip": "",
	"top": ""
};
var GetDispositionsSkillAssignmentResponse_Skills = {
	"dispositionId": 0,
	"dispositionName": "",
	"isActive": true,
	"skills": [
		{
			"skillId": 0,
			"mediaTypeId": 0,
			"mediaTypeName": 0
		}
	]
};
var GetOutboundSkillGeneralSettingsRequest_Skills = {
  "fields": ""
};
var GetOutboundSkillGeneralSettingsResponse_Skills = {
  "minimumRetryMinutes": 0,
  "maximumAttempts": 0,
  "defaultContactExpiration": 0,
  "getPriorityContactsOnContactInsertion": true,
  "loadCallbacks": true,
  "loadFresh": true,
  "loadNonFresh": true,
  "overrideBusinessUnitAbandonRate": true,
  "maximumRingingDuration": 0,
  "beginDampenPercentage": 0,
  "abandonRateCutoff": 0,
  "abandonRateThreshold": 0,
  "inactiveBlenderTimer": 0,
  "maximumRatio": 0,
  "aggressiveness": "",
  "endOfListNotificationsDelay": 0,
  "notifyAgentsWhenListIsEmpty": true,
  "percentageOfAgentsBeforeOverdial": 0,
  "blockMultipleCalls": true,
  "consecutiveAttemptsWithoutALiveConnect": 0,
  "enableDialingByProficiency": true,
  "proficiencyFactor": 0,
  "waitTimeFactor": 0,
  "maxConcurrentCallsPerAgent": 0,
  "maxWaitTimeSeconds": 0
};
var GetRetrySettingsSkillRequest_Skills = {
  "fields": ""
};
var GetRetrySettingsSkillResponse_Skills = {

};
var GetScheduleSettingsSkillRequest_Skills = {

};
var GetScheduleSettingsSkillResponse_Skills = {
  "isScheduled": true,
  "sundayStartTime": "",
  "sundayEndTime": "",
  "sundayIsActive": true,
  "mondayStartTime": "",
  "mondayEndTime": "",
  "mondayIsActive": true,
  "tuesdayStartTime": "",
  "tuesdayEndTime": "",
  "tuesdayIsActive": true,
  "wednesdayStartTime": "",
  "wednesdayEndTime": "",
  "wednesdayIsActive": true,
  "thursdayStartTime": "",
  "thursdayEndTime": "",
  "thursdayIsActive": true,
  "fridayStartTime": "",
  "fridayEndTime": "",
  "fridayIsActive": true,
  "saturdayStartTime": "",
  "saturdayEndTime": "",
  "saturdayIsActive": true
};
var GetSkillAssignmentsRequest_Skills = {
  "updatedSince": "",
  "fields": ""
};
var GetSkillAssignmentsResponse_Skills = {
  "lastPollTime": "",
  "businessUnitId": 0,
  "agentSkillAssignments": [
    {
      "agentId": 0,
      "agentName": "",
      "agentProficiencyValue": 0,
      "agentProficiencyName": "",
      "campaignId": 0,
      "campaignName": "",
      "emailFromAddress": "",
      "internalId": "",
      "isActive": true,
      "isSkillActive": true,
      "isNaturalCalling": true,
      "isNaturalCallingRunning": true,
      "isOutbound": true,
      "lastUpdateTime": "",
      "mediaType": 0,
      "mediaTypeName": "",
      "notes": "",
      "outboundStrategy": "",
      "priorityBlending": true,
      "requireDispositions": true,
      "scriptDisposition": true,
      "skillId": 0,
      "skillName": "",
      "useACW": true,
      "useDisposition": true,
      "useSecondaryDisposition": true,
      "screenPopTriggerEvent": "",
      "isAssigned": true
    }
  ],
  "invalidSkills": [
    {
      "skillId": 0
    }
  ]
};
var GetSkillDispositionsRequest_Skills = {
  "fields": "",
  "searchString": "",
  "orderBy": "",
  "skip": "",
  "top": ""
};
var GetSkillDispositionsResponse_Skills = {
  "skillId": 0,
  "skillName": "",
  "totalRecords": 0,
  "dispositions": [
    {
      "dispositionId": 0,
      "dispositionName": "",
      "displayOrder": 0,
      "classification": "",
      "reportingGroup": "",
      "systemOutcome": "",
      "requireCommitmentAmount": true,
      "requireRescheduleDate": true,
      "agentSpecific": true,
      "isPreviewDisposition": true
    }
  ]
};
var GetSkillRequest_Skills = {

  "fields": ""
};
var GetSkillResponse_Skills = {
  "skillId": 0,
  "skillName": "",
  "mediaTypeId": 0,
  "mediaTypeName": "",
  "isActive": true,
  "campaignId": 0,
  "campaignName": "",
  "notes": "",
  "acwTypeId": "1",
  "stateIdACW": 0,
  "stateNameACW": "",
  "maxSecondsACW": 0,
  "acwPostTimeoutStateId": 0,
  "acwPostTimeoutStateName": "",
  "requireDisposition": true,
  "allowSecondaryDispositions": true,
  "scriptDisposition": true,
  "agentRestTime": 0,
  "makeTranscriptAvailable": true,
  "transcriptFromAddress": "",
  "displayThankyou": true,
  "thankYouLink": "",
  "popThankYou": true,
  "popThankYouURL": "",
  "isOutbound": true,
  "outboundStrategy": "",
  "isRunning": true,
  "priorityBlending": true,
  "callerIdOverride": "",
  "scriptId": 0,
  "scriptName": "",
  "emailFromAddress": "",
  "emailFromEditable": true,
  "emailBccAddress": "",
  "emailParking": true,
  "chatWarningThreshold": 0,
  "agentTypingIndicator": true,
  "patronTypingPreview": true,
  "interruptible": true,
  "callSuppressionScriptId": 0,
  "reSkillHours": 0,
  "reSkillHoursName": "",
  "countReSkillHours": true,
  "minWFIAgents": 0,
  "minWfiAvailableAgents": 0,
  "useScreenPops": true,
  "screenPopTriggerEvent": "",
  "useCustomScreenPops": true,
  "screenPopDetail": "",
  "minWorkingTime": 0,
  "agentless": true,
  "agentlessPorts": "",
  "initialPriority": 0,
  "acceleration": 0,
  "maxPriority": 0,
  "serviceLevelThreshold": 0,
  "serviceLevelGoal": 0,
  "enableShortAbandon": true,
  "shortAbandonThreshold": 0,
  "countShortAbandons": true,
  "countOtherAbandons": true,
  "messageTempateId": 0,
  "smsTransportCodeID": 0,
  "smsTransportCode": "",
  "dispositions": [
    {
      "dispositionId": 0,
      "dispositionName": "",
      "priority": 0,
      "isPreviewDisposition": true
    }
  ],
  "deliverMultipleNumbersSerially": true,
  "cradleToGrave": true,
  "priorityInterrupt": true
};
var GetSkillsRequest_Skills = {
  "updatedSince": "",
  "mediaTypeId": "",
  "outboundStrategy": "",
  "isActive": "",
  "searchString": "",
  "fields": "",
  "skip": "",
  "top": "",
  "orderBy": ""
};
var GetSkillsResponse_Skills = {
  "_links": {
    "self": "",
    "next": "",
    "previous": ""
  },
  "businessUnitId": 0,
  "lastPollTime": "",
  "totalRecords": 0,
  "skills": [
    {
      "skillId": 0,
      "skillName": "",
      "mediaTypeId": 0,
      "mediaTypeName": "",
      "isActive": true,
      "campaignId": 0,
      "campaignName": "",
      "notes": "",
      "acwTypeId": 0,
      "stateIdACW": 0,
      "stateNameACW": "",
      "maxSecondsACW": 0,
      "acwPostTimeoutStateId": 0,
      "acwPostTimeoutStateName": "",
      "requireDisposition": true,
      "allowSecondaryDisposition": true,
      "scriptDisposition": true,
      "agentRestTime": 0,
      "makeTranscriptAvailable": true,
      "transcriptFromAddress": "",
      "displayThankyou": true,
      "thankYouLink": "",
      "popThankYou": true,
      "popThankYouURL": "",
      "isOutbound": true,
      "outboundStrategy": "",
      "isRunning": true,
      "priorityBlending": true,
      "callerIdOverride": "",
      "scriptId": 0,
      "scriptName": "",
      "emailFromAddress": "",
      "emailFromEditable": true,
      "emailBccAddress": "",
      "emailParking": true,
      "chatWarningThreshold": 0,
      "agentTypingIndicator": true,
      "patronTypingPreview": true,
      "interruptible": true,
      "callSuppressionScriptId": 0,
      "reskillHours": 0,
      "reskillHoursName": "",
      "countReskillHours": true,
      "minWFIAgents": 0,
      "useScreenPops": true,
      "screenPopTriggerEvent": "",
      "useCustomScreenPops": true,
      "screenPopDetail": "",
      "minWorkingTime": 0,
      "agentless": true,
      "agentlessPorts": 0,
      "initialPriority": 0,
      "acceleration": 0,
      "maxPriority": 0,
      "serviceLevelThreshold": 0,
      "serviceLevelGoal": 0,
      "enableShortAbandon": true,
      "shortAbandonThreshold": 0,
      "countShortAbandons": true,
      "countOtherAbandons": true,
      "messageTemplateId": 0,
      "smsTransportCodeId": 0,
      "smsTransportCode": "",
      "dispositions": [
        {
          "dispositionId": 0,
          "dispositionName": "",
          "priority": 0,
          "isPreviewDisposition": true
        }
      ],
      "deliverMultipleNumbersSerially": true,
      "cradleToGrave": true,
      "priorityInterrupt": true
    }
  ]
};
var GetSummaryContactsAllSkillRequest_Skills = {
  "startDate": "",
  "endDate": ""
};
var GetSummaryContactsAllSkillResponse_Skills = {
  "SkillCallData": {
    "SkillName": "",
    "SkillId": 0,
    "BusinessUnitId": 0,
    "EnteredQueueContacts": 0,
    "OfferedContacts": 0,
    "AnsweredContacts": 0,
    "AnsweredServiceLevelContacts": 0,
    "AbandonedContacts": 0,
    "AbandonedTime": 0,
    "AverageAbandonedTime": 0,
    "AverageACDTime": 0,
    "AverageHandleTime": 0,
    "AverageSpeedAnswerTime": 0
  }
};
var GetSummaryContactsAllSkillsRequest_Skills = {
  "startDate": "",
  "endDate": ""
};
var GetSummaryContactsAllSkillsResponse_Skills = {
  "SkillCallData": {
    "SkillName": "",
    "SkillId": 0,
    "BusinessUnitId": 0,
    "EnteredQueueContacts": 0,
    "OfferedContacts": 0,
    "AnsweredContacts": 0,
    "AnsweredServiceLevelContacts": 0,
    "AbandonedContacts": 0,
    "AbandonedTime": 0,
    "AverageAbandonedTime": 0,
    "AverageACDTime": 0,
    "AverageHandleTime": 0,
    "AverageSpeedAnswerTime": 0
  }
};
var GetTagsRequest_Skills = {

};
var GetTagsResponse_Skills = {
  "resultSet": {
    "skillId": 0,
    "skillName": "",
    "tags": [
      {
        "tagId": 0,
        "tagName": "",
        "isActive": true,
        "notes": ""
      }
    ]
  }
};
var GetUnassignedDispositionsRequest_Skills = {
  "fields": "",
  "searchString": "",
  "orderBy": "",
  "skip": "",
  "top": ""
};
var GetUnassignedDispositionsResponse_Skills = {
  "totalRecords": 0,
  "dispositions": [
    {
      "dispositionId": 0,
      "dispositionName": "",
      "displayOrder": 0,
      "classification": "",
      "reportingGroup": "",
      "systemOutcome": "",
      "requireCommitmentAmount": true,
      "requireRescheduleDate": true,
      "agentSpecific": true,
      "isPreviewDisposition": true
    }
  ]
};
var GetXSConfigurationSkillRequest_Skills = {
  "fields": ""
};
var GetXSConfigurationSkillResponse_Skills = {

};
var RemoveSkillAssignmentRequest_Skills = {
  "agents": [
    {
      "agentId": 0
    }
  ]
};
var RemoveSkillAssignmentResponse_Skills = {
  "resultSet": {
    "errorCount": 0,
    "agentResults": [
      {
        "success": true,
        "agentId": 0,
        "error": true
      }
    ]
  }
};
var RemoveTagsRequest_Skills = {
  "tags": [
    {
      "tagId": 0
    }
  ]
};
var RemoveTagsResponse_Skills = {
  "resultSet": {
    "errorCount": 0,
    "tagResults": [
      {
        "success": true,
        "tagId": 0,
        "error": ""
      }
    ]
  }
};
var SetCampaignSkillsRequest_Skills = {
	"skills": [
		{
			"skillId": 0
		}
	]
};
var SetCampaignSkillsResponse_Skills = {
	"errorCount": 0,
	"results": [
		{
			"success": true,
			"skillId": 0,
			"error": ""
		}
	]
};
var StartPersonalConnectionSkillRequest_Skills = {

};
var StartPersonalConnectionSkillResponse_Skills = {

};
var StopPersonalConnectionSkillRequest_Skills = {
  "force": false
};
var StopPersonalConnectionSkillResponse_Skills = {

};
var UpdateAgentAssignedSkillRequest_Skills = {
  "agents": [
    {
      "agentId": 0,
      "isActive": true,
      "proficency": 1
    }
  ]
};
var UpdateAgentAssignedSkillResponse_Skills = {
  "resultSet": {
    "errorCount": 0,
    "agentResults": [
      {
        "success": true,
        "agentId": 0,
        "error": true
      }
    ]
  }
};
var UpdateCampaignRequest_Skills = {
	"campaign": {
		"campaignName": "",
		"isActive": true,
		"description": "",
		"notes": ""
	}
};
var UpdateCampaignResponse_Skills = {
};
var UpdateCPAManagementConfigurationSkillRequest_Skills = {
  "cpaSettings": {
    "abandonMessagePath": "",
    "abandonMsgMode": 0,
    "abandonTimeout": 0,
    "agentNoResponseSeconds": 0,
    "agentOverrideOptionAnsweringMachine": true,
    "agentOverrideOptionBadNumber": true,
    "agentOverrideOptionFax": true,
    "agentResponseUtteranceMinimumSeconds": 0,
    "agentVoiceThreshold": 0,
    "ansMachineDetMode": 0,
    "ansMachineMsg": "",
    "customerLiveSilenceSeconds": 0,
    "customerVoiceThreshold": 0,
    "enableCPALogging": true,
    "exceptions": [
      {
        "attempt_No": 0,
        "ansMachineDetMode": 0,
        "ansMachineMsg": ""
      }
    ],
    "machineEndSilenceSeconds": 0,
    "machineEndTimeoutSeconds": 0,
    "machineMinimumWithAgentSeconds": 0,
    "machineMinimumWithoutAgentSeconds": 0,
    "preConnectCPAEnabled": true,
    "preConnectCPARecording": true,
    "treatProgressAsRinging": true,
    "utteranceMinimumSeconds": 0
  }
};
var UpdateCPAManagementConfigurationSkillResponse_Skills = {

};
var UpdateDeliveryPreferencesConfigurationSkillRequest_Skills = {
  "deliveryPreferences": {
    "confirmationRequiredDisabled": true,
    "confirmationRequiredDeliveryType": 0,
    "confirmationRequiredTimeout": 0,
    "confirmationRequiredTimeoutSubsequent": 0,
    "confirmationRequiredDefaultAccept": true,
    "confirmationRequiredDefault": true,
    "complianceRecordsDisabled": true,
    "complianceRecordsDeliveryType": 0,
    "complianceRecordsTimeout": 0,
    "complianceRecordsTimeoutSubsequent": 0,
    "complianceRecordsDefaultAccept": true,
    "showComplianceButtonReschedule": true,
    "showComplianceButtonRequeue": true,
    "showComplianceButtonSnooze": true,
    "showComplianceButtonDisposition": true,
    "showPreviewButtonReschedule": true,
    "showPreviewButtonRequeue": true,
    "showPreviewButtonSnooze": true,
    "showPreviewButtonDisposition": true
  }
};
var UpdateDeliveryPreferencesConfigurationSkillResponse_Skills = {

};
var UpdateOutboundSkillGeneralSettingsRequest_Skills = {
  "generalSettings": {
    "minimumRetryMinutes": 0,
    "maximumAttempts": 0,
    "defaultContactExpiration": 0,
    "maximumRingingDuration": 0,
    "beginDampenPercentage": 0,
    "abandonRateCutoff": 0,
    "abandonRateThreshold": 0,
    "inactiveBlenderTimer": 0,
    "maximumRatio": 0,
    "aggressiveness": "",
    "endOfListNotificationsDelay": 0,
    "notifyAgentsWhenListIsEmpty": true,
    "percentageOfAgentsBeforeOverdial": 0,
    "blockMultipleCalls": true,
    "consecutiveAttemptsWithoutALiveConnect": 0,
    "enableDialingByProficiency": true,
    "proficiencyFactor": 0,
    "waitTimeFactor": 0,
    "maxConcurrentCallsPerAgent": 0,
    "maxWaitTimeSeconds": 0
  }
};
var UpdateOutboundSkillGeneralSettingsResponse_Skills = {

};
var UpdateRetrySettingsSkillRequest_Skills = {
  "retrySettings": {
    "loadNonFresh": true,
    "finalizeWhenExhausted": true,
    "maximumAttempts": 0,
    "minimumRetryMinutes": 0,
    "maximumNumberOfHandledCalls": 0,
    "restrictedCallingMinutes": 0,
    "restrictedCallingMaxAttempts": 0,
    "generalStaleMinutes": 0,
    "callbackRestMinutes": 0,
    "releaseAgentSpecificCalls": true,
    "maximumNumberOfCallbacks": 0,
    "callbackStaleMinutes": 0
  }
};
var UpdateRetrySettingsSkillResponse_Skills = {

};
var UpdateScheduleSettingsSkillRequest_Skills = {
  "scheduleSettings": {
    "isScheduled": true,
    "sundayStartTime": "",
    "sundayEndTime": "",
    "sundayIsActive": true,
    "mondayStartTime": "",
    "mondayEndTime": "",
    "mondayIsActive": true,
    "tuesdayStartTime": "",
    "tuesdayEndTime": "",
    "tuesdayIsActive": true,
    "wednesdayStartTime": "",
    "wednesdayEndTime": "",
    "wednesdayIsActive": true,
    "thursdayStartTime": "",
    "thursdayEndTime": "",
    "thursdayIsActive": true,
    "fridayStartTime": "",
    "fridayEndTime": "",
    "fridayIsActive": true,
    "saturdayStartTime": "",
    "saturdayEndTime": "",
    "saturdayIsActive": true
  }
};
var UpdateScheduleSettingsSkillResponse_Skills = {

};
var UpdateSkillRequest_Skills = {
  "skill": {
    "skillName": "",
    "campaignId": 0,
    "callerIdOverride": "",
    "emailFromAddress": "",
    "emailFromEditable": true,
    "emailBccAddress": "",
    "scriptId": 0,
    "reskillHours": 0,
    "minWfiAgents": 0,
    "minWfiAvailableAgents": 0,
    "interruptible": true,
    "enableParking": true,
    "minWorkingTime": 0,
    "agentless": true,
    "agentlessPorts": 0,
    "notes": "",
    "acwTypeId": 0,
    "requireDisposition": true,
    "allowSecondaryDisposition": true,
    "scriptDisposition": true,
    "stateIdAcw": 0,
    "maxSecondsAcw": 0,
    "agentRestTime": 0,
    "displayThankYou": true,
    "thankYouLink": "",
    "popThankYou": true,
    "popThankYouUrl": "",
    "makeTranscriptAvailable": true,
    "transcriptFromAddress": "",
    "priorityBlending": true,
    "callSuppressionScriptId": 0,
    "useScreenPops": true,
    "screenPopTriggerEvent": 0,
    "useCustomScreenPops": true,
    "screenPopType": "",
    "screenPopDetails": "",
    "initialPriority": 0,
    "acceleration": 0,
    "maxPriority": 0,
    "serviceLevelThreshold": 0,
    "serviceLevelGoal": 0,
    "enableShortAbandon": true,
    "shortAbandonThreshold": 0,
    "countShortAbandons": true,
    "countOtherAbandons": true,
    "chatWarningThreshold": 0,
    "agentTypingIndicator": true,
    "smsTransportCodeId": 0,
    "messageTemplateId": 0,
    "dispositions": [
      {
        "dispositionId": 0,
        "priority": 0
      }
    ]
  }
};
var UpdateSkillResponse_Skills = {

};
var UpdateXSConfigurationSkillRequest_Skills = {
  "xsSettings": {
    "xsScriptID": 0,
    "xsCheckinScriptID": 0,
    "externalOutboundSkill_No": "",
    "xsSkillChangedActive": true,
    "xsGetContactsActive": true,
    "xsFreshThreshold": 0,
    "xsAvailableThreshold": 0,
    "xsReadyThreshold": 0,
    "xsNumberToRetrieve": 0
  }
};
var UpdateXSConfigurationSkillResponse_Skills = {

};
var BargeOnAgentRequest_Supervisor = {

};
var BargeOnAgentResponse_Supervisor = {

};
var CoachAgentRequest_Supervisor = {

};
var CoachAgentResponse_Supervisor = {

};
var MonitorAgentRequest_Supervisor = {
  "targetAgentId": 0
};
var MonitorAgentResponse_Supervisor = {

};
var TakeOverAgentRequest_Supervisor = {

};
var TakeOverAgentResponse_Supervisor = {

};
var EndVoicemailContactRequest_Voicemails = {

};
var EndVoicemailContactResponse_Voicemails = {

};
var PauseVoicemailRequest_Voicemails = {

};
var PauseVoicemailResponse_Voicemails = {

};
var PlayVoicemailRequest_Voicemails = {
  "playTimestamp": false,
  "position": 0
};
var PlayVoicemailResponse_Voicemails = {

};
var TransferVoicemailToAgentRequest_Voicemails = {
  "targetAgentId": 0
};
var TransferVoicemailToAgentResponse_Voicemails = {

};
var TransferVoicemailToSkillRequest_Voicemails = {
  "targetSkillId": 0
};
var TransferVoicemailToSkillResponse_Voicemails = {

};
var AdherenceStatisticsRequest_WFMData = {
  "fields": "",
  "startDate": "",
  "endDate": ""
};
var AdherenceStatisticsResponse_WFMData = {
  "agentStateHistory": [
    {
      "businessUnitId": 0,
      "businessUnitName": "",
      "agentId": 0,
      "stateIndex": 0,
      "startDate": "",
      "agentStateId": 0,
      "agentSessionId": 0,
      "skillId": 0,
      "outStateId": 0,
      "outStateDescription": "",
      "duration": 0
    }
  ]
};
var AgentMetadataRequest_WFMData = {
  "fields": "",
  "startDate": "",
  "endDate": ""
};
var AgentMetadataResponse_WFMData = {
  "wfM_Data_Agents": [
    {
      "agentNo": 0,
      "teamName": "",
      "teamNo": 0,
      "businessUnitId": 0,
      "businessUnitName": "",
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "status": "",
      "createDate": "",
      "modDateTime": "",
      "productId": 0,
      "ntLoginName": ""
    }
  ]
};
var AgentPerformanceRequest_WFMData = {
  "fields": "",
  "startDate": "",
  "endDate": ""
};
var AgentPerformanceResponse_WFMData = {
  "businessUnitId": 0,
  "businessUnitName": "",
  "skillId": 0,
  "skillName": "",
  "agentId": 0,
  "firstName": "",
  "lastName": "",
  "halfHour": 0,
  "totalHandled": 0,
  "totalHandledTime": 0,
  "totalACWTime": 0
};
var ContactStatisticsRequest_WFMData = {
  "fields": "",
  "startDate": "",
  "endDate": "",
  "mediaTypeId": ""
};
var ContactStatisticsResponse_WFMData = {
  "businessUnitId": 0,
  "businessUnitName": "",
  "intervalStartDate": "",
  "skillId": 0,
  "skillName": "",
  "isOutbound": true,
  "serviceLevel": 0,
  "mediaTypeId": 0,
  "MediaTypeName": "",
  "totalContacts": 0,
  "totalHandled": 0,
  "averageHandleTime": 0,
  "abandonCount": 0,
  "averageSpeedOfAnswer": 0,
  "totalContactTime": 0
};
var DailerContactStatisticsRequest_WFMData = {
  "fields": "",
  "startDate": "",
  "endDate": "",
  "mediaTypeId": ""
};
var DailerContactStatisticsResponse_WFMData = {
  "wfM_OB_StatsV9": [
    {
      "businessUnitId": 0,
      "businessUnitName": "",
      "intervalStartDate": "",
      "skillId": 0,
      "skillName": "",
      "mediaTypeId": 0,
      "mediaTypeName": "",
      "dials": 0,
      "connects": 0,
      "connectsAHT": 0,
      "rightPartyConnects": 0,
      "rightPartyConnectsAHT": 0,
      "abandons": 0
    }
  ]
};
var ScorecardStatisticsRequest_WFMData = {
  "fields": "",
  "startDate": "",
  "endDate": ""
};
var ScorecardStatisticsResponse_WFMData = {
  "agentStateHistory": [
    {
      "businessUnitId": 0,
      "businessUnitName": "",
      "agentId": 0,
      "stateIndex": 0,
      "startDate": "",
      "agentStateId": 0,
      "agentSessionId": 0,
      "skillId": 0,
      "outStateId": 0,
      "outStateDescription": "",
      "duration": 0
    }
  ]
};
var CreateWorkItemRequest_WorkItem = {
  "pointOfContact": "",
  "workItemId": "",
  "workItemPayload": "",
  "workItemType": "",
  "from": ""
};
var CreateWorkItemResponse_WorkItem = {

};
var AcceptRequest_WorkItems = {

};
var AcceptResponse_WorkItems = {

};
var EndRequest_WorkItems = {

};
var EndResponse_WorkItems = {

};
var HoldRequest_WorkItems = {

};
var HoldResponse_WorkItems = {

};
var RejectRequest_WorkItems = {

};
var RejectResponse_WorkItems = {

};
var ResumeRequest_WorkItems = {

};
var ResumeResponse_WorkItems = {

};
var AgentError_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"Command": "",
	"ResultCode": "",
	"ContactID": 2200339882,
	"Target": "",
	"ErrorLevel": ""
};
var AgentLeg_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"AgentLegId": 2200339882,
	"Status": "",
	"FinalState": true
};
var AgentSessionEnd_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"Success": true,
	"Message": ""
};
var AgentSessionStart_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"BusNo": 4500,
	"AgentId": 12214,
	"SessionId": "",
	"StationPhoneNumber": "",
	"StationCallerId": "",
	"DialerCampaign": "",
	"DialerCampaignStartTime": "2020-07-26T23:59:59.678Z",
	"SupervisorPermissionLevel": 4,
	"CanMask": true,
	"AgentSchedulePermission": true,
	"ScoreRecordingsPermission": true,
	"HideAgentStatePermission": true,
	"CanMultiPartyConference": true
};
var AgentState_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"CurrentState": "",
	"CurrentOutReason": "",
	"NextStates": [
		{
			"State": "",
			"OutReason": ""
		}
	],
	"StartTimeUTC": "2020-07-26T23:59:59.678Z",
	"IsAcw": true,
	"AcwTimeout": 0
};
var CallContactEvent_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ContactID": 15698155676564,
	"Status": "",
	"OriginalState": true,
	"CallType": "",
	"DNIS": "",
	"ANI": "",
	"Skill": 1507,
	"IsInbound": true,
	"StartTimeUTC": "2020-07-26T23:59:59.678Z",
	"LastStateChangeTimeUTC": "2020-07-26T23:59:59.678Z",
	"ScreenPopUrl": "",
	"DisconnectCode": "",
	"IsLogging": true,
	"Timeout": 45,
	"AllowDispositions": true,
	"Label": "",
	"IsLinked": true,
	"TimeZones": "",
	"FinalState": true,
	"OtherInformation": "",
	"BlendingToSkillName": ""
};
var ChatContactEvent_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ContactID": 156982256565656,
	"RoomId": 2,
	"Status": "",
	"Skill": 1509,
	"StartTime": "2020-07-26T23:59:59.678Z",
	"LastStateChangeTime": "2020-07-26T23:59:59.678Z",
	"ScreenPopUrl": "",
	"RefusalTimeout": 45,
	"IsActive": true,
	"Messages": [
		{
			"Text": "",
			"TimeStamp": "2020-07-26T23:59:59.678Z",
			"PartyType": ""
		}
	],
	"FinalState": true
};
var ChatText_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"RoomId": 2,
	"Label": "",
	"Message": "",
	"PartyType": "",
	"TimeStamp": "2020-07-26T23:59:59.678Z"
};
var HoursOfOperation_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ShowContinueReskill": true
};
var Indicator_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"Name": "",
	"ImageUri": "",
	"ActionType": "",
	"ActionUri": "",
	"ToolTip": "",
	"IndicatorState": ""
};
var NaturalCallingSkillList_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"Empty": true
};
var PageOpen_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ContactID": 156981945454545,
	"Action": "",
	"PageUri": ""
};
var RemoteAgentSessionEnd_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"Message": ""
};
var SupervisorContact_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ContactID": 6550071587,
	"Status": "",
	"OriginalState": true,
	"CallType": "",
	"DNIS": "",
	"ANI": "",
	"Skill": 50883,
	"IsInbound": true,
	"StartTimeUTC": "2020-07-26T23:59:59.678Z",
	"LastStateChangeTimeUTC": "2020-07-26T23:59:59.678Z",
	"ScreenPopUrl": "",
	"DisconnectCode": "",
	"IsLogging": true,
	"Timeout": 45,
	"AllowDispositions": true,
	"Label": "",
	"IsLinked": true,
	"TimeZones": "",
	"FinalState": true,
	"OtherInformation": ""
};
var SupervisorMonitor_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"MonitorStartTime": "2020-07-26T23:59:59.678Z",
	"TargetAgentId": 9011,
	"FinalState": true
};
var TakeOver_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ContactID": 15698224565454645,
	"TakeOverDate": "2020-07-26T23:59:59.678Z"
};
var WorkItemContactEvent_Event = {
	"IISHost": "",
	"VCHost": "",
	"Type": "",
	"ContactID": 156981956564545,
	"Status": "",
	"WorkItemId": 3920,
	"WorkItemPayload": "",
	"WorkItemType": "",
	"AgentId": 1218,
	"SkillId": 1528,
	"StartTimeUTC": "2020-07-26T23:59:59.678Z",
	"LastStateChangeTimeUTC": "2020-07-26T23:59:59.678Z",
	"ScreenPopUrl": "",
	"ScreenPopUrlVariables": [
		{
			"variable2": ""
		},
		{
			"variable3": ""
		}
	],
	"RefusalTimeout": 45,
	"FinalState": true
};
