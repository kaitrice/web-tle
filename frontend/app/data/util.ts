export async function fetch_data() {
    let res
    try {
        res = await fetch("https://web-tle-api-v1.azurewebsites.net/api/data", {
            method: "GET",
            headers: {
                'x-api-key': 'test'
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log("ERROR FETCHING DATA:", error)
        return
    }
}