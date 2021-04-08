import React from 'react';

function Footer() {
    
    const style = {
        center: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "90px"
        }
    }
    return (
        <footer className="footer has-text-centered" style={style.center}>
            <div className="content">
                <div>
                    <strong>Copyright © 2021 Monnaie</strong>
                    <p>Contributors: Kevin Cho, Chad Cook, Katie Cowan,Priya Garg and Charli Spilecki</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;