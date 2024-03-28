import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddVenue() {
    const navigate = useNavigate();

    const [venueData, setVenueData] = useState({
        name: '',
        type: '',
        city: '',
        address: '',
        price: '',
        photos: '',
        foodFacility: '',
        outsideFood: '',
        carParking: '',
        peopleCapacity: '',
        halls: '',
        rooms: '',
        ownerName: '',
        email: '',
        mobile: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVenueData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleFileChange = (e) => {
        setVenueData((formData) => ({
            ...formData,
            photos: e.target.files,
        }));
        console.log(venueData.photos);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(venueData); // Process form data here
        try {
            const data = new FormData();
            for (const key in venueData) {
                data.append(key, venueData[key]);
            }
            const response = await axios.post("http://localhost:8000/addNewVenue", data, { headers: { 'Content-Type': 'applications/json' } });
            console.log(response);
            alert("Venue add successfully!");
            navigate('/myvenues');

        }
        catch (err) {
            console.log("external error:::" + err);
        }
        // Clear input fields after form submission
        setVenueData({
            name: '',
            type: '',
            city: '',
            address: '',
            price: '',
            photos: '',
            foodFacility: '',
            outsideFood: '',
            carParking: '',
            peopleCapacity: '',
            halls: '',
            rooms: '',
            ownerName: '',
            email: '',
            mobile: ''
        });
    }
    const handleReset = async (e) => {
        e.preventDefault();
        setVenueData({
            name: '',
            type: '',
            city: '',
            address: '',
            price: '',
            photos: '',
            foodFacility: '',
            outsideFood: '',
            carParking: '',
            peopleCapacity: '',
            halls: '',
            rooms: '',
            ownerName: '',
            email: '',
            mobile: ''
        });
    }


    return (
        <div className='h-100'>
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light"> </span> Add New Venue</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <form method="post" encType="multipart/form-data" onReset={handleReset} onSubmit={handleSubmit} className="card mb-6">
                                <h5 className="card-header">
                                    Enter Venue's Details
                                </h5>
                                <div className="card-body">
                                    <div className="form-floating mb-3">
                                        <input type="text" required
                                            name='name'
                                            value={venueData.name}
                                            onChange={handleInputChange}
                                            className="form-control" id="floatingInput" placeholder="Enter Venue Name" aria-describedby="floatingInputHelp" />
                                        <label htmlFor="floatingInput">Venue Name</label>
                                        <span className="form-text">
                                            Enter your venue's registered name.
                                        </span>
                                    </div>
                                    <div className='row'>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                            <select required
                                                name='type'
                                                value={venueData.type}
                                                onChange={handleInputChange}
                                                className="form-select" id="exampleFormControlSelect1">
                                                <option value=''>Select Type of Venue</option>
                                                <option value={'banquet-hall'}>Banquet Hall</option>
                                                <option value={'party-plot'}>Party Plot</option>
                                                <option value={'resort'}>Resort</option>
                                                <option value={'hotel-venue'}>Hotel Venue</option>
                                                <option value={'beach-venue'}>Beach Venue</option>
                                                <option value={'garden-restaurant'}>Garden Restaurant</option>
                                            </select>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                            <select required
                                                name='city'
                                                value={venueData.city}
                                                onChange={handleInputChange}
                                                className="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                <option value=''>Select City</option>
                                                <option value={'ahemdabad'}>Ahemdabad</option>
                                                <option value={'surat'}>Surat</option>
                                                <option value={'goa'}>Goa</option>
                                                <option value={'delhi'}>Delhi</option>
                                                <option value={'mumbai'}>Mumbai</option>
                                                <option value={'chennai'}>Chennai</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Address of the Venue</label>
                                        <textarea required
                                            name='address'
                                            value={venueData.address}
                                            onChange={handleInputChange}
                                            className="form-control" id="exampleFormControlTextarea1" placeholder="Kindly Enter the Full Address of Your Venue." rows={3} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formFileMultiple" className="form-label">Select Photos of Your Venue</label>
                                        <input required
                                            name='photos'
                                            onChange={handleFileChange}
                                            className="form-control" type="file" id="formFileMultiple" multiple />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="html5-number-input" className="col-md-2 col-form-label">Starting Price</label>
                                        <div className="d-flex align-items-baseline">
                                            <span className="text-secondary">$</span>
                                            <input required
                                                name='price'
                                                value={venueData.price}
                                                onChange={handleInputChange}
                                                placeholder='0'
                                                className="form-control mx-2" type="number" id="html5-number-input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5>Venue's Features &amp; Services </h5>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                                            <label className="form-label fw-semibold">Food Facility</label>
                                            
                                            <div className="form-check">
                                                <input required
                                                    name="foodFacility"
                                                    value='veg'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="foodRadio1" />
                                                <label className="form-check-label" htmlFor="foodRadio1"> Veg only </label>
                                            </div>
                                            <div className="form-check">
                                                <input required
                                                    name="foodFacility"
                                                    value='non-veg'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="foodRatio2" />
                                                <label className="form-check-label" htmlFor="foodRatio2"> Non-veg only </label>
                                            </div>
                                            <div className="form-check">
                                                <input required
                                                    name="foodFacility"
                                                    value='both'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="foodRatio3" />
                                                <label className="form-check-label" htmlFor="foodRatio3"> Veg &amp; Non-veg both </label>
                                            </div>
                                            <div className="form-check">
                                                <input required
                                                    name="foodFacility"
                                                    value='none'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="foodRatio4" />
                                                <label className="form-check-label" htmlFor="foodRatio4"> Not available </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                                            <label className="form-label fw-semibold">Outside Food </label>
                                            <div className="form-check">
                                                <input required
                                                    name="outsideFood"
                                                    value='yes'
                                                    onChange={handleInputChange}
                                                    className="form-check-input" type="radio" id="outsideFood1" />

                                                <label className="form-check-label" htmlFor="defaultRadio1">Allowed </label>
                                            </div>
                                            <div className="form-check">
                                                <input  required
                                                    name="outsideFood"
                                                    value='no'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="outsideFood2" />
                                                <label className="form-check-label" htmlFor="defaultRadio2"> Not allowed</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                                            <label className="form-label fw-semibold">Car parking</label>
                                            <div className="form-check">
                                                <input required
                                                    name="carParking"
                                                    value='yes'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="carRadio1" />
                                                <label className="form-check-label" htmlFor="defaultRadio1">Available </label>
                                            </div>
                                            <div className="form-check">
                                                <input required
                                                    name="carParking"
                                                    value='no'
                                                    onChange={handleInputChange} className="form-check-input" type="radio" id="carRadio2" />
                                                <label className="form-check-label" htmlFor="defaultRadio2"> Not available</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="my-3">
                                                <label htmlFor="html5-number-input" className=" col-form-label fw-semibold">People capacity (Upto)</label>
                                                <div>
                                                    <input required
                                                        name='peopleCapacity'
                                                        value={venueData.peopleCapacity}
                                                        onChange={handleInputChange}
                                                        className="form-control" type="number" placeholder={0} id="html5-number-input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="my-3">
                                                <label htmlFor="html5-number-input" className=" col-form-label fw-semibold">Total Halls</label>
                                                <div>
                                                    <input required
                                                        name='halls'
                                                        value={venueData.halls}
                                                        onChange={handleInputChange}
                                                        className="form-control" type="number" placeholder={0} id="html5-number-input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="my-3">
                                                <label htmlFor="html5-number-input" className=" col-form-label fw-semibold">Total Rooms</label>
                                                <div>
                                                    <input required
                                                        name='rooms'
                                                        value={venueData.rooms}
                                                        onChange={handleInputChange}
                                                        className="form-control" type="number" placeholder={0} id="html5-number-input" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5>Enter Contact Details</h5>
                                    <div className="form-floating mb-2">
                                        <input type="text" required
                                            name='ownerName'
                                            value={venueData.ownerName}
                                            onChange={handleInputChange}
                                            className="form-control" id="floatingInput" placeholder="Enter Venue Owner/Manager Name" aria-describedby="floatingInputHelp" />
                                        <label htmlFor="floatingInput">Your Full Name</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input type="email" required
                                            name='email'
                                            value={venueData.email}
                                            onChange={handleInputChange}
                                            className="form-control" id="floatingInput" placeholder="Enter Venue Owner/Manager Email" aria-describedby="floatingInputHelp" />
                                        <label htmlFor="floatingInput">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input required
                                            className="form-control"
                                            name='mobile'
                                            value={venueData.mobile}
                                            onChange={handleInputChange}
                                            type="tel" placeholder="Enter Contact Number of Venue" id="tel-input" aria-describedby="floatingInputHelp" />
                                        <label htmlFor="tel-input">Mobile no.</label>
                                    </div>
                                </div>
                                <div className="row m-3">
                                    <button type='submit' className="col-lg-2 col-md-2 col-sm-3 m-2 btn btn-primary">
                                        Submit
                                    </button>
                                    <button type='reset' onClick={handleReset} className="col-lg-2 col-md-2 col-sm-3 m-2 btn btn-secondary" >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="content-backdrop fade" />
                </div>
                {/* Content wrapper */}
            </div>

        </div>

    )
}
export default AddVenue
