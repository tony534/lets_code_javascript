// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
/*global phantom, wwp, $ */

(function() {
	"use strict";

	var page = require("webpage").create();

	console.log("Hello world");

	page.onConsoleMessage = function(message) {
		console.log("CONSOLE: " + message);
	};

	page.open("http://localhost:5000", function(success) {
		console.log("Success: " + success);

		page.evaluate(inBrowser);

		phantom.exit(0);
	});

	function inBrowser() {
		console.log("Hi");
		console.log("defined? " + isDefined(wwp.HtmlElement));

		var drawingArea = new wwp.HtmlElement($("#drawingArea"));
		drawingArea.doMouseDown(10, 20);
		drawingArea.doMouseMove(50, 60);
		drawingArea.doMouseUp(50, 60);

		function isDefined(obj) {
			return typeof(obj) !== "undefined";
		}
	}

}());