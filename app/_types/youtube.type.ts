import { Image } from './common.type'

export type Video = {
    id: {
        videoId: string
    };
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
        thumbnails: {
            default: Image;
            medium: Image;
            high: Image;
            standard?: Image;
            maxres?: Image;
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    }
}

export type Videos = {
    items: Video[]
}