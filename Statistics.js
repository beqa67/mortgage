//../src/Chart.js
import {
    Line,
    mixins
} from 'vue-chartjs'
const decimals = 1;
export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData'],
    data() {
        return {
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                                return  value.toFixed(decimals) + '%';
                            },
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                       }
                    }
                }
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }

}