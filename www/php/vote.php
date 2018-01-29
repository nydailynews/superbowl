<?php
 ini_set('display_errors',1);
//  error_reporting(E_ALL);
$game1 = htmlspecialchars($_REQUEST['game1']);
$game2 = htmlspecialchars($_REQUEST['game2']);
$game3 = htmlspecialchars($_REQUEST['game3']);



require_once ('../../../../includes/php/mysql_connect_production.php');


$query = "SELECT * FROM superbowl_rank_2016 WHERE GAME = '".$game1."'";
$result = @mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  $newVote1 = $row['VOTE'] + 1;

}

$query = "SELECT * FROM superbowl_rank_2016 WHERE GAME = '".$game2."'";
$result = @mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  $newVote2 = $row['VOTE'] + 1;

}

$query = "SELECT * FROM superbowl_rank_2016 WHERE GAME = '".$game3."'";
$result = @mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  $newVote3 = $row['VOTE'] + 1;

}

  $update1 = "UPDATE Interactive.superbowl_rank_2016 SET VOTE=".$newVote1." WHERE GAME = '".$game1."'";
  $result = @mysql_query($update1);
  
  $update2 = "UPDATE Interactive.superbowl_rank_2016 SET VOTE=".$newVote2." WHERE GAME = '".$game2."'";
  $result = @mysql_query($update2);
  
  $update3 = "UPDATE Interactive.superbowl_rank_2016 SET VOTE=".$newVote3." WHERE GAME = '".$game3."'";
  $result = @mysql_query($update3);



$sql = mysql_query("SELECT * FROM superbowl_rank_2016 ORDER BY VOTE DESC LIMIT 3");



$results = array();
while($row = mysql_fetch_array($sql))
{
   $results["TOP 3 READERS"][]  = array(
      'GAME' => $row['GAME'],
      'TEAM1' => $row['TEAM1'],
      'TEAM2' => $row['TEAM2'],
      'LINK' => $row['LINK'],
      'IMAGE' => $row['IMAGE'],
      'VOTE' => $row['VOTE']
   );
}

$sql = mysql_query("SELECT sum(vote) as 'vt' FROM superbowl_rank_2016");
while($row = mysql_fetch_array($sql))
{
   $results["TOTAL"][]  = array(

      'VTOTAL' => $row['vt']

   );
}


$sql = mysql_query("SELECT * FROM superbowl_rank_2016 WHERE GAME = '".$game3."' OR GAME = '".$game2."' OR GAME  = '".$game1."'");



while($row = mysql_fetch_array($sql))
{
   $results["TOP 3"][]  = array(
      'GAME' => $row['GAME'],
      'TEAM1' => $row['TEAM1'],
      'TEAM2' => $row['TEAM2'],
      'LINK' => $row['LINK'],
      'IMAGE' => $row['IMAGE'],
      'VOTE' => $row['VOTE']
   );
}

$json = json_encode($results);
echo $json;

mysql_close($connection);

?>
