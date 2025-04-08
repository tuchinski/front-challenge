'use client'
interface CardDrawProps {
    id: string;
    name: string;
    color: string;
    logoUrl: string;
    drawDate: string;
    jackpot: {
        amount: number;
        currency: string;
    }
    specification:{
        maxNumbers: number;
        totalNumbers: number;
    }
    pricing:{
        amount: number;
        currency: string;
    }
}


import { formatDateTimeIndex, formatMillions, generateRandomNumbers, saveTicketsOnCart, transformCurrencyToSymbol } from "@/utils";
import CustomBadge from "./CustomBadge";
import Link from "next/link";
import CustomButtom from "./CustomButtom";
import toast from "react-hot-toast";
import { AlarmClockCheck, Dot } from "lucide-react";

export default function CardDraw(props: CardDrawProps){
    function addToCart(){
        saveTicketsOnCart([{
            id: Math.random().toString(36).substr(2, 9),
            lotteryColor: props.color,
            lotteryId: props.id,
            lotteryName: props.name,
            numbersSelected:generateRandomNumbers(1,props.specification.totalNumbers,props.specification.maxNumbers).sort((a,b) => a-b),
            ticketValue: props.pricing
        }])
        toast.success(`${props.name} ticket added to your cart. Good luck!`)
    }
    
    return (
        <>
            <div data-cy='CardDraw' className="sm:w-72 w-96 bg-bg-drawcard rounded-3xl flex  flex-col gap-4 items-center p-2">
               <div className="w-full bg-white rounded-3xl flex flex-col gap-6">
                   <div className="flex items-center center">
                        <img className="size-16 flex justify-center items-center" src={props.logoUrl} alt="alt" />
                        <ul>
                            <li className="font-semibold text-neutral-800">{props.name}</li>
                            <li className="text-neutral-500">Official lottery</li>
                        </ul>
                   </div>
                   <div className="flex flex-col items-center justify-center gap-6">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h2 className="text-xs text-neutral-500">CURRENT JACKPOT</h2>
                            <div>
                                <span className="text-4xl text-neutral-800">{transformCurrencyToSymbol(props.jackpot.currency)}</span>
                                <span style={{ color: props.color }} className={`text-5xl font-bold`}>{formatMillions(props.jackpot.amount)}</span>
                                <span className="text-4xl text-neutral-800">Million</span>
                            </div>
                            <CustomBadge color={props.color}>
                                <span><strong>Next draw</strong>: {formatDateTimeIndex(props.drawDate)}</span>
                            </CustomBadge>
                        </div>
                        <div className="flex justify-between w-full rounded-b-3xl bg-footer-drawcard items-center
                                        px-4 py-2 mt-auto">
                            <div className="flex items-center">
                                <Dot color="green"/>
                                <h2 className="text-neutral-500 text-xs">Draw live stream available</h2>
                            </div>
                            <h2 className="font-medium text-neutral-500 text-xs">
                                {`${transformCurrencyToSymbol(props.pricing.currency)} ${props.pricing.amount}`}
                            </h2>
                        </div>
                   </div>
               </div>
               <div className="flex justify-between w-full px-2">
                    <CustomButtom className="w-32" buttonName="Add to Cart" disabled={false} style="secondary" onClick={addToCart}  />
                    <Link className="w-32 text-xs text-center rounded-4xl p-2  
                            hover:opacity-80 transition disabled:opacity-50 bg-button-primary text-white" href={`/details/${props.id}`} >Play</Link>
               </div>
            </div>
        </>
    );
}