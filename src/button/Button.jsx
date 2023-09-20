import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios'


const Button = () => {

    function callApi(){
        const URL = "https://dbs-digital.myfreshworks.com/crm/sales";

        const CONFIG = {
            headers: {
              Authorization: "Token token=pWIwgJ1gMqWscTMk7mQbCg",
            },
          };

        alert('api called')
        axios
        .get(`${URL}/api/cpq/products`, CONFIG)
        .then(res => console.log(res.data))
        .catch(error => {console.log(error)})
    }

    return <button onClick={callApi}>Clickme</button>;
}
export default Button;
