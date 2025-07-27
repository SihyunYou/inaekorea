import React, { useState, useEffect } from "react";
import './PortfolioViewer.css';
import Carousel from './Carousel';
import CardSlider from './CardSlider';

export default function PortfolioViewer({ portfolioData }) {
    const [currentName, setCurrentName] = useState('천안아산');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        setIsNew(true);
    }, [currentName]);

    return (
        <div className="container py-4">
            <div style={{ textAlign: 'center' }}>
                <h6
                    className="fw-bold mb-4"
                    style={{
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        backgroundColor: '#00A86C',
                        padding: '6px 12px',
                        borderRadius: '12px',
                        color: 'white'
                    }}
                >
                    프로그램
                </h6>
            </div>

            <Carousel items={portfolioData} onSlideChange={setCurrentName} />
            <CardSlider portfolioData={portfolioData} selectedName={currentName} isNew={isNew} />
        </div>
    );
}
