 $(document).ready(function(){
    //Once your code is hooked up you should see this message on your web page: “Scripts are linked”
    $("body").append('Scripts are linked.');
    //Put all of your code under here.
    $('button').click(function(){
    console.log('You clicked?');
        var guess = $('input').val()
        $('body').append(guess)
         var box = 3;
    if (box == guess){
        $('body').append("That's it!");
    } else if (box<guess){
         $('body').append("Its Too High");
    }
    
    else {
        
    }
    });
   
});
var guess = $('input').val()
$('body').append(guess)