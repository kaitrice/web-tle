export async function fetch_shows({ date }: { date: string }) {
    try {
        var artistID = "15591806";
        const url = `https://rest.bandsintown.com/artists/id_${artistID}/events?date=${date}&app_id=${process.env.BIT_ID}`;

        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
