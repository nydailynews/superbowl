 
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
if(/Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $(".callout").html("SUPERBOWL TURNS 50");
  $("#banner").html('<img alt="" id="banner-image" style="width: 100%" src="images/superbowl_50_landing_page_m.png">')

}else{
  $("#banner").html('<img alt="" id="banner-image" style="width: 100%" src="images/superbowl_50_landing_page_dt.png">')
}
 
  function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

 
 $(function() {
   

   
   function getPlayers(){


        $.getJSON('php/rankings.php', function(data) {
      $.each(data, function(i, item) {
        
         var image = item.IMAGE;
        if (item.GAME == "Super Bowl XIV"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XIV.jpg";
        }else if (item.GAME == "Super Bowl XIX"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XIX.jpg";
        }else if (item.GAME == "Super Bowl XV"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XV.jpg";
        }else if (item.GAME == "Super Bowl XVI"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XVI.jpg";
        }else if (item.GAME == "Super Bowl XVIII"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XVIII.jpg";
        }else if (item.GAME == "Super Bowl XX"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XX.jpg";
        }else if (item.GAME == "Super Bowl XXI"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XXI.jpg";
        }else if (item.GAME == "Super Bowl XXII"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XXII.jpg";
        }else if (item.GAME == "Super Bowl XXIII"){
          image = "http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/images/XXIII.jpg";
        }
        
        
      if(item.GAME != "AD"){
        $("#right-rail").append('<div game="'+item.GAME+'" class="card noRank draggable ui-widget-content column">\n\
                <img alt="Photo from '+item.GAME+'" class="thumb" src="'+image+'" />\n\
                <div class="rank">\n\
                    <p class="crank-num"></p>\n\
                    <img alt="" style="float:left" src="images/trash_can.png" />\n\
                </div>\n\
                <div class="title">'+item.GAME+'</div>\n\
                <div class="divider"></div>\n\
                <div class="card-text">\n\
                    '+item.TEAM1+"<br />"+item.TEAM2+'<br />\n\
                    <p class="link-text">\n\
                        <a href="'+item.LINK+'" target="_blank">Read '+item.GAME+' game article</a>\n\
                    </p>\n\
                </div></div>');
        }else{
          if( !/Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('#right-rail').append('<div id="box_ad" class="large-4 medium-6 small-12 columns" style="float:left"><hr><div id="div-gpt-ad-1423507761396-1"><script>googletag.cmd.push(function(){ googletag.display("div-gpt-ad-1423507761396-1"); });</script></div><hr></div><br clear="all">')   
          }      
        }
        
        
        })
// <svg height="10" width="100"><line x1="50" y1="0" x2="0" y2="0" style="stroke:rgb(255,0,0);stroke-width:2" /></svg>    
      $( ".draggable" ).draggable({ 
          revert: function( event, ui ) {
            $(this).removeClass("opac")
            return true
            },
          cursorAt: { bottom: 0 },
          drag: function(event, ui){
            $(this).addClass("opac");            
          }
          });
   
      $( ".droppable" ).droppable({
          hoverClass: "highlight",
          accept: ".noRank",
          tolerance: "pointer",
          drop: function( event, ui ) {
            $(this).droppable( "option", "disabled", true);
            var myNum = $(this).find(".ranknum").text();
            if($(this).attr("rankattr") != "none"){
              $(this)
              .find(".ranked_name").empty()  
            }
            $(this)
              .addClass( "rankOn" )
              .find(".ranked_name").text( ui.draggable.find('.title').text())
              .parent().attr("rankattr", ui.draggable.find('.title').text())
              .find(".default-text").hide();
            ui.draggable.find(".rank").show();
            ui.draggable.find(".crank-num").text(myNum);
            ui.draggable.addClass("crank-on");
            ui.draggable.removeClass("noRank");
            ui.draggable.removeClass("opac");
          }
      });
      
                
          $(".droppable").on('mouseover', function(){
            if($(this).hasClass("rankOn")){
              $(this).find(".ranknum").hide()
              $(this).find(".rankX").show();  
            }     
          })
          
          $(".droppable").on('mouseout', function(){
            $(this).find(".ranknum").show();
            $(this).find(".rankX").hide();        
          })
      
     $(".rank").on('click', function(){
        var myRankAttr = $(this).parent().find('.title').text();
        $(this).hide();
        $(this).parent().removeClass("crank-on");
        $("[rankattr='"+myRankAttr+"']").droppable( "option", "disabled", false);
        $(this).parent().addClass("noRank");
        $("[rankattr='"+myRankAttr+"']").find(".default-text").show();
        $("[rankattr='"+myRankAttr+"']").find(".ranked_name").text("");
        $("[rankattr='"+myRankAttr+"']").removeClass( "rankOn" );
       })
       
    $(".rankX").on('click', function(){
        var myRankAttr = $(this).parent().find(".ranked_name").text();
        $("[game='"+myRankAttr+"']").find(".rank").hide();
        $(this).parent().droppable( "option", "disabled", false);
        $("[game='"+myRankAttr+"']").removeClass("crank-on");
        $("[game='"+myRankAttr+"']").addClass("noRank");
        $(this).parent().find(".default-text").show();
        $(this).parent().find(".ranked_name").text("");
        $(this).parent().removeClass( "rankOn" );
       })
  
    })
      
     
         
      $("#banner").on('click', function(){
        
        $(this).hide();
        $("#main-cont").fadeIn();
        
      })
           
           
 
       $("#submit").on('click', function(){  
         $("body").animate({ scrollTop: 0 }, "fast");
         var random = makeid();
         
         $("#main-cont").hide();
         $("#results-cont").show();
           var game1 = ($("#1").find(".ranked_name").text())
           var game2 = ($("#2").find(".ranked_name").text())
           var game3 = ($("#3").find(".ranked_name").text())
            $("#top-choice").text("Here's how your favorite Super Bowls are stacking up against your fellow Daily News readers")
            $("#social").find(".tweet").attr("href", "https://twitter.com/share?url=Nydn.us/RanktheSuperBowls&text=I ranked "+game1+"! Rank ‘em! Pick the Top 10 Super Bowls in NFL history nydn.us/RanktheSuperBowls")

           jQuery.get("http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/php/vote.php?game1="+game1+"&game2="+game2+"&game3="+game3+"&"+random, function(data) { 
             
                       
             
             var myData = jQuery.parseJSON(data);
             console.log(myData)
             var totalNum = myData["TOTAL"][0].VTOTAL;
            
             
             
             $.each(myData["TOP 3 READERS"], function(i, item) {   
                percent_v = Math.round((item.VOTE/(totalNum))*100);
             $("#top3-readers").append('<div game="'+item.GAME+'" class="card noRank draggable ui-widget-content column">\n\
                     <img alt="" class="thumb" src="'+item.IMAGE+'" /><div class="rank"><p class="crank-num"></p>\n\
                     <img alt="" style="float:left" src="images/trash_can.png" /></div><a href="'+item.LINK+'" target="new" ><div class="title">'+item.GAME+'</div></a><div class="divider"></div><div class="card-text">'+item.TEAM1+"<br />"+item.TEAM2+'</div><div class="votes">'+percent_v+'% votes</div></div>');
             })
             
             $.each(myData["TOP 3"], function(i, item) {   
               percent_v = Math.round((item.VOTE/(totalNum))*100);
             $("#your-top3").append('<div game="'+item.GAME+'" class="card noRank draggable ui-widget-content column">\n\
                     <img alt="" class="thumb" src="'+item.IMAGE+'" /><div class="rank"><p class="crank-num"></p>\n\
                     <img alt="" style="float:left" src="images/trash_can.png" /></div><a href="'+item.LINK+'" target="new" ><div class="title">'+item.GAME+'</div></a><div class="divider"></div><div class="card-text">'+item.TEAM1+"<br />"+item.TEAM2+'</div><div class="votes">'+percent_v+'% votes</div></div>');
             })     
          })
        })
   
   
   }
   
   getPlayers();
     
     
     
     

  });
  
