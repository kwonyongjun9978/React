import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const ProductDetail = () => {
    const {productId} = useParams()
    const item = data.find(item => item.id === productId)
    const navigate = useNavigate()

    const onHome = () => {
        navigate('/')
    }

    const onList = () => {
        navigate(-1)
    }

    return (
        <div className='item'>
            <h2>용준이의 상세 페이지</h2>
            <h3>작품명 : {item.name} / 가격 : {item.price}</h3>
            <p><img src={item.photo} alt={item.name} /></p>
            <p>제품 설명 : {item.description}</p>

            <button onClick={onHome}>Home</button>
            <button onClick={onList}>List</button>
        </div>
    );
};

export default ProductDetail;