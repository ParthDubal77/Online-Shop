import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="row">
                <div className='col-md-5'>
                    <img height="500px" width="300px" src={dish.image} alt={dish.name} />
                </div>
                <div className='col-md-7'>
                    <h2>{dish.name}</h2>
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
                            <i class="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                            <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                    </div>
                    <h5>${dish.price}</h5><hr />
                    <h3>Description:</h3><p>{dish.description}</p>
                    <CommentForm dish={dish}/>
                </div>
            </div>

        )
    }
    else {
        return (<div></div>)
    }
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Products</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <RenderDish dish={props.dish} />
                </div>
            </div>
        );
    }
    else {
        return <div />
    }
}

export class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
            cartdishes: []
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ });
    }

    handleSubmit = (dish) => {
        let newst = [this.state.cartdishes,dish];
        this.setState ({ 
            cartdishes : newst
        });
    }
    render() {
        return (
            <div>
                <Button className="add round" onClick={(dish)=> this.handleSubmit(dish)}>Add to Cart</Button>    
                <Button className="add round">Go to Cart</Button>        
            </div>
        );
    }
}

export default DishDetail