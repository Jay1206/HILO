 $(document).ready(function(){
    //Once your code is hooked up you should see this message on your web page: “Scripts are linked”
    $("body").append('Scripts are linked.');
    //Put all of your code under here.
     var box = Math.floor(Math.random() * 20);
    $('button').click(function(){
    console.log('You clicked?');
        var guess = $('input').val()
        
        
    if (box == guess){
        $('.response').html("That's it!");
    } else if (box<guess){
         $('.response').html("Its Too High");
    } else {
        $('.response').html("Its Too Low");
    }
    });
   
});
var guess = $('input').val()
$('body').append(guess)