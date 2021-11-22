<template>
  <div id="Questionnaire">
    <br />
    <div id="questionnaire">
      <br />
      <h1>Question</h1>
      <h2 v-bind="currQuestion" >
        {{ selected.user.question }}
      </h2>

      <div
        v-bind="question"
        class="form-check"
        v-cloak
        v-for="v in selected.user.question_answer"
        :key="v.id"
      >
        <input
          :value="v.answer_content"
          class="form-check-input"
          v-model="answer_content"
          type="radio"
          name="formCheck-1"
        />
        <label class="form-check-label" for="formCheck-1">{{
          v.answer_content
        }}</label>
      </div>
      <br />
      <button
        class="btn btn-danger btn-lg"
        type="button"
        role="button"
        data-bss-hover-animate="pulse"
        @click="envoyer"
      >
        Question suivante 
      </button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Questionnaire",

  data: function () {
    return {
      answer_content: "",
      question: "",
      currQuestion: "",

      tik: 0,
      selected: {
        user: {
          type_question: "",
          id_questions: "",
          question_answer: Array,
        },
      },
    };
  },

  methods: {
    
    envoyer() {
      this.tik = this.tik + 1;
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getRandUs", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          var result1 = JSON.parse(result);
          var result2 = shuffle(result1);

          this.selected.user = result2[1];
        })
        .catch((error) => {
          console.log("error", error);
        });
      const requestSend = {
        method: "POST",
        body: JSON.stringify({ answer_content: this.answer_content }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/success/saveAnswer", requestSend)
        .then((response) => response.text())
        .then((result) => {
          
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.answer_content = "";
    },
  },
};
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
</script>