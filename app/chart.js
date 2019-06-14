import * as d3 from 'd3';
import * as c3 from 'c3';
import { isNull } from 'util';

class Chart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render() {
        var self = this;

        var padding = {
            top: 20,
            right: 40,
            bottom: 20,
            left: 40,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                xs: {
                    'Acres': 'x'
                },
                columns: [
                    ['x', 1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
                    ['Acres', 132169.9,1121900.1,1441435.4,1634486.8,1739175.5,1758906.1,1807377.7,1836818.3,1836818.3,1834411.2,1778656.3,1558339.8,1080963.9,1160941.8,1459060.8,1596008.4,1669378.9,1714186.2,1765095.8,1762892.1,1796541.3,1829367.4,1773941.75,1694723.18,1641930.4,1635138.27,1555675.44,1380241.84,1299533.29,1151306.04,1153316.87,1128140.81,1137161.95,null,isNull]
                ],
                type: 'line',
                line: {
                    connectNull: true
                }
            },
            legend: {
                show: false
            },
            line: {
                connectNull: true
            },
            point: {
                show: true,
                r: function(d) {
                    if (d.x == 2018) {
                        return 6;
                    } else {
                        return 3;
                    }
                }
            },
            color: {
                pattern: ['#9e003f']
            },
            axis: {
                // rotated: true,
                y: {
                    max: 2000000,
                    min: 0, 
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 4,
                        values: [0, 500000, 1000000, 1500000, 2000000],
                        format: d3.format(',.2s')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    tick: {
                        // rotate: -75,
                        multiline: false,
                        values: [1986, 1993, 2000, 2007, 2014, 2020]
                    },
                    // height: 40
                }
            },
            grid: {
                focus: {
                    show: false
                },
                x: {
                    lines: [{
                        value: 2007,
                        text: '',
                        position: 'start',
                        class: 'powerline'
                    }]

                }
            },
            tooltip: {
                contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
                    return '<div class="chart-tooltip color-bg-red-dark">' + d[0].x + ': <span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span></div>';
                }
            }
        });

    }
}

export {
    Chart as
    default
}