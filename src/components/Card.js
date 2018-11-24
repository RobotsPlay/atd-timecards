import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, totalTime }) => {
    return (
        <div className="card">
            <div className="card-heading">
                <div className="card-title">{title}</div>
                <div className="card-total-time">{totalTime}</div>
            </div>

            <div className="card-body">
                <table>
                    <thead>
                        <tr>
                            <th>Description of Work</th>
                            <th className="text-right">Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Added grid and stack views</td>
                            <td className="text-right">1.5h</td>
                        </tr>

                        <tr>
                            <td>Styled card and card stack</td>
                            <td className="text-right">.75h</td>
                        </tr>

                        <tr>
                            <td>Played around with react and redux</td>
                            <td className="text-right">2.0h</td>
                        </tr>

                        <tr>
                            <td>Did some other things too.</td>
                            <td className="text-right">1.25h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired
}

export default Card