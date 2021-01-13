import React from 'react';
import { Row,Col ,Container} from 'react-bootstrap';

const Footer =()=>{
    return(
<div className="blackimage paddingFooter mx-auto">
    
    <Row className="mx-auto">
        <Col lg={3} md={4} sm={5} className="mx-auto ">
        <p className="mx-auto darkblue">Copyright @Aniket Tari</p>
        </Col>
    </Row>
    
    
   
</div>
    );
}

export default Footer;