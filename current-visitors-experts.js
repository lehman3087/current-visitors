CurrentVisitors = new Mongo.Collection('current-visitors');

currentVisitors = {
    visitors: function() {
        return CurrentVisitors.findOne();
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
