const advertismentQueries = require("../db/queries.advertisments.js");

module.exports = {
    index(req, res,next){
        advertismentQueries.getAllAdvertisments((err, ad) => {

            //#3
                    if(err){
                      res.redirect(500, "static/index");
                    } else {
                      res.render("advertisments/index", {ad});
                    }
        })
    },
    new(req, res, next){
        res.render("advertisments/new");
    },
    create(req, res, next){
        let newAdvertisment = {
          title: req.body.title,
          description: req.body.description
        };
        advertismentQueries.addAdvertisment(newAdvertisment, (err, ad) => {
          if(err){
            res.redirect(500, "/advertisments/new");
          } else {
            res.redirect(303, `/advertisments/${ad.id}`);
          }
        });
      }
}