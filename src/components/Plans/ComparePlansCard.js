


function ComparePlansCard(props) {
  const {
    product,
    img,
    name,
    nametext,
    ptext,
    saveprice,
    saveprice_percent,
    price,
    currency_period,
    billed_annually,
    billed_annually_text,
    subscribClass,
    subscribText,

  } = props;

  return (
    <>
      <div className={"cpcbox " + product}>
        <div className="product_img">
          <img src={img} alt=" " />
        </div>
        <div className="colorbox">
          <h3>
            {name}
            <span>{nametext}</span>
          </h3>
          <p>
            <span className="Earlybird_badge_tourist">{ptext}</span>
          </p>
          <div className="New_Product_Tiers_pricebox">
            {![null, "", undefined].includes(saveprice) ? (
              <div className="Earlybird_price">
                <del>{saveprice}</del>
                <span> {saveprice_percent}</span>
              </div>
            ) : (
              <></>
            )}

            <div className="New_Product_Tiers_price">
              {price}
              <small> {currency_period}</small>
            </div>
            <div className="New_Product_Tiers_priceannually">
              <strong>{billed_annually}</strong>
              <span>{billed_annually_text}</span>
            </div>
            <div className="TPP_plugin">
              <hr />
              <div class="TPP_plugin_devider">OR</div>
              <span>3 interest-free payment of AED 138.33</span>
            </div>
          </div>
        </div>

        <a
          href="#0"
          className={"btn btn-primary Buynow " + subscribClass}
        >
          {subscribText}
        </a>

        <div className="bao">
          {props?.BeneFitsData?.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.BFname}</span>
                {[true].includes(item.BFvalue) ? 
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/bao-true.svg" alt=" " />
                : <></>
                    }
                {[false].includes(item.BFvalue) ? 
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/bao-false.svg" alt=" " />
                : <></>
                    }
                {![null,true,'',false].includes(item.BFvalue) ? <p>
                {item.BFvalue}
                {![null,'',undefined].includes(item.BFlinkText) ? <a href={item.BFlink}>
                  {item.BFlinkText}
                    </a> : <></>
                    }
                </p> : <></>
                    }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ComparePlansCard;
