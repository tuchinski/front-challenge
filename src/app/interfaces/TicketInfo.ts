export default interface TicketInfo{
    id: string,
    numbersSelected: number[],
    lotteryId: string,
    lotteryName: string,
    lotteryColor: string,
    ticketValue: {
        amount: number,
        currency: string
    }
}