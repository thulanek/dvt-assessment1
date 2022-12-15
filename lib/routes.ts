export type RouteName = "home" | "about" | "portfolio"
export type Route = `/${string}` | `https://${string}.${string}`

export const routes: { [K in RouteName]: Route } = {
    home: "/",
    about: "/about",
    portfolio: "https://thulane.co.za"
}