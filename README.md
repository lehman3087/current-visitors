#CurrentVisitor

CurrentVisitor is a Meteor package to monitor current numbers of visitors per pages assuming Iron Router.

##Usage

```html
<template name="example">
	Currently, total {{total}} visitors are staying in this site and {{visitors}} visitors are looking at this page.
</template>
```

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
