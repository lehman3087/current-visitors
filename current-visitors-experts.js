CurrentVisitors = new Mongo.Collection('current-visitors');

currentVisitors = {
    of: function(path) {
        var visitors = CurrentVisitors.findOne();
        return visitors[path.replace(/\./g, '%2E')] || 0
    },
    visitors: function() {
        var v = CurrentVisitors.findOne();
        var visitors = {};
        for (key in v) {
            if (key !== '_id') {
                visitors[key.replace(/%2E/g, '.')] = v[key];
            }
        }
        return visitors;
    },
    total: function() {
        var visitors = this.visitors();
        var total = 0;
        for (k in visitors) {
            if (k !== '_id') {
                total += visitors[k];
            }
        }
        return total;
    }
};
