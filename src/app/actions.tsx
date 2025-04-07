'use server'

import RequestPurchaseTicket from "./interfaces/Request/RequestPurchaseTicket";
import ResponseError from "./interfaces/Response/ResponseError";
import ResponsePurchaseTicket from "./interfaces/Response/ResponsePurchaseTicket";
import TicketInfo from "./interfaces/TicketInfo";




export async function purchaseTickets(tickets: TicketInfo[]): Promise<ResponsePurchaseTicket| undefined> {
    const requestBody = tickets.reduce((acc: RequestPurchaseTicket, ticket: TicketInfo) => {
        const i = acc.tickets.findIndex((oldTicket) => oldTicket.drawId === ticket.lotteryId);
        if (i === -1)
            acc.tickets.push({ drawId: ticket.lotteryId, lines: [ticket.numbersSelected] });
        else {
            acc.tickets.at(i)?.lines.push(ticket.numbersSelected);
        }
        return acc;
    }, { tickets: [] });

    const data = await fetch('https://interview.lotobola.com.pe/tickets/purchase', {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
          }
    })
    if(data.ok){
        console.log("ok");
        const dataParsed = await data.json();
        console.log(data.url, dataParsed);
        return dataParsed;
    } else{
        const error:ResponseError = await data.json()
        console.error(error);
        throw new Error(`Failed to purchase tickets: ${error.message}`);
    }


}