import React from 'react';
import './Header.css';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import frame1 from "./assets/Frame 560.png";
import frame2 from "./assets/Frame 560.png";
import frame3 from "./assets/Frame 560.png";
import frame4 from "./assets/Frame 560.png";
import frame5 from "./assets/Frame 560.png";
import frame6 from "./assets/Frame 560.png"

function Header() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = 6;

    const images = [frame1, frame2, frame3, frame4, frame5, frame6];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className='Header'>
            <div className="left-part">
                <span>Woman’s Fashion</span>
                <span>Men’s Fashion</span>
                <span>Electronics</span>
                <span>Home & Lifestyle</span>
                <span>Medicine</span>
                <span>Sports & Outdoor</span>
                <span>Baby’s & Toys</span>
                <span>Groceries & Pets</span>
                <span>Health & Beauty</span>
            </div>
            <div className="right-part">
                <div className="carousel">
                    <img
                        src={images[activeStep]}
                        alt={`Step ${activeStep + 1}`}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
                <MobileStepper
                    variant="dots"
                    steps={steps}
                    position="static"
                    activeStep={activeStep}
                    className='mobile'
                    sx={{ maxWidth: 400, flexGrow: 1, background: "0"}}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === steps - 1}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </div>
        </div>
    );
}

export default Header;
