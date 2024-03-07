export interface VideoFromSearch {
    id: {
        videoId: string;
    };
    title: string;
    description: string;
    snippet: {
        thumbnails: {
            url: string
        }
    }
}

export interface VideoFromSearchArrayProp {
    items: VideoFromSearch[];
}


