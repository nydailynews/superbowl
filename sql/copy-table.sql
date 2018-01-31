CREATE TABLE IF NOT EXISTS ranker_superbowl LIKE superbowl_rank_2016;
INSERT ranker_superbowl SELECT * FROM superbowl_rank_2016;
