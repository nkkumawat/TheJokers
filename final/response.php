
<?php
	
//uploa image...........................................
		// if(!file_exists("upload")) {
		// mkdir("upload");
		// }
		// $img=$_FILES["file"]["name"];
		// move_uploaded_file( $_FILES["file"]["tmp_name"], "upload/". $_FILES["file"]["name"]);
//require Connections ........................................
		$dbc = mysqli_connect('localhost','root','','hackathon');
		$request = $_GET['request'];
		
//veriables ............................................
		

		$query="SELECT *FROM responses WHERE ques='$request'";
		$result = mysqli_query($dbc,$query);
		$ans = mysqli_fetch_assoc($result);
		$unable = "404";
		if($ans){
			echo json_encode($ans['ans']);
		}
		else {

			echo json_decode($unable);
		}


		
?>
