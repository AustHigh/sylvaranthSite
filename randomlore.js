//global variable to store previous random int
_oldInt = null;


function pickRandom(){

    var factArray = ["Mankind is not even close to the dominant species on Sylvaranth, as creatures such as dragons roam its lands.", "There was once a legendary paladin called Ludovicus that would save kingdoms from evil aberrations and demons."
, "Khodel is home to the Grand Library of Azuth, which is a library that doubles as a temple to the God of Knowledge and Wizardry, Azuth.", "Bollock is such an alcoholic, that drinking water actually makes hims sick, as his body rejects it."
, "Kalgad often diffuses Bollock's drunken ramblings by simply picking him up and carrying him away.", "Zadkiel likes to cast polymorph on himself to explore areas unkowningly.", "Blade's favorite food is fish. Big surprise."]

    //random index of factArray
    var randomInt = Math.floor(Math.random()*factArray.length);
    //ensure random integer isnt the same as last
    if(randomInt == _oldInt)
        pickRandom(factArray);
    else{
        _oldInt = randomInt;
        document.getElementById("display").innerHTML = factArray[randomInt];
    }
}

