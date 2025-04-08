import TicketInfo from "./app/interfaces/TicketInfo";

export function formatMillions(amount: number): string {
    return (amount / 1_000_000).toFixed(0);
}

export function formatDateOnly(datetime: string): string {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

export function formatDateTimeIndex(datetime: string): string {
    const date = new Date(datetime);
    
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    const month = date.toLocaleString('en-US', { month: 'long' });
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

export function generateRandomNumbers(rangeStart: number, rangeEnd: number, qtdNumbers: number){
    const numbersGenerated: number[] = [];
    while (numbersGenerated.length < qtdNumbers){
        const numberRandom = Math.floor(Math.random() * rangeEnd);
        if(!numbersGenerated.includes(numberRandom) && numberRandom >= rangeStart && numberRandom <= rangeEnd)
            numbersGenerated.push(numberRandom);
    }
    return numbersGenerated;
}

export function saveTicketsOnCart(tickets: TicketInfo[]){
    const itensCart = localStorage.getItem("cart");
    if(itensCart){
        const oldCart:TicketInfo[] = JSON.parse(itensCart);
        tickets = [...oldCart, ...tickets];
    }
    localStorage.setItem("cart", JSON.stringify(tickets)); 
}