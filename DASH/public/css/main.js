

var onetoupdate = "";
var numberOfStories = 0;


function updateNewsStorys(){
	$('.newsContents').html("");
	$.getJSON('http://localhost:8090/news/', function(data){
 		news = data.News
 		//numberOfStories = news.length;
 		for(newStory of news){
 			$('.newsContents').append(`<div class = "panel-group" id = "newsStory` + newStory.newsID + `">
				<div class = "rounded eventResult panel panel-default">
					<!-- The stuff visible on the panel -->
	 				<div class = "finalNewsResults">
              			<div class="panel-title" data-toggle= "collapse" data-parent="#finalNewsResults" href="#collapse` + newStory.newsID + `">
        					<b>Title: </b>
      					</div>
                <div class = "panel-title actualTitle" data-toggle= "collapse" data-parent="#finalNewsResults" id="title` + newStory.newsID + `" href="#collapse` + newStory.newsID + `"> `+ newStory.title + `</div>
      					<div class = "delete-item">

      						<a href = "#" data-toggle="modal" data-target="#myModal"><i class="fa fa-trash-o" id = "delete` + newStory.newsID + `"></i></a>
                   <!-- Modal -->
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
    
                      <!-- Modal content-->
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Delete</h4>
                        </div>
                        <div class="modal-body">
                          <p>Are you sure you want to delete this item?</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button tpye="button" class="btn btn-primary deleteCurrenttNews" data-dismiss="modal">Delete</button>
                        </div>
                      </div>
      
                    </div>
                  </div>
      					</div>

      					<div class = "edit-item">
      						<a href = "#"><i class="fa fa-pencil-square-o" id="news` + newStory.newsID + `" data-toggle = "modal" data-target="#myModal2"></i></a>
      					</div>
    				</div>
            		<!-- the stuff inside the opening -->
            		<div id="collapse` + newStory.newsID + `" class="panel-collapse collapse in innerPanel">` + newStory.blurb + `</div>
        		</div>
      		</div>`)

 			console.log(newStory.blurb);
 			console.log(newStory.date);
 			console.log(newStory.title);
 			console.log(newStory.newsID);
 			console.log(newStory);
 		}
 	})
}

// $(".grid-item").hide();
$(document).ready(function(){
	updateNewsStorys();
	$("#addNewsButton").click(function(){
		$("#title").val("");
	 	$("textarea").val("");
	 	$(".submitbutton").text("Submit");
		// toggles between .show and .hide for the form
	});

	 $("#addNewsButton").click(function () {
	 	// toggleAddButton();
	 });

	 // Handling the adding of new news articles or updating 
	 var counter = 2 
	 // change this to id probably
	 $(".submitbutton").click( function(){
	 	if($(".submitbutton").text() == "Submit"){
	 		
	 		$.post("http://localhost:8090/news/add",
    			{
        			username: "staff01",
        			blurb: $("textarea").val(),
        			title: $("#title").val()
    			});	

			$("#title").val("");
			$("textarea").val("");
			updateNewsStorys();
	 		//add code here then add counter by one - do this everytime you add one
	 		console.log("hi");
	 	}
	 	else {
	 		console.log(onetoupdate);
	 		$.post("http://localhost:8090/news/update",
    			{
        			newsID: parseInt(onetoupdate),
        			blurb: $("textarea").val(),
        			title: $("#title").val()
    			});	

	 		$("#title").val("");
			$("textarea").val("");
	 		updateNewsStorys();
	 		console.log("bye")
	 	}
	 })
});

$("body").on('click','.fa-pencil-square-o',function(){
	onetoupdate = String(this.id)[String(this.id).length -1];

	// changes values of title and blurb in the box to be edited also changes button value to update
	$("#title").val($("#title" + String(this.id)[String(this.id).length -1]).html());
	$("textarea").val($("#collapse" + String(this.id)[String(this.id).length -1]).html());
	$(".submitbutton").text("Update");
	 	
	 	
});

$("body").on('click', '.deleteCurrenttNews', function(){
	console.log("hi");
	$.post("http://localhost:8090/news/remove",
    	{
        	newsID: parseInt(onetoupdate),
    	});
	updateNewsStorys();
});

$("body").on('click', '.fa-trash-o', function(){

	onetoupdate = String(this.id)[String(this.id).length -1];
});



