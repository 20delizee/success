module.exports = mongoose => {
    const matiere = mongoose.model("matiere",
        mongoose.Schema({   
                   
            nom_questionnaire: String,
            code: String,
            passe: Boolean
        })
    );
    return matiere;
  };