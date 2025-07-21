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
            medianColor: '#888888',
            // medianDashStyle: 'ShortDot',
            medianWidth: 2,
            stemColor: '#888888',
            stemDashStyle: 'ShortDash',
            // stemWidth: 1,
            whiskerColor: '#888888',
            whiskerLength: '60%',
            whiskerWidth: 2,
            color    : "#888888",
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
        style: {
            fontSize: '16px',
            fontFamily: 'inherit',
            color: 'inherit'
        },
        formatter () {
            return `<b>Distribution</b><br/>
            Min: ${this.low}<br/>
            Q1: ${this.q1}<br/>
            Median: <b>${this.median}</b><br/>
            Q3: ${this.q3}<br/>
            Max: ${this.high}`;
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
            }
        ]
    };

    if (value || value === 0) {
        cfg.series.push({
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
        });

        cfg.tooltip.formatter = () => {
            const bp = options.data;
            return `<b>Distribution:</b><br/>
            Min: ${bp[0]}<br/>
            Q1: ${bp[1]}<br/>
            Median: ${bp[2]}<br/>
            Q3: ${bp[3]}<br/>
            Max: ${bp[4]}<br/>
            <hr style="margin:4px 0;">
            <b>Patient value:</b> ${value}`;
        };
    }

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
                <td class="text-start text-muted">${row[0]}</td>
                <td class="text-start text-success fw-semibold">${row[1]}</td>
                <td class="text-center text-muted">${row[2]}</td>
                <td class="text-start hc-container-small" data-boxplot="${row[3].boxplot.data.join(",")}"></td>
                <td class="text-start text-muted" style="width:3em"><span class="badge bg-success d-block">${row[3].boxplot.data[2]}</span></td>
            </tr>`
        ).appendTo($tbody)
    })
}
