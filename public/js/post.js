/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global categoryNumber, givenPoster */

function Post(givenPoster) { //randomPost
    this.commentary = [];
    this.poster = givenPoster;
    var d = new Date();   //generation of timeStamp
    this.postTime = d.getTime();
    this.postNumber = 1 + Math.floor(Math.random() * 3);
    this.statement = new Array(this.postNumber);
    var takenCategorys = [];
    for(var a = 0; a < this.postNumber; a++) {
        var randomNumber = Math.floor(Math.random() * categoryNumber);
        if(takenCategorys.indexOf(randomNumber, 0) !== -1) {
            a--;  
        } else {
            takenCategorys.push(randomNumber);
            this.statement[a] = new Statement(randomNumber, this.poster.category[randomNumber]);
        }
    }
}
function DummyPost() {//dummyPost
    this.commentary = [];
    this.poster = new KiMember();
    this.postNumber = 1;
    this.statement = new Array(this.postNumber);
    this.statement[0] = new Statement();
}


