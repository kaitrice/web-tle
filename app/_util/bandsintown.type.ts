export type Tickets = {
    status: string
    type: string
    url: string
}

export type Venue = {
    location: string
    name: string
    street_address: string
    city: string
    region: string
    country: string
    postal_code: string
}

export type Show = {
    id: string
    datetime: Date
    title: string
    description: string
    venue: Venue
    offers: Tickets
    sold_out: boolean
}