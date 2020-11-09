<script>
    import Chart from 'chart.js';

    export let type;
    export let labels;
    export let datasets;

    let chartCanvas;
    let chart;

    const drawChart = (chartCanvas) => {
        if (chart) chart.destroy();

        Chart.defaults.global.defaultFontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
        Chart.defaults.global.defaultFontColor = 'black';

        chart = new Chart(chartCanvas.getContext('2d'), {
            type,
            data: {
                labels,
                datasets
            },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    enabled: true,
                    cornerRadius: 0,
                    bodyAlign: 'center'
                },
                hover: {
                    mode: 'nearest'
                },
                animation: {
                    easing: 'easeOutQuart',
                    duration: 1000
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    }

    $: if (chartCanvas) drawChart(chartCanvas, type, labels, datasets);
</script>

<style>
    .chart-container {
        width: 100%;
        height: 50vh;
    }
</style>

<div class="chart-container">
    <canvas id="chart" bind:this={chartCanvas}></canvas>
</div>