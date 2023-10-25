import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { GrView, GrLike, GrTooltip} from "react-icons/gr";

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0])
                console.log(data)
            });
    }, [videoId]);

    return (
        <section id='videoViewPage'>
            {videoDetail && (
                <div className='video__view'>
                    <div className="video__play">
                        <ReactPlayer
                            play={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='100%'
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                    <div className="video__info">
                        <h2 className="video__title">
                            {videoDetail.snippet.title}
                        </h2>
                        <div className="video__channel">
                            <div className="id">
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            </div>
                            <div className="count">
                                <span className='view'><GrView /> {videoDetail.statistics
                                    .viewCount}</span>
                                <span className="like"><GrLike /> {videoDetail.statistics
                                    .likeCount}</span>
                                <span className="comment"><GrTooltip /> {videoDetail.statistics.commentCount}</span>
                            </div>
                            <div className='desc'>
                                <span>{videoDetail.snippet.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Video