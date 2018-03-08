var express = require('express');
const app = express();
var request = require('request');

const endpoint = 
'https://notification-test.germanycentral.cloudapp.microsoftazure.de/api/Notification/Create/Car';

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Express app listening at port %s', port);
});
module.exports = server;

app.post('/proxy/:url', function(req,res){
	console.log('params: ',req.params.url);

	var options = {
	    url: endpoint,
	    headers: {}
	};

	request(options, function(error,response,body){
		if (error){
			console.log("Error making the request: ", error);
		}
		else{

		}
	});

	res.send("POST received");
});


app.post('/proxy/', function(req,res){
	var options = { 
		method: 'POST',
		url: 'https://notification-test.germanycentral.cloudapp.microsoftazure.de/api/Notification/Create/Car',
		headers:
		{ 'Postman-Token': '5b9cb6b9-387b-c31a-e1bc-3ab615bafc9b',
		'Cache-Control': 'no-cache' },
		body: '{\r\n  "Category": "Information",\r\n  "FinOrVin": "WDD1770031Z000032",\r\n  "NotificationUID": "4a4fa210-03e6-4227-950f-1989a3ca58f0",\r\n  "SourceServiceName": "Postman",\r\n  "Priority": "Default",\r\n  "Type": "UserNotification",\r\n\r\n\r\n  "Notification": {\r\n  \r\n    "ActionTemplate": [{\r\n      "Arguments": [\r\n        {\r\n          "Arguments": "{\\"DestinationID\\":0,\\"Destination\\":{\\"Title\\":\\"Hausbrauerei Moenchwasen\\",\\"City\\":\\"Simmozheim\\",\\"Street\\":\\"Im Moenchgraben\\",\\"HouseNumber\\":\\"30\\",\\"CrossRoad\\":null,\\"PostalCode\\":\\"75397\\",\\"Country\\":\\"Deutschland\\",\\"CountryIsoCode\\":null,\\"State\\":\\"Baden Würtemberg\\",\\"Lon\\":8.806573,\\"Lat\\":48.745373,\\"AirDistance\\":0.0,\\n\\"DetourTimeInMinutes\\": 0,\\n\\"Type\\": \\"Tourist\\"\\n  },\\n\\"Name\\": null,\\n\\"Destinations\\": null\\n}",\r\n          "LanguageCode": "default"\r\n        }\r\n      ],\r\n      "Group": "Navigation",\r\n      "ID": 196609,\r\n      "Name": "AddAsNavigationTarget",\r\n      "Text": [\r\n        {\r\n          "LanguageCode": "default",\r\n          "Text": "Navigate To"\r\n        }\r\n      ],\r\n      "TrustLevelForExecution": 0\r\n    }],\r\n  \r\n  "MessageLargeIcon": {       \r\n  "IconResourceUID": "testIconAMGGTR"  \r\n  },  \r\n    \r\n    "Message": [\r\n      {\r\n        "LanguageCode": "default",\r\n        "PrimaryText": "PN + Navi Action (Add As Navigation Target)",\r\n        "ReadOut": "Vorlesen Deutsch",\r\n        "SecondaryText": ""\r\n      }\r\n    ]\r\n  }\r\n}\r\n' 
	};


	request(options, function(error,response,body){
		if (error){
			console.log("Error making the request: ", error);
		}
		console.log(body);
	});

	res.send("POST received");
});

app.post('/proxytocors/', function(req,res){
	var options = { 
		method: 'POST',
		url: 'https://myproxycors.herokuapp.com/https://notification-test.germanycentral.cloudapp.microsoftazure.de/api/Notification/Create/Car',
		headers:
		{ 'Postman-Token': '5b9cb6b9-387b-c31a-e1bc-3ab615bafc9b',
		'Cache-Control': 'no-cache','X-Requested-With': 'https://h6nztsbktj7wp8qd2lh5ia-on.drv.tw/SendingPositionTestWebpage' },
		body: '{\r\n  "Category": "Information",\r\n  "FinOrVin": "WDD1770031Z000032",\r\n  "NotificationUID": "4a4fa210-03e6-4227-950f-1989a3ca58f0",\r\n  "SourceServiceName": "Postman",\r\n  "Priority": "Default",\r\n  "Type": "UserNotification",\r\n\r\n\r\n  "Notification": {\r\n  \r\n    "ActionTemplate": [{\r\n      "Arguments": [\r\n        {\r\n          "Arguments": "{\\"DestinationID\\":0,\\"Destination\\":{\\"Title\\":\\"Hausbrauerei Moenchwasen\\",\\"City\\":\\"Simmozheim\\",\\"Street\\":\\"Im Moenchgraben\\",\\"HouseNumber\\":\\"30\\",\\"CrossRoad\\":null,\\"PostalCode\\":\\"75397\\",\\"Country\\":\\"Deutschland\\",\\"CountryIsoCode\\":null,\\"State\\":\\"Baden Würtemberg\\",\\"Lon\\":8.806573,\\"Lat\\":48.745373,\\"AirDistance\\":0.0,\\n\\"DetourTimeInMinutes\\": 0,\\n\\"Type\\": \\"Tourist\\"\\n  },\\n\\"Name\\": null,\\n\\"Destinations\\": null\\n}",\r\n          "LanguageCode": "default"\r\n        }\r\n      ],\r\n      "Group": "Navigation",\r\n      "ID": 196609,\r\n      "Name": "AddAsNavigationTarget",\r\n      "Text": [\r\n        {\r\n          "LanguageCode": "default",\r\n          "Text": "Navigate To"\r\n        }\r\n      ],\r\n      "TrustLevelForExecution": 0\r\n    }],\r\n  \r\n  "MessageLargeIcon": {       \r\n  "IconResourceUID": "testIconAMGGTR"  \r\n  },  \r\n    \r\n    "Message": [\r\n      {\r\n        "LanguageCode": "default",\r\n        "PrimaryText": "PN + Navi Action (Add As Navigation Target)",\r\n        "ReadOut": "Vorlesen Deutsch",\r\n        "SecondaryText": ""\r\n      }\r\n    ]\r\n  }\r\n}\r\n' 
	};


	request(options, function(error,response,body){
		if (error){
			console.log("Error making the request: ", error);
		}
		console.log(body);
	});

	res.send("POST received");
});






// request(options, function (error, response, body) {
//  if (error) throw new Error(error);

//  console.log(body);
// });