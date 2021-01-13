import React from "react";
import { Row,Col,Container ,Image} from 'react-bootstrap';
import Mypic from '../components/mypic.jpg';
import { motion } from "framer-motion";


const Aboutme = () => {
    return(
        <div className="blackimage darkblue">
            <Container>
            <Row lg={10}>
                <Col 
                lg={4} md={6} sm={6} className="mx-auto ">
                
                 <Image roundedCircle className="p-5 mt-5 img-fluid " src={Mypic} alt="Logo"/>
                 </Col>
                
                <motion.Col 
                
                initial={{y:-70}}
                animate={{y:0}}
                transition={{ duration: 1.5 ,type:"spring",stiffness:120}}
                lg={4} md={6} sm={8} className="pt-3 mt-2 mx-auto d-flex justify-content-center flex-column ">
      
                <motion.h1 
               className="orange mx-auto"
               initial={{x:"90vh"}}
               animate={{x:0}}
               transition={{ duration: 2 ,type:"spring",stiffness:120}}
              >Hi,I am Aniket Tari.</motion.h1>

            {/* <motion.h3 
               initial={{x:"-90vh"}}
               animate={{x:0}}
               transition={{ duration: 2 ,type:"spring",stiffness:120}}
            >Junior Front End Developer.</motion.h3> */}

            {/* <motion.h4 
               initial={{x:90}}
               animate={{x:0}}
               transition={{ duration: 2 ,type:"spring",stiffness:120}}
            >07972709154</motion.h4> */}
            {/* <motion.h4 
         
               initial={{x:-90}}
               animate={{x:0}}
               transition={{ duration: 2 ,type:"spring",stiffness:120}}
            >tarianiket55@gmail.com</motion.h4> */}
            {/* <motion.h5 
             
               initial={{x:90}}
               animate={{x:0}}
               transition={{ duration: 2 ,type:"spring",stiffness:120}}
            >Goa</motion.h5> */}
            <motion.h5    
             initial={{x:90}}
             animate={{x:0}}
             transition={{ duration: 2 ,type:"spring",stiffness:120}}
           > Worked as a Front-End Developer for around 3 months.Extensively worked developing Responsive Web Applications. Experience in developing web page effectively using HTML CSS and Bootstrap in making web pages cross-browser compatible.<br></br>Contact Details:[Phone:7972709154][Email:tarianiket55@gmail.com]</motion.h5>
            </motion.Col>
            </Row>
            </Container>
            
            <Container>
            <Row>
                
            </Row>

            <Row  className="pb-5">
                <Col  lg={5} md={3} sm={8} className=" pt-5  ">
                <motion.h3
                className="orange"
                initial={{x:90}}
                animate={{x:0}}
                transition={{ duration: 2 ,type:"spring",stiffness:120}}

                 >Experience</motion.h3>
                <ui>
                    <h5>3 Months Internship at Sparkplus Tech.</h5>
                    <h5>Worked on various Projects During this Internship.</h5>
                </ui>
                <h4 >Certification</h4>
                <h5>Complete Web development Bootcamp 2020: Udemy</h5>


                </Col>
                <Col lg={3} md={3} sm={8} className=" pt-5  ">
                <motion.h3
                 className="orange"
                initial={{x:90}}
                animate={{x:0}}
                transition={{ duration: 2 ,type:"spring",stiffness:120}}

                 >Technology</motion.h3>
                     <ui>
                    <h5>HTML/CSS Bootstrap.</h5>
                    <h5>ReactJs</h5>
                </ui>
                </Col>
                <Col lg={3} md={3} sm={8} className=" pt-5  ">
                <motion.h3
                 className="orange"
                initial={{x:90}}
                animate={{x:0}}
                transition={{ duration: 2 ,type:"spring",stiffness:120}}

                 >Education</motion.h3>
                     <ui>
                    <h5>Goa College OF Engineering</h5>
                    <h5>Computers</h5>
                </ui>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Aboutme;