import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
    data: {},
    error: null,
    loading: true
}

const reducer = (state, action) => {

    console.log(action.type)
    switch(action.type) {
        case 'SUCCESS':
            return{
                data: action.payload,
                error: null,
                loading: false
            }
        case 'ERROR':
            return{
                date: {},
                error: '에러...',
                loading: true
            }
        default:
            return state        
    }
}

const Test05 = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    const [id, setId] = useState(1)
    const [search, setSearch] = useState('')

    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(() => {

        console.log(id)
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        axios.get(url)
            .then(res => {
                dispatch({type: 'SUCCESS', payload: res.data})
            })
            .catch(error => {
                dispatch({type: 'ERROR'})
            })
    }, [search])

    return (
        <div>
            <h3>
                ID 입력 (1~5000) : <input type='text' value={ id } onChange={ (e) => setId(e.target.value)} />
                <button onClick={() => onSearch(id)}>검색</button>
            </h3>
            <h2>
          
                {
                    state.data && state.loading ? '로딩 중' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test05;