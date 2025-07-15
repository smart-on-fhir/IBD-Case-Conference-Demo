// Chart format - array of 5 numbers:
// [
//     min,      // sample minimum
//     Q1,       // lower quartile
//     median,   // median
//     Q3,       // upper quartile
//     max       // sample maximum
// ]
const patients = [
    {
        name: "Alex Johnson",
        gender: "Male",
        dob: "2010-01-05",
        mrn: "12345678",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod est, sit amet commodo sem commodo sed. Duis gravida sem ac nunc dignissim pretium. Etiam pretium purus quis tincidunt vulputate. Praesent hendrerit lacinia scelerisque. Nam metus mi, dapibus quis fringilla eget, finibus eget lorem. Suspendisse potenti. Aliquam porta porta massa. Etiam ac convallis enim. Nunc laoreet lacus justo, eget varius purus lobortis nec. Donec in urna diam. Nulla quis egestas neque.",

        // Not sure what this will represent but it is used to render the red
        // marker showing how the patient compares with the population
        value: 14.7,
        populationData: [
            {
                label: "IBD Subtype is <b>UC (Ulcerative Colitis)</b>",
                responder: '<a href="#">30%</a>',
                nonResponder: '<a href="#"><b>70%</b></a>'
            },
            {
                label: "UC Location is <b>E4: pancolitis (proximal to hepatic flexure)</b>",
                responder: "40%",
                nonResponder: "<b>60%</b>"
            },
            {
                label: "UC Severity: <b>S1: ever severe</b> (PUCAI >/= 65)",
                responder: "<b>75%</b>",
                nonResponder: "25%"
            },
            {
                label: "Stricturing present",
                responder: "70%",
                nonResponder: "30%"
            },
            {
                label: "Age at Dx of 12 months",
                responder   : [5, 10, 12, 16, 28], // [low, q1, median, q3, high]
                nonResponder: [8,  9, 11, 18, 20], // [low, q1, median, q3, high]
            },
            {
                label: "Sex of Male",
                responder: "30%",
                nonResponder: "70%"
            },
            {
                label: "Dx to Anti-TNF initiation of 2 months",
                responder   : [5, 10, 19, 35, 38], // [low, q1, median, q3, high]
                nonResponder: [8,  9, 11, 14, 20], // [low, q1, median, q3, high]
            },
            {
                label: "Cause of disease monogenic",
                responder: "70%",
                nonResponder: "30%"
            }
        ]
    },
    {
        name: "Terry Hunt",
        gender: "Male",
        dob: "2010-01-05",
        mrn: "23456789",
        description: "Cras tincidunt orci lectus, vitae euismod urna fermentum ut. Donec auctor condimentum urna, sed pharetra leo. Vestibulum blandit risus ut pellentesque ullamcorper. Morbi sit amet eros interdum, congue nibh in, semper velit. Donec vitae arcu id nisl pulvinar porta nec eget libero. Sed in nibh ut mauris interdum bibendum. In bibendum ultricies lorem. Integer viverra turpis ut libero egestas, non posuere augue tristique. In nec justo sapien. Vestibulum dignissim, felis vel eleifend ornare, ante lacus rhoncus velit, malesuada scelerisque mauris neque congue dolor. Aenean ultricies eu massa ut aliquam. Sed suscipit nunc sem. Vivamus nec blandit mauris, at facilisis justo. Maecenas faucibus ac velit id vestibulum. Proin venenatis blandit aliquet.",

        // Not sure what this will represent but it is used to render the red
        // marker showing how the patient compares with the population
        value: 14.3,
        populationData: [
            {
                label: "Subtype of UC",
                responder: '<a href="#">30%</a>',
                nonResponder: '<a href="#">70%</a>'
            },
            {
                label: "Stricturing present",
                responder: "70%",
                nonResponder: "30%"
            },
            {
                label: "Age at Dx of 12 months",
                responder   : [5, 10, 12, 16, 28], // [low, q1, median, q3, high]
                nonResponder: [8,  9, 11, 18, 20], // [low, q1, median, q3, high]
            },
            {
                label: "Sex of Male",
                responder: "30%",
                nonResponder: "70%"
            },
            {
                label: "Dx to Anti-TNF initiation of 2 months",
                responder   : [5, 10, 19, 35, 38], // [low, q1, median, q3, high]
                nonResponder: [8,  9, 11, 14, 20], // [low, q1, median, q3, high]
            },
            {
                label: "Cause of disease monogenic",
                responder: "70%",
                nonResponder: "30%"
            }
        ]
    }
];
    