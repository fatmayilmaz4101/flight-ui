"use client";
import "./style.css";
import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Card } from 'primereact/card';
import { FormField } from '@/app/components/input/form-field';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface RoundTripType {
    departure: string;
    arrival: string;
}
interface OptionType {
    name: string;
    key: string;
}
interface DropdownOptionType {
    name: string;
    key: string;
}

export default function HomePage() {
    const { control, handleSubmit } = useForm<RoundTripType>();
    const [selectedButton, setSelectedButton] = useState<string>('roundTrip');

    const handleRoundTripClick = () => {
        setSelectedButton('roundTrip');
    };
    const handleOneWayClick = () => {
        setSelectedButton('oneWay');
    };

    const onSubmit = async (data: RoundTripType) => {
        console.log(data);
    };
    const dropdownOptions: DropdownOptionType[] = [
        { name: 'Lowest Price', key: 'L' },
        { name: 'Highest Price', key: 'H' },
    ];
    const options: OptionType[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([options[1]]);

    const onOptionChange = (e: CheckboxChangeEvent) => {
        let _selectedOptions = [...selectedOptions];

        if (e.checked)
            _selectedOptions.push(e.value);
        else
            _selectedOptions = _selectedOptions.filter(option => option.key !== e.value.key);

        setSelectedOptions(_selectedOptions);
    };

    const items: MenuItem[] = [
        {
            label: 'Deals',
            icon: 'pi pi-bookmark-fill',
        },
        {
            label: 'Discover',
            icon: 'pi pi-globe',
        },
    ];
    const start = (
        <div className="navbar">
            <img alt="logo" src="/images/logo.png" height="30" className="mr-2"></img>
            <h3 className="navbar-title">PLANE SCAPE</h3>
        </div>
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <Menubar model={items} />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <>
            <div className="card">
                <Menubar start={start} end={end} />
            </div>
            <div className="grid-container">
                <div className="input-card-main">
                    <div className="input-flight-card-main">
                        <Card className="input-card">
                            <div className='title'>
                                <h3>
                                    <img alt="logo" src="/images/plane.png" height="18" className="mr-2"></img>
                                    BOOK YOUR FLIGHT
                                </h3>
                                <div className='button-group'>
                                    <Button
                                        label="Round Trip"
                                        className={`p-button-help custom-radius-round-trip ${selectedButton === 'roundTrip' ? 'selected' : ''}`}
                                        onClick={handleRoundTripClick}
                                    />
                                    <Button
                                        label="One Way"
                                        className={`p-button-help custom-radius-one-way ${selectedButton === 'oneWay' ? 'selected' : ''}`}
                                        onClick={handleOneWayClick}
                                    />
                                </div>
                            </div>
                            {selectedButton === 'roundTrip' && (
                                <div className='form-group'>
                                    <div className="input-group">
                                        <div >
                                            <FormField imageSrc='/images/departure.png' className='input-first' type="text" name="departure" label="Departure" control={control} />
                                        </div>
                                        <div >
                                            <FormField imageSrc='/images/arrival.png' className='input-second' type="text" name="arrival" label="Arrival" control={control} />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div>
                                            <FormField
                                                type="calendar" name="flightDate" label="Flight Date" control={control} className='input-first'
                                            />
                                        </div>
                                        <div >
                                            <FormField
                                                type="calendar"
                                                name="flightDate"
                                                label="Flight Date"
                                                control={control}
                                                className="custom-calendar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedButton === 'oneWay' && (
                                <div className="input-group">
                                    <div >
                                        <FormField className='input-first' type="text" name="departures" label="Departures" control={control} />
                                    </div>
                                    <div >
                                        <FormField className='input-second' type="text" name="landing" label="Landing" control={control} />
                                    </div>
                                </div>
                            )}
                            <Button className='p-button-submit' label="Show flights" onClick={handleSubmit(onSubmit)} />
                        </Card>
                        <div className="grid-container">
                            <div className="flight-card-main">
                                <Card className="flight-card">
                                    <div className="main">
                                        <h3>Milano-Madrid</h3>
                                        <div className="flight-info-main">
                                            <div className="flight-info-item">
                                                <h4 className="departure-title">Departure</h4>
                                                <h3 className="clock-title">7:30 AM</h3>
                                                <h3 className="airport-title">Airport: MXP</h3>
                                            </div>
                                            <div className="divider">
                                            </div>
                                            <div className="flight-info-item">
                                                <h4 className="country-name">Italia</h4>
                                                <img alt="logo" src="/images/plane.png" height="18" className="mr-2"></img>
                                                <h3>2h 25m (Nonstop)</h3>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="flight-info-item">
                                                <h4 className="departure-title">Arrival</h4>
                                                <h3 className="clock-title">7:30 AM</h3>
                                                <h3 className="airport-title">Airport: MAD</h3>

                                            </div>
                                        </div>
                                        <div className="flight-price-info">
                                            <div className="price-container">
                                                <h3 className="price-title">Price: $200</h3>
                                                <h4 className="departure-title">Round Trip</h4>
                                            </div>
                                            <div className="button-container">
                                                <Button className="book-flight-button">Book Flight</Button>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="flight-card">
                                    <div className="main">
                                        <h3>Milano-Madrid</h3>
                                        <div className="flight-info-main">
                                            <div className="flight-info-item">
                                                <h4 className="departure-title">Departure</h4>
                                                <h3 className="clock-title">7:30 AM</h3>
                                                <h3 className="airport-title">Airport: MXP</h3>
                                            </div>
                                            <div className="divider">
                                            </div>
                                            <div className="flight-info-item">
                                                <h4 className="country-name">Italia</h4>
                                                <img alt="logo" src="/images/plane.png" height="18" className="mr-2"></img>
                                                <h3>2h 25m (Nonstop)</h3>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="flight-info-item">
                                                <h4 className="departure-title">Arrival</h4>
                                                <h3 className="clock-title">7:30 AM</h3>
                                                <h3 className="airport-title">Airport: MAD</h3>

                                            </div>
                                        </div>
                                        <div className="flight-price-info">
                                            <div className="price-container">
                                                <h3 className="price-title">Price: $200</h3>
                                                <h4 className="departure-title">Round Trip</h4>
                                            </div>
                                            <div className="button-container">
                                                <Button className="book-flight-button">Book Flight</Button>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="option-card-main">
                                <h5>Sort by:</h5>
                                <FormField type="dropdown" options={dropdownOptions} control={control} name="sort" label=""></FormField>
                                <h5>Arrival Time</h5>
                                <div className="card ">
                                    <div className="flex flex-column gap-3">
                                        {options.map((option) => {
                                            return (
                                                <div key={option.key} className="flex align-items-center">
                                                    <Checkbox inputId={option.key} name="category" value={option} onChange={onOptionChange} checked={selectedOptions.some((item) => item.key === option.key)} />
                                                    <label htmlFor={option.key} className="ml-2">
                                                        {option.name}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <h5>Stops</h5>
                                <h5>Airlines Included</h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-pic">
                    <div className="img-size">
                        <img src="/images/car-rentals.jpg" alt="car-rentals" className="card-image" />
                        <div className="overlay-text">
                            <i className="pi pi-car"></i>
                            <text>CAR RENTALS</text>
                        </div>
                    </div>

                    <div className="img-size">
                        <img src="/images/hotels.jpg" alt="hotels" className="card-image" />
                        <div className="overlay-text">
                            <i className="pi pi-building-columns"></i>
                            <text>HOTELS</text>
                        </div>
                    </div>

                    <div className="img-size">
                        <img src="/images/travel-packages.jpg" alt="travel-packages" className="card-image" />
                        <div className="overlay-text">
                            <i className="pi pi-sun"></i>
                            <text>TRAVEL PACKAGES</text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
