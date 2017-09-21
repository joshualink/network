
var categoryNumber = 5;
var maxValue = 200;
var postingProbability = 0.0001;
function KiMember() {
    this.number = categoryNumber;
    this.category = new Array(this.number);
    for(var k = 0; k < this.number; k++)
    {
        this.category[k] = Math.floor(Math.random() * maxValue);
    }
}

function startRepeatingPosting(postingMember){
    var posting = postingMember;
    setInterval(function(){
        var randomNumber = Math.random();
        if(randomNumber < postingProbability){
            posts.push(new Post(postingMember));
        }
    }, 200);
}

/*function startRepeatingReading(postingMember){
    var posting = postingMember;
    setInterval(function(){
        var randomNumber = Math.random();
        if(randomNumber <= postingProbability)
            alert(posting.category[0]);
    }, 200);
}*/




