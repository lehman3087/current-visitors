"use strict"

Router.onAfterAction ->
    if Meteor.isClient and @ready()
        Meteor.call 'current-visitors', @location.get().path
    return
