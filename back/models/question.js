module.exports = mongoose => {
    const question = mongoose.model("question",
        mongoose.Schema({

            question: String,
            type_question: String,
            id_questions: String,
            nom_questionnaire: {type: mongoose.Schema.Types.ObjectId, ref: 'matieres'},
            question_answer: Array,
            
        })
    );
    return question;
};