import { React, Helmet, useParams } from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";

function HowItWorks() {
  const { location, city } = useParams();
  return (
    <>
      <Header  />
      <div className="wrapper">
      <div class="container content-section">
        <div class="row about-content">
            <div class="col-12">
                <div class="left-block">
                	<div class="left-block-frame">
                    <h1>How Does the ENTERTAINER Work?</h1>

                        <p>The ENTERTAINER is full of exciting Buy One Get One Free offers for restaurants, beauty salons, health & fitness, leisure activities and many more. To make it even better our offers are always Buy One Get One Free, valid 7 days a week (excluding public holidays) and all year long!</p>
					</div>
                </div>

                <div class="embed-responsive embed-responsive-16by9">
                    <iframe  class="embed-responsive-item" src="https://b2cappassetscdn.theentertainerme.com/entertainer_how_to_use_28Jan.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>
        <div class="row tow-col-cont">
        	<div class="col-12 my-3 cont-col">
            	<p>Our App is set with loads of great features that will make your experience even more enjoyable! It’s simple to use and you always have your offers with you. Exclusive monthly offers and offers from new merchants are added every month. You can share these amazing offers by sharing your App with family and friends.</p>
                <p>The App also includes the ENTERTAINER Travel with over 500 hotels worldwide giving you the chance to stay at the world’s best hotels.</p>
                <p>For more information and details make sure to check out our <a href="https://hub.theentertainerme.com/'.Yii::$app->language.'/article-categories/faqs">FAQs</a> and to learn more about the App and get familiar with it.</p>
                <p>Let the fun begin!</p>
                <div class="two-img-btn">
                	<a href="https://itunes.apple.com/za/app/the-entertainer/id702813714?mt=8" target="_blank"><img alt=" " src="/images/btnapp-appstore.png" /> </a>
                	<a href="https://play.google.com/store/apps/details?id=com.theentertainerme.entertainer" target="_blank"><img alt=" " src="/images/btnapp-googleplay.png" /> </a>
                    
                </div>
            </div>
        </div>
    </div>
      </div>
      <Footer />
      <Helmet>
        <body className={"pgoutlets " + location + " " + city} />
      </Helmet>
    </>
  );
}

export default HowItWorks;
