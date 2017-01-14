
<?php
	
//uploa image...........................................
		// if(!file_exists("upload")) {
		// mkdir("upload");
		// }
		// $img=$_FILES["file"]["name"];
		// move_uploaded_file( $_FILES["file"]["tmp_name"], "upload/". $_FILES["file"]["name"]);
//require Connections ........................................
		require 'connect.php';
		// $slide = $_GET['slide'];
		
//veriables............................................
		// $eventno = $slide;
		$i = 1;
		$ans  = array( );;

		while($i <= 6) {
		$query="SELECT * FROM scenes WHERE event_no = '$i' ";
		$result = mysqli_query($dbc,$query);
		$ans2=mysqli_fetch_assoc($result);
		 $ans[$i] =  ($ans2);
			
		
	
		$i++;
	}
	echo json_encode($ans);
	
 


		// $imagename  = array();



	// while(	$ans=mysqli_fetch_assoc($result))
	// {
	// 	$imagename = ($ans['image']);
	// 	$dialogs = ($ans['dialog']);
	// 	$ease = ($ans['ease']);
	// 	$delay = ($ans['delay']);
	// 	$opacity = ($ans['opacity']);
	// 	$scale =($ans['scale']);
	// 	$fromto=($ans['from_to']);
	// 	$timer=($ans['timer']);

	// }
	// 	$json  = array($imagename, $dialogs, $ease, $delay, $opacity, $scale, $fromto,$timer );
	// 	echo json_encode($json);		

?>