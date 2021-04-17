/* eslint-disable no-multi-assign */
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { productValidationSchema } from '../../../yupValidator/yupProductValidation';
import Spinner from '../../Spinner/Spinner';

function AdProducts() {
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(false);
    const uploadProduct = async (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('growUser'));
        try {
            const image = new FormData();
            console.log(product);
            setSpinner(true);
            image.set('key', '14966dcb668bd4afd338e132de02b3c7');
            image.append('image', product.imageUrl);
            const uploadImage = await axios.post(`https://api.imgbb.com/1/upload`, image);
            if (!uploadImage.status === 200) {
                toast.error('Something Want Wrong! img');
                setSpinner(false);
                return;
            }
            const imageUrl = (product.imageUrl = uploadImage.data.data.display_url);
            setProduct({ ...product, imageUrl });
            console.log(product);
            const productValidation = await productValidationSchema.isValid(product, {
                abortEarly: false,
            });
            if (!productValidation) {
                toast.error('Something Want Wrong! validation');
                setSpinner(false);
                return;
            }
            const uploadProductToServer = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}api/products/saveProduct`,
                product,
                {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    },
                }
            );
            toast.success('Product saved successfully');
            setSpinner(false);
            setProduct({});
            e.target.image.value = '';
            e.target.type.value = '';
            console.log(uploadProductToServer);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="w-50 p-5">
            {spinner && <Spinner />}

            <Form onSubmit={(e) => uploadProduct(e)}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="name"
                        value={product.name || ''}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        name="price"
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        value={product.price || ''}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Type</Form.Label>
                    <select
                        className="form-select"
                        onBlur={(e) => setProduct({ ...product, type: e.target.value })}
                        name="type"
                        aria-label="Default select example"
                    >
                        <option defaultValue>Open this select menu</option>
                        <option value="lunch">lunch</option>
                        <option value="breakfast">breakfast</option>
                        <option value="dinner">dinner</option>
                        <option value="ifter">ifter</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicWeight">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        name="weight"
                        value={product.description || ''}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicWeight">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        required
                        type="file"
                        name="image"
                        onChange={(e) => setProduct({ ...product, imageUrl: e.target.files[0] })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
        </div>
    );
}

export default AdProducts;
