[
	{
	    "id": 1,
	    "className": "analogClock",
	    "name": "Analog Clock",
	    "description": "Analog looking clock timer using CSS3 for animation",
	    "category": "Clock",
	    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/analogClock.png",
	    "placeHolder": "placeholder12",
	    "authors": [
			{
			    "name": "Franck Perrin",
			    "email": "f.perrin@tees.ac.uk",
			    "link": "http://arc.tees.ac.uk",
			    "organisation": "ARC Teesside University"
			}
		],
	    "html": "analog.html",
	    "javascript": "analog.js",
	    "stylesheet": "analog.css",
	    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
	    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
	    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time",
				"shortName": "startTime"
			}
		]
	},
    { "id": 2,
        "className": "textInput",
        "name": "Textbox",
        "description": "Textbox",
        "category": "Input",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textbox.png",
        "authors": [
        {
            "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }
        ],
        "html": "textbox.html",
        "attributes": [
        { "shortName": "default",
            "name": "Default text",
            "type": "String",
            "value": ""
        }
        ]
    },
    { "id": 3,
        "className": "timePicker",
        "name": "Time Picker",
        "description": "Sliding wheels for picking time",
        "category": "Input",
        "icon": "temp/timePicker.png",
        "placeHolder": "placeholder12",
        "authors": [{ "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organisation": "ARC Teesside University"
        }
        ],
        "html": "timepicker.html",
        "javascript": "timepicker.js",
        "stylesheet": "timepicker.css",
        "attributes": [{ "shortName": "startTime",
            "name": "Starting Time",
            "type": "Number",
            "input": true,
            "required": true
        }],
        "actions": [
        { "shortName": "launchCountdown",
            "name": "launch Countdown"
        },
                    { "shortName": "resetClock",
                        "name": "Reset clock"
                    }
                    ],
        "guidances": [
        { "priority": "high",
            "text": "The clock needs a starting time"
        }
        ]
    },
    {
        "id": 4,
        "className": "buttonInput",
        "name": "Button",
        "description": "Simple button to trigger a behaviour",
        "category": "Input",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/button.png",
        "authors": [{ "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }
        ],
        "html": "button.html",
        "attributes": [
        { "shortName": "text",
            "name": "Text",
            "type": "String",
            "value": "Button"
        },
                    { "shortName": "action",
                        "name": "Action",
                        "type": "Action"
                    }
                    ],
        "guidances": [
        { "priority": "high",
            "text": "The button need an action",
					"shortName": "action"
        }
        ]
    },
    { "id": 5,
        "className": "sliderInput",
        "name": "Slider",
        "description": "A slider to select a value",
        "category": "Input",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/sliderIcon.png",
        "authors": [
        {
            "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }
        ],
        "dependencies": [
        {
            "name": "jquery-ui"
        }],
        "html": "slider.html",
        "javascript": "slider.js",
        "stylesheet": "slider.css",
        "attributes": [
        {
            "shortName": "min",
            "name": "Minimum value",
            "type": "Number",
            "value": 0
        },
                    {
                        "shortName": "max",
                        "name": "Maximum value",
                        "type": "Number",
                        "value": 100
                    },
                    {
                        "shortName": "defaultValue",
                        "name": "Default value",
                        "type": "Number",
                        "value": 25
                    },
                    {
                        "shortName": "selectedValue",
                        "name": "Selected value",
                        "type": "Number",
                        "output": true
                    }
                    ]
    },
    { "id": 6,
        "className": "image",
        "name": "Image",
        "description": "Insert image in your widget",
        "category": "Media",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/imageIcon.jpg",
        "authors": [
        { "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }
        ],
        "html": "image.html",
        "attributes": [
        {
            "shortName": "url",
            "name": "Url",
            "type": "String",
            "value": ""
        },
                    {
                        "shortName": "alt",
                        "name": "Alt Text",
                        "type": "String",
                        "value": ""
                    }
                    ],
        "guidances": [{ "priority": "high",
            "text": "An image requires a URL"
        }
        ]
    },
    {
        "id": 7,
        "className": "video",
        "name": "Video",
        "description": "Include video clip to your widget",
        "category": "Media",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/videoIcon.png",
        "authors": [
        { "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }
        ],
        "html": "video.html",
        "attributes": [{ "shortName": "url",
            "name": "Url",
            "type": "String",
            "value": ""
        },
                { "shortName": "alt",
                    "name": "Alt Text",
                    "type": "String",
                    "value": ""
                }],
        "guidances": [{ "priority": "high",
            "text": "A video requires a URL"
        }]
    },
    { "id": 8,
        "className": "flash",
        "name": "Flash",
        "description": "Include custom flash content to your widget",
        "category": "Media",
        "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/flashIcon.png",
        "authors": [{ "name": "Franck Perrin",
            "email": "f.perrin@tees.ac.uk",
            "link": "http://arc.tees.ac.uk",
            "organization": "ARC Teesside University"
        }],
        "html": "flash.html",
        "javascript": "flash.js",
        "stylesheet": "flash.css",
        "attributes": [{ "shortName": "url",
            "name": "Url",
            "type": "String",
            "value": ""
        },
        { 
            "shortName": "alt",
            "name": "Alt Text",
            "type": "String",
            "value": ""
        }
        ],
        "guidances": [
        {
            "priority": "high",
            "text": "The flash content container requires a URL"
        }
        ]
    },
    { 
    "id": 9,
    "className": "textClock",
    "name": "Digital Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
        }
    ]
    },
    { 
    "id": 10,
    "className": "textClock",
    "name": "Digital Clock",
    "description": "Inline digital clock",
    "category": "Services",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }]
},
{ "id": 11,
    "className": "textClock",
    "name": "Digital Clock",
    "description": "Inline digital clock",
    "category": "Layout",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }]
},
{ "id": 12,
    "className": "textClock",
    "name": "Digital Clock",
    "description": "Inline digital clock",
    "category": "Library",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }]
},
{ "id": 13,
    "className": "textClock",
    "name": "Digital Clock",
    "description": "Inline digital clock",
    "category": "Text",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/textClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }]
},
{ "id": 14,
    "className": "analogClock",
    "name": "Clear Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/clearClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }],

    	"html": "analog.html",
	    "javascript": "analog.js",
	    "stylesheet": "silver.css",
	    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
	    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
	    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time"
			}
		]


},
{ "id": 15,
    "className": "analogClock",
    "name": "Alarm Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/alarmClock.jpg",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }],

    "html": "analog.html",
    "javascript": "analog.js",
    "stylesheet": "stopwatch.css",
    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time"
			}
		]


},
{ "id": 16,
    "className": "analogClock",
    "name": "Event Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/eventClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }],

    "html": "analog.html",
    "javascript": "analog.js",
    "stylesheet": "simple.css",
    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time"
			}
		]

},
{ "id": 17,
    "className": "analogClock",
    "name": "Green Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/Clock-green.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }],

    "html": "analog.html",
    "javascript": "analog.js",
    "stylesheet": "sarah.css",
    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time"
			}
		]



},
{ "id": 18,
    "className": "analogClock",
    "name": "Red Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/Clock-red.jpg",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }],

    "html": "analog.html",
    "javascript": "analog.js",
    "stylesheet": "analogRed.css",
    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time"
			}
		]


},
{ "id": 19,
    "className": "analogClock",
    "name": "Crystal Clock",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/crystalClock.png",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }],

    	"html": "analog.html",
	    "javascript": "analog.js",
	    "stylesheet": "silverRainbow.css",
	    "attributes": [
			{
			    "shortName": "startTime",
			    "name": "Starting Time",
			    "type": "Number",
			    "input": true,
			    "required": true
			}
		],
	    "actions": [
			{
			    "shortName": "launchCountdown",
			    "name": "launch Countdown"
			},
			{
			    "shortName": "resetClock",
			    "name": "Reset clock"
			}
		],
	    "guidances": [
			{
			    "priority": "high",
			    "text": "The clock needs a starting time"
			}
		]



},
{ "id": 20,
    "className": "analogClock",
    "name": "Hour Glass",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/hourglass.jpg",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }]

},
{ "id": 21,
    "className": "analogClock",
    "name": "Egg Timer",
    "description": "Inline digital clock",
    "category": "Clock",
    "icon": "http://arc.tees.ac.uk/WIDEST/Widget/icons/eggtimer.gif",
    "authors": [{ "name": "Franck Perrin",
        "email": "f.perrin@tees.ac.uk",
        "link": "http://arc.tees.ac.uk",
        "organization": "ARC Teesside University"
    }]

}]