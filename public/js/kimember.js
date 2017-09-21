
var postingProbability = 0.005; //000
function KiMember(givenName) {
    this.name = givenName;
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




