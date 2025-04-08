/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtList, AtListItem, AtIcon, AtSlider } from "taro-ui";
import Taro from '@tarojs/taro';

import "./music.scss";

const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioContext, setAudioContext] = useState(null);
    const [currentSong, setCurrentSong] = useState({
        id: 1,
        title: "无播放",
        artist: "无播放",
        cover: "https://p2.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951167738811522.jpg"
    });

    const musicList = [
        {
            id: 1,
            title: "音乐1",
            artist: "艺术家1",
            cover: "https://p2.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951167738811522.jpg",
            src: 'https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/mp3/1.mp3'
        },
        {
            id: 2,
            title: "音乐2",
            artist: "艺术家2",
            cover: "https://p1.music.126.net/9kZl6NRj3HxmQQ8DqTjZ4Q==/109951167728108329.jpg",
            src: 'https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/mp3/2.mp3'
        },
        {
            id: 3,
            title: "音乐3",
            artist: "艺术家3",
            cover: "https://p2.music.126.net/dnxT0lpiU4gqHH_wvf1TYA==/109951167643767467.jpg",
            src: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/mp3/3.mp3"
        },
        {
          id: 4,
          title: "音乐4",
          artist: "艺术家4",
          cover: "https://p2.music.126.net/dnxT0lpiU4gqHH_wvf1TYA==/109951167643767467.jpg",
          src: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/mp3/4.mp3"
        },
        {
          id: 5,
          title: "音乐5",
          artist: "艺术家5",
          cover: "https://p2.music.126.net/dnxT0lpiU4gqHH_wvf1TYA==/109951167643767467.jpg",
          src: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/mp3/5.mp3"
        },
        {
          id: 6,
          title: "音乐6",
          artist: "艺术家6",
          cover: "https://p2.music.126.net/dnxT0lpiU4gqHH_wvf1TYA==/109951167643767467.jpg",
          src: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/mp3/6.mp3"
        }
    ];

    useEffect(() => {
        const audio = Taro.createInnerAudioContext();
        setAudioContext(audio);

        audio.onTimeUpdate(() => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        });

        audio.onEnded(() => {
            setIsPlaying(false);
            handleNextSong();
        });

        return () => {
            audio.destroy();
        };
    }, []);

    useEffect(() => {
        if (audioContext && currentSong) {
            audioContext.src = currentSong.src;
            if (isPlaying) {
                audioContext.play();
            }
        }
    }, [currentSong]);

    const handlePlayPause = () => {
        if (audioContext) {
            if (isPlaying) {
                audioContext.pause();
            } else {
                audioContext.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSliderChange = (value) => {
        if (audioContext) {
            const newTime = (value / 100) * duration;
            audioContext.seek(newTime);
            setCurrentTime(newTime);
        }
    };

    const handlePrevSong = () => {
        const currentIndex = musicList.findIndex(song => song.id === currentSong.id);
        const prevIndex = (currentIndex - 1 + musicList.length) % musicList.length;
        setCurrentSong(musicList[prevIndex]);
    };

    const handleNextSong = () => {
        const currentIndex = musicList.findIndex(song => song.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % musicList.length;
        setCurrentSong(musicList[nextIndex]);
    };

    return (
        <View className="music-box">
            <View className="music-header">
                {/* <Image className="current-cover" src={currentSong.cover} /> */}
                <View className="current-info">
                    <Text className="title">{currentSong.title}</Text>
                    <Text className="artist">{currentSong.artist}</Text>
                </View>
            </View>

            <View className="music-list">
                <AtList>
                    {musicList.map(song => (
                        <AtListItem
                          key={song.id}
                          title={song.title}
                          note={song.artist}
                          // thumb={song.cover}
                          onClick={() => setCurrentSong(song)}
                        />
                    ))}
                </AtList>
            </View>

            <View className="music-progress">
                <Text className="time-info">
                    {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} /
                    {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                </Text>
                <AtSlider
                  value={(currentTime / duration) * 100 || 0}
                  step={1}
                  max={100}
                  onChange={handleSliderChange}
                />
            </View>
            <View className="music-controls">
                <AtIcon value="prev" size="30" onClick={handlePrevSong} />
                <AtIcon
                  value={isPlaying ? "pause" : "play"}
                  size="40"
                  onClick={handlePlayPause}
                />
                <AtIcon value="next" size="30" onClick={handleNextSong} />
            </View>
        </View>
    );
};

export default Music;
