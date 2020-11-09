export const aggregateStatistics = (player, yearByYearCareerStats, yearByYearPlayoffsStats) => {
    let playoffsSeasons = [];
    let playoffsTeams = [];

    let playoffsStatsOffenseAndDefence = {
        games: [],
        goals: [],
        assists: [],
        points: [],
        plusMinus: [],
        penaltyMinutes: [],
        powerPlayGoals: [],
        powerPlayPoints: [],
        shortHandedGoals: [],
        shortHandedPoints: [],
        gameWinningGoals: [],
        overTimeGoals: [],
        shots: [],
        shotPercentage: [],
        faceOffPercentage: [],
        blocked: [],
        hits: [],
        timeOnIce: [],
        evenTimeOnIce: [],
        powerPlayTimeOnIce: [],
        shortHandedTimeOnIce: [],
        shifts: []
    }

    let playoffsTotalGamesOffenceAndDefence = 0;
    let playoffsTotalGoalsOffenseAndDefence = 0; 
    let playoffsTotalAssistsOffenseAndDefence = 0; 
    let playoffsTotalPointsOffenseAndDefence = 0; 
    let playoffsTotalPenaltyMinuteOffenseAndDefence = 0; 
    let playoffsTotalPlusMinusOffenseAndDefence = 0; 
    let playoffsTotalPowerPlayGoalsOffenseAndDefence = 0; 
    let playoffsTotalPowerPlayPointsOffenseAndDefence = 0; 
    let playoffsTotalShortHandedGoalsOffenseAndDefence = 0; 
    let playoffsTotalShortHandedPointsOffenseAndDefence = 0; 
    let playoffsTotalOverTimeGoalsOffenseAndDefence = 0; 
    let playoffsTotalGameWinningGoalsOffenseAndDefence = 0; 
    let playoffsTotalShotPercentageOffenseAndDefence = 0; 
    let playoffsTotalShotsOffenseAndDefence = 0; 

    let playoffsCountUndefinedFaceOffPercentageOffenceAndDefence = 0;
    let playoffsTotalFaceOffPercentageOffenseAndDefence = 0;

    let playoffsTotalStatsOffenseAndDefence = [];

    let playoffsStatsGoalies = {
        games: [],
        gamesStarted: [],
        wins: [],
        losses: [],
        ties: [],
        ot: [],
        shotsAgainst: [],
        goalsAgainst: [],
        goalAgainstAverage: [],
        saves: [],
        savePercentage: [],
        shutouts: [],
        evenSaves: [],
        powerPlaySaves: [],
        savePercentage: [],
        timeOnIce: [],
        evenShots: [],
        evenStrengthSavePercentage: [],
        powerPlaySavePercentage: [],
        powerPlaySaves: [],
        powerPlayShots: [],
        shortHandedSavePercentage: [],
        shortHandedSaves: [],
        shortHandedShots: [],
        minutes: []
    }

    let playoffsTotalGamesGoalies = 0; 
    let playoffsTotalGamesStartedGoalies = 0;
    let playoffsTotalWinsGoalies = 0; 
    let playoffsTotalLossesGoalies = 0; 
    let playoffsTotalTiesGoalies = 0; 
    let playoffsTotalOTGoalies = 0; 
    let playoffsTotalShotsAgainstGoalies = 0; 
    let playoffsTotalGoalsAgainstGoalies = 0;
    let playoffsTotalGoalAgainstAverageGoalies = 0; 
    let playoffsTotalSavesGoalies = 0; 
    let playoffsTotalSavePercentageGoalies = 0; 
    let playoffsTotalShutoutsGoalies = 0;

    let playoffsTotalStatsGoalies = [];

    yearByYearPlayoffsStats.forEach(data => {
        if (data.league.name === "National Hockey League") {
            playoffsSeasons.push(data.season);
            playoffsTeams.push(data.team.name);
    
            if (player.primaryPosition.code === "G") {
                playoffsStatsGoalies.games.push(data.stat.games);
                playoffsStatsGoalies.gamesStarted.push(data.stat.gamesStarted);
                playoffsStatsGoalies.wins.push(data.stat.wins);
                playoffsStatsGoalies.losses.push(data.stat.losses);
                playoffsStatsGoalies.ties.push(data.stat.ties);
                playoffsStatsGoalies.ot.push(data.stat.ot);
                playoffsStatsGoalies.shotsAgainst.push(data.stat.shotsAgainst);
                playoffsStatsGoalies.goalsAgainst.push(data.stat.goalsAgainst);
                playoffsStatsGoalies.goalAgainstAverage.push(+(data.stat.goalAgainstAverage.toFixed(2)));
                playoffsStatsGoalies.saves.push(data.stat.saves);
                playoffsStatsGoalies.savePercentage.push(+(data.stat.savePercentage.toFixed(3)));
                playoffsStatsGoalies.shutouts.push(data.stat.shutouts);

                playoffsStatsGoalies.evenSaves.push(data.stat.evenSaves);
                playoffsStatsGoalies.powerPlaySaves.push(data.stat.powerPlaySaves);
                playoffsStatsGoalies.timeOnIce.push(data.stat.timeOnIce);
                playoffsStatsGoalies.evenShots.push(data.stat.evenShots);
                playoffsStatsGoalies.evenStrengthSavePercentage.push(data.stat.evenStrengthSavePercentage);
                playoffsStatsGoalies.powerPlaySavePercentage.push(data.stat.powerPlaySavePercentage);
                playoffsStatsGoalies.powerPlaySaves.push(data.stat.powerPlaySaves);
                playoffsStatsGoalies.powerPlayShots.push(data.stat.powerPlayShots);
                playoffsStatsGoalies.shortHandedSavePercentage.push(data.stat.shortHandedSavePercentage);
                playoffsStatsGoalies.shortHandedSaves.push(data.stat.shortHandedSaves);
                playoffsStatsGoalies.shortHandedShots.push(data.stat.shortHandedShots);
                playoffsStatsGoalies.minutes.push(data.stat.min);

                playoffsTotalGamesGoalies += data.stat.games;
                playoffsTotalGamesStartedGoalies += data.stat.gamesStarted;
                playoffsTotalWinsGoalies += data.stat.wins;
                playoffsTotalLossesGoalies += data.stat.losses;
                if (data.stat.ties !== undefined) playoffsTotalTiesGoalies += data.stat.ties;              
                if (data.stat.ot !== undefined) playoffsTotalOTGoalies += data.stat.ot;                
                playoffsTotalShotsAgainstGoalies += data.stat.shotsAgainst;
                playoffsTotalGoalsAgainstGoalies += data.stat.goalsAgainst;
                playoffsTotalGoalAgainstAverageGoalies += data.stat.goalAgainstAverage;
                playoffsTotalSavesGoalies += data.stat.saves;
                playoffsTotalSavePercentageGoalies += data.stat.savePercentage;
                playoffsTotalShutoutsGoalies += data.stat.shutouts;
            } else {
                playoffsStatsOffenseAndDefence.games.push(data.stat.games);
                playoffsStatsOffenseAndDefence.goals.push(data.stat.goals);
                playoffsStatsOffenseAndDefence.assists.push(data.stat.assists);
                playoffsStatsOffenseAndDefence.points.push(data.stat.points);
                playoffsStatsOffenseAndDefence.plusMinus.push(data.stat.plusMinus);
                playoffsStatsOffenseAndDefence.penaltyMinutes.push(data.stat.pim);
                playoffsStatsOffenseAndDefence.powerPlayGoals.push(data.stat.powerPlayGoals);
                playoffsStatsOffenseAndDefence.powerPlayPoints.push(data.stat.powerPlayPoints);
                playoffsStatsOffenseAndDefence.shortHandedGoals.push(data.stat.shortHandedGoals);
                playoffsStatsOffenseAndDefence.shortHandedPoints.push(data.stat.shortHandedPoints);
                playoffsStatsOffenseAndDefence.gameWinningGoals.push(data.stat.gameWinningGoals);
                playoffsStatsOffenseAndDefence.overTimeGoals.push(data.stat.overTimeGoals);
                playoffsStatsOffenseAndDefence.shots.push(data.stat.shots);
                playoffsStatsOffenseAndDefence.shotPercentage.push(data.stat.shotPct);
                playoffsStatsOffenseAndDefence.faceOffPercentage.push(data.stat.faceOffPct);

                playoffsStatsOffenseAndDefence.blocked.push(data.stat.blocked);
                playoffsStatsOffenseAndDefence.hits.push(data.stat.hits);
                playoffsStatsOffenseAndDefence.timeOnIce.push(data.stat.timeOnIce);
                playoffsStatsOffenseAndDefence.evenTimeOnIce.push(data.stat.evenTimeOnIce);
                playoffsStatsOffenseAndDefence.powerPlayTimeOnIce.push(data.stat.powerPlayTimeOnIce);
                playoffsStatsOffenseAndDefence.shortHandedTimeOnIce.push(data.stat.shortHandedTimeOnIce);
                playoffsStatsOffenseAndDefence.shifts.push(data.stat.shifts);     
                
                playoffsTotalGamesOffenceAndDefence += data.stat.games;
                playoffsTotalGoalsOffenseAndDefence += data.stat.goals;
                playoffsTotalAssistsOffenseAndDefence += data.stat.assists;
                playoffsTotalPointsOffenseAndDefence += data.stat.points;
                playoffsTotalPenaltyMinuteOffenseAndDefence += data.stat.pim;
                playoffsTotalPlusMinusOffenseAndDefence += data.stat.plusMinus;
                playoffsTotalPowerPlayGoalsOffenseAndDefence += data.stat.powerPlayGoals;
                playoffsTotalPowerPlayPointsOffenseAndDefence += data.stat.powerPlayPoints;
                playoffsTotalShortHandedGoalsOffenseAndDefence += data.stat.shortHandedGoals;
                playoffsTotalShortHandedPointsOffenseAndDefence += data.stat.shortHandedPoints;
                playoffsTotalOverTimeGoalsOffenseAndDefence += data.stat.gameWinningGoals;
                playoffsTotalGameWinningGoalsOffenseAndDefence += data.stat.overTimeGoals;
                playoffsTotalShotPercentageOffenseAndDefence += data.stat.shotPct;
                playoffsTotalShotsOffenseAndDefence += data.stat.shots;
                if (data.stat.faceOffPct === undefined) {
                    playoffsCountUndefinedFaceOffPercentageOffenceAndDefence++;
                } else {
                    playoffsTotalFaceOffPercentageOffenseAndDefence += data.stat.faceOffPct;
                }
            }
        }
    })

    if (playoffsTotalTiesGoalies === 0) playoffsTotalTiesGoalies = undefined;
    if (playoffsTotalOTGoalies === 0) playoffsTotalOTGoalies = undefined;

    let playoffsAverageTotalGoalAgainstAverageGoalies = +((playoffsTotalGoalAgainstAverageGoalies / playoffsSeasons.length).toFixed(2));
    let playoffsAverageTotalSavePercentageGoalies = +((playoffsTotalSavePercentageGoalies / playoffsSeasons.length).toFixed(2));

    playoffsTotalStatsGoalies.push(
        playoffsTotalGamesGoalies, 
        playoffsTotalGamesStartedGoalies, 
        playoffsTotalWinsGoalies, 
        playoffsTotalLossesGoalies, 
        playoffsTotalTiesGoalies, 
        playoffsTotalOTGoalies, 
        playoffsTotalShotsAgainstGoalies, 
        playoffsTotalGoalsAgainstGoalies, 
        playoffsAverageTotalGoalAgainstAverageGoalies,
        playoffsTotalSavesGoalies, 
        playoffsAverageTotalSavePercentageGoalies,
        playoffsTotalShutoutsGoalies
    );

    let playoffsAverageTotalShotPercentageOffenseAndDefence = +((playoffsTotalShotPercentageOffenseAndDefence / playoffsSeasons.length).toFixed(2));

    let playoffsAverageTotalFaceOffPercentageOffenseAndDefence = 0;

    if (playoffsCountUndefinedFaceOffPercentageOffenceAndDefence > 0) {
        playoffsAverageTotalFaceOffPercentageOffenseAndDefence = undefined;
    } else {
        playoffsAverageTotalFaceOffPercentageOffenseAndDefence = +((playoffsTotalFaceOffPercentageOffenseAndDefence / playoffsSeasons.length).toFixed(2));
    }

    playoffsTotalStatsOffenseAndDefence.push(
        playoffsTotalGamesOffenceAndDefence, 
        playoffsTotalGoalsOffenseAndDefence, 
        playoffsTotalAssistsOffenseAndDefence, 
        playoffsTotalPointsOffenseAndDefence, 
        playoffsTotalPlusMinusOffenseAndDefence, 
        playoffsTotalPenaltyMinuteOffenseAndDefence,
        playoffsTotalPowerPlayGoalsOffenseAndDefence, 
        playoffsTotalPowerPlayPointsOffenseAndDefence, 
        playoffsTotalShortHandedGoalsOffenseAndDefence, 
        playoffsTotalShortHandedPointsOffenseAndDefence, 
        playoffsTotalOverTimeGoalsOffenseAndDefence, 
        playoffsTotalGameWinningGoalsOffenseAndDefence, 
        playoffsTotalShotsOffenseAndDefence, 
        playoffsAverageTotalShotPercentageOffenseAndDefence,
        playoffsAverageTotalFaceOffPercentageOffenseAndDefence
    );

    let careerSeasons = [];
    let careerTeams = [];

    let careerStatsOffenseAndDefence = {
        games: [],
        goals: [],
        assists: [],
        points: [],
        plusMinus: [],
        penaltyMinutes: [],
        powerPlayGoals: [],
        powerPlayPoints: [],
        shortHandedGoals: [],
        shortHandedPoints: [],
        gameWinningGoals: [],
        overTimeGoals: [],
        shots: [],
        shotPercentage: [],
        faceOffPercentage: [],
        blocked: [],
        hits: [],
        timeOnIce: [],
        evenTimeOnIce: [],
        powerPlayTimeOnIce: [],
        shortHandedTimeOnIce: [],
        shifts: []
    }

    let careerTotalGamesOffenceAndDefence = 0;
    let careerTotalGoalsOffenseAndDefence = 0; 
    let careerTotalAssistsOffenseAndDefence = 0; 
    let careerTotalPointsOffenseAndDefence = 0; 
    let careerTotalPenaltyMinuteOffenseAndDefence = 0; 
    let careerTotalPlusMinusOffenseAndDefence = 0; 
    let careerTotalPowerPlayGoalsOffenseAndDefence = 0; 
    let careerTotalPowerPlayPointsOffenseAndDefence = 0; 
    let careerTotalShortHandedGoalsOffenseAndDefence = 0; 
    let careerTotalShortHandedPointsOffenseAndDefence = 0; 
    let careerTotalOverTimeGoalsOffenseAndDefence = 0; 
    let careerTotalGameWinningGoalsOffenseAndDefence = 0; 
    let careerTotalShotPercentageOffenseAndDefence = 0; 
    let careerTotalShotsOffenseAndDefence = 0; 

    let careerCountUndefinedFaceOffPercentageOffenceAndDefence = 0;
    let careerTotalFaceOffPercentageOffenseAndDefence = 0;

    let careerTotalStatsOffenseAndDefence = [];

    let careerStatsGoalies = {
        games: [],
        gamesStarted: [],
        wins: [],
        losses: [],
        ties: [],
        ot: [],
        shotsAgainst: [],
        goalsAgainst: [],
        goalAgainstAverage: [],
        saves: [],
        savePercentage: [],
        shutouts: [],
        evenSaves: [],
        powerPlaySaves: [],
        savePercentage: [],
        timeOnIce: [],
        evenShots: [],
        evenStrengthSavePercentage: [],
        powerPlaySavePercentage: [],
        powerPlaySaves: [],
        powerPlayShots: [],
        shortHandedSavePercentage: [],
        shortHandedSaves: [],
        shortHandedShots: [],
        minutes: []
    }

    let careerTotalGamesGoalies = 0;
    let careerTotalGamesStartedGoalies = 0; 
    let careerTotalWinsGoalies = 0; 
    let careerTotalLossesGoalies = 0; 
    let careerTotalTiesGoalies = 0; 
    let careerTotalOTGoalies = 0; 
    let careerTotalShotsAgainstGoalies = 0; 
    let careerTotalGoalsAgainstGoalies = 0; 
    let careerTotalGoalAgainstAverageGoalies = 0; 
    let careerTotalSavesGoalies = 0; 
    let careerTotalSavePercentageGoalies = 0; 
    let careerTotalShutoutsGoalies = 0;

    let careerTotalStatsGoalies = [];
    
    yearByYearCareerStats.forEach(data => {
        if (data.league.name === "National Hockey League") {
            careerSeasons.push(data.season);
            careerTeams.push(data.team.name);
    
            if (player.primaryPosition.code === "G") {
                careerStatsGoalies.games.push(data.stat.games);
                careerStatsGoalies.gamesStarted.push(data.stat.gamesStarted);
                careerStatsGoalies.wins.push(data.stat.wins);
                careerStatsGoalies.losses.push(data.stat.losses);
                careerStatsGoalies.ties.push(data.stat.ties);
                careerStatsGoalies.ot.push(data.stat.ot);
                careerStatsGoalies.shotsAgainst.push(data.stat.shotsAgainst);
                careerStatsGoalies.goalsAgainst.push(data.stat.goalsAgainst);
                careerStatsGoalies.goalAgainstAverage.push(+(data.stat.goalAgainstAverage.toFixed(2)));
                careerStatsGoalies.saves.push(data.stat.saves);
                careerStatsGoalies.savePercentage.push(+(data.stat.savePercentage.toFixed(3)));
                careerStatsGoalies.shutouts.push(data.stat.shutouts);

                careerStatsGoalies.evenSaves.push(data.stat.evenSaves);
                careerStatsGoalies.powerPlaySaves.push(data.stat.powerPlaySaves);
                careerStatsGoalies.timeOnIce.push(data.stat.timeOnIce);
                careerStatsGoalies.evenShots.push(data.stat.evenShots);
                careerStatsGoalies.evenStrengthSavePercentage.push(data.stat.evenStrengthSavePercentage);
                careerStatsGoalies.powerPlaySavePercentage.push(data.stat.powerPlaySavePercentage);
                careerStatsGoalies.powerPlaySaves.push(data.stat.powerPlaySaves);
                careerStatsGoalies.powerPlayShots.push(data.stat.powerPlayShots);
                careerStatsGoalies.shortHandedSavePercentage.push(data.stat.shortHandedSavePercentage);
                careerStatsGoalies.shortHandedSaves.push(data.stat.shortHandedSaves);
                careerStatsGoalies.shortHandedShots.push(data.stat.shortHandedShots);
                careerStatsGoalies.minutes.push(data.stat.min);

                careerTotalGamesGoalies += data.stat.games;
                careerTotalGamesStartedGoalies += data.stat.gamesStarted;
                careerTotalWinsGoalies += data.stat.wins;
                careerTotalLossesGoalies += data.stat.losses;
                if (data.stat.ties !== undefined) careerTotalTiesGoalies += data.stat.ties;              
                if (data.stat.ot !== undefined) careerTotalOTGoalies += data.stat.ot;                
                careerTotalShotsAgainstGoalies += data.stat.shotsAgainst;
                careerTotalGoalsAgainstGoalies += data.stat.goalsAgainst;
                careerTotalGoalAgainstAverageGoalies += data.stat.goalAgainstAverage;
                careerTotalSavesGoalies += data.stat.saves;
                careerTotalSavePercentageGoalies += data.stat.savePercentage;
                careerTotalShutoutsGoalies += data.stat.shutouts;
            } else {
                careerStatsOffenseAndDefence.games.push(data.stat.games);
                careerStatsOffenseAndDefence.goals.push(data.stat.goals);
                careerStatsOffenseAndDefence.assists.push(data.stat.assists);
                careerStatsOffenseAndDefence.points.push(data.stat.points);
                careerStatsOffenseAndDefence.plusMinus.push(data.stat.plusMinus);
                careerStatsOffenseAndDefence.penaltyMinutes.push(data.stat.pim);
                careerStatsOffenseAndDefence.powerPlayGoals.push(data.stat.powerPlayGoals);
                careerStatsOffenseAndDefence.powerPlayPoints.push(data.stat.powerPlayPoints);
                careerStatsOffenseAndDefence.shortHandedGoals.push(data.stat.shortHandedGoals);
                careerStatsOffenseAndDefence.shortHandedPoints.push(data.stat.shortHandedPoints);
                careerStatsOffenseAndDefence.gameWinningGoals.push(data.stat.gameWinningGoals);
                careerStatsOffenseAndDefence.overTimeGoals.push(data.stat.overTimeGoals);
                careerStatsOffenseAndDefence.shots.push(data.stat.shots);
                careerStatsOffenseAndDefence.shotPercentage.push(data.stat.shotPct);
                careerStatsOffenseAndDefence.faceOffPercentage.push(data.stat.faceOffPct);

                careerStatsOffenseAndDefence.blocked.push(data.stat.blocked);
                careerStatsOffenseAndDefence.hits.push(data.stat.hits);
                careerStatsOffenseAndDefence.timeOnIce.push(data.stat.timeOnIce);
                careerStatsOffenseAndDefence.evenTimeOnIce.push(data.stat.evenTimeOnIce);
                careerStatsOffenseAndDefence.powerPlayTimeOnIce.push(data.stat.powerPlayTimeOnIce);
                careerStatsOffenseAndDefence.shortHandedTimeOnIce.push(data.stat.shortHandedTimeOnIce);
                careerStatsOffenseAndDefence.shifts.push(data.stat.shifts);   

                careerTotalGamesOffenceAndDefence += data.stat.games;
                careerTotalGoalsOffenseAndDefence += data.stat.goals;
                careerTotalAssistsOffenseAndDefence += data.stat.assists;
                careerTotalPointsOffenseAndDefence += data.stat.points;
                careerTotalPenaltyMinuteOffenseAndDefence += data.stat.pim;
                careerTotalPlusMinusOffenseAndDefence += data.stat.plusMinus;
                careerTotalPowerPlayGoalsOffenseAndDefence += data.stat.powerPlayGoals;
                careerTotalPowerPlayPointsOffenseAndDefence += data.stat.powerPlayPoints;
                careerTotalShortHandedGoalsOffenseAndDefence += data.stat.shortHandedGoals;
                careerTotalShortHandedPointsOffenseAndDefence += data.stat.shortHandedPoints;
                careerTotalOverTimeGoalsOffenseAndDefence += data.stat.gameWinningGoals;
                careerTotalGameWinningGoalsOffenseAndDefence += data.stat.overTimeGoals;
                careerTotalShotPercentageOffenseAndDefence += data.stat.shotPct;
                careerTotalShotsOffenseAndDefence += data.stat.shots;
                if (data.stat.faceOffPct === undefined) {
                    careerCountUndefinedFaceOffPercentageOffenceAndDefence++;
                } else {
                    careerTotalFaceOffPercentageOffenseAndDefence += data.stat.faceOffPct;
                }
            }
        }
    })

    if (careerTotalTiesGoalies === 0) careerTotalTiesGoalies = undefined;
    if (careerTotalOTGoalies === 0) careerTotalOTGoalies = undefined;

    let careerAverageTotalGoalAgainstAverageGoalies = +((careerTotalGoalAgainstAverageGoalies / careerSeasons.length).toFixed(2));
    let careerAverageTotalSavePercentageGoalies = +((careerTotalSavePercentageGoalies / careerSeasons.length).toFixed(2));

    careerTotalStatsGoalies.push(
        careerTotalGamesGoalies, 
        careerTotalGamesStartedGoalies, 
        careerTotalWinsGoalies, 
        careerTotalLossesGoalies, 
        careerTotalTiesGoalies, 
        careerTotalOTGoalies, 
        careerTotalShotsAgainstGoalies, 
        careerTotalGoalsAgainstGoalies, 
        careerAverageTotalGoalAgainstAverageGoalies,
        careerTotalSavesGoalies, 
        careerAverageTotalSavePercentageGoalies, 
        careerTotalShutoutsGoalies
    );

    let careerAverageTotalShotPercentageOffenseAndDefence = +((careerTotalShotPercentageOffenseAndDefence / careerSeasons.length).toFixed(2));

    let careerAverageTotalFaceOffPercentageOffenseAndDefence = 0;

    if (careerCountUndefinedFaceOffPercentageOffenceAndDefence > 0) {
        careerAverageTotalFaceOffPercentageOffenseAndDefence = undefined;
    } else {
        careerAverageTotalFaceOffPercentageOffenseAndDefence = +((careerTotalFaceOffPercentageOffenseAndDefence / careerSeasons.length).toFixed(2));
    }

    careerTotalStatsOffenseAndDefence.push(
        careerTotalGamesOffenceAndDefence, 
        careerTotalGoalsOffenseAndDefence, 
        careerTotalAssistsOffenseAndDefence, 
        careerTotalPointsOffenseAndDefence, 
        careerTotalPlusMinusOffenseAndDefence, 
        careerTotalPenaltyMinuteOffenseAndDefence, 
        careerTotalPowerPlayGoalsOffenseAndDefence, 
        careerTotalPowerPlayPointsOffenseAndDefence, 
        careerTotalShortHandedGoalsOffenseAndDefence, 
        careerTotalShortHandedPointsOffenseAndDefence, 
        careerTotalOverTimeGoalsOffenseAndDefence, 
        careerTotalGameWinningGoalsOffenseAndDefence, 
        careerTotalShotsOffenseAndDefence, 
        careerAverageTotalShotPercentageOffenseAndDefence, 
        careerAverageTotalFaceOffPercentageOffenseAndDefence
    );
    
    return {
        careerSeasons, 
        careerTeams,
        careerStatsOffenseAndDefence,
        careerStatsGoalies,
        careerTotalStatsGoalies,
        careerTotalStatsOffenseAndDefence,
        playoffsSeasons,
        playoffsTeams,
        playoffsStatsOffenseAndDefence,
        playoffsStatsGoalies,
        playoffsTotalStatsGoalies,
        playoffsTotalStatsOffenseAndDefence
    }
}