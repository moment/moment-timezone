### Environment

<!--
	If you're creating a bug report, please fill in this section.
	It's much easier to diagnose the problem when the correct information is provided.

	NOTE: Many issues are resolved if you just upgrade to the latest version.
-->

For bug reports, please run the following code in your environment and include the output:

```
console.log({
  moment: moment.version,
  momentTz: moment.tz.version,
  date: (new Date()).toString(),
  intlZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
});
```

<!--
	Also include any extra information that might be relevant. For example:
	- Are you running Moment Timezone combined with any framework like React or Meteor?
	- How are you loading Moment Timezone? (Script tags, Node.js require(), ES Module imports, etc.)
-->

### Issue description

