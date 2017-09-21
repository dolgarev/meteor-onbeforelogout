if (_.isFunction(Meteor.logout)) {
  Meteor.logout = _.wrap(Meteor.logout, function (original, ...args) {
    if (_.isFunction(Meteor.onBeforeLogout)) {
      Meteor.onBeforeLogout()
    }
    return original.apply(this, args)
  })
}
