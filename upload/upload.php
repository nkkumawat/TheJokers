
<?php
if(!file_exists("upload"))
{
mkdir("upload");
}
$img=$_FILES["file"]["name"];
move_uploaded_file( $_FILES["file"]["tmp_name"], "upload/". $_FILES["file"]["name"]);

?>