
<?php
	$ques = $_GET['ques'];
	$ans = $_GET['ans'];
	$dbc = mysqli_connect("localhost","root","","hackathon");
	$query = "INSERT INTO responses (ques,ans) values('".mysqli_real_escape_string($dbc,$ques)."','".mysqli_real_escape_string($dbc,$ans)."')";
    mysqli_query($dbc,$query);
    header('Location:index.html');		
?>