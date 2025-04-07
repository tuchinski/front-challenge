'use client'
import TicketCard from "@/components/TicketCard";
import TicketInfo from "../interfaces/TicketInfo";
import CustomButtom from "@/components/CustomButtom";
import { useEffect, useState } from "react";
import { transformCurrencyToSymbol } from "@/utils";
import { purchaseTickets } from "../actions";

export default function Cart() {
    const [tickets, setTickets] = useState<TicketInfo[]>([]);
    useEffect(() => {
        const rawTickets = localStorage.getItem('cart');
        if (rawTickets) {
            setTickets(JSON.parse(rawTickets));
        }
    }, [])

    function deleteTicket(ticketId: string) {
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
        localStorage.setItem('cart', JSON.stringify(tickets.filter(ticket => ticket.id !== ticketId)));
    }

    const a = async () => {
        await purchaseTickets(tickets)
        localStorage.setItem('cart', JSON.stringify([]));
        setTickets([])
    }


    return (
        <div className="flex justify-center">
            <div className="w-4/5 sm:w-3/5 min-w-2xs items-center flex flex-col gap-4">
                <div className="px-4 flex flex-col items-center gap-4 mt-10 ">
                    <h1 className="text-neutral-950 font-bold text-4xl">Cart</h1>
                    <h2 className="text-neutral-600 text-center">Please review your tickets before finalizing your purchase.</h2>
                </div>

                <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-center items-center sm:items-baseline">
                    <div className="w-full min-w-xs bg-white border-1 border-border-header rounded-3xl p-6 flex flex-col gap-5">
                        <h2>Your tickets</h2>
                        <h3 hidden={tickets.length != 0} className="text-neutral-600 text-sm">Your cart is empty!</h3>
                        {
                            tickets.map((ticket, index) => <TicketCard onDelete={deleteTicket} pricing={true} ticketInfo={ticket} key={index} />)
                        }
                    </div>
                    <div className="w-full min-w-60 bg-white border-1 max-w-96 border-border-header rounded-3xl p-6 flex flex-col gap-6 h-fit">
                        <h2 className="text-neutral-800 font-bold">Order Summary</h2>
                        <h3 className="text-neutral-600">Total</h3>
                        <h3 className="text-neutral-950 font-semibold text-">
                            {tickets[0] && transformCurrencyToSymbol(tickets[0].ticketValue.currency)}
                            {
                                tickets.reduce((acc, ticket) => {
                                    return acc = acc + ticket.ticketValue.amount;
                                }, 0).toFixed(2)
                            }
                        </h3>
                        <CustomButtom disabled={false} buttonName="Buy" onClick={a} style="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}