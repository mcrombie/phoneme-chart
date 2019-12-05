/* --------------------------------- */
/* VARIABLES */
/* --------------------------------- */

var vowels = document.getElementsByClassName('vowel');
var ipaVowels = document.getElementsByClassName('ipa');
var englishVowels = document.getElementsByClassName('english');
var koreanVowels = document.getElementsByClassName('korean');
var chineseVowels = document.getElementsByClassName('chinese');
var radioButtons = ['ipa-radio', 'english-radio', 'chinese-radio'];

var consonants = document.getElementsByClassName('consonant');

/* --------------------------------- */
/* HIDE ALL VOWELS */
/* --------------------------------- */

var hideVowels = function(){
    
    Array.prototype.forEach.call(vowels, function(element){
        element.style.display='none';
    })
    
    
}
var hideConsonants = function(){
    
    Array.prototype.forEach.call(consonants, function(element){
        element.style.display='none';
    })
    
    
}

/* --------------------------------- */
/* DISPLAY SYMBOLS */
/* --------------------------------- */

//shows vowels based on radiobutton currently selected. Only one language can be displayed. Have considered having the capacity to show multiple languages at once for comparison. 
var display = function(){
    
    hideVowels();
    hideConsonants();
    
    
    radioButtons.forEach(function(radioButton){
        
        var language = [];
        
        //radio buttons map to a set of vowels
        if(radioButton=='ipa-radio'){language=ipaVowels};
        if(radioButton=='english-radio'){language=englishVowels};
        if(radioButton=='korean-radio'){language=koreanVowels};
        if(radioButton=='chinese-radio'){language=chineseVowels};
        
        //show or hide symbols based on radio button selection
        if(document.getElementById(radioButton).checked==true){
            Array.prototype.forEach.call(language, function(element){

                element.style.display='block';
            })
        }else{
            Array.prototype.forEach.call(language, function(element){
                element.style.display='none';
            })
        }
    })
    

    
}

/* --------------------------------- */
/* MAIN FUNCTION */
/* --------------------------------- */

display();

