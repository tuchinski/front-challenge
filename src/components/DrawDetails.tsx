// 'use client'
import TicketInfo from "@/app/interfaces/TicketInfo";
import CustomButtom from "./CustomButtom";
import TicketCard from "./TicketCard";
import { Dispatch, SetStateAction } from "react";

interface DrawDetailsProps{
    tickets: TicketInfo[];
    jackpotValue: string;
    dateNextDraw: string;
    color: string;
    addTicketsToCart?: () => void;
}


export default function DrawDetails({tickets, jackpotValue, dateNextDraw, addTicketsToCart}: DrawDetailsProps){

    return (
        <>
            <div id="drawDetails" className="bg-white border-1 rounded-3xl border-[#F1F1F1] 
            w-[308] p-5 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <div id='drawDetailsHeader' className="grid grid-cols-1 gap-4">
                        <div>
                            <h1 className="text-sm text-neutral-800"><strong>Draw Info</strong></h1>
                        </div>
                        <div className="flex justify-between text-neutral-600">
                            <ul>
                                <li className="text-sm">Jackpot</li>
                                <li className="text-base"><strong>{jackpotValue}</strong></li>
                            </ul>
                            <ul>
                                <li className="text-sm">Next Draw</li>
                                <li className="text-base"><strong>{dateNextDraw}</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div id="DrawDetailsTicket" className="grid grid-cols-1 gap-4">
                        <div>
                            <span className="text-sm text-neutral-800"><strong>Your tickets</strong></span>
                        </div>
                        <div hidden={tickets.length != 0}>
                            <span className="text-neutral-600 text-sm">No tickets generated yet. Select your numbers and create a ticket!</span>
                        </div>

                        {
                            tickets.map((ticketatual,index) => {
                                return <TicketCard pricing={false} key={index+1} ticketInfo={ticketatual} ticketNumber={index+1}/>
                            })
                        }
                    </div>
                </div>

                <div>
                    <CustomButtom buttonName="Continue" onClick={addTicketsToCart} disabled={tickets.length === 0} style="primary" className="w-full" />
                </div>

            </div>
        </>
    );
}