import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/images')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Image Carousel</h1>
                <Carousel>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`img-${index}`} />
                        </div>
                    ))}
                </Carousel>
            </header>
        </div>
    );
}

export default App;
