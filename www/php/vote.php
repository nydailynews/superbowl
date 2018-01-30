<?php
 ini_set('display_errors',1);
//  error_reporting(E_ALL);
$game1 = htmlspecialchars($_REQUEST['game1']);
$game2 = htmlspecialchars($_REQUEST['game2']);
$game3 = htmlspecialchars($_REQUEST['game3']);
$game4 = htmlspecialchars($_REQUEST['game4']);
$game5 = htmlspecialchars($_REQUEST['game5']);
$games = array($game1, $game2, $game3, $game4, $game5);
$votes = array();

require_once ('../../../../includes/php/mysql_connect_production.php');

$vote_up = 2;
for ( $i = 0; $i < 5; $i ++ ):
	if ( $games[$i] === 'DROP HERE' ) continue;
	if ( $i > 2 ) $vote_up = 1;
	$query = "SELECT VOTE FROM superbowl_ranker WHERE GAME = '".$games[$i]."' LIMIT 1";
	$result = @mysql_query($query);
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	$vote = intval($row['VOTE']) + $vote_up;
	array_push($votes, $vote);

	$update = "UPDATE superbowl_ranker SET VOTE=".$vote." WHERE GAME = '".$games[$i]."' LIMIT 1";
	$result = @mysql_query($update1);
endfor;

$sql = mysql_query("SELECT * FROM superbowl_ranker ORDER BY VOTE DESC LIMIT 3");

$results = array();
while($row = mysql_fetch_array($sql)):
   $results["TOP 3 READERS"][]  = array(
      'GAME' => $row['GAME'],
      'TEAM1' => $row['TEAM1'],
      'TEAM2' => $row['TEAM2'],
      'LINK' => $row['LINK'],
      'IMAGE' => $row['IMAGE'],
      'VOTE' => $row['VOTE']
   );
endwhile;

$sql = mysql_query("SELECT sum(vote) as 'vt' FROM superbowl_ranker");
while($row = mysql_fetch_array($sql)):
   $results["TOTAL"][]  = array(
      'VTOTAL' => $row['vt']
   );
endwhile;

$sql = mysql_query("SELECT * FROM superbowl_ranker WHERE GAME = '".$games[2]."' OR GAME = '".$games[1]."' OR GAME  = '".$games[0]."'");

while($row = mysql_fetch_array($sql)):
   $results["TOP 3"][]  = array(
      'GAME' => $row['GAME'],
      'TEAM1' => $row['TEAM1'],
      'TEAM2' => $row['TEAM2'],
      'LINK' => $row['LINK'],
      'IMAGE' => $row['IMAGE'],
      'VOTE' => $row['VOTE']
   );
endwhile;

$json = json_encode($results);
echo $json;

mysql_close($connection);
?>
