import {
    ADDPRODUCT_SUCCESSFULLY,
    ADDPRODUCT_FAILED,
    ADD_PRODUCTWINDOW_CLOSED,
    ADDPRODUCT_CLEARERROR,
    ADDPRODUCT_CLEARMSG    
} from './ActionTypes'
import fetch from 'node-fetch';

export const AddYourProduct = (productDetails) => async (dispatch) => {

    try{
            if(productDetails)
            {
            let serviceData = {
                method :"POST",
                credentials: 'include',
                headers: { 
                    'Accept' : 'application/json, text/plain',
                    'content-type': 'application/json',
                    'Authorization': null
                },
                body : JSON.stringify(productDetails)
            }

            let response =  await fetch("http://localhost:5000/Product/AddProduct", serviceData);
            let responseData = await response.json();

            if(responseData.Success)
            {
                dispatch({
                    type: ADDPRODUCT_SUCCESSFULLY,
                    payload: responseData,
                    ErrorMsg: ""
                })
            }
            else{              
                dispatch({
                    type: ADDPRODUCT_FAILED,
                    payload: responseData,
                    ErrorMsg: ""
                })
            }
        }

    }
    catch(error)
    {
        dispatch({
            type: ADDPRODUCT_FAILED,
            payload: {
                Success: false, 
                ErrorMsg: ""
            }
        })
    }    
};

export const AddProductOnError = (error) => (dispatch) => {

    dispatch({
        type: ADDPRODUCT_FAILED,
        payload: {
            ErrorMsg : error
        }
    })
};

export const WindowClosed = () => async (dispatch) =>{
    dispatch({
        type: ADD_PRODUCTWINDOW_CLOSED,
        payload: {
            Success: false,
            ErrorMsg: ""
        }
    })
};

export const ClearError = (isError, customerData) => (dispatch) =>{

    debugger;
   isError ?  dispatch({
        type: ADDPRODUCT_CLEARERROR           
    })
    : dispatch({
        type: ADDPRODUCT_CLEARMSG
    })
}
