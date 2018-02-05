```
  , _ ,
 ( o o )
/'` ' `'\
|'''''''|                hootie hoo
|\\'''//|
   """
```

# Super Bowl ranker
Rank the best Super Bowls

[Original edition](http://interactive.nydailynews.com/2016/02/rank-greatest-games-super-bowl-history/index.html)

[Current edition](http://interactive.nydailynews.com/poll/rank-these-things/best-super-bowl-games/)

## How-tos
### How to update this interactive with the results of the previous Super Bowl
Hi. Glad you're here. This is where you'll learn how to update the interactive with the results of the previous Super Bowl, which will allow readers to pick that Super Bowl in this interactive (assuming it was any good).

#### First, update the Super Bowl json
In [www/js/rankings.json](www/js/rankings.json) is a json file with records of each Super Bowl. You're going to edit this file and add a new record at the end. Go to this file and scroll to the bottom, the final record should look something like:
```json
  {
    "GAME":"Super Bowl XLIXXX",
    "TEAM1":" Fort Wayne Bumberbuss 34",
    "TEAM2":" Toledo Sparks 28",
    "LINK":"http://www.nydailynews.com/sports/football/patriots-shock-falcons-win-super-bowl-li-overtime-34-28-article-1.2965035",
    "IMAGE":"http://path/to/the/image.jpg"
  }
```

Copy the last year's record, from that first curly-brace to its closing curly-brace.

Next, add a comma after the closing curly-brace to the record you just copied.

After that, add a new line and paste the contents of your clipboard. Edit the fields with the new Super Bowl's results, link, and representative photo. Save the file.

You should now have something that looks like:
```json
  {
    "GAME":"Super Bowl XLIXXX",
    "TEAM1":" Fort Wayne Bumberbuss 34",
    "TEAM2":" Toledo Sparks 28",
    "LINK":"http://www.nydailynews.com/sports/football/patriots-shock-falcons-win-super-bowl-li-overtime-34-28-article-1.2965035",
    "IMAGE":"http://path/to/the/image.jpg"
  },
  {
    "GAME":"Super Bowl XLIXXXI",
    "TEAM1":" Sacramento Blazers 34",
    "TEAM2":" Joliet Patriots 28",
    "LINK":"http://www.nydailynews.com/sports/football/super-bowl-super-starr-bombs-kc-35-10-article-1.1545973",
    "IMAGE":"http://path/to/the/image.jpg"
  }
```

Great. Now you get to do the same thing again, but with the database.

#### Next, add a record to the database

You're going to put together a database query that you run on our database server. Great. In [sql/new-record.sql](sql/new-record.sql) is the boilerplate. It looks something like:

```sql
#INSERT INTO ranker_superbowl VALUES ("Super Bowl 50", " Denver Broncos 24", " Carolina Panthers 10", "http://www.nydailynews.com/sports/football/broncos-panthers-super-bowl-50-article-1.2523494", "http://assets.nydailynews.com/polopoly_fs/1.2523491.1454897456!/img/httpImage/image.jpg_gen/derivatives/article_400/508983114.jpg", 0)
INSERT INTO ranker_superbowl VALUES ("", " ", " ", "", "", 0);
```

So what you do: Open your favorite text editor, copy the `INSERT INTO ranker_superbowl VALUES ("", " ", " ", "", "", 0)` part, and in the first quoted argument paste the name of the Super Bowl, in the second paste whatever you put into TEAM1 in the JSON above
