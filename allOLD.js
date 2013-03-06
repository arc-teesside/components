[{
	    "id": 1,
	    "className": "analogClock",
	    "name": "Analog Clock",
	    "description": "Analog looking clock timer using CSS3 for animation",
	    "category": "Clock",
	    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/analogClock.png",
	    "placeHolder": "placeholder12",
	    "authors": [{
			"name": "Franck Perrin",
			"email": "f.perrin@tees.ac.uk",
			"link": "http://arc.tees.ac.uk",
			"organisation": "ARC Teesside University"
		}],
	    "html": "analog.html",
	    "javascript": "analog.js",
	    "stylesheet": "analog.css",
		"themes": [{
				"name": "Default",
				"file":"analog.css"
			}, {
				"name": "Black",
				"file": "analogBlack.css"
			}, {
				"name": "Blue",
				"file": "analogBlue.css"
			}, {
				"name": "Red",
				"file": "analogRed.css"
			}, {
				"name": "Green",
				"file": "analogGreen.css"
			}, {
				"name": "Roman numbers",
				"file": "roman.css"
			}, {
				"name": "Roman number thin",
				"file": "romanThin.css"
			}, {
				"name": "Gradient green",
				"file": "sarah.css"
			}, {
				"name": "Silver",
				"file": "silver.css"
			}, {
				"name": "Silver cyan",
				"file": "silverCyan.css"
			}, {
				"name": "Silver rainbow",
				"file": "silverRainbow.css"
			}, {
				"name": "Silver white",
				"file": "silverWhite.css"
			}, {
				"name": "Simple",
				"file": "simple.css"
			}, {
				"name": "Simple ARC Logo",
				"file": "simpleARClogo.css"
			}, {
				"name": "Simple Rainbow",
				"file": "simpleRainbow.css"
			}, {
				"name": "Square",
				"file": "square.css"
			}, {
				"name": "Square blue",
				"file": "squareBlue.css"
			}, {
				"name": "Square green",
				"file": "squareGreen.css"
			}, {
				"name": "Squre grey",
				"file": "squareGrey.css"
			}, {
				"name": "Square pink",
				"file": "squarePink.css"
			}, {
				"name": "Square yellow",
				"file": "squareYellow.css"
			}, {
				"name": "Stopwatch",
				"file": "stopwatch.css"
		}],
        "dependencies": [{
            "name": "jquery"
        }],
	    "attributes": [{
			"shortName": "startTime",
			"name": "Starting Time",
			"type": "Number",
			"input": true,
			"required": true
		}],
	    "actions": [{
			    "shortName": "launchCountdown",
			    "name": "Start Countdown",
				"icon":"http://arc.tees.ac.uk/WIDEST/Widget/icons/playIcon.png"
			}, {
			    "shortName": "resetClock",
			    "name": "Reset clock",
				"icon":"http://arc.tees.ac.uk/WIDEST/Widget/icons/stopIcon.png"
		}],
	    "guidances": [{
			    "priority": "high",
			    "text": "The clock needs a starting time",
				"shortName": "startTime"
		}]
	}, {
        "id": 2,
        "className": "button",
        "name": "Button",
        "description": "Simple button to trigger a behaviour",
        "category": "Input",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/button.png",
        "authors": [{ "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }],
        "html": "button.html",
			"themes": [{
			"name": "Default",
			"file": "button.css"
		},{
					"name": "Big white",
					"file": "bigWhite.css"
				}, {
					"name": "Big blue",
					"file": "bigBlue.css"
				}, {
					"name": "High contrast",
					"file": "blackStyle.css"
			}],
        "attributes": [{ 
				"shortName": "text",
				"name": "Text",
				"type": "String",
				"value": "Button"
			}, { 
				"shortName": "action",
                "name": "Action",
                "type": "Action"
        }],
        "guidances": [{ 
			"priority": "high",
            "text": "The button need an action",
			"shortName": "action"
        }]
    }, { 
		"id": 3,
        "className": "sliderInput",
        "name": "Slider",
        "description": "A slider to select a value",
        "category": "Input",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/sliderIcon.png",
        "authors": [{
            "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }],
        "dependencies": [{
            "name": "jquery-ui"
        }],
        "html": "slider.html",
        "javascript": "slider.js",
        "stylesheet": "slider.css",
		"themes": [{
				"name": "Default",
				"file": "slider.css"
			}, {
				"name": "Dark",
				"file": "darkness/darkness.css"
			}, {
				"name": "Green",
				"file": "green/green.css"
			}, {
				"name": "Blue",
				"file": "blue/blue.css"
			}, {
		}],
        "attributes": [{
				"shortName": "min",
				"name": "Minimum value",
				"type": "Number",
				"value": 0
			}, {
				"shortName": "max",
				"name": "Maximum value",
				"type": "Number",
				"value": 100
			}, {
				"shortName": "defaultValue",
				"name": "Default value",
				"type": "Number",
				"value": 25
			}, {
				"shortName": "selectedValue",
				"name": "Selected value",
				"type": "Number",
				"output": true
		}]
    }, {
		"id":4,
		"className":"digitalClock",
		"name":"Digital Clock",
		"description":"Digital clock",
		"category":"Clock",
		"icon":"temp/textClock.png",
		"placeHolder":"",
		"authors":[{
			"name":"",
			"email":"",
			"link":"",
			"organisation":""
		}],
		"html":"digital.html",
		"javascript":"digital.js",
		"stylesheet":"digital.css",
		"themes": [{
			"name": "Default",
			"file": "digital.css"
		}],
        "dependencies": [{
            "name": "jquery-countdown"
        }],
		"attributes":[{
			"shortName":"startTime",
			"name":"Starting Time",
			"type":"Number",
			"input":true,
			"required":true
		}],
		"actions":[{
				"shortName":"launchCountdown",
				"name":"Start Countdown",
				"icon":"http://arc.tees.ac.uk/WIDEST/Widget/icons/playIcon.png"
			}, {
				"shortName":"resetTimer",
				"name":"Reset timer",
				"icon":"http://arc.tees.ac.uk/WIDEST/Widget/icons/stopIcon.png"
		}],
		"guidances":[{
			"priority":"high",
			"text":"The clock needs a starting time",
			"shortName":"startTime"
		}]
	}, {
		"id":5,
		"className":"todoTable",
		"name":"Table",
		"description":"Table with dynamic rows.",
		"category":"ToDo",
		"icon":"http://arc.tees.ac.uk/WIDEST/Widget/icons/table.png",
		"placeHolder":"",
		"authors":[
			{
				"name":"Sarah Guadagno",
				"email":"L1369039@live.tees.ac.uk",
				"link":"http://arc.tees.ac.uk/",
				"organisation":"Accessibility Research Centre"
			}
		],
		"html":"table.html",
		"javascript":"table.js",
		"stylesheet":"table.css",
		"themes": [{
				"name": "Default",
				"file":"table.css"
			}, {
				"name": "Bordered",
				"file": "bordered.css"
		}],
		"attributes":[
			{
				"shortName":"inputText",
				"name":"Input Text",
				"type":"String",
				"input":true,
				"required":false
			}
		],
		"actions":[
			{
				"shortName":"addRowComplete",
				"name":"Add Row"
			},
			{
				"shortName":"deleteRow",
				"name":"Delete last row"
			}
		],
		"guidances":[
			{
				"priority":"low",
				"text":"You might attached an input text.",
				"shortName":"inputText"
			}
		]
	}, {
		"id": 6,
		"className": "link",
		"name": "Link",
		"description": "Simple link",
		"category": "Text",
		"icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/link.png",
		"placeHolder": "",
		"authors": [{
			"name": "Franck Perrin",
			"email": "f.perrin@tees.ac.uk",
			"link": "http://arc.tees.ac.uk",
			"organisation": "ARC Teesside University"
		}],
		"html": "link.html",
		"attributes": [{
			"shortName": "text",
			"name": "Text",
			"type": "String",
			"required": true,
			"value": "Your text here"
		}, {
			"shortName": "url",
			"name": "URL",
			"type": "String",
			"required": true
		}],
		"guidances": [{
			"priority": "high",
			"text": "A link requires a text",
			"shortName": "text"
		}, {
			"priority": "high",
			"text": "A link requires a URL",
			"shortName": "text"
		}]
}, {
	"id": 7,
	"className": "dynamicText",
	"name": "Dynamic text",
	"description": "Dynamic text",
	"category": "Text",
	"icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/text.png",
	"placeHolder": "",
	"authors": [{
		"name": "Franck Perrin",
		"email": "f.perrin@tees.ac.uk",
		"link": "http://arc.tees.ac.uk",
		"organization": "ARC Teesside University"
	}],
	"html": "dynamic.html",
	"javascript": "dynamic.js",
	"attributes": [{
		"shortName": "inputText",
		"name": "Input text",
		"type": "String",
		"input": true,
		"required": true
	}],
	"guidances": [{
		"priority": "medium",
		"text": "A dynamic text should be linked to another component",
		"shortName": "inputText"
	}]
}, {
	"id": 8,
	"className": "text",
	"name": "Text",
	"description": "Simple static text",
	"category": "Text",
	"icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/text.png",
	"placeHolder": "",
	"authors": [{
		"name": "Franck Perrin",
		"email": "f.perrin@tees.ac.uk",
		"link": "http://arc.tees.ac.uk",
		"organisation": "ARC Teesside University"
	}],
	"html": "text.html",
	"attributes": [{
		"shortName": "text",
		"name": "Text",
		"type": "String",
		"required": true,
		"value": "Your text here"
	}],
	"guidances": [{
		"priority": "medium",
		"text": "This component can should have a text",
		"shortName": "text"
	}]
}, {
	"id": 9,
	"className": "textbox",
	"name": "Textbox",
	"description": "Textbox input",
	"category": "Input",
	"icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textbox.png",
	"placeHolder": "",
	"authors": [{
		"name": "Franck Perrin",
		"email": "f.perrin@tees.ac.uk",
		"link": "http://arc.tees.ac.uk",
		"organization": "ARC Teesside University"
	}],
	"html": "textbox.html",
	"javascript": "textbox.js",
	"attributes": [{
		"shortName": "value",
		"name": "Value",
		"type": "String",
		"output": true
	}]
}, {
	"id": 10,
	"className": "image",
	"name": "Image",
	"description": "Image",
	"category": "Media",
	"icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/img.png",
	"placeHolder": "",
	"authors": [{
		"name": "Franck Perrin",
		"email": "f.perrin@tees.ac.uk",
		"link": "http://arc.tees.ac.uk",
		"organization": "ARC Teesside University"
	}],
	"html": "image.html",
	"attributes": [{
		"shortName": "src",
		"name": "URL",
		"type": "String",
		"required": true
	}, {
		"shortName": "alt",
		"name": "Alternative text",
		"type": "String"
	}],
	"guidances": [{
		"priority": "high",
		"text": "The image is missing it's URL",
		"shortName": "src"
	}, {
		"priority": "medium",
		"text": "An image should have an alternative text",
		"shortName": "alt"
	}]
}]