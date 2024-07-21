import React from 'react'

function Skills({skillsets}) {
    return (
        <div>
           <div class="container-fluid py-5" id="skill">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white">Skills</h1>
                    <h1 class="position-absolute text-uppercase text-primary">My Skills</h1>
                </div>
                <div class="row align-items-center">
                   {skillsets.map(s=>
                     <div class="col-md-6">
                     <div class="skill mb-4">
                         <div class="d-flex justify-content-between">
                             <h6 class="font-weight-bold">{s.name}</h6>
                             <h6 class="font-weight-bold">{s.percentage}</h6>
                         </div>
                         <div class="progress">
                             <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                     </div>
                     
                     
                 </div>)}
                    
                </div>
            </div>
        </div>
        </div>
      )
}

export default Skills
