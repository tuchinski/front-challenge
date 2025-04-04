export function formatMillions(amount: number): string {
    return (amount / 1_000_000).toFixed(0);
}

export function formatDateTimePTBR(datetime: string): string {
    const date = new Date(datetime);
    
    const dayOfWeek = date.toLocaleString('us', { weekday: 'long' });
    const month = date.toLocaleString('us', { month: 'long' });
    const day = date.getDate();
    return `${dayOfWeek}, ${month} ${day}`;
}

export function transformCurrencyToSymbol(currency: string): string {
    switch (currency) {
        case 'USD':
            return '$';
        case 'PEN':
            return 'S/.';
        case 'EUR':
            return '€';
        case 'BRL':
            return 'R$';
        default:
            return currency;
    }
}