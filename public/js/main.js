/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global maxValue */

var memberNumber = 40;
var partyNumber = 10;
var sentenceNumber = 5;
var categoryNumber = 5;
var maxValue = 200;

var sentences = ["Ich hasse ", "Ich bin gegen ", "Ich interessiere mich nicht für ", "Ich mag ", "Ich liebe "];
var globalCategorys = ["Rassismus", "Steuern", "Tiere", "Klima", "Banken/Wirtschaft", "Länderegoismus", "blblblblbl"]; 

var members = new Array(memberNumber);
var posts = [];
var partys = new Array(partyNumber);

$( document ).ready(function() {
    for (var i = 0; i < memberNumber; i++) {
        members[i] = new KiMember(memberNames[i]);
        startRepeatingPosting(members[i]);
    }
    for (var i = 0; i < partyNumber; i++) {
       partys[i] = new KiMember(partyNames[i]);
        startRepeatingPosting(partys[i]);
    }
});

function valueToSentenceindex(value) {
    return Math.floor(value / (maxValue / sentenceNumber));
}

function indexOfSentence(s) {
    return sentences.indexOf(s, 0);
}

function indexOfCategory(c) {
    return globalCategorys.indexOf(c, 0);
}

function refreshPosts() {
    var innerHtml = "";
    for (var b = 0; b < posts.length; b++) {
        var post = posts[b];
        var outputString = '<div id="' + post.poster.name + post.postTime + '" class="post">';
        outputString += '<b>' + post.poster.name + '</b><br/>'; 
        for (var j = 0; j < post.postNumber; j++) {
            outputString += sentences[valueToSentenceindex(post.statement[j].value)] + globalCategorys[post.statement[j].category] + "<br/>";
        }
        innerHtml = outputString + "</div><br/>" + innerHtml;
    }
    document.getElementById("demo").innerHTML = innerHtml;
}