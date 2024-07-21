import React, { useState } from 'react'

function Temperature() {

    const [tempInDeg, setTempInDeg] = useState()

    const [tempInFh, setTempInFh] = useState()

    return (
        <div>
            <div className="row mt-5">
                <div className='col-3'></div>

                <div className='col-5 border border-5 rounded shadow gap-3 d-flex p-5'>

                    <div>
                        <input type="text" value={tempInDeg} onChange={(e) => setTempInFh((+e.target.value) * 9 / 5 + 32)} placeholder='enter  temp in degree' />
                    </div>

                    <div>
                        <input type="text" placeholder='enter  temp in fh' value={tempInFh} onChange={(e) => setTempInFh(e.target.value)} />
                    </div>

                </div>
                <div className='col-3'></div>
            </div>
        </div>
    )
}

export default Temperature