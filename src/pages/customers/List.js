import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';
import CustomerCard from "../../components/CustomerCard";

const List = () => {
    const history = useHistory();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)
            })
    }, []);

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(() => {
                const newCustomersState = customers.filter(customer => customer.id !== id)
                setCustomers(newCustomersState)
            })      
    }

    const handleEditCustomer = id => {  
        history.push(`/customers/edit/${id}`)
    }

    return (
        <Grid container spacing={2} sx={{ margin: '10px' }}>
            {customers.map(item => (
                <Grid item xs={12} md={4} key={item.id}>
                    <CustomerCard
                        id={item.id}
                        name={item.first_name}
                        lastname={item.last_name}
                        email={item.email}
                        avatar={item.avatar}
                        onRemoveCustomer={handleRemoveCustomer}
                        onEditCustomer={handleEditCustomer}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default List;


