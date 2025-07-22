// @ts-nocheck

const plotChartBaseConfig = {
    chart: {
        type: 'boxplot',
        inverted: true,
        backgroundColor: 'transparent',
        style: { overflow: 'visible' }
    },
    title: null,
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false,
        maxPadding: 0,
        minPadding: 0
    },
    plotOptions: {
        boxplot: {
            // boxDashStyle: 'Dash',
            fillColor: '#FFFFFF',
            lineWidth: 1,
            medianColor: 'rgba(33, 37, 41, 0.75)',
            // medianDashStyle: 'ShortDot',
            medianWidth: 2,
            stemColor: 'rgba(33, 37, 41, 0.75)',
            stemDashStyle: 'ShortDot',
            // stemWidth: 1,
            whiskerColor: 'rgba(33, 37, 41, 0.75)',
            whiskerLength: '60%',
            whiskerWidth: 2,
            color    : "rgba(33, 37, 41, 0.75)",
            animation: false,
        }
    },
    series: [],
    credits: { enabled: false },
    legend: { enabled: false },
    tooltip: {
        shared: true,
        useHTML: true,
        outside: true,
        animation: false,
        hideDelay: 0,
        padding: 20,
        style: {
            fontSize: '14px',
            fontFamily: 'inherit',
            color: 'inherit',
        },
        formatter () {
            return `<b class="text-success">Distribution</b><hr style="margin:4px 0;"/>
            <table><tbody>
            <tr><td style="text-align:right">Min:&nbsp;</td><td style="text-align:left">${this.low}</td></tr>
            <tr><td style="text-align:right">Q1:&nbsp;</td><td style="text-align:left">${this.q1}</td></tr>
            <tr><td style="text-align:right">Median:&nbsp;</td><td style="text-align:left"><b>${this.median}</b></td></tr>
            <tr><td style="text-align:right">Q3:&nbsp;</td><td style="text-align:left">${this.q3}</td></tr>
            <tr><td style="text-align:right">Max:&nbsp;</td><td style="text-align:left">${this.high}</td></tr>
            </tbody>
            </table>`;
        }
    },
};

function populationPlotChart(container, options) {
    const cfg = {
        ...plotChartBaseConfig,
        chart: {
            ...plotChartBaseConfig.chart,
            spacing: [2, 2, 2, 2],
            height: options.height || 54,
            width: options.width || 200
        },
        yAxis: {
            ...plotChartBaseConfig.yAxis,
            min: options.data[0],
            max: options.data[4],
        },
        series: [
            {
                type: 'boxplot',
                data: [options.data],
            }
        ]
    };
    Highcharts.chart(container, cfg);
}

function plotChart(container, options, value) {

    const cfg = {
        ...plotChartBaseConfig,
        chart: {
            ...plotChartBaseConfig.chart,
            spacing: [0, 2, 4, 2],
            height: options.height || 54,
            // width: options.width || 200
        },
        yAxis: {
            ...plotChartBaseConfig.yAxis,
            min: options.data[0],
            max: options.data[4],
        },
        series: [
            {
                type: 'boxplot',
                data: [options.data]
            },
            {
                name: 'Patient',
                type: 'scatter',
                data: [[0, value]],
                marker: {
                    enabled: false // hide the dot
                },
                animation: false,
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    formatter: function () {
                        return `<div style="margin-top:1px;line-height:20px">
                        <span style="color:red;font-size: 18px;vertical-align: top">🔺</span>
                        </div>`;
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    y: 0
                },
                enableMouseTracking: false
            }
        ],
        tooltip: {
            ...plotChartBaseConfig.tooltip,
            formatter: () => {
                const bp = options.data;
                return `<b class="text-success">Distribution</b><hr style="margin:4px 0;"/>
                <table><tbody>
                <tr><td style="text-align:right">Min:&nbsp;</td><td style="text-align:left">${bp[0]}</td></tr>
                <tr><td style="text-align:right">Q1:&nbsp;</td><td style="text-align:left">${bp[1]}</td></tr>
                <tr><td style="text-align:right">Median:&nbsp;</td><td style="text-align:left"><b>${bp[2]}</b></td></tr>
                <tr><td style="text-align:right">Q3:&nbsp;</td><td style="text-align:left">${bp[3]}</td></tr>
                <tr><td style="text-align:right">Max:&nbsp;</td><td style="text-align:left">${bp[4]}</td></tr>
                </tbody>
                </table>
                <br/>
                <b class="text-success">Patient Age at Dx</b><hr style="margin:4px 0;"/>${Math.round(value * 12)} months`;
            }
        }
    };

    Highcharts.chart(container, cfg);
}

function formatDOB(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function buildPatientDemographics(patient) {
    return (
        `<span class="text-muted">Gender: </span>${patient.gender}
        <span class="text-muted">&nbsp;&nbsp;&nbsp;DOB: </span>${formatDOB(patient.dob)}
        <span class="text-muted">&nbsp;&nbsp;&nbsp;MRN: </span>${patient.mrn}`
    );
}

function buildPatientHeader(patient) {
    return (
        `<div class="fs-1 text-primary">
            <i class="bi bi-person-circle"></i>
        </div>
        <div>
            <div class="fw-bold fs-4">${patient.name}</div>
            <div class="text-muted">${buildPatientDemographics(patient)}</div>
        </div>
    `);
}

function renderPatientHeader(patient) {
    $('#patient-header').html(`
        <div class="text-success" style="font-size:60px;line-height:1.2">
            <i class="bi bi-person-circle"></i>
        </div>
        <div>
            <div class="fw-bold fs-4">${patient.name}</div>
            <div class="text  -success">${buildPatientDemographics(patient)}</div>
        </div>
    `);
    $('#patient-description').html(`<p class="small text-muted mt-2">${patient.description}</p>`);
}

function renderPopulationHeader(data) {
    $(".chart-screenshot").attr("src", data.screenshot.src).parent().attr("href", data.screenshot.href)
    const $tbody = $("#population-table-body").empty()

    data.tableRows.forEach(row => {
        $(
            `<tr>
                <td class="text-start fw-semibold">${row[1]}</td>
                <td class="text-center text-muted">${row[2]}</td>
                <td class="text-start hc-container-small" data-boxplot="${row[3].boxplot.data.join(",")}"></td>
                <td class="text-start text-muted px-2" style="width:4em"><span class="badge bg-success d-block">${row[3].boxplot.data[2]}</span></td>
            </tr>`
        ).appendTo($tbody)
    })
}
