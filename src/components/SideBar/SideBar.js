import React from 'react'
import Icons from '../Icons/Icons';

const SideBar = () => {
    return (
        <div className="container">
            <div className="row">
                <button type="button" className="col btn btn-warning fw-bolder text-capitalize lh-base align-middle text-white">
                    <Icons type="wallet" size="24px" color="#FFFFFF" />
                    <p>wallet</p>
                </button>

                <button type="button" className="col btn btn-warning fw-bolder text-capitalize lh-base align-middle text-white">
                    <Icons type="paperPlane" size="24px" color="#FFFFFF" />
                    <p>send</p>
                </button>

                <button type="button" className="col btn btn-warning fw-bolder text-capitalize lh-base align-middle text-white">
                    <Icons type="contacts" size="24px" color="#FFFFFF" />
                    <p>contacts</p>
                </button>

                <button type="button" className="col btn btn-warning fw-bolder text-capitalize lh-base align-middle text-white">
                    <Icons type="receive" size="24px" color="#FFFFFF" />
                    <p>receive</p>
                </button>

                <button type="button" className="col btn btn-warning fw-bolder text-capitalize lh-base align-middle text-white">
                    <Icons type="shop" size="24px" color="#FFFFFF" />
                    <p>shop</p>
                </button>
            </div>
        </div>
    )
}

export default SideBar;
