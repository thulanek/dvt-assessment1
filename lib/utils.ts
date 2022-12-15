export const formatMoney = (amount: number, includeCents?: boolean, currency: string = "R") => {
    const negativeStr = amount < 0 ? "-" : ""
    const amountWithCents = includeCents ? (Math.abs(amount)).toFixed(2) + "" : (Math.abs(amount)).toFixed(0) + ""
    const formattedAmount = currency + amountWithCents.split("")
        .reverse()
        .map((number, index) => ((!includeCents && index > 0) || index > 3) && index % 3 === 0 ? number + " " : number)
        .reverse()
        .join("")

    return negativeStr + formattedAmount
}

const cannotScrollAnymore = (scrollDownwards: boolean) => (!scrollDownwards && window.scrollY === 0) || (scrollDownwards && window.scrollY + window.innerHeight >= document.body.scrollHeight - 10)


export const customScrollTo = (scrollToVal:number) => {
    if (process.browser) {
        let stopAnimationId : null | number = null;
        const scrollFactor = 30
        const scrollDownwards = window.scrollY < scrollToVal
    
    const scrollHandler = () => {
        // console.log("animating")
      if (scrollDownwards && window.scrollY < scrollToVal && !cannotScrollAnymore(scrollDownwards)) {
        stopAnimationId = window.requestAnimationFrame(scrollHandler);
        window.scrollBy(0, scrollFactor);
      } else if (!scrollDownwards && window.scrollY > scrollToVal && !cannotScrollAnymore(scrollDownwards)) {
        stopAnimationId = window.requestAnimationFrame(scrollHandler);
        window.scrollBy(0, -scrollFactor);
        // cancelAnimationFrame(stopAnimationId);
      } else {
        // 
      }
    }

    scrollHandler();
}
  };