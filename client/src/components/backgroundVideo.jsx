import "./css/backgroundVideo.css"


export const BackgroundVideo = () => {
    return (
        <div>
        <video autoPlay muted loop playsInline className="background-video">
        <source src="/ExomineBackgroundVideo.mp4" type="video/mp4" />
        </video>
        </div>
    )
}