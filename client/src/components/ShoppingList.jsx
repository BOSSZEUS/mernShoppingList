import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import {v4 as uuid} from 'uuid'

import {connect } from 'react-redux'
import {getItems} from '../actions/itemActions'
import { PropTypes } from "prop-types";


class ShoppingList extends Component{
    componentDidMount(){
        this.props.getItems()
    }

    render () {
        
        const {items} = this.props.item
        return (
            <Container>
                    <Button color="dark" style={{marginBottom: '5rem', marginTop: '2rem'}} onClick={() => {
                        const name = prompt('enter item')
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name}]
                            }))
                        }
                    }}>
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                    {items.map(({id, name })=>(
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            <Button
                            className='remove-btn' color='danger' size="sm" onClick={()=> {
                                this.setState(state => ({
                                    items: state.items.filter(item => item.id !== id)
                                }))
                            }}>&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}

                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
// when you bring in an action from redux it's set as a prop
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    // from our reducer item
    item: state.item
})
// mapstatetoprops maps our item state into component property
export default connect(mapStateToProps, {getItems})(ShoppingList)