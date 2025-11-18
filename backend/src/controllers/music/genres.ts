export function get_genres({ data }: { data: any[] }): string[] {
    const genres: string[] = [];
    data.slice(1).forEach((item: { 
        primaryGenreName: string; 
    }) => {
        genres.push(item.primaryGenreName)
    });
    return genres
}