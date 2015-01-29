#CurrentVisitors

CurrentVisitors is a Meteor package to monitor current numbers of visitors per pages assuming Iron Router.

#Install

```bash
meteor add new3rs:current-visitors
```

##Specifications

This package exports a variable "currentVisitors".

The variable currentVisitors has three methods, total, of, visitors.

currentVisitors.total() is a function to return a number of current total visitors. no arguments.
currentVisitors.of(path) is a function to return a number of current visitors for path.
currentVisitors.visitors() is a function to return an object with path properties and number values.

##Usage

HTML
```html
<template name="example">
	Currently, total {{total}} visitors are staying in this site and {{visitors}} visitors are looking at this page.
</template>
```

JavaScript
```javascript
Template.exammple.helpers({
	total: function() {
		return currentVisitor.total();
	},
	visitors: function() {
		return currentVisitors.of(Iron.Location.get().path);
	}
}
);
```
