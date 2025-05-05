interface Image {
    url: string;
    height: number;
    width: number;
}

interface Track {
    id: string;
    name: string;
    album_type: string;
    release_date: string;
    external_urls: {
        spotify: string
    };
    images: Image[];
}

export type TopTracks =  Track[]