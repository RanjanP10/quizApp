(function(){

    angular
      .module("learningApp")
      .controller("resultsCtrl", ResultsController);
      ResultsController.$inject = ['quizMetrics', 'DataService'];

      function ResultsController(quizMetrics, DataService){
        // Code for results controller here
        this.quizMetrics = quizMetrics;
        this.DataService = DataService;
        this.activeQuestion =0;
        this.getAnswerClass = getAnswerClass;
        this.setActiveQuestion = setActiveQuestion;
        this.activeQuestion =0;
        this.calculatePerc = calculatePerc;
        this.reset = reset;
        function calculatePerc(){
          return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }
        function setActiveQuestion(index){
          this.activeQuestion = index;
        }
        function getAnswerClass(index)
        {
            if(index === quizMetrics.correctAnswers[this.activeQuestion]){
                return "bg-success";
              }else if(index === DataService.quizQuestions[this.activeQuestion].selected){
                return "bg-danger";
              }
        }
        function  reset(){

          quizMetrics.changeState("results", false);
          quizMetrics.numCorrect = 0;
        
          for(var i = 0; i < DataService.quizQuestions.length; i++){
            var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean
        
            data.selected = null;
            data.correct = null;
          }
        }
      }
      
   
  
  })();