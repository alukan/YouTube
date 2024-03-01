
export interface PlayerOptions {
    height?: string;
    width?: string;
    videoId?: string;
}

export interface Player {
    loadVideoById(ID: string): void;
    destroy(): void;
}