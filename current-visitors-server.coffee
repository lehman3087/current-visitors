"use strict"

connections = {}

updateVisitors = ->
    set = {}
    unset = CurrentVisitors.findOne() ? {}
    delete unset._id
    for id, path of connections
        path = path.replace /\./g, '%2E' # escape period for mongoDB
        if set[path]?
            set[path] += 1
        else
            set[path] = 1
        delete unset[path]
    modifier = {}
    if Object.keys(set).length > 0
        modifier.$set = set
    if Object.keys(unset).length > 0
        modifier.$unset = unset
    CurrentVisitors.upsert {}, modifier
    return

Meteor.methods
    'current-visitors': (path) ->
        unless @connection?
            return
        check path, String

        connections[@connection.id] = path
        updateVisitors()
        return

Meteor.publish 'current-visitors', ->
    CurrentVisitors.find()

Meteor.onConnection (handle) ->
    handle.onClose ->
        delete connections[handle.id]
        updateVisitors()
        return
    return

CurrentVisitors.remove {}
CurrentVisitors.insert {}
