import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './page03/Home';
import About from './page03/About';
import Profile from './page03/Profile';
import Front from './page03/Front';

const data= [
    {title: 'html', info: 'HTML입니다.'},
    {title: 'css', info: 'CSS입니다.'},
    {title: 'javascript', info: 'JAVASCRIPT입니다.'},
    {title: 'react', info: 'REACT입니다.'},
    {title: 'vue', info: 'VUE입니다.'}
]
const App03 = () => {
    return (
        <BrowserRouter>
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>

                    <li><Link to='/front/html'>html</Link></li>
                    <li><Link to='/front/css'>css</Link></li>
                    <li><Link to='/front/javascript'>javascript</Link></li>
                    <li><Link to='/front/react'>react</Link></li>
                    <li><Link to='/front/vue'>vue</Link></li>
                </ul>
            </>
            {/* 화면에 보이는 영역*/}
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/front/:name' element={<Front data={data}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App03;