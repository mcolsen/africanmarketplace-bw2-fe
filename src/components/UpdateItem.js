import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { axiosWithAuth } from '../modules/axiosWithAuth';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UpdateItem() {
    const [form, setForm] = useState({
        item: "",
        description: "",
        price: "",
        quantity: "",
        location: "",
    });
    axiosWithAuth()
        .put('https://marketplace-backend-webft-70.herokuapp.com/api/profile/:id/listings/:listingid',)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    // const itemSchema = yup.object().shape({
    //     item: yup.string().required("Name required"),
    //     description: yup.string().required("Description required"),
    //     price: yup.string().required("Price required"),
    //     quantity: yup.number().min(0).required("Quantity required"),
    //     location: yup.string().required("Location required"),
    // });
    // const [buttonOn, setButtonOn] = useState(false);

    // useEffect(() => {
    //     itemSchema.isValid(form).then((validity) => {
    //         setButtonOn(validity);
    //     });
    // }, [form]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm({ ...form, [name]: value });
    //     console.log(form)
    // }
    return (
        // <Container>
            <h1>Add new item listing</h1>
        //     <Form onSubmit={UpdateItem}>
        //         <Form.Group controlId="itemName">
        //             <Form.Label>Name</Form.Label>
        //             <Form.Control
        //                 name="item"
        //                 type="text"
        //                 placeholder="Enter the name of your item"
        //                 onChange={handleChange}
        //             ></Form.Control>
        //         </Form.Group>
        //         <Form.Group controlId="itemDescription">
        //             <Form.Label>Description</Form.Label>
        //             <Form.Control
        //                 name="description"
        //                 type="text"
        //                 placeholder="Enter a description of your item"
        //                 onChange={handleChange}
        //             ></Form.Control>
        //         </Form.Group>
        //         <Form.Group controlId="itemPrice">
        //             <Form.Label>Price</Form.Label>
        //             <Form.Control
        //                 name="price"
        //                 type="text"
        //                 placeholder="Enter the price of your item"
        //                 onChange={handleChange}
        //             ></Form.Control>
        //         </Form.Group>
        //         <Form.Group controlId="itemQuantity">
        //             <Form.Label>Quantity</Form.Label>
        //             <Form.Control
        //                 name="quantity"
        //                 type="number"
        //                 placeholder="Enter the quantity available for sale"
        //                 onChange={handleChange}
        //             ></Form.Control>
        //         </Form.Group>
        //         <Form.Group controlId="itemLocation">
        //             <Form.Label>Location</Form.Label>
        //             <Form.Control
        //                 name="location"
        //                 type="text"
        //                 placeholder="Enter the location of your item"
        //                 onChange={handleChange}
        //             ></Form.Control>
        //         </Form.Group>
        //         <Button variant="primary" type="submit" disabled={!buttonOn}>
        //             Submit
		// 		</Button>
        //     </Form>
        // </Container>
    )
}
//create form