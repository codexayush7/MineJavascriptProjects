const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const periodElement = document.getElementById('period');
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const toggleSecondsBtn = document.getElementById('toggle-seconds');
const toggle24HourBtn = document.getElementById('toggle-24hour');

function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours24 = hours % 12;
    const weekdayname = date.toLocaleString('default', { weekday: 'long' });

    timeElement.innerText = `${hours24}:${minutes}:${seconds}`;
    dateElement.innerText = `${weekdayname}, ${month}/${day}/${year}`;
    periodElement.innerText = period;
}

updateClock();


toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeBtn.innerHTML = document.body.classList.contains('dark-mode')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
})

// Toggle showing seconds
toggleSecondsBtn.addEventListener('click', () => {
    showSeconds = !showSeconds;
    updateClock();
});

// Toggle 24-hour format
toggle24HourBtn.addEventListener('click', () => {
    use24Hour = !use24Hour;
    updateClock();
});


setInterval(updateClock, 500);