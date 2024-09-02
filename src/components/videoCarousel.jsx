
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { highlightsSlides } from '../constants/index';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoid: 0,
        isLastVideo: false,
        isPlaying: false
    });


    const [loadedData, setloadedData] = useState([]);







    useEffect(() => {

        gsap.to('#slider', {
            transform: 'translateX(' + -100 * video.videoid + '%)',
            duration: 1.25,
            ease: 'power1.inOut'
        },
        )



    })

    useGSAP(() => {
        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none '
            },
            onComplete: () => {
                setVideo((prev) => ({
                    ...prev,
                    startPlay: true,
                    isPlaying: true,
                }));

            }
        })
    })

    // eslint-disable-next-line no-unused-vars
    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((prev) => ({
                    ...prev, isEnd: true, videoid: i + 1
                }))
                break;

            case 'video-last':
                setVideo((prev) => ({
                    ...prev, isLastVideo: true
                }))
                break;
            case 'video-reset':
                setVideo((prev) => ({
                    ...prev, isLastVideo: false, videoid: 0
                }))
                break;
            case 'play':

                setVideo((prev) => ({
                    ...prev, isPlaying: !prev.isPlaying
                }))
                break;
            case 'pause':
                setVideo((prev) => ({
                    ...prev, isPlaying: !prev.isPlaying
                }))
                break;


            default:
                return video


        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        if (loadedData.length > 3) {
            if (!video.isPlaying) {
                videoRef.current[video.videoid].pause();
            }
            else {
                video.startPlay && videoRef.current[video.videoid].play();
            }
        }
    }, [video.startPlay, video.videoid, video.isPlaying, loadedData]);

    const handleloadedmetadata = (i, e) => setloadedData((pre) => [...pre, e]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[video.videoid]) {
            //animation for progress tracking
            let anim = gsap.to(span[video.videoid], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);
                    if (progress != currentProgress) {
                        currentProgress = progress;

                        gsap.to(videoDivRef.current[video.videoid], {
                            width: window.innerWidth < 760 ? '10vw' :
                                window.innerWidth < 1200 ? '10vw' : '4vw'
                        })
                        gsap.to(span[video.videoid], {
                            width: currentProgress + '%',
                            backgroundColor: 'white'
                        })
                    }
                },
                onComplete: () => {
                    if (video.isPlaying) {
                        gsap.to(videoDivRef.current[video.videoid], {
                            width: '12px'
                        })
                        gsap.to(span[video.videoid], {
                            backgroundColor: '#afafaf'
                        })
                    }
                }
            })
            if (video.videoid === 0) {
                anim.restart();
            }

            const animupdate = () => {
                anim.progress((videoRef.current[video.videoid].currentTime) /
                    highlightsSlides[video.videoid].videoDuration)


            }
            if (video.isPlaying) {
                gsap.ticker.add(animupdate);
            } else {
                gsap.ticker.remove(animupdate);
            }
        }

    },
        [video.videoid, video.startPlay]);

    return (
        <>
            <div
                className="flex items-center">
                {highlightsSlides.map((list, i) => (
                    <div key={list.id} id='slider'
                        className='sm:pr-20 pr-10'>
                        <div
                            className='video-carousel_container md:h-[70vh] sm:h-[50vh] sm:w-[70vw]'>
                            <div
                                className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                                <video id="video"
                                    playsInline={true}
                                    preload='auto' muted
                                    ref={(element) => {
                                        (videoRef.current[i] = element)
                                    }}
                                    src={list.video} type='video/mp4'
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({

                                            ...prevVideo, isPlaying: true

                                        }))
                                    }}
                                    onLoadedMetadata={(e) => handleloadedmetadata(i, e)}
                                    onEnded={() => {
                                        if (i !== 3) {
                                            handleProcess('video-end', i);
                                        } else {
                                            handleProcess('video-last');
                                        }
                                    }}
                                ></video>
                            </div>
                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text) => (
                                    <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div >
            <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray 
                backdrop-blue rounded-full'>
                    {videoRef.current.map((_, i) => (
                        <span key={i} ref={(element) => { videoDivRef.current[i] = element }}
                            className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative 
                        cursor-pointer '>
                            <span className='h-full w-full absolute rounded-full white'
                                ref={(element) => { videoSpanRef.current[i] = element }}></span>
                        </span>
                    ))}
                </div>

                <button className='control-btn'>
                    <img src=
                        {video.isLastVideo ? replayImg :
                            !video.isPlaying ? playImg : pauseImg
                        }
                        alt={video.isLastVideo ? 'replay' :
                            !video.isPlaying ? 'play' : 'pause'
                        }
                        onClick={video.isLastVideo ? () => handleProcess('video-reset') :
                            !video.isPlaying ? () => handleProcess('play') : () => handleProcess('pause')
                        }
                    />
                </button>
            </div>
        </>
    );
}


export default VideoCarousel;