# reactfulness

A simple library to add reactive elements to your Javascript code.

### Instructions

1. Import this library into your code (only 500~ Bytes extra to your website traffic);
2. Create a new state and assign a value to it;
3. Assign now an attribute using css selectors to your newly created state;
4. You're good to go, every time you change that state value into your code the assigned attributes will be adjusted accordingly.

### Documentation

```javascript
let state = new State(initialValue); // Create a new reactive variable
state.value = newValue;              // Change value to specified reactive variable
state.assign(selector, attribute);   // Assign specified reactive variable to an
                                     // element specifying a selector and attribute
state.revoke(selector, attribute);   // Revoke an assignment specifying which selector
                                     // and attribute to remove
```

- Every time a state value is changed all of the element's attributes assigned to it will update their content;
- Every time you assign a new element's attribute to a state the element will be updated matching the state's value;

### Remaining Stuff

- [ ] A dev version without anything extra but verbose console output for debugging.

### Final Notes

_This code is shit, I came to it in a single alcohol driven night; please for the love of God don't use this for anything more than just plain simple webpages and definitely not for complex webapps I beg of you. It has no optimization both in terms of runtime and download size._
