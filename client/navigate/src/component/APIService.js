import React from 'react';
const baseURL = 'http://localhost:9000/api/service-users'

const APIService = {
    getUsers() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    postUser(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },
    
    deleteUser(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },

    updateUser(user) {
        return fetch(baseURL + "/" + user._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    }

}
 
export default APIService;