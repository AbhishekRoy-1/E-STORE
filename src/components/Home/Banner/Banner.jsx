import "./Banner.scss";
import BannerImg from "../../../assets/banner.png";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h>SALE</h>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>

                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt=""/>
        </div>
    </div>;
};

export default Banner;
