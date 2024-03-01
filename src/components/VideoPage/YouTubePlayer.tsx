import React, { useEffect, useRef } from 'react';
import { PlayerContainer } from '../../styles/VideoPageStyles';
import { PlayerOptions, Player } from '../../types/PlayerTypes'

interface YouTubePlayerProps {
  videoId: string;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (element: HTMLIFrameElement | HTMLDivElement , options: PlayerOptions) => Player;
    },
    player: Player | null;
  }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initializePlayer = () => {
      if (window.player && window.player.loadVideoById) {
        window.player.loadVideoById(videoId);
      } else {
        console.log(videoId)
        if (playerRef.current) {
          window.player = new window.YT.Player(playerRef.current, {
            height: '100%',
            width: '100%',
            videoId: videoId,
          });
        }
      }

    };



    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag.parentNode)
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (window.player && window.player.destroy) {
        window.player.destroy();
        window.player = null;
      }
    };
  }, [videoId]);

  return <PlayerContainer><div ref={playerRef} /></PlayerContainer>;
};

export default YouTubePlayer;
