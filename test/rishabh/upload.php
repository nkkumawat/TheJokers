
<?php
	
//uploa image...........................................
		if(!file_exists("upload")) {
		mkdir("upload");
		}
		$img=$_FILES["file"]["name"];
		move_uploaded_file( $_FILES["file"]["tmp_name"], "upload/". $_FILES["file"]["name"]);
//require Connections ........................................
		require 'connect.php';		
//veriables ............................................
		$eventno = ($_POST['eventno']);
		$imagename = ($_POST['imagename']);
		$dialogs = ($_POST['dialogs']);
		$ease = ($_POST['ease']);
		$delay = ($_POST['delay']);
		$opacity = ($_POST['opacity']);
		$scale =($_POST['scale']);
		$fromto = ($_POST['fromto']);
		$time = ($_POST['time']);
		echo $eventno.$imagename.$dialogs;
		$query = "INSERT INTO scenes (event_no,image,dialog,sound,ease,delay,opacity,scale,from_to,timer) values('".mysqli_real_escape_string($dbc,$eventno)."','".mysqli_real_escape_string($dbc,$imagename)."','".mysqli_real_escape_string($dbc,$dialogs)."','".mysqli_real_escape_string($dbc,'jfy')."','".mysqli_real_escape_string($dbc,$ease)."','".mysqli_real_escape_string($dbc,$delay)."','".mysqli_real_escape_string($dbc,$opacity)."','".mysqli_real_escape_string($dbc,$scale)."','".mysqli_real_escape_string($dbc,$fromto)."','".mysqli_real_escape_string($dbc,$time)."')";

	    mysqli_query($dbc,$query);
	    header("Location: upload.html");


		
?>