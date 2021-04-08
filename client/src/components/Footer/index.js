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
<<<<<<< HEAD
                    <p>Contributors: Kevin Cho, Chad Cook, Priya Garg, Katie Cowan, and Charli Spilecki</p>
=======
                    <p>Contributors: Kevin Cho, Chad Cook, Katie Cowan,Priya Garg and Charli Spilecki</p>
>>>>>>> e7f9148ca091774c41491c01a44fbbbc113440f4
                </div>
            </div>
        </footer>
    )
}

export default Footer;