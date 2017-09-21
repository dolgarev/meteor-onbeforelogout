# meteor-onbeforelogout

This package is just wrapper around a method `Meteor.logout`. It realizes callback function `onBeforeLogout`.

It lets better use of packages like [ostrio:uiblocker](https://atmospherejs.com/ostrio/uiblocker).

# Installation
```
meteor add liberation:meteor-onbeforelogout
```

# Basic examples

```js
Meteor.onBeforeLogout(() => {
  UIBlock.block('Please wait...')
})

Meteor.logout(() => {
  UIBlock.unblock()
})
```
