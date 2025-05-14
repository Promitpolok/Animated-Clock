document.addEventListener("DOMContentLoaded", () => {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const dateElement = document.getElementById("date");

    // Function to update the clock
    const updateClock = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const date = now.toDateString();

        // Animate changes only when numbers update
        if (hours !== hoursElement.textContent) {
            animateTextChange(hoursElement, hours);
        }
        if (minutes !== minutesElement.textContent) {
            animateTextChange(minutesElement, minutes);
        }
        if (seconds !== secondsElement.textContent) {
            animateTextChange(secondsElement, seconds);
        }

        // Update the date (only once if unchanged)
        if (dateElement.textContent !== date) {
            dateElement.textContent = date;
        }
    };

    // Function to animate number change
    const animateTextChange = (element, newText) => {
        gsap.to(element, {
            duration: 0.2,
            opacity: 0,
            y: -10,
            onComplete: () => {
                element.textContent = newText;
                gsap.fromTo(
                    element,
                    { y: 10, opacity: 0 },
                    { duration: 0.2, opacity: 1, y: 0 }
                );
            },
        });
    };

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();
});
