import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function Login() {
    return (
        <MDBContainer fluid className="p-0" style={{ minHeight: '100vh', background: '#fff' }}>
            <MDBRow className="g-0 align-items-center" style={{ minHeight: '80vh' }}>
                <MDBCol md="6" className="d-flex justify-content-center align-items-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
                        alt="Sample"
                        style={{ maxWidth: '80%', height: 'auto' }}
                    />
                </MDBCol>
                <MDBCol md="6" className="px-5">
                    <div className="mb-4">
                        <p className="lead fw-normal mb-0 me-3" style={{ fontSize: '1.5rem' }}>Sign in with</p>
                        <div className="d-inline-block ms-3">
                            <MDBBtn floating size="md" tag="a" className="me-2" style={{ background: '#3b5998' }}>
                                <MDBIcon fab icon="facebook-f" />
                            </MDBBtn>
                            <MDBBtn floating size="md" tag="a" className="me-2" style={{ background: '#55acee' }}>
                                <MDBIcon fab icon="twitter" />
                            </MDBBtn>
                            <MDBBtn floating size="md" tag="a" style={{ background: '#0077b5' }}>
                                <MDBIcon fab icon="linkedin-in" />
                            </MDBBtn>
                        </div>
                    </div>
                    <div className="divider d-flex align-items-center my-4">
                        <hr className="flex-grow-1" />
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        <hr className="flex-grow-1" />
                    </div>
                    <MDBInput wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" />
                    <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg2" type="password" size="lg" />
                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                        <a href="#!" style={{ color: '#007bff', textDecoration: 'none' }}>Forgot password?</a>
                    </div>
                    <div className="text-center text-md-start mt-4 pt-2">
                        <MDBBtn className="mb-0 px-5" size="lg" style={{ background: '#3b6efb', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            LOGIN
                        </MDBBtn>
                        <p className="small fw-bold mt-2 pt-1 mb-2">
                            Don't have an account? <a href="#!" className="link-danger" style={{ color: '#e53935', textDecoration: 'none' }}>Register</a>
                        </p>
                    </div>
                </MDBCol>
            </MDBRow>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={{ background: '#3b6efb' }}>
                <div className="text-white mb-3 mb-md-0" style={{ fontSize: '1.1rem' }}>
                    Copyright © 2020. All rights reserved.
                </div>
                <div>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
                        <MDBIcon fab icon="facebook-f" size="md" />
                    </MDBBtn>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
                        <MDBIcon fab icon="twitter" size="md" />
                    </MDBBtn>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
                        <MDBIcon fab icon="google" size="md" />
                    </MDBBtn>
                    <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
                        <MDBIcon fab icon="linkedin-in" size="md" />
                    </MDBBtn>
                </div>
            </div>
        </MDBContainer>
    );
}

export default Login;