import { formatMoney } from "../lib/utils"

describe("formatMoney - a function that takes a number and returns a money formatted string", () => {

    it("takes number 10000 and asserts the output is correct (R10 000)", () =>{
        const moneyString = formatMoney(10000)
        expect(moneyString).toBe("R10 000")
    })

    it("takes number 1000.45 and asserts the output is correct & includes cents (R1 000.45)", () =>{
        const moneyString = formatMoney(-1000.45, true)
        expect(moneyString).toBe("-R1 000.45")
    })

    it("takes number 43044.44 & currency symobol and asserts the output is correct & includes cents (E43 044.44)", () =>{
        const moneyString = formatMoney(43044.44, true, "E")
        expect(moneyString).toBe("E43 044.44")
    })

    it("takes number 10000 and asserts the output is correct & includes cents (R0.00)", () =>{
        const moneyString = formatMoney(0, true)
        expect(moneyString).toBe("R0.00")
    })

    it("takes number 10000 and asserts the output is correct (R1)", () =>{
        const moneyString = formatMoney(1)
        expect(moneyString).toBe("R1")
    })
    it("takes number 10000 and asserts the output is correct & includes cents (R1)", () =>{
        const moneyString = formatMoney(-10, true)
        expect(moneyString).toBe("-R10.00")
    })
})