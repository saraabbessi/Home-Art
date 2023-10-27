import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/ContactUs.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you want to know any information or asking about the products ,<br/>
            Feel free to call any time 24/7 available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@arthome.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +216 99 000 999
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
