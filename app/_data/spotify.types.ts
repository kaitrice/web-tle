interface Image {
    url: string;
    height: number;
    width: number;
}

export type Track = {
    id: string;
    name: string;
    album_type: string;
    release_date: string;
    external_urls: {
        spotify: string
    };
    images: Image[];
}

export type TopTracks =  {
    tracks: Track[]
}