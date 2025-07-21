const patients = [
    {
        // Patient header and description
        // ---------------------------------------------------------------------
        name: "Teresa Anderson",
        gender: "Female",
        dob: "2020-03-15",
        mrn: "12345678",
        description: `This 4-year-old Caucasian girl was diagnosed with ulcerative distal colitis,
        affecting the colon up to the splenic flexure. She presents with bloody, mucousy diarrhea
        and elevated inflammatory markers, but maintains normal weight and growth. Prior treatments
        with sulfasalazine, budesonide, and dietary interventions, including enteral nutrition,
        have not improved symptoms. She has a history of C. difficile infection (treated with
        vancomycin) and a severe nut allergy, complicating dietary management. She exhibits no
        systemic symptoms. Given her lack of response to current therapies, initiation of
        immunomodulatory treatment is being considered, pending confirmation of up-to-date
        immunization status.`,

        // Medications table and chart screenshot
        // ---------------------------------------------------------------------
        population: {
            screenshot: {
                src: "./uc_survival_per_drug_class.png",
                href: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/96"
            },
            tableRows: [
                ["UC", "Aminosalicylate" , 202, { boxplot: { data: [0.18, 1.31, 2.91, 5.18, 9.61 ] }}],
                ["UC", "Anti-integrin"   , 54 , { boxplot: { data: [0.06, 0.62, 1.34, 1.99, 5.11 ] }}],
                ["UC", "Anti-interleukin", 49 , { boxplot: { data: [0.35, 0.9 , 1.47, 3.11, 7.24 ] }}],
                ["UC", "Anti-TNF"        , 287, { boxplot: { data: [0.14, 1.03, 2.25, 4.46, 8.47 ] }}],
                ["UC", "Corticosteroid"  , 320, { boxplot: { data: [0.11, 1.18, 2.93, 5.63, 11.11] }}],
                ["UC", "Immunomodulator" , 226, { boxplot: { data: [0.23, 1.46, 3.16, 6.1 , 9.83 ] }}]
            ]
        },

        // Main table
        // ---------------------------------------------------------------------
        value: 4, // The patient age in years we render over the boxplot charts
        populationData: [
            {
                label: 'IBD Subtype is <b class="text-success">UC (Ulcerative Colitis)</b>',
                responder: '26%',
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/70">74%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/84">41%</a>'
            },
            {
                label: "UC Location is <b>E4: pancolitis</b> (proximal to hepatic flexure)",
                responder: "28%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/63">72%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/90">56%</a>'
            },
            {
                label: "UC Severity: <b>S1: ever severe</b> (PUCAI >/= 65)",
                responder: "21%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/42">79%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/91">69%</a>'
            },
            {
                label: "Age at Dx of <b>52 months</b> (4 years)",
                responder   : { boxplot: { data: [1, 3, 8   , 11, 16], link: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/93" }}, // 1,2,4,6,8,3,2,2,7,9,10,13,9,8,8,12,11,16,13       
                nonResponder: { boxplot: { data: [1, 5, 12  , 26, 34], link: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/93" }}, // 1,5,4,1,5,3,8,6,12,7,16,16,26,27,29,26,34,29,14   
                surgery     : { boxplot: { data: [1, 2, 10.5, 20, 32], link: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/92" }}, // 2,2,1,2,1,3,4,8,4,15,19,20,13,29,25,25,32,17      
            },
            {
                label: "<b>Female</b>",
                responder: "24%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/78">76%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/87">39%</a>'
            },
            {
                label: "<b>White</b>",
                responder: "21%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/79">79%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/88">42%</a>'
            },
            {
                label: "Rare genetic predicted effect in <b>PLCG2</b>",
                responder: "29%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/58">71%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/89">7%</a>'
            }
        ]
    },
    {
        // Patient header and description
        // ---------------------------------------------------------------------
        name: "Malik Johnson",
        gender: "Male",
        dob: "2022-01-05",
        mrn: "23456789",
        description: `
        This young male was diagnosed with severe Crohn's disease at 12 months of age, with ileocolonic involvement and
        a stricturing phenotype. He initially responded to infliximab, had moderate response to adalimumab, and is now
        on ustekinumab due to ongoing disease activity. Despite treatment, recent endoscopy and imaging show persistent
        inflammation in the ileum and ascending colon. He has significant growth failure, now below the 3rd percentile
        for height and weight. Laboratory tests reveal elevated CRP and ESR, indicating active inflammation, although
        clinical symptoms are minimal. Management is focused on controlling inflammation and improving growth through
        ongoing therapeutic adjustment and monitoring.`,
        
        // Medications table and chart screenshot
        // ---------------------------------------------------------------------
        population: {
            screenshot: {
                src: "./cd_survival_per_drug_class.png",
                href: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/95"
            },
            tableRows: [
                ["CD", "Aminosalicylate" , 114, { boxplot: { data: [ 0.35, 1.75, 3.21, 5.43,  9.61 ] }}],
                ["CD", "Anti-integrin"   , 26 , { boxplot: { data: [ 0.41, 0.71, 1.34, 1.85,  5.51 ] }}],
                ["CD", "Anti-interleukin", 41 , { boxplot: { data: [ 0.35, 1.09, 1.47, 3   ,  7.24 ] }}],
                ["CD", "Anti-TNF"        , 212, { boxplot: { data: [ 0.16, 1.25, 2.73, 4.76,  8.71 ] }}],
                ["CD", "Corticosteroid"  , 219, { boxplot: { data: [ 0.18, 1.41, 3.11, 6.07, 10.48 ] }}],
                ["CD", "Immunomodulator" , 164, { boxplot: { data: [ 0.33, 1.66, 3.44, 6.36,  9.61 ] }}],
            ]
        },

        // Main table
        // ---------------------------------------------------------------------
        value: 1, // The patient age in years we render over the boxplot charts
        populationData: [
            {
                label: 'IBD Subtype is <b class="text-success">Crohn\'s Disease (CD)</b>',
                responder: '22%',
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/70">78%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/84">35%</a>'
            },
            {
                label: "CD Location is <b>L3 (Ileocolonic)</b>",
                responder: "16%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/62">84%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/85">37%</a>'
            },
            {
                label: 'CD Behavior: <b>B2: stricturing</b>',
                responder: "21%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/74">79%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/86">58%</a>'
            },
            {
                label: 'Age at Dx of <b>12 months</b>',
                responder   : { boxplot: { data: [1, 3, 8   , 11, 16], link: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/93" }}, // 1,2,4,6,8,3,2,2,7,9,10,13,9,8,8,12,11,16,13    
                nonResponder: { boxplot: { data: [1, 5, 12  , 26, 34], link: "https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/93" }}, // 1,5,4,1,5,3,8,6,12,7,16,16,26,27,29,26,34,29,14
                surgery     : { boxplot: { data: [1, 2, 10.5, 20, 32] }}, // 2,2,1,2,1,3,4,8,4,15,19,20,13,29,25,25,32,17        ?
            },
            {
                label: '<b>Male</b>',
                responder: "24%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/75">76%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/87">41%</a>'
            },
            {
                label: '<b>Black or African American</b>',
                responder: "14%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/77">86%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/88">30%</a>'
            },
            {
                label: 'Rare genetic predicted effect in <b>STIM1</b>',
                responder: "25%",
                nonResponder: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/58">75%</a>',
                surgery: '<a href="https://smart-cumulus-fabric-2bea3378447d.herokuapp.com/views/89">47%</a>'
            }
        ]
    }
];
    