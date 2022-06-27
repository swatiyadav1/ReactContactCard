import React from "react"
import "./style.css"
import whiskerson from "./images/mr-whiskerson.png"
import fluffykins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"
import phIcon from "./images/phone-icon.png"
import mailIcon from "./images/mail-icon.png"


/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src={whiskerson}/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src={phIcon} />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={fluffykins}/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src={phIcon} />
                    <p>(212) 555-2347</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={felix}/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src={phIcon} />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={pumpkin}/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src={phIcon} />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default App