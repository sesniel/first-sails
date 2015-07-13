/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
//    var data;
//    data.partials = {
//      engine: 'handlebars',
//      layout: 'main.handlebars', //whatever your default layout is
//        header: "templates/header"
//    };
//
//    res.view(data);
    
    "home": function (req, res){
        res.view({
            header: './partials/header.ejs'
        });
    },
    
    "create": function (req, res, next){
        Dashboard.create(req.params.all(), function dashboardCreated (err, data){
        if(err) return next(err);
            res.json(data);
        });
    }
    
    
};

