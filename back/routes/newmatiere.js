module.exports = app => {
    const questionnaireController = require("../controllers/new_matiere.js")
    var router = require("express").Router();

    router.post("/saveMatiere", function(req, res, next){
        questionnaireController.saveMatiere(req, res, next);
    });
    router.get("/getMatiere", questionnaireController.getMatiere);
    
    router.post("/deleteMatiere2", function(req, res, next){
        questionnaireController.deleteMatiere(req,res, next);
    });

    app.use('/success', router);
}