function endsWLY(){
    var word = document.getElementById("word").value;
    if (word.length < 2){
        document.getElementById("results").innerHTML ="word too small to end in LY";

    }else if(word.substring(word.length - 2).toLowerCase().match("ly")){
        document.getElementById("results").innerHTML = "This word ends with ly";

    }else{
        document.getElementById("result").innerHTML ="Does not end in LY";
    }

}