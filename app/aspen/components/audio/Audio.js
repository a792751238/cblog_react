/**
 * Created by easterCat on 2018/2/28.
 */
import React from 'react';
import './audio.scss';
import {Icon} from 'antd';
import sound from '../../../images/ic_sound 3.png';
import sound_g from '../../../images/ic_sound-2.gif';
import {baseUrl} from '../../../../app.config';

class Audio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGetTotalTime: false,
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: this.copyAudio ? this.copyAudio.duration : 0, //当前歌曲的总时间
            playStatus: false, //true为播放状态，false为暂停状态
        };

        this.updatePlayStatus = () => {
            let audio = this.copyAudio;
            if (this.state.playStatus) {
                audio.play();
            } else {
                audio.pause();
            }
            this.setState({currentTotalTime: audio.duration});
        };

        this.play = () => {
            this.setState({playStatus: !this.state.playStatus}, () => {
                this.updatePlayStatus();
            });
        };

        this.changeCurrentTime = () => {
            let audio = this.copyAudio;
            this.setState({
                currentTime: audio.currentTime
            });
            if (audio.currentTime >= this.state.currentTotalTime) {
                this.setState({
                    playStatus: false
                })
            }
        }
    }

    componentDidMount() {
        const self = this;

        let timeInterval = setInterval(() => {
            if (self.copyAudio) {
                if (!isNaN(self.copyAudio.duration)) {
                    self.setState({
                        currentTotalTime: self.copyAudio.duration,
                        isGetTotalTime: true
                    });
                }
            } else {
                clearInterval(timeInterval);
                return;
            }
        }, 0);
    }

    render() {
        let {audioId} = this.props;

        return (
            <div className="player">
                <Controls isPlay={this.state.playStatus} onPlay={this.play}/>
                <Time currentTime={this.state.currentTime} currentTotalTime={this.state.currentTotalTime}/>
                <audio id="audio"
                       ref={(audio) => {
                           this.copyAudio = audio;
                       }}
                       src={`${baseUrl}/files/${audioId}`}
                       onTimeUpdate={(e) => this.changeCurrentTime()}
                ></audio>
            </div>
        )
    }
}


function Controls(props) {
    return (
        <div className="controls">
            <div className="play" onClick={props.onPlay}>
                {
                    props.isPlay ? <img src={sound_g} alt=""/> : <img src={sound} alt=""/>
                }
            </div>
        </div>
    )
}

function Time(props) {
    return (
        <div className="time">
            <span className="current">{timeConvert(props.currentTime)}</span>
            <span>/</span>
            <span className="total">{timeConvert(props.currentTotalTime)}</span>
        </div>
    )

    function timeConvert(timestamp) {
        let minutes = Math.floor(timestamp / 60);
        let seconds = Math.floor(timestamp - (minutes * 60));
        timestamp = minutes + ':' + seconds;
        return timestamp;
    }
}


export default Audio;
