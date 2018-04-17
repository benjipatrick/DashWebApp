
	$.getJSON( "http://localhost:8090/account/get_all_users", function(data){
		var users = data.users;
		console.log(users);
		var userNumber = users.length;
		for (var i = 0; i < userNumber; i++){
			$( " #users ").append( `<div class = "rounded eventResult panel panel-default">
										<!-- The stuff visible on the panel (list of users) -->
						 				<div class = "Userlist">

						 					<div class = "profile-icon">
						 						<i class = "fa fa-user"> </i>
						 					</div>

					              			<div class="panel-title" data-toggle= "collapse" data-parent="#Userlist" href="#collapse2">
					        					<b>Email: </b>
					      					</div>

					                		<div class = "panel-title actualTitle"  data-toggle= "collapse" data-parent="#Userlist" id = "title2" href="#collapse2">
					             			</div>

				      						<div class = "referral-item">

					      						<a href = "#" data-toggle="modal" data-target="#myModal"><i class="fa fa-book" id="delete2"></i></a>
					                 			<!-- Modal -->
				                  				<div class="modal fade" id="myModal" role="dial og">

				                    				<div class="modal-dialog">
				    
				                      					<!-- Modal content-->
				                      					<div class="modal-content">

				                        					<div class="modal-header">
				                          						<button type="button" class="close" data-dismiss="modal">&times;</button>
				                          						<h4 class="modal-title">Referral Form</h4>
				                        					</div>

					                        				<div class="modal-body">

					                          					<p>Contents Of the referral for person displays here.</p>

					                          					<div class="row bs-wizard" style="border-bottom:0;">
													                <div class="col-xs-3 bs-wizard-step complete">
													                  <div class="text-center bs-wizard-stepnum">Step 1</div>
													                  <div class="progress"><div class="progress-bar"></div></div>
													                  <a href="#" class="bs-wizard-dot"></a>
													                </div>
													                
														            <div class="col-xs-3 bs-wizard-step complete"><!-- complete -->
																		<div class="text-center bs-wizard-stepnum">Step 2</div>
																		<div class="progress"><div class="progress-bar"></div></div>
																		<a href="#" class="bs-wizard-dot"></a>
																	</div>
														               
													                <div class="col-xs-3 bs-wizard-step active"><!-- complete -->
													                  <div class="text-center bs-wizard-stepnum">Step 3</div>
													                  <div class="progress"><div class="progress-bar"></div></div>
													                  <a href="#" class="bs-wizard-dot"></a>
													                </div>
													                
													                <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->
													                  <div class="text-center bs-wizard-stepnum">Step 4</div>
													                  <div class="progress"><div class="progress-bar"></div></div>
													                  <a href="#" class="bs-wizard-dot"></a>
													                </div>
													            </div>
				                        					</div>

				                        					<div class="modal-footer">
							                          			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							                            		<button tpye="button" class="btn btn-primar deleteCurrenttNews" data-dismiss="modal">Update Status</button>
							                            	</div>
				                        				</div>

			                      					</div>

			      								</div>

				            				</div>

					      					<div class = "message-item">
					      						<a href = "#"><i class="fa fa-comment" id = "message"></i></a>
					      					</div>

				    					</div>
									</div> 
			`)
			$( " #title2 ").text(users[i].email);
			console.log(users[i])
		}
		}
	)

