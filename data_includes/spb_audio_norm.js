/*
-- Speeded Plausibility and Bias Adults: SPBa -- 
   By: Anthony Yacovone (10/16/18) 
   Built from the Toronto-Psycholinguistics-Experiments Template 

*/

// Determine the sequence of the experiment 
var shuffleSequence = seq("consent", "demo","instructions", "practice_instructions", 
    sepWith("sep", "practice"), "getReady", sepWith("sep", rshuffle(startsWith("spb"),startsWith("fill"))), "debrief", "exit");


// Define experiment-specific variables 
                                                                  // sets the list number in the Latin Square design
var practiceItemTypes = ["practice"];                             // determines which items have the blue "practice" label 
var centerItems = true;                                           // centers the presentation of items (not necessary for this experiment)
var showProgressBar = false;

var practice_audio = ["https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
                      "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
                      "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true"]

var testing = ["https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Modifier: Adult, Hi
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Modifier: Adult, Lo
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Modifier: Child, Hi
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Modifier: Child, Lo
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Instrument: Adult, Hi 
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Instrument: Adult, Lo
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Instrument: Child, Hi
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",  // Instrument: Child, Lo
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",   
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",   // Fillers: Modifier
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",   // Fillers: Modifier
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",   // Fillers: Modifier
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",   // Fillers: Instrument
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true",   // Fillers: Instrument
               "https://github.com/anthonyyacovone/testing/blob/master/Hi_Instr_Brush_Comb_FAST.wav?raw=true"]   // Fillers: Instrument
    
// Define the defaults for the controller in this experiment (no need for the DashedSentence, Acceptability and DashedAcceptabilty Judgments
var defaults = [
    "Separator", {
        transfer: 2000, //wait for 1000ms
          //other options: "keypress", "click"
        normalMessage: "Please get ready to listen to the next sentence.", //message to be displayed
        errorMessage: "Wrong. Please wait for the next sentence." //message to be displayed in red
    },

    "Message", {
        //"html" option is obligatory
        hideProgressBar: true,
        transfer: "click",
        countsForProgressBar: true,
    },
  
    "Form", {
        //"html" option is obligatory
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true,

    }, 
    
    "FlashSentence", {
        timeout: 1000,
        countsForProgressBar: false,
    },
];



// Define the experimental stimuli, this includes both target and filler trials 

var items = [

    /*
    ===================
    SEPARATOR
    The pause needed between each item of the experiment
    ===================
    */


    //ends when key is press
    ["sep", "Message", {html: "<i>Are you ready to hear the sentence?</i>", transfer: 'click'}],

    ["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "harvard_consent_2018.html" }} ],
    ["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "harvard_demographics.html" }} ],
    ["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "harvard_debrief.html" }} ],
    ["exit", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "exit.html" }} ],
    ["instructions", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions1.html" }} ],
    ["practice_instructions", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions2.html" }} ],


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */
    
    ["getReady", "Message", {hideProgressBar: true, countsForProgressBar: false, consentRequired: false,
                    html: ["div",
                            ["p", "That's it for practice!"],["br"],
                            ["p", "Make sure to put your computer in full screen mode."],
                            ["p", "Make sure to wait for the sentence to be done playing."],["br"],
                            ["p", "Thank you for your help!"],["br"],
                          ]}], 

    
    /*
    ===================
    TRAINING: Three practice trials to get used to the presentation!
    ===================
    */
    ["practice", "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${practice_audio[0]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],
    
   ["practice", "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${practice_audio[1]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],
    
     ["practice", "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${practice_audio[2]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],
    
     /*
    ===================
    TEST PHASE: 
     
     SPBA: 
     HO = High Plausibility, Original Speed 
     HF = High Plausibility, Fast Speed 
     LO = Low Plausibility, Original Speed 
     LF = Low Plausibilityk, Fast Speed
     
     Fillers:
     fill-o = filler at original speed 
     fill-h = filler at fast speed
     
    ===================
    */
     
     // TARGET 1:
     
                               
// Modifier Target 1:

[["spba-mod-hi",1], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[0]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-mod-lo",1], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[1]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-hi",1], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[2]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-lo",1], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[3]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

// Modifier Target 2:

[["spba-mod-hi",2], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[4]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-mod-lo",2], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[5]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-hi",2], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[6]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-lo",2], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[7]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Modifier Target 3:

[["spba-mod-hi",3], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[8]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-mod-lo",3], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[9]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-hi",3], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[10]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-lo",3], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[11]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Modifier Target 4:

[["spba-mod-hi",4], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[12]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-mod-lo",4], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[13]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-hi",4], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[14]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-lo",4], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[15]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Modifier Target 5:

[["spba-mod-hi",5], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[16]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-mod-lo",5], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[17]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-hi",5], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[18]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-lo",5], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[19]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Modifier Target 6:

[["spba-mod-hi",6], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[20]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-mod-lo",6], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[21]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-hi",6], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[22]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-mod-lo",6], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[23]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],                       
  
    // Instrument Target 1:

[["spba-instr-hi",7], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[24]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-instr-lo",7], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[25]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-hi",7], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[26]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-lo",7], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[27]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

// Instrument Target 2:

[["spba-instr-hi",8], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[28]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-instr-lo",8], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[29]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-hi",8], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[30]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-lo",8], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[31]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Instrument Target 3:

[["spba-instr-hi",9], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[32]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-instr-lo",9], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[33]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-hi",9], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[34]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-lo",9], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[35]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Instrument Target 4:

[["spba-instr-hi",10], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[36]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-instr-lo",10], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[37]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-hi",10], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[38]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-lo",10], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[39]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Instrument Target 5:

[["spba-instr-hi",11], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[40]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-instr-lo",11], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[41]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-hi",11], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[42]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-lo",11], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[43]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],


// Instrument Target 6:

[["spba-instr-hi",12], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[44]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spba-instr-lo",12], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[45]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-hi",12], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[46]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["spbc-instr-lo",12], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[47]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

// Fillers 
  [["fill-mod",48], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[48]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["fill-mod",49], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[49]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["fill-mod",50], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[50]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["fill-instr",51], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[51]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["fill-instr",52], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[52]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

[["fill-instr",53], "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}, 
      "Message", {
      html: `<body>\
             <div class="sound" style="width: auto; height: auto; z-index: 0">\
              Listen carefully\
             <audio autoplay><source src=${testing[53]} type="audio/mpeg">\
             </audio></div></body>`},
      
     "Form", {html: '...  <input type="text" name="answer1" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, },
      
     "Form", {html: 'Retype full sentence: <input type="text" name="answer2" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]{2,})\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}}],

    ];
   
