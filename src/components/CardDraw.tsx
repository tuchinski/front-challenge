import CustomBadge from "./CustomBadge";
import CustomButtom from "./CustomButtom";

export default function CardDraw(){
    return(
        <>
            <div className="sm:w-72 w-96 bg-bg-drawcard rounded-3xl flex  flex-col gap-4 items-center p-2">
               <div className="w-full bg-white rounded-3xl flex flex-col gap-6">
                   <div className="flex items-center center">
                        <img className="size-16 flex justify-center items-center" src="https://assets.lottobillions.com/public/logos/MegaSena-2.webp" alt="alt" />
                        <ul>
                            <li className="font-semibold text-neutral-800">MegaSena</li>
                            <li className="text-neutral-500">Official lottery</li>
                        </ul>
                   </div>
                   <div className="flex flex-col items-center justify-center gap-6">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h2 className="text-xs text-neutral-500">CURRENT JACKPOT</h2>
                            <div>
                                <span className="text-4xl text-neutral-800">$</span>
                                <span className="text-5xl font-bold text-[#0096FF]">247</span>
                                <span className="text-4xl text-neutral-800">Million</span>
                            </div>
                            <CustomBadge type="drawDate" badgeText="Next Draw: Tuesday, April 2"/>
                        </div>
                        <div className="flex justify-between w-full rounded-b-4xl bg-footer-drawcard 
                                        px-4 py-2 mt-auto">
                            <h2 className="text-neutral-500 text-xs">Draw live stream available</h2>
                            <h2 className="font-medium text-neutral-500 text-xs">$ 1,50</h2>
                        </div>
                   </div>
               </div>
               <div className="flex justify-between w-full px-4">
                    <CustomButtom buttonName="Add to cart" className="w-32" disabled={false} style="secondary"/>
                    <CustomButtom buttonName="Play"  className="w-32" disabled={false} style="primary"/>
               </div>
            </div>
        </>
    );
}