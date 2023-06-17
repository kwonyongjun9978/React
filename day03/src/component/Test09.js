import React from 'react';

import image01 from '../img/image01.jpg';
import image02 from '../img/image02.png';
import image03 from '../img/image03.jpg';
import image04 from '../img/image04.jpg';
import image05 from '../img/image05.jpg';
import image06 from '../img/image06.jpg';
import image07 from '../img/image07.jpg';

const Test09 = () => {
    return (
        <div>
            <img src={image01} style={{width:200, height: 200}}/>
            <img src={image02} style={{width:200, height: 200}}/>
            <img src={image03} style={{width:200, height: 200}}/>
            <img src={image04} style={{width:200, height: 200}}/>
            <img src={image05} style={{width:200, height: 200}}/>
            <img src={image06} style={{width:200, height: 200}}/>
            <img src={image07} style={{width:200, height: 200}}/>
        </div>
    );
};

export default Test09;

/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
[형식]
import 참조변수 from '이미지경로';
*/