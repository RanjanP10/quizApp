(function(){

    angular
      .module("learningApp")
      .controller("quizCtrl", QuizController);
  QuizController.$inject = ['quizMetrics','DataService'];
    function QuizController(quizMetrics,DataService){
  
    this.quizMetrics = quizMetrics;
    this.DataService = DataService;
    this.activeQuestion = 0;
    this.questionAnswered =questionAnswered;
    this.setActiveQuestion = setActiveQuestion;
    this.selectAnswer = selectAnswer;
    this.error = false; 
    this.finalise = false; 
    this.finaliseAnswers = finaliseAnswers;
    var numQuestionsAnswered = 0;

    
  function setActiveQuestion(index){
      if(index === undefined)
      {
        var breakOut = false;
        var quizLength = DataService.quizQuestions.length - 1;
      
        while(!breakOut){
          // Indefinite Loop
          this.activeQuestion = this.activeQuestion < quizLength?++this.activeQuestion:0;
          if(this.activeQuestion === 0){
            this.error = true;
          }
          
          if(DataService.quizQuestions[this.activeQuestion].selected === null){
                breakOut = true;
            }
          
        }
      }
      else{
          this.activeQuestion = index;
      }
  
  }


    function questionAnswered(){
        var quizLength = DataService.quizQuestions.length;
        if(DataService.quizQuestions[this.activeQuestion].selected !== null){
            numQuestionsAnswered++;
            if(numQuestionsAnswered >= quizLength){
                //Finalise the quiz
                for(var i = 0; i < quizLength; i++){

                    if(DataService.quizQuestions[i].selected === null){
                      setActiveQuestion(i);
                      return;
                    }
                  }
                  this.error = false;
                  this.finalise = true;
                  return;
              }
          }
          this.setActiveQuestion();
         
    }
    function selectAnswer(index){
        DataService.quizQuestions[this.activeQuestion].selected = index;
      }

      function finaliseAnswers(){
        this.finalise = false;
        numQuestionsAnswered = 0;
        this.activeQuestion = 0;
        quizMetrics.markQuiz();
        
        quizMetrics.changeState("quiz", false);
        quizMetrics.changeState("results", true);
      
      }
    }
   
     
   
  })();     