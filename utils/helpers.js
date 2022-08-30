module.exports = {
    format_date: (date) => {
        // mm/dd/yyyy
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
        const randomNum = Math.random();

        // random emoji
        if (randomNum > 0.7) {
            return `<span for="img" aria-label="lightbulb">💡</span>`;
          } else if (randomNum > 0.4) {
            return `<span for="img" aria-label="laptop">💻</span>`;
          } else {
            return `<span for="img" aria-label="gear">⚙️</span>`;
        }
    },
};