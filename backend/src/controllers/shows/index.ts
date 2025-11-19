import { fetch_shows } from "../../services/shows";
import { Shows, Show } from "../../types";

export default async function normalize_data(): Promise<Shows> {
    const upcoming = await fetch_shows({ date: "upcoming" })
    const previous = await fetch_shows({ date: "previous" })

    const normalized_data: Shows = {
        "previous": [],
        "upcoming": []
    }

    upcoming.map((item) => {
        const venue = item.venue
        const show: Show = {
            name: venue.name,
            venue: {
                city: venue.city,
                country: venue.country
            },
            date: item.datetime,
            tickets: item.offers
        }
        normalized_data.upcoming.push(show)
    })

    previous.map((item) => {
        const venue = item.venue
        const show: Show = {
            name: venue.name,
            venue: {
                city: venue.city,
                country: venue.country
            },
            date: item.datetime,
            tickets: item.offers
        }
        normalized_data.previous.push(show)
    })

    return normalized_data
}