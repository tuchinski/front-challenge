export default interface ResponsePurchaseTicket{
    tickets: Array<{id: string, lines: Array<number[]>, drawId: string}>
}