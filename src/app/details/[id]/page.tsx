'use client'
import ResponseLotteryDraw from "@/app/interfaces/ResponseLotteryDraw";
import TicketInfo from "@/app/interfaces/TicketInfo";
import DrawDetails from "@/components/DrawDetails";
import NumberSelection from "@/components/NumberSelection";
import { formatDateOnly, formatMillions, transformCurrencyToSymbol } from "@/utils";
import { use, useState } from "react";
import useSWR from "swr";


const fetcher = (...args:[string]) => fetch(...args).then((res) => res.json())

export default function DetailsPage({params}: {params: Promise<{id:string}>}) {
    const pathParams = use(params);
    const id = pathParams.id
    const [tickets, setTickets] = useState<TicketInfo[]>([]);

    const { data:lotteryDrawDetails , error } = useSWR(`https://interview.lotobola.com.pe/draws/${id}`, fetcher) 
       
    if (!lotteryDrawDetails) return <div>Loading...</div>
  

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="px-4 flex flex-col items-center gap-4 mt-10">
                    <h1 className="text-neutral-950 font-bold text-4xl">{lotteryDrawDetails.name}</h1>
                    <h2 className="text-neutral-600 text-center">
                        {`Choose ${lotteryDrawDetails.specification.maxNumbers} numbers from 1 to ${lotteryDrawDetails.specification.totalNumbers} and good luck`}
                    </h2>
                </div>

                <div>
                    <NumberSelection qtdNumbersTicket={lotteryDrawDetails.specification.totalNumbers} maxNumTicket={lotteryDrawDetails.specification.maxNumbers} color={lotteryDrawDetails.color} addTicketFunc={setTickets} />
                    <DrawDetails jackpotValue={`${transformCurrencyToSymbol(lotteryDrawDetails.jackpot.currency)} ${formatMillions(lotteryDrawDetails.jackpot.amount)} Million`} 
                    dateNextDraw={formatDateOnly(lotteryDrawDetails.drawDate)} tickets={tickets} />
                </div>
            </div>
        </>

    );
}