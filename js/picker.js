var text;
var names = new Array(''
);
function reset(){
// re-enable go button
setTimeout("$('#go').removeAttr('disabled')",11005);
var namesbreak = "";
if(gup('names') != ""){
var names = gup('names');
namesbreak = names.replace(/101/g,'\n');
namesbreak = namesbreak.replace(/%20/g,' ');
}
else   {
var names = new Array(''
);
for(var i in names){
name = names[i];
if (name == "" || typeof(name) == undefined){}else{
namesbreak = namesbreak + name + "\n";
}
}
}
$("#namesbox").val(namesbreak);
}
function gup(para)
{
para = para.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
var regexS = "[\\?&]"+para+"=([^&#]*)";
var regex = new RegExp( regexS );
var results = regex.exec( window.location.href );
if( results == null )
return "";
else
return results[1];
}
function randOrd(){
return (Math.round(Math.random())-0.5);
}
function save(){
$("#varnote").hide();
$("#popdown").show();
$("#values").hide();
$("div").remove("#result1");
savenames = $("#namesbox").val();
savenames = savenames.replace(/\n\r?/g, '101');
$('#notification').fadeOut();
$('#notification').text('The name list is saved and updated.').fadeIn();
$("#names").show();
$('#namesbox').attr('disabled','disabled');
}
function namelist(){
$("#varnote").hide();
$('#namesbox').removeAttr('disabled','disabled');
$('#notification').text('Configure name list');
$("#popdown").show();
$("#values").hide();
$("#names").show();
$('body').css({"overflow-y": "visible"});
}
// does the actual animation
function go(){
$("#varnote").hide();
$('body').css({"overflow-y": "hidden"});
$('#go').attr('disabled','disabled');
$('#list').attr('disabled','disabled');
$('#save').attr('disabled','disabled');
$('#notification').slideUp();
$('#namesbox').slideDown();
var count = 1;
count = 1;
$("div").remove("#result1");
names = $("#namesbox").val();
if(document.all) { // IE
names=names.split("\n");
}
else { //Mozilla
names=names.split("\n");
}
$("#values").show();
$(".name").show();
$("#popdown").hide();
$("div").remove(".name");
$("div").remove(".extra");
$("#playback").html("");
newtop = names.length * 200 * -1;
//$('#values').css({top: -300});
$('#values').css({top: + newtop});
names.sort( randOrd );
var fruits = new Array ( "apple", "pear", "orange", "banana" );
//console.log(fruits);
//console.log(names);
//alert(newtop);
for(var i in names){
if (names[i] == "" || typeof(names[i]) == undefined){
count = count-1;
} else {
name = names[i];
//console.log(name);
$('#values').append('<div id=result'+count+' class=name>'+name+'</div>');
}
count = count+1;
}
for(var i in names){
if (names[i] == "" || typeof(names[i]) == undefined){}else{
name = names[i];
$('#values').append('<div class=name>'+name+'</div>');
}
count = count+1;
}
for(var i in names){
if (names[i] == "" || typeof(names[i]) == undefined){}else{
name = names[i];
$('#values').append('<div class=name>'+name+'</div>');
}
count = count+1;
}
text = $('#result1').text()
$('#values').animate({top: '+176'},5000);
// make it stand out
setTimeout("standout(text)",5000);
//setTimeout("$('#playback').hide('slow')",11005);
}
function standout(text){
$('#result1').removeClass('name');
$('.name').animate({opacity: .25});
$('#result1').animate({height: '+=60px'});
$('#result1').append('<div class="extra"><a class="small-alert-button" href="#" onClick="removevictim();">Remove name from list</a></div>');
$('#go').removeAttr('disabled','disabled');
$('#list').removeAttr('disabled','disabled');
$('#save').removeAttr('disabled','disabled');
$('#notification').text("Here's the winner");
$('#notification').slideDown();
}
function removevictim(){
// Removing victim from array and UI
// names = names.filter(function(){ return true});
// Rewriting namesbox contents
var nameupdated = "";
for(var i in names){
name = names[i];
if (name == "" || name == text || typeof(name) == undefined){}else{
nameupdated = nameupdated + "\n" + name;
}
}
$('#namesbox').val("");
$('#namesbox').val(nameupdated);
$('#result1').html("Removed");
$('#result1').fadeOut(1000, function(){
$("div").remove("#result1");
});
$("div").remove(".name");
$("div").remove(".extra");
$('#notification').text('Click the "PICK" button to see who is next!');
}