import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2>
                    <br />
                    <p className="header-text fs-18 fw-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, doloremque soluta! Voluptate dignissimos quis repellat maxime tempora recusandae earum totam, quidem, iste omnis exercitationem! Rem.</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    );
};

export default Header;