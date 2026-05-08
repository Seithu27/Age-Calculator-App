if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function calculateAge() {
    const dobValue = document.getElementById('dob').value;
    if (!dobValue) {
        alert("Please select a date!");
        return;
    }

    const dob = new Date(dobValue);
    const now = new Date();

    let diffMs = now - dob;

    if (diffMs < 0) {
        alert("Date of birth cannot be in the future!");
        return;
    }

    // Calculations
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
    const diffYears = Math.floor(diffDays / 365.25);
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    // Update Display
    document.getElementById('years-main').innerText = diffYears + " Years";
    document.getElementById('months-sub').innerText = diffMonths;
    document.getElementById('weeks-sub').innerText = diffWeeks.toLocaleString();
    document.getElementById('days-sub').innerText = diffDays.toLocaleString();
    document.getElementById('hours-sub').innerText = diffHours.toLocaleString();
}

function resetAll() {
    document.getElementById('dob').value = "";
    document.getElementById('years-main').innerText = "-- Years";
    document.getElementById('months-sub').innerText = "--";
    document.getElementById('weeks-sub').innerText = "--";
    document.getElementById('days-sub').innerText = "--";
    document.getElementById('hours-sub').innerText = "--";
}