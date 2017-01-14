
<?php
	
//uploa image...........................................
		// if(!file_exists("upload")) {
		// mkdir("upload");
		// }
		// $img=$_FILES["file"]["name"];
		// move_uploaded_file( $_FILES["file"]["tmp_name"], "upload/". $_FILES["file"]["name"]);
//require Connections ........................................
		require 'connect.php';
		$slide = $_GET['slide'];
		
//veriables ............................................
		$eventno = $slide;
		$query="SELECT *FROM scenes WHERE event_no='$eventno'";
		$result = mysqli_query($dbc,$query);
		$ans=mysqli_fetch_assoc($result);

		$imagename = ($ans['image']);
		$dialogs = ($ans['dialog']);
		$ease = ($ans['ease']);
		$delay = ($ans['delay']);
		$opacity = ($ans['opacity']);
		$scale =($ans['scale']);
		$fromto=($ans['from_to']);


		$json  = array($imagename, $dialogs, $ease, $delay, $opacity, $scale, $fromto );
		echo json_encode($json);		

?>