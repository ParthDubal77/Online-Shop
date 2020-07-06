import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";
import { Jumbotron } from 'reactstrap';

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <FadeTransform in transformProps={{exitTransform: "scale(0.5) translateY(-50%)"}}>
        <Card>
          <CardImg src={item.image} alt={item.name} />
            <CardTitle><p>{item.name}</p></CardTitle>
        </Card>
      </FadeTransform>
    );
}

function Home(props) {
  return (
    <div>
      <div class="header-section">
        <div class="overlay">
          <div class="title">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h2><i class="fa fa-cart-plus"></i> Men's , Women's And Child's Clothing</h2>
            <p>We are a creative fashion design agency who makes beautiful <br />
              cloths for thousands of peoples.
            </p>
          </div>
        </div>
      </div>
      <div class="featured-products" id="about">
        <h1>Feature Products</h1>
        <hr />
        <div className="container">
      <div className="row align-items-start">
      <div className="col-12 col-md">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishErrMess}
          />
        </div>
        <div className="col-12 col-md">
          <RenderCard
            item={props.promotion}
            isLoading={props.promoLoading}
            errMess={props.promoErrMess}
          />
        </div>
        <div className="col-12 col-md">
          <RenderCard
            item={props.leader}
            isLoading={props.leaderLoading}
            errMess={props.leaderErrMess}
          />
        </div>
      </div>
    </div>
        </div>
        <Jumbotron>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-9">
                <div>
                  <h3>
                    <span class="disNum"> 30%</span> OFF FOR ALL  CHILDREN'S CLOTHING <br />
                    COLLECTION Rate Is :
                            </h3>
                  <div class="byrate">
                    <span class="rate" >
                      <div class="rating">
                        <span class="fa fa-stack">
                          <i class="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                      </div>
                    </span>
                  </div>
                  <br />
                  A limited-time offer is any kind of discount, deal, special gift
                  , or reward a buyer can get if they make a purchase from you during a certain time period
              </div>
              </div>
              <div class="col-lg-3">
                <div class="shopNow">
                  <a href="/menu"><button>SHOP NOW</button></a>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div class="cloths" >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="image">
                  <img
                    src="assets/images/502.png" />
                </div>
              </div>
              <div class="col-lg-7">
                <div class="body">
                  <h2>
                    Children's clothing
                  </h2>
                  <p>
                    Children's clothing is often more casual than adult clothing, fit for play and rest.
                    Hosiery is commonly used. More recently, however, a lot of childrenswear is heavily
                    influenced by trends in adult fashion. Due to the rise of social media platforms such as
                    Instagram,  celebrities and fashion bloggers have been using their accounts
                    to post pictures of their children wearing luxury
        </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-7">
                <div class="body">
                  <h2>
                    Men’s Clothing
            </h2>
                  <p>
                    Men’s Clothing! Learn men’s clothing names in English with ESL printable pictures
                    In most cultures, gender differentiation of clothing is considered appropriate.
                    The differences are in styles, colors, and fabrics. For example, In Western societies,
                    skirts, dresses and high-heeled shoes are usually seen as women’s clothing,
                    while neckties are usually seen as men’s clothing.
            </p>
                </div>

              </div>
              <div class="col-lg-5">
                <div class="image">
                  <img
                    src="assets/images/50.jpg" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5">
                <div class="image">
                  <img
                    src="assets/images/501.jpg" />
                </div>
              </div>
              <div class="col-lg-7">

                <div class="body">
                  <h2>
                    Women’s Clothing
            </h2>
                  <p>
                    There are so many terms for women’s clothing, they boggle the mind–dolmen sleeves,
                    pencil skirt,  Unfortunately, they don’t always come to mind as you’re writing.
                    Not to worry.I collected them for myself and will share them with you.
                    Please add any others you use in your writing. There’s no way my list can be exhaustive
                    when we’re discussing women’s outfits.
            </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
    
export default Home;