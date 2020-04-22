(function(){

    angular
      .module("learningApp")
      .factory("DataService", DataFactory);
   
    function DataFactory(){
        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions:quizQuestions,
            correctAnswers: correctAnswers
        
        }
        return dataObj;
    }
    var correctAnswers = [2, 1, 3, 1, 0, 0, 2, 1, 2, 0];
    var quizQuestions  = [
        {
          type: "text",
          text: "Choose the option not applicable for the constructor.",
          possibilities: [
              {
                  answer: " Cannot be called explicitly"
              },
              {
                  answer: "Cannot be overloaded"
              },
              {
                  answer: " Cannot be overridden"  // correct ans
              },
              {
                  answer: "None of Above"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "The default access specifer for the class members is",
          possibilities: [
              {
                  answer: "public"
              },
              {
                  answer: "private" // correct ans
              },
              {
                  answer: "protected"
              },
              {
                  answer: "None of the above"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "C++ does not supports the following",
          possibilities: [
              {
                  answer: "Multilevel inheritance"
              },
              {
                  answer: "Hierarchical inheritance"
              },
              {
                  answer: "Hybrid inheritance"
              },
              {
                  answer: "None of the above" // correct ans
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Abstract class is __",
          possibilities: [
              {
                  answer: "A class must contain all pure virtual functions"
              },
              {
                  answer: "A class must contain at least one pure virtual function" // correct ans
              },
              {
                  answer: "A class may not contain pure virtual function"
              },
              {
                  answer: "A class must contain pure virtual function defined outside the class"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Who created C++?",
          possibilities: [
              {
                  answer: " Bjarne Stroustrup" // correct ans
              },
              {
                  answer: "Dennis Ritchie"
              },
              {
                  answer: "Ken Thompson"
              },
              {
                  answer: "Brian Kernighan"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Which of the following is the default return value of functions in C++?",
          possibilities: [
              {
                  answer: "int" // correct ans
              },
              {
                  answer: "char"
              },
              {
                  answer: "float"
              },
              {
                  answer: "void"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Which of the following feature is used in function overloading and function with default argument?",
          possibilities: [
              {
                  answer: "Encapsulation"
              },
              {
                  answer: "Polymorphism"
              },
              {
                  answer: "Abstraction" // correct ans
              },
              {
                  answer: "Modularity"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What is Inheritance in C++?",
          possibilities: [
              {
                  answer: "Wrapping of data into a single class"
              },
              {
                  answer: "Deriving new classes from existing classes" // correct ans
              },
              {
                  answer: "Overloading of classes"
              },
              {
                  answer: "Classes with same names"
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Which feature of the OOPS gives the concept of reusability?",
          possibilities: [
              {
                  answer: "Abstraction"
              },
              {
                  answer: "Encapsulation"
              },
              {
                  answer: "Inheritance" // correct ans
              },
              {
                  answer: "None of the above" 
              }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What is this operator called ?:?",
          possibilities: [
              {
                  answer: "conditional" // correct ans
              },
              {
                  answer: "relational"
              },
              {
                  answer: "casting operator"
              },
              {
                  answer: "unrelational"
              }
          ],
          selected: null,
          correct: null
        }
      ];
      var turtlesData = [
       
        {
            type: "Introduction of Classes",
            image_url: "../capestone/classes.png",
            
            description: "A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a blueprint for creating objects.",
           
          },
          {
            type: "Introduction of Function",
            image_url: "../capestone/functions_cpp.jpg",
            
            description: "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times."
          },
          {
          type: "Introduction of Arrays",
          image_url: "../capestone/array.png",
          
          description: "Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. To declare an array, define the variable type, specify the name of the array followed by square brackets and specify the number of elements it should store"
          },
          {
          type: "Introduction of Pointers",
          image_url: "../capestone/pointer.png",
          
          description: "A pointer however, is a variable that stores the memory address as its value. A pointer variable points to a data type (like int or string) of the same type, and is created with the * operator. The address of the variable you're working with is assigned to the pointer"
        },
        {
          type: "Introduction of Constructor",
          image_url: "../capestone/constructor.png",
          
          description: "A constructor in C++ is a special method that is automatically called when an object of a class is created. To create a constructor, use the same name as the class, followed by parentheses ()"
        },
      {
          type: "Introduction of Inheritance",
          image_url: "../capestone/inheritance.png",
          
          description: "Inheritance is one of the key features of Object-oriented programming in C++. It allows user to create a new class (derived class) from an existing class(base class). The derived class inherits all the features from the base class and can have additional features of its own."
        },
        {
          type: "Introduction of Polynmorphism",
          image_url: "../capestone/polymorphism.png",
          
          description: "Polymorphism means many forms, and it occurs when we have many classes that are related to each other by inheritance. This allows us to perform a single action in different ways."
        },
        {
          type: "Introduction of Encapsulation ",
          image_url: "../capestone/encapsulation.png",
          
          description: "The meaning of Encapsulation, is to make sure that sensitive data is hidden from users. To achieve this, you must declare class variables/attributes as private (cannot be accessed from outside the class). If you want others to read or modify the value of a private member, you can provide public get and set methods."
        }
    ];
  })();