import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card> 
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                    <CardTitle><p> {dish.name} <br /> ${dish.price}</p></CardTitle>
                </Link>      
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-3 mb-1">
                    <RenderMenuItem dish={dish} />
                </div>    
            );
        });

        console.log('Menu component render invoked')

        return ( 
            <div className="container">
                <div className="row products">
                    <div className="col-12">
                        <h1>PRODUCTS</h1>
                        <hr />
                    </div>    
                </div>    
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;