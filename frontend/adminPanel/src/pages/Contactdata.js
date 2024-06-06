import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Contactdata() {

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [contactMessage, setContactMessage] = useState(null)
  const [contactUser, setContactUser] = useState(null)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Pad single digits with a leading zero
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    // Return the formatted date in dd-mm-yyyy format
    return `${formattedDay}-${formattedMonth}-${year}`;
  }



  const fetchContacts = () => {
    try {
      axios.post('http://localhost:8000/contactShow').then((response) => {
        setContacts(response.data.contactData);
        console.log(response.data.contactData);
      })
    }
    catch (error) {
      console.log("error in fetching venues data: ", error)
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDeleteContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/contactDelete", { id: contactToDelete });
      console.log(response.data.message);
      // alert()
      fetchContacts();
    }
    catch (err) {
      console.log("Error in deleting contact", err)
    }
    finally {
      setContactToDelete(null);
    }
  }


  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">Contact Data</h4>
        {/* Striped Rows */}
        <div className="card">
          <h5 className="card-header">Feedback recieved from users</h5>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Recieved at</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {isLoading ? (
                  <div className='h-75 d-flex justify-content-center align-items-center'>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (contacts.map((contact, index) => (
                  <tr key={index}>
                    <td><strong>{contact.name}</strong></td>
                    <td>{contact.mobile}</td>
                    <td>{contact.email}</td>
                    <td>{formatDate(contact.date)}</td>
                    <td>
                      <button type="button" class="btn btn-outline-primary mx-1"
                        onClick={() => {
                          setContactMessage(contact.message)
                          setContactUser(contact.name)
                        }
                        } data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="bx bx-book-reader" /> Read
                      </button>
 
                      <button type="button" className="btn btn-icon btn-outline-danger mx-1"
                        onClick={() => {
                          setContactToDelete(contact._id)
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#confirmDeleteModal"
                      >
                        <i className="bx bx-trash-alt" />
                      </button>
                    </td>
                  </tr>
                ))

                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">{contactUser}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {contactMessage}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirm Deletion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this contact data?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleteContact} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactdata
