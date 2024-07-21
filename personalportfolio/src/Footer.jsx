import React from 'react'

function Footer() {
  return (
    <div class="container-fluid bg-primary text-white mt-5 py-1 px-sm-1 px-md-5">
    <div class="container text-center py-5">
        <div class="d-flex justify-content-center mb-4">
            <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-light btn-social" href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="d-flex justify-content-center mb-3">
            <a class="text-white" href="#">Privacy</a>
            <span class="px-3">|</span>
            <a class="text-white" href="#">Terms</a>
            <span class="px-3">|</span>
            <a class="text-white" href="#">FAQs</a>
            <span class="px-3">|</span>
            <a class="text-white" href="#">Help</a>
        </div>
        <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#">MysteryCode</a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold" href="#">Mystery Code</a>
        </p>
    </div>
</div>
  )
}

export default Footer
