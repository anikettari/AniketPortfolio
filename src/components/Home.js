import React from "react";
import { Row,Col,Container,Image } from 'react-bootstrap';
import logo from '../components/homepage.gif';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons';
import Pdf from '../components/AniketCV.pdf';





const Home =()=>{
    return(
       
        <div className="blackimage ">
          <Container  >
            <Row >
                <Col lg={6} md={6} sm={12} className=" mt-5  mx-auto d-flex justify-content-center flex-column">
              
                <motion.h1 
                initial={{y:"-70vh"}}
                animate={{y:0}}
                transition={{ duration: 1.5 ,delay:1,type:"spring",stiffness:120}}
                className="mx-auto darkblue"
                >ANIKET TARI
                </motion.h1>

                 <motion.h3 
                 initial={{x:-90}}
                 animate={{x:[0,15]}}
                 transition={{ duration: 1.5 ,delay:1,type:"spring",stiffness:120, yoyo:40}}
                className="mx-auto orange">Front-End Developer
                 </motion.h3>

                 <Row className=" mt-3 mx-auto">
                   <motion.Col 
                    initial={{y:"42vh"}}
                    animate={{y:0}}
                   
                    transition={{ duration: 1.5,delay:1, type:"spring",stiffness:120}}
                    lg={2} md={2} sm={3}  className="pr-2 mx-sm-auto">
                   <a href={'//www.linkedin.com/in/aniket-tari-231aaa1b5/'} target="_blank">
                     <FontAwesomeIcon  className="darkblue" icon ={faLinkedin} size = '2x'/>
                    </a>
                   </motion.Col>

                   <motion.Col 
                    initial={{y:"42vh"}}
                    animate={{y:0}}
                    transition={{ duration: 1.5 ,delay:2,type:"spring",stiffness:120}}
                  
                    lg={2} md={2} sm={3}  className="pr-2 mx-sm-auto">
                   <a href={'//www.facebook.com/aniket.tari/'} target="_blank">
                     <FontAwesomeIcon className="darkblue" icon ={faFacebook} size = '2x'/>
                     </a>
                   </motion.Col>

                   <motion.Col 
                   initial={{y:"42vh"}}
                   animate={{y:0}}
                   transition={{ duration: 1.5 ,delay:2.5,type:"spring",stiffness:120}}
                    
                     lg={2} md={2} sm={3}className="pr-2 mx-sm-auto">
                   <a href={'//www.github.com/anikettari'} target="_blank">
                     <FontAwesomeIcon className="darkblue" icon ={faGithub} size = '2x'/>
                     </a>
                   </motion.Col>
                   <motion.Col 
                    initial={{y:"42vh"}}
                   animate={{y:0}}
                 
                
                   transition={{ duration: 1.5 ,delay:3,type:"spring",stiffness:120}}
                  
                    lg={2} md={2} sm={3}  className="pr-2 mx-sm-auto">
                    <a href={Pdf} target="_blank">
                     <FontAwesomeIcon className="darkblue" icon ={faDownload} size = '2x'/>
                     </a>
                   </motion.Col>
                 </Row>

                </Col>
               

               <Col lg={6} md={6} sm={12} >
                
                 <Image  className="mt-5 p-3 mx-auto img-fluid" src={logo} alt="Logo" />
                 </Col>

           </Row>
           </Container>
            

          
        </div>


    )
}
export default Home;