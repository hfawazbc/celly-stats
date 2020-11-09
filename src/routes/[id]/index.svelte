<script context="module">
	export async function preload({ params }) {
        const { id } = params;

        const responseOne = await this.fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`);
        const dataSetOne = await responseOne.json();

        const responseTwo = await this.fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYear`);
        const dataSetTwo = await responseTwo.json();

        const responseThree = await this.fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYearPlayoffs`);
        const dataSetThree = await responseThree.json();

        return { player: dataSetOne.people[0], yearByYearCareerStats: dataSetTwo.stats[0].splits, yearByYearPlayoffsStats: dataSetThree.stats[0].splits };
	}
</script>

<svelte:head>
    <meta name="keywords" content="{player.fullName}, {player.firstName}, {player.lastName}">
    <title>{player.fullName}</title>
</svelte:head>

<script>
    export let player;
    export let yearByYearCareerStats;
    export let yearByYearPlayoffsStats;

    import Chart from '../../components/Chart.svelte';
    import Table from '../../components/Table.svelte';
    import Landing from '../../components/Landing.svelte';
    import { aggregateStatistics } from '../../data/stats';

    $: stats = aggregateStatistics(player, yearByYearCareerStats, yearByYearPlayoffsStats);

    const tableHeadersGoalies = ["Season", "Team", "GP", "GS", "W", "L", "T", "OT", "SA", "GA", "GAA", "S", "S%", "SO"];
    const tableHeadersOffenseAndDefence = ["Season", "Team", "GP", "G", "A", "P", "+/-", "PIM", "PPG", "PPP", "SHG", "SHP", "GWG", "OTG", "S", "S%", "FO%"];

    const colorOrangePrimary = '#FF9800';
    const colorOrangeSecondary = '#FFB74D';
    const colorBluePrimary = '#03A9F4';
    const colorBlueSecondary = '#4FC3F7';
</script>

<style>
    .stats-container {
        padding-top: 5vmin;
        padding-left: 5vmin;
        padding-right: 5vmin;
    }

    .sub-section-header {
        font-size: 2em;
    }

    .sub-section-header,
    .table-container,
    .chart-container {
        margin-bottom: 5vmin;
    }
</style>

<Landing {player}/>
<div class="stats-container">
    {#if player.primaryPosition.code === "G"}
        <section class="table-container">
            <h2 class="sub-section-header">Career Statistics</h2>
            <Table seasons={stats.careerSeasons} teams={stats.careerTeams} tableHeaders={tableHeadersGoalies} tableData={[
                stats.careerStatsGoalies.games,
                stats.careerStatsGoalies.gamesStarted,
                stats.careerStatsGoalies.wins,
                stats.careerStatsGoalies.losses,
                stats.careerStatsGoalies.ties,
                stats.careerStatsGoalies.ot,
                stats.careerStatsGoalies.shotsAgainst,
                stats.careerStatsGoalies.goalsAgainst,
                stats.careerStatsGoalies.goalAgainstAverage,
                stats.careerStatsGoalies.saves,
                stats.careerStatsGoalies.savePercentage,
                stats.careerStatsGoalies.shutouts
            ]} totals={stats.careerTotalStatsGoalies} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Career Goal Against Average</h2>
            <Chart type="bar" labels={stats.careerSeasons} datasets={[
                {
                    label: 'GAA',
                    data: stats.careerStatsGoalies.goalAgainstAverage,
                    backgroundColor: colorBluePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorBlueSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Career Save Percentage</h2>
            <Chart type="bar" labels={stats.careerSeasons} datasets={[
                {
                    label: 'S%',
                    data: stats.careerStatsGoalies.savePercentage,
                    backgroundColor: colorBluePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorBlueSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Career Shutouts</h2>
            <Chart type="bar" labels={stats.careerSeasons} datasets={[
                {
                    label: 'SO',
                    data: stats.careerStatsGoalies.shutouts,
                    backgroundColor: colorBluePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorBlueSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="table-container">
            <h1 class="sub-section-header">Playoffs Statistics</h1>
            <Table seasons={stats.playoffsSeasons} teams={stats.playoffsTeams} tableHeaders={tableHeadersGoalies} tableData={[
                stats.playoffsStatsGoalies.games,
                stats.playoffsStatsGoalies.gamesStarted,
                stats.playoffsStatsGoalies.wins,
                stats.playoffsStatsGoalies.losses,
                stats.playoffsStatsGoalies.ties,
                stats.playoffsStatsGoalies.ot,
                stats.playoffsStatsGoalies.shotsAgainst,
                stats.playoffsStatsGoalies.goalsAgainst,
                stats.playoffsStatsGoalies.goalAgainstAverage,
                stats.playoffsStatsGoalies.saves,
                stats.playoffsStatsGoalies.savePercentage,
                stats.playoffsStatsGoalies.shutouts
            ]} totals={stats.playoffsTotalStatsGoalies} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Playoffs Goal Against Average</h2>
            <Chart type="bar" labels={stats.playoffsSeasons} datasets={[
                {
                    label: 'GAA',
                    data: stats.playoffsStatsGoalies.goalAgainstAverage,
                    backgroundColor: colorOrangePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorOrangeSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Playoffs Save Percentage</h2>
            <Chart type="bar" labels={stats.playoffsSeasons} datasets={[
                {
                    label: 'S%',
                    data: stats.playoffsStatsGoalies.savePercentage,
                    backgroundColor: colorOrangePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorOrangeSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Playoffs Shutouts</h2>
            <Chart type="bar" labels={stats.playoffsSeasons} datasets={[
                {
                    label: 'SO',
                    data: stats.playoffsStatsGoalies.shutouts,
                    backgroundColor: colorOrangePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorOrangeSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
    {:else}
        <section class="table-container">
            <h2 class="sub-section-header">Career Statistics</h2>
            <Table seasons={stats.careerSeasons} teams={stats.careerTeams} tableHeaders={tableHeadersOffenseAndDefence} tableData={[
                stats.careerStatsOffenseAndDefence.games,
                stats.careerStatsOffenseAndDefence.goals,
                stats.careerStatsOffenseAndDefence.assists,
                stats.careerStatsOffenseAndDefence.points,
                stats.careerStatsOffenseAndDefence.plusMinus,
                stats.careerStatsOffenseAndDefence.penaltyMinutes,
                stats.careerStatsOffenseAndDefence.powerPlayGoals,
                stats.careerStatsOffenseAndDefence.powerPlayPoints,
                stats.careerStatsOffenseAndDefence.shortHandedGoals,
                stats.careerStatsOffenseAndDefence.shortHandedPoints,
                stats.careerStatsOffenseAndDefence.gameWinningGoals,
                stats.careerStatsOffenseAndDefence.overTimeGoals,
                stats.careerStatsOffenseAndDefence.shots,
                stats.careerStatsOffenseAndDefence.shotPercentage,
                stats.careerStatsOffenseAndDefence.faceOffPercentage
            ]} totals={stats.careerTotalStatsOffenseAndDefence} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Career Goals</h2>
            <Chart type="bar" labels={stats.careerSeasons} datasets={[
                {
                    label: 'G',
                    data: stats.careerStatsOffenseAndDefence.goals,
                    backgroundColor: colorBluePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorBlueSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Career Assists</h2>
            <Chart type="bar" labels={stats.careerSeasons} datasets={[
                {
                    label: 'A',
                    data: stats.careerStatsOffenseAndDefence.assists,
                    backgroundColor: colorBluePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorBlueSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Career Points</h2>
            <Chart type="bar" labels={stats.careerSeasons} datasets={[
                {
                    label: 'P',
                    data: stats.careerStatsOffenseAndDefence.points,
                    backgroundColor: colorBluePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorBlueSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="table-container">
            <h2 class="sub-section-header">Playoffs Statistics</h2>
            <Table seasons={stats.playoffsSeasons} teams={stats.playoffsTeams} tableHeaders={tableHeadersOffenseAndDefence} tableData={[
                stats.playoffsStatsOffenseAndDefence.games,
                stats.playoffsStatsOffenseAndDefence.goals,
                stats.playoffsStatsOffenseAndDefence.assists,
                stats.playoffsStatsOffenseAndDefence.points,
                stats.playoffsStatsOffenseAndDefence.plusMinus,
                stats.playoffsStatsOffenseAndDefence.penaltyMinutes,
                stats.playoffsStatsOffenseAndDefence.powerPlayGoals,
                stats.playoffsStatsOffenseAndDefence.powerPlayPoints,
                stats.playoffsStatsOffenseAndDefence.shortHandedGoals,
                stats.playoffsStatsOffenseAndDefence.shortHandedPoints,
                stats.playoffsStatsOffenseAndDefence.gameWinningGoals,
                stats.playoffsStatsOffenseAndDefence.overTimeGoals,
                stats.playoffsStatsOffenseAndDefence.shots,
                stats.playoffsStatsOffenseAndDefence.shotPercentage,
                stats.playoffsStatsOffenseAndDefence.faceOffPercentage
            ]} totals={stats.playoffsTotalStatsOffenseAndDefence} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Playoffs Goals</h2>
            <Chart type="bar" labels={stats.playoffsSeasons} datasets={[
                {
                    label: 'G',
                    data: stats.playoffsStatsOffenseAndDefence.goals,
                    backgroundColor: colorOrangePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorOrangeSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Playoffs Assists</h2>
            <Chart type="bar" labels={stats.playoffsSeasons} datasets={[
                {
                    label: 'A',
                    data: stats.playoffsStatsOffenseAndDefence.assists,
                    backgroundColor: colorOrangePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorOrangeSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
        <section class="chart-container">
            <h2 class="sub-section-header">Playoffs Points</h2>
            <Chart type="bar" labels={stats.playoffsSeasons} datasets={[
                {
                    label: 'P',
                    data: stats.playoffsStatsOffenseAndDefence.points,
                    backgroundColor: colorOrangePrimary,
                    borderColor: 'none',
                    borderWidth: 0,
                    hoverBackgroundColor: colorOrangeSecondary,
                    hoverBorderColor: 'none',
                    hoverBorderWidth: 0,
                    maxBarThickness: 100
                }
            ]} />
        </section>
    {/if}
</div>