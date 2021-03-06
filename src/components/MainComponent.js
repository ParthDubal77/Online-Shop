import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Login from "./LoginComponent";
import Signup from "./SignupComponent";
import Contact from "./ContactComponent";
import AboutUs from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Cart from "./CartComponent";
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import {
  postFeedback,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
 
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    )
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS, 
        leaders: LEADERS, 
        promotions: PROMOTIONS,
        cartdishes: []
    };
}
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.state.dishes.isLoading}
          dishErrMess={this.state.dishes.errMess}
          promotion={
            this.state.promotions.filter(promo => promo.featured)[0]
          }
          promoLoading={this.state.promotions.isLoading}
          promoErrMess={this.state.promotions.errMess}
          leader={
            this.state.leaders.filter(leader => leader.featured)[0]
          }
          leaderLoading={this.state.leaders.isLoading}
          leaderErrMess={this.state.leaders.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }

          comments={this.state.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch location={this.props.location}>
                          <Route path="/home" component={HomePage} />
                          <Route exact path="/aboutus" component={() => (<AboutUs />)} />
                          <Route exact path="/login" component={() => (<Login />)} />
                          <Route exact path="/signup" component={() => (<Signup />)} />
                          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                          <Route path="/menu/:dishId" component={DishWithId} />
                          <Route exact path="/cart" component={() => (<Cart dishes={this.state.cartdishes} />)} />
                          <Route exact path="/contactus" component={() => (
                            <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />)}/>
                          <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);