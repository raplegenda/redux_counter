import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { increment, reset, setMin, setMax } from './Action';
import './Counter.css'
import { Button } from '@mui/material';

interface Props {
    count: number;
    min: number;
    max: number;
    increment: () => void;
    reset: () => void;
    setMin: (value: number) => void;
    setMax: (value: number) => void;
}

const Counter: React.FC<Props> = ({ count, min, max, increment, reset, setMin, setMax }) => {

    useEffect(() => {
        if (count > max || count < min) {
            reset();
        }
    }, [count, max, min, reset]);



    const MinInputRef = useRef<HTMLInputElement>(null);

    const handleMinClick = () => {
        if (MinInputRef.current) {
            MinInputRef.current.select();
        }
    };

    const MaxInputRef = useRef<HTMLInputElement>(null);

    const handleMaxClick = () => {
        if (MaxInputRef.current) {
            MaxInputRef.current.select();
        }
    };



    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMin(Number(e.target.value));
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.target.value));
    };


    const counterStyle = {
        color: count >= max ? 'red' : 'rgb(94,170,195)'
    };


    if (min > max) {

        return (
            <div
                style={{
                    minHeight: "100vh",
                    minWidth: "100vw",
                    backgroundColor: 'rgb(41,44,53)',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "50px"
                }}>
                <div className='box'>
                    <div className='inner-box-1'>
                        <div className='value-box'>
                            <span>
                                Min Value:
                            </span>
                            <input
                                ref={MinInputRef}
                                onClick={handleMinClick}
                                type="number"
                                value={min}
                                onChange={handleMinChange}

                            />
                        </div>
                        <div className='value-box'>
                            <span>
                                Max Value:
                            </span>
                            <input
                                ref={MaxInputRef}
                                onClick={handleMaxClick}
                                type="number"
                                value={max}
                                onChange={handleMaxChange}

                            />
                        </div>
                    </div>
                    <div className='inner-box-2'>
                        <Button
                            disabled
                            variant='contained'
                        >
                            Set</Button>
                    </div>
                </div>

                <div className='box'>
                    <div className='inner-box-1'>
                        <span className='error'>Error</span>
                    </div>
                    <div className='inner-box-2' style={{ justifyContent: "space-around" }}>
                        <Button
                            variant='contained'
                            disabled

                        >
                            Increment</Button>
                        <Button
                            variant='contained'
                            disabled
                        >
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                minWidth: "100vw",
                backgroundColor: 'rgb(41,44,53)',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px"
            }}>
            <div className='box'>
                <div className='inner-box-1'>
                    <div className='value-box'>
                        <span>
                            Min Value:
                        </span>
                        <input
                            ref={MinInputRef}
                            onClick={handleMinClick}
                            type="number"
                            value={min}
                            onChange={handleMinChange}
                        />
                    </div>
                    <div className='value-box'>
                        <span>
                            Max Value:
                        </span>
                        <input
                            ref={MaxInputRef}
                            onClick={handleMaxClick}
                            type="number"
                            value={max}
                            onChange={handleMaxChange}
                        />
                    </div>
                </div>
                <div className='inner-box-2'>
                    <Button
                        onClick={reset}
                        variant='contained'
                    >
                        Set
                    </Button>
                </div>
            </div>

            <div className='box'>
                <div className='inner-box-1'>
                    <span style={counterStyle}>Count: {count}</span>
                </div>
                <div className='inner-box-2' style={{ justifyContent: "space-around" }}>
                    <Button
                        onClick={increment}
                        variant='contained'
                        disabled={count >= max}
                    >
                        Increment
                    </Button>
                    <Button
                        onClick={reset}
                        variant='contained'
                        disabled={count === min}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state: any) => ({
    count: state.count,
    min: state.min,
    max: state.max
});

const mapDispatchToProps = {
    increment,
    reset,
    setMin,
    setMax
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
