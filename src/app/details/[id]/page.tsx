'use client'
import ResponseLotteryDraw from "@/app/interfaces/Response/ResponseLotteryDraw";
import TicketInfo from "@/app/interfaces/TicketInfo";
import CustomError from "@/components/CustomError";
import CustomLoading from "@/components/CustomLoading";
import DrawDetails from "@/components/DrawDetails";
import NumberSelection from "@/components/NumberSelection";
import { formatDateOnly, formatMillions, saveTicketsOnCart, transformCurrencyToSymbol } from "@/utils";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import useSWR from "swr";


const fetcher = (...args: [string]) => fetch(...args).then((res) =>{
    if(res.ok)
        return res.json()
    else{
        const error = new Error('An error occurred while fetching the data.')
    // Adicionar informação extra ao objeto de erro.
        
        
        throw error
    }
})

export default function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const pathParams = use(params);
    const id = pathParams.id
    const [tickets, setTickets] = useState<TicketInfo[]>([]);
    const router = useRouter();
    
    const { data: lotteryDrawDetails, error } = useSWR<ResponseLotteryDraw>(`https://interview.lotobola.com.pe/draws/${id}`, fetcher)

    if(error) return <CustomError/>
    if (!lotteryDrawDetails) return <CustomLoading />


    function saveTicketsOnCartAndRedirect(){
        saveTicketsOnCart(tickets);
        setTickets([]);
        router.push('/cart');    
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="px-4 flex flex-col items-center gap-4 mt-10">
                    <h1 className="text-neutral-950 font-bold text-4xl">{lotteryDrawDetails.name}</h1>
                    <h2 className="text-neutral-600 text-center">
                        {`Choose ${lotteryDrawDetails.specification.maxNumbers} numbers from 1 to ${lotteryDrawDetails.specification.totalNumbers} and good luck`}
                    </h2>
                </div>

                <div className=" flex flex-col gap-4 items-center sm:flex-row sm:items-baseline">
                    <NumberSelection drawDetails={lotteryDrawDetails} color={lotteryDrawDetails.color} addTicketFunc={setTickets} />
                    <DrawDetails addTicketsToCart={saveTicketsOnCartAndRedirect}  jackpotValue={`${transformCurrencyToSymbol(lotteryDrawDetails.jackpot.currency)} ${formatMillions(lotteryDrawDetails.jackpot.amount)} Million`}
                        dateNextDraw={formatDateOnly(lotteryDrawDetails.drawDate)} tickets={tickets} color={lotteryDrawDetails.color} />
                </div>
            </div>
        </>

    );
}