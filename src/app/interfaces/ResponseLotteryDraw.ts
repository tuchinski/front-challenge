export default interface ResponseLotteryDraw {
    id: string,
    name: string,
    color: string,
    drawDate: string,
    logoUrl: string,
    jackpot: {
      amount: number,
      currency: string
    }
    specification: {
      maxNumbers: number,
      totalNumbers: number,
    }
    pricing: {
      amount: number,
      currency: string
    }
  }