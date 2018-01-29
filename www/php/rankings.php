<?php
ini_set('display_errors',1); 
//error_reporting(E_ALL);

require_once ('../../../../includes/php/mysql_connect_production.php');

$sql = mysql_query("SELECT * FROM superbowl_rank_2016");
$results = array();
while($row = mysql_fetch_array($sql))
{
   $results[] = array(
      'GAME' => $row['GAME'],
      'TEAM1' => $row['TEAM1'],
      'TEAM2' => $row['TEAM2'],
      'LINK' => $row['LINK'],
      'IMAGE' => $row['IMAGE']
   );
}

$json = json_encode($results);
echo $json;

mysql_close($connection);



?>