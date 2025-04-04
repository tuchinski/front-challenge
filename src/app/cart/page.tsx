import TicketCard from "@/components/TicketCard";
import TicketInfo from "../interfaces/TicketInfo";
import CustomButtom from "@/components/CustomButtom";

export default function Cart() {
    const tst: TicketInfo = {
        numbersSelected: [4, 5, 6, 7, 8, 10],
        ticketNumber: 1,
    }


    return (
        <div className="flex justify-center">
            <div className="w-4/5 sm:w-3/5 min-w-2xs items-center flex flex-col gap-4">
                <div className="px-4 flex flex-col items-center gap-4 mt-10 ">
                    <h1 className="text-neutral-950 font-bold text-4xl">Cart</h1>
                    <h2 className="text-neutral-600 text-center">Please review your tickets before finalizing your purchase.</h2>
                </div>

                <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <div className="w-full border-1 border-border-header rounded-3xl p-6 flex flex-col gap-5">
                        <h2>Your tickets</h2>
                        <TicketCard ticketInfo={tst} type="megaSena" />
                        <TicketCard ticketInfo={tst} type="megaSena" />
                        <TicketCard ticketInfo={tst} type="megaSena" />
                    </div>
                    <div className="w-full border-1 max-w-96 border-border-header rounded-3xl p-6 flex flex-col gap-6 h-fit">
                        <h2 className="text-neutral-800 font-bold">Order Summary</h2>
                        <h3 className="text-neutral-600">Total</h3>
                        <h3 className="text-neutral-950 font-semibold text-">R$ 9.00</h3>
                        <CustomButtom disabled={false} buttonName="Buy" style="primary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}