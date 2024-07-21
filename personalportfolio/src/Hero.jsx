import React from 'react'
import profilePicture from './assets/images/profile.jpg'

function Hero() {
  return (
    <div>
        <div class="container-fluid bg-primary d-flex align-items-center mb-3 py-5" id="home" style={{"minHeight":"100vh"}}>
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-6 text-center text-lg-left">
                    <h3 class="text-white font-weight-normal mb-3">Hello, my name</h3>
                    <h1 class="text-white text-uppercase fw-bold mb-2" >Jhon</h1>
                    <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                    <div class="typed-text text-white">Developer</div>
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="" class="btn btn-dark mr-4">Download CV</a>

                        <a href="" class="btn btn-dark d-none d-sm-block">Play Video</a>
                    </div>
                </div>
                <div class="col-lg-6 px-8 pl-lg-0 pb-5 pb-lg-4 about-img">
                    <img class="img-fluid w-100 rounded-circle shadow-sm" src={profilePicture} alt="" />
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Hero
