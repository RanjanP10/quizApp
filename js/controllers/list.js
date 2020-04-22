(function(){
    angular
        .module("learningApp")
        .controller("listCtrl",ListController);
        ListController.$inject = ['quizMetrics','DataService'];
        function ListController(quizMetrics, DataService){
            this.data=DataService.turtlesData;
            this.quizMetrics = quizMetrics;
            this.activeTurtle = {};
            this.search = "";
            
            this.changeActive = changeActive;
            this.activateQuiz = activateQuiz;

  function changeActive(index){
    this.activeTurtle = index;
  }
 

function activateQuiz(){
  quizMetrics.changeState("quiz",true);
}
        }
    
    })();
    