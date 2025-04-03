import { ShoppingCart, Ticket } from "lucide-react";


export default function Header(){
    return(
        <div className="flex justify-center mt-6 sm:mt-12">
            <div className="flex justify-between items-center border-1
            rounded-[129px] px-6 py-2 border-neutral-100 w-[370] sm:w-2xl">
                <div className="flex space-x-[16px] items-center">
                    <div className="bg-bg-icon1-header w-12 h-12 rounded-3xl flex
                    items-center justify-center">
                        <Ticket size={23} alignmentBaseline="central"/>
                    </div>
                    <span className="text-xl font-bold">LottoVerse</span>
                </div>
                <div className="bg-bg-icon2-header w-8 h-8 rounded-3xl flex
                    items-center justify-center">
                    <ShoppingCart size={16}/>
                </div>
            </div>
        </div>
    );

}
