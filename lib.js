
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
