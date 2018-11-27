import React from 'react'
import PropTypes from 'prop-types'

const Card = ({card, onUpdateCardTitle, onToggleCardTitleEditable, onAddEntry}) => {
    let titleField;
    let entryDescription;
    let entryTime;

    return (
        <div className="card">
            <div className="card-heading">
                {
                    card.titleEditable ? 
                    (
                        <div>
                            <input type="text" ref={node => (titleField = node)} placeholder={card.title} className="card-title-field" />
                            <button onClick={() => onUpdateCardTitle(card.id, titleField.value)}>Save Title</button>
                            <button onClick={() => onToggleCardTitleEditable(card.id)}>Cancel</button>
                        </div>
                    ) : (
                        <div className="card-title">
                            {card.title}
                            <button onClick={() => onToggleCardTitleEditable(card.id)}>Edit Title</button>
                        </div>
                    )
                }
                <div className="card-total-time">{card.totalTime}</div>
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
                        {
                            card.entries.map((entry, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{entry.description}</td>
                                        <td className="text-right">{entry.time}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <input type="text" ref={node => (entryDescription = node)} placeholder="Description" className="entry-description-field" />
                            </td>

                            <td>
                                <input type="text" ref={node => (entryTime = node)} placeholder="Time" className="entry-time-field" />
                                <button onClick={() => {
                                    if(!entryDescription.value.length || isNaN(parseFloat(entryTime.value))) {
                                        return;
                                    }
                                    onAddEntry(card.id, entryDescription.value, parseFloat(entryTime.value).toFixed(2));
                                    entryTime.value = '';
                                    entryDescription.value = '';
                                }}>Add Entry</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card