/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global maxValue */
var posts = [];
var memberNumber = 1000;
var member = new Array(memberNumber);
$( document ).ready(function() {
    for (var i = 0; i < memberNumber; i++) {
        member[i] = new KiMember();
        startRepeatingPosting(member[i]);
    }
    
});

function getCategoryName(num) {
    switch(num){
        case 0:
            return "Rassismus";
            break;
        case 1:
            return "Steuern";
            break;
        case 2:
            return "Tiere";
            break;
        case 3:
            return "Klima";
            break;
        case 4:
            return "Banken/Wirtschaft";
            break;
        case 5:
            return "Länderegoismus";
            break;
        case 6:
            return "blblblblbl";
            break;
        default:
    }
}

function getSentence(num) {
    var schwellenwert = maxValue/5;
    if(num < schwellenwert)
        return "Ich hasse ";
    if(num < 2 * schwellenwert)
        return "Ich bin gegen ";
    if(num < 3 * schwellenwert)
        return "Ich interessiere mich nicht für ";
    if(num < 4 * schwellenwert)
        return "Ich mag ";
    
    return "Ich liebe ";
}

function refreshPosts() {
    var innerHtml = "";
    for (var b = 0; b < posts.length; b++) {
        var outputString = '<div id="post" style="border-size:1px;border-style:solid;border-color:black;">';
        var post = posts[b];
        for (var j = 0; j < post.postNumber; j++) {
            outputString += getSentence(post.statement[j].value) + getCategoryName(post.statement[j].category) + "<br/>";
        }
        innerHtml = outputString + "</div><br/>" + innerHtml;
    }
    document.getElementById("demo").innerHTML = innerHtml;
}