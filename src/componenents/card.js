
// this component can be used as wrapper for other custom components or normal html components to seve defined
// style and handeling the componenents

import './card.css'

function Card(prop) {
    const classes = 'card '+ prop.className
    return <div className={classes}>{prop.children}</div>
    // here children is reseved keyword to specify the compiler as all comoponents/html jsx elements are the childrens this
    // comopnent and can allow them to use 'prop' object to pass / display the data
}

export default Card;