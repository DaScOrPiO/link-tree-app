import React from 'react'
import Homepage from './pages/homepage';
import ContactPage from './pages/contact';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;