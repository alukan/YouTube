import React, { useEffect, useRef } from 'react';
import { PlayerContainer } from '../../styles/VideoPageStyles';
import { PlayerOptions, Player } from '../../types/PlayerTypes'
import { useOnGoingContext } from '../../StateContext';
import { useNavigate } from 'react-router-dom';
interface YouTubePlayerProps {
  videoId: string;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (element: HTMLIFrameElement | HTMLDivElement, options: PlayerOptions) => Player;
      PlayerState: { ENDED: boolean };
    },
    player: Player | null;
  }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { state: onGoing, setState: setOnGoing } = useOnGoingContext();
  useEffect(() => {
    const initializePlayer = () => {
      if (window.player && window.player.loadVideoById) {
        window.player.loadVideoById(videoId);
      } else {
        if (playerRef.current) {
          window.player = new window.YT.Player(playerRef.current, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            events: {
              //eslint-disable-next-line
              'onReady': (event: any) => {
                event.target.playVideo();
              },
              //eslint-disable-next-line
              'onStateChange': (event: any) => {
                if (event.data === window.YT.PlayerState.ENDED && onGoing.length > 1) {
                  setOnGoing(onGoing.slice(1))
                  navigate(`/video?v=${onGoing[1].id.videoId}`)
                }
              },
            }
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
