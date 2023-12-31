import React from 'react'
import { useDispatch } from 'react-redux'
import { productCategory } from '../../../redux/action/action';
import axios from 'axios';
import Heading from './Heading';

const CategoryBtns = () => {

    // get dispatch function
    const dispatch = useDispatch();

    // get api handler for the update categories
    const apiHanadler = async (key) => {
        try {
            const result = await axios.get("http://localhost:5000/categorysApi/" + key);
            dispatch(productCategory(result.data));
        } catch (err) {
            console.log(err);
            dispatch(productCategory([]));
        }
    }

    const generalHandler = () => {
        console.log("general..")
        dispatch(productCategory([]));
    }

    const ladiesHandler = () => {
        console.log("ladies..")
        apiHanadler("Ladies");
    }

    const mensHanlder = () => {
        console.log("Mens..")
        apiHanadler("Mens");
    }

    const childrenHander = () => {
        console.log("Childrens..");
        apiHanadler("Childrens");
    }

    return (
        <div className='mb-4 container-xl container-fluid'>
            <Heading/>
            <div>
                <button
                    onClick={generalHandler}
                    className="btn btn-outline-dark btn-dark text-light me-3 mt-2">General
                </button>
                <button
                    onClick={ladiesHandler}
                    className="btn btn-outline-warning me-3 mt-2">Ladie's
                </button>
                <button
                    onClick={mensHanlder}
                    className="btn btn-outline-info me-3 mt-2">Men's
                </button>
                <button
                    onClick={childrenHander}
                    className="btn btn-outline-danger me-3 mt-2">Children's
                </button>
            </div>
        </div>
    )
}

export default CategoryBtns