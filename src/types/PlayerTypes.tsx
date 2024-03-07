
export interface PlayerOptions {
    height?: string;
    width?: string;
    videoId?: string;
    events?: object;
}

export interface Player {
    loadVideoById(ID: string): void;
    destroy(): void;
}