module.exports = {
    format_date: (date) => {
        // mm/dd/yyyy
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
    
}