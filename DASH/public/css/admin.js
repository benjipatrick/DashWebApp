  $(".grid-item").hide();
              $(document).ready(function(){
	      $("#addButton").click(function(){
		   // toggles between .show and .hide for the form
		   $(".grid-item").slideToggle(300);

	       });
               $("#addButton").click(function () {
	 	// changes hover and colour of button
	 	if(Math.max($("#addButton").css("background").indexOf("rgb(25, 201, 222)"), $("#addButton").css("background").indexOf("rgb(22, 177, 195)")) >= 0){
	 		$(".btn-default").css({"background": "rgb(208, 208, 208)"});
	 		 $("#addButton").hover(function(){
	 		 	$("#addButton").css({"background" : "rgb(191,191,191)"})
	 		 }, function(){
	 		 	$("#addButton").css({"background" : "rgb(208, 208, 208)"})
	 		 })
	 	}
	 	else {
	 		$(".btn-default").css({"background": "rgb(22, 177, 195)"});
	 		 $("#addButton").hover(function(){
	 		 	$("#addButton").css({"background" : "rgb(25,201,222)"})
	 		 }, function(){
	 		 	$("#addButton").css({"background" : "rgb(22, 177, 195)"})
	 		 })
	 	}
	 });


         var counter = 2 
	 

	 $(".submitbutton").click(function(){
	 	if($(".submitbutton").text() == "Submit"){
	 		counter += 1;
           $(".allTheStaff").prepend(`<div class = "panel-group" id = "newStaff` + counter.toString() +`">
				<div class = "panel panel-default">
					
	 				<div class = "finalResults">
              			<div class="panel-title" data-toggle= "collapse" data-parent="#finalResults" href="#collapse` + counter.toString() +`">
        					<h3 style = "text-align: center">`+ $("#username").val() +` </h3>
      					</div>
                          <div id="collapse` + counter.toString() +`" class="panel-collapse collapse in">
                       
                         <div class="panel-body">
                          <div class = "delete-staff">
      				<a href = "#" data-toggle="modal" data-target="#myModal"><i class="fa fa-trash-o" id = "delete` + counter.toString() +`" ></i></a>
                               <div class="modal fade" id="myModal" role="dialog">
                               <div class="modal-dialog">
    
                               <div class="modal-content">
                               <div class="modal-header">
                               <button type="button" class="close" data-dismiss="modal">&times;</button>
                               <h4 class="modal-title">Delete</h4>
                               </div>
                               <div class="modal-body">
                               <p>Are you sure you want to delete this Staff?</p>
                               </div>
                               <div class="modal-footer">
                               <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                               <button type="button" class="btn btn-primary deleteThisStaff" data-dismiss="modal">Delete</button>
                               </div>
                               </div>
      	                       </div>                   
                               </div>
                           </div>

                           <div class = "edit-staff">
      			        <a href = "#" data-toggle="modal" data-target="#myModal1"><i class="fa fa-pencil-square-o" id = "edit` + counter.toString() +`"></i></a>
                                <div class="modal fade" id="myModal1" role="dialog">
                               <div class="modal-dialog">
    
                               <div class="modal-content">
                               <div class="modal-header">
                               <button type="button" class="close" data-dismiss="modal">&times;</button>
                               <h4 class="modal-title">Update Staff</h4>
                               </div>
                               <div class="modal-body">
                                     <div><input type = "checkbox" name = "check" class = "privilege_input">Tick this box if the member of Staff should be able to edit News.</div>
                                     <div><select>
                                     <option value = "0">Sign users to this staff</option>
                                    <option value="1">user1</option>
                                      <option value="2">user2</option>
                                     <option value="3">user3</option>
                                     </select>
                                     </div>
                               </div>
                               <div class="modal-footer">
                               <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                               <button type="button" class="btn btn-primary " data-dismiss="modal">Submit</button>
                               </div>
                               </div>
                               </div>
                               </div>

      		           </div>
                    </div>
                   </div>
                   </div>
                   </div>`
                   );
                   $("#username").val("");
		   $("#password").val("");
		   $("#privilege").val("");
                   console.log("hi")
                  }
                  else {
                       
                        console.log(onetoupdate);
	 		$("#username" + onetoupdate).text($("#username").val());
	 		console.log("bye")
                     
	               }

                                
                   })
                         
	 	});
 
                $("body").on('click', '.fa-trash-o', function(){
	        onetoupdate = String(this.id)[String(this.id).length -1];
                });
               
                $("body").on('click', '.deleteThisStaff', function(){
	        console.log("hi");
	        $("#newStaff" + onetoupdate).remove();


                 });

              
