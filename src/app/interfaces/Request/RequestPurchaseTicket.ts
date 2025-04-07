export default interface RequestPurchaseTicket{
    tickets: Array<{lines: Array<number[]>, drawId: string}>
}