import React from 'react';

function Footer(props) {
    return (
        <div class="footer">
            <svg height="200" width="100%">
            </svg>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="ebusiness">
                            <h3>ONLINE <span>SHOP</span></h3>
                            <p>Online Shop Private Ltd.<br />
                                Om Enclave Buildings,<br />
                                Ring Road, Gondal Village,<br />
                                Rajkot, 360007,<br />
                                Gujarat, India.</p>
                            <ul>
                                <li><a href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a></li>
                                <li><a href="http://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="http://google.com/"><i class="fa fa-google"></i></a></li>
                                <li><a href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="info ">
                            <h4>INFORMATION</h4>
                            <p>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest fashion when you can find it on the Internet in a single click?</p>
                            <div class="personal">
                                <p><span>Tel :</span><a href="tel:+917069874272"> +917069874272</a></p>
                                <p><span>Email :</span><a href="mailto:onlineshop@gmail.com"> onlineshop@gmail.com</a></p>
                                <p><span>Working Hours :</span> 9am-11pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; Copyright <strong>ONLINE SHOP</strong>. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;