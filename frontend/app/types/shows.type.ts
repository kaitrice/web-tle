type Tickets = {
    type: string
    url: string
    status: string
}

type Venue = {
    city: string
    country: string
}

export type Show = {
    name: string
    venue: Venue
    date: string
    tickets: Tickets[]
}

export type Shows = {
    previous: Show[]
    upcoming: Show[]
}