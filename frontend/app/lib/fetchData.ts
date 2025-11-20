export async function fetchData(endpoint: string) {
    let URL = process.env.API_BASE_URL ?? ""
    const KEY = process.env.BUILD_API_KEY ?? ""
    URL += `/${endpoint}`

    const res = await fetch(URL, {
        method: "GET",
        headers: {
            'x-api-key': KEY
        }
    })

    if (!res.ok) throw new Error(`API error ${res.status}`);
    return await res.json();
}