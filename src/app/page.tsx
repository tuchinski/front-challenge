import CardDraw from "@/components/CardDraw";
import ResponseLotteryDraw from "./interfaces/Response/ResponseLotteryDraw";
import { isUndefined } from "swr/_internal";
import CustomError from "@/components/CustomError";


export const revalidate = 60;

export default async function Home() {
  const lotteryDraws: ResponseLotteryDraw[] | undefined = await fetch('https://interview.lotobola.com.pe/draws').then(
    (res) =>{
      if(res.ok)
        return res.json()
      return undefined;
    } 
  )

  if(lotteryDraws === undefined) return <CustomError/>

  console.log(lotteryDraws);

  return (
    <>
      <div hidden={!lotteryDraws}>
        <div className="px-4  mt-9 flex flex-col gap-4 justify-center items-center ">
          <h1 className="text-neutral-900 text-4xl font-bold">Your winning tickets</h1>
          <h2 className="text-neutral-600 text-sm text-center md:whitespace-normal whitespace-nowrap">
            Explore our collection of lotteries from around the world. <br className="md:hidden" />
            Each with unique prizes, odds, and drawing schedules.
          </h2>
          <h2 className="text-neutral-600 text-sm"></h2>
        </div>

        

        <div className="mt-8 flex flex-col gap-4 items-center sm:flex-row sm:justify-center sm:items-center sm:gap-20">
          {
            lotteryDraws?.map((draw) => {
              return (
                <CardDraw {...draw} key={draw.id}/>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
