import DrawDetails from "@/components/DrawDetails";
import NumberSelection from "@/components/NumberSelection";

export default async function DetailsPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="px-4 flex flex-col items-center gap-4 mt-10">
                    <h1 className="text-neutral-950 font-bold text-4xl">MegaSena</h1>
                    <h2 className="text-neutral-600 text-center">Choose 5 numbers from 1 to 60 and good luck</h2>
                </div>

                <div>
                    <NumberSelection typeDraw="megaSena" qtdNumbersTicket={6} maxNumTicket={60} />
                    <DrawDetails jackpotValue="45 millions" dateNextDraw="04/04/2025" tickets={[{ ticketNumber: 1, numbersSelected: [1, 2, 3, 4, 5, 6] }]} />
                </div>
            </div>
        </>

    );
}