import React from 'react'

const CardDashBoard = ({title, number, firstData, secondData, thirdData, percent, bc}) => {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    {title}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{number} BC</h5>
                    {firstData && <div className="d-flex justify-content-between">
                        <p class="card-text">{firstData}</p> <p class="card-text">{percent}</p> <p class="card-text">{bc}</p> </div>}
                    {secondData && <div className="d-flex justify-content-between">
                        <p class="card-text">{secondData}</p> <p class="card-text">{percent}</p> <p class="card-text">{bc}</p> </div>}
                    {thirdData && <div className="d-flex justify-content-between">
                        <p class="card-text">{thirdData}</p> <p class="card-text">{percent}</p> <p class="card-text">{bc}</p> </div>}
                </div>
            </div>
        </div>
    )
}

export default CardDashBoard;
