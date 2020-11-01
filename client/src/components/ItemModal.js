import React from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends React.Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
    }
    render() {
        return (
            <div>
                <Button
                  color="dark"
                  style={{marginBottom: '2em'}}
                  onClick={this.toggle}
                >Add Item </Button>
            <Modal
              isOpen = {this.state.modal}
              toggle = {this.toggle}
            >
                <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label htmlFor="item">Item &nbsp;&nbsp;</Label>
                            <Input
                              type="text"
                              name="name"
                              id="item"
                              placeholder="add items"
                              onChange={this.onChange}
                            /> 
                            <Button
                              color="dark"
                              style={{marginTop: '2em'}}
                              block
                            >Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);