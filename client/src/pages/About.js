import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Home Art"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/this-isUs.jpg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Are you looking for equip your home ? Home Art is the best<br/> destination to by online . 
           Find the perfect original furniture <br/>and accessories for your home. <br/>
          House&Decoration <br/>
          Home Appliance <br/>
          Kitchen <br/>
          Bathroom Accessory

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
