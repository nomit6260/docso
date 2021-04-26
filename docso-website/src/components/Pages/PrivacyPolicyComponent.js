import React from 'react'
import styled from "styled-components"
import Img5 from "components/ScreenShot/download-background.jpg"


function PrivacyPolicyComponent() {
    return (
        <Container style={{backgroundImage: `url(${Img5})`,
        backgroundRepeat: 'no-repeat',
         width:'100%', backgroundAttachment:'fixed',
          backgroundSize:'100% 100%' }}>
            <h1 className="head">Privacy Policy</h1>
            <p className="para">QuartileLabs built the Jagdamba Dairy app as a Free app. 
             This SERVICE is provided by QuartileLabs at no cost and is intended for
              use as is. This page is used to inform visitors regarding our policies 
              with the collection, use, and disclosure of Personal Information if anyone 
              decided to use our Service.</p>

              <p className="para">If you choose to use our Service, then you agree to the collection and use 
            of information in relation to this policy. The Personal Information that we
             collect is used for providing and improving the Service. we will not use or 
             share your information with anyone except as described in this Privacy Policy. 
             The terms used in this Privacy Policy have the same meanings as in our Terms 
             and Conditions, which is accessible at Jagdamba Dairy unless otherwise defined 
             in this Privacy Policy.</p>

            <p className="para">Information Collection and Use For a better experience, while using our Service, 
            we may require you to provide us with certain personally identifiable information. 
            The information that we request will be retained by us and used as described in 
            this privacy policy. The app does use third party services that may collect 
            information used to identify you.</p>

            <p className="para">Link to privacy policy of third party service providers used by the app
                <ul className="list">
                <li>Google Play Services</li>
                <li>Expo</li>
                </ul>
            </p>

            <h1 className="head">Log Data</h1>
            <p className="para">we want to inform you that whenever you use our Service, in a case of an error 
            in the app we collect data and information (through third party products) on your 
            phone called Log Data. This Log Data may include information such as your device 
            Internet Protocol (“IP”) address, device name, operating system version, the 
            configuration of the app when utilizing our Service, the time and date of your 
            use of the Service, and other statistics.</p>

            <h1 className="head">Cookies</h1>
             <p className="para">Cookies are files with a small amount of data that are commonly used as anonymous
             unique identifiers. These are sent to your browser from the websites that you 
             visit and are stored on your device's internal memory. This Service does not use 
             these “cookies” explicitly. However, the app may use third party code and libraries 
             that use “cookies” to collect information and improve their services. You have the 
             option to either accept or refuse these cookies and know when a cookie is being 
             sent to your device. If you choose to refuse our cookies, you may not be able to 
             use some portions of this Service.</p>

            <h1 className="head">Service Providers</h1>
             <p className="para">we may employ third-party companies and individuals due to the following reasons:

            To facilitate our Service;
            To provide the Service on our behalf;
            To perform Service-related services; or
            To assist us in analyzing how our Service is used.

            we want to inform users of this Service that these third parties have access 
            to your Personal Information. The reason is to perform the tasks assigned to 
            them on our behalf. However, they are obligated not to disclose or use the 
            information for any other purpose.</p>

            <h1 className="head">Security</h1>
            <p className="para">we value your trust in providing us your Personal Information, thus we are 
            striving to use commercially acceptable means of protecting it. But remember 
            that no method of transmission over the internet, or method of electronic storage
             is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h1 className="head">Links to Other Sites</h1>
            <p className="para">This Service may contain links to other sites. If you click on a third-party 
                link, you will be directed to that site. Note that these external sites are 
                not operated by us. Therefore, we strongly advise you to review the Privacy 
                Policy of these websites. we have no control over and assume no responsibility 
                for the content, privacy policies, or practices of any third-party sites or 
                services.</p>

            <h1 className="head">Children’s Privacy</h1>
            <p className="para">These Services do not address anyone under the age of 13. we do not knowingly 
                collect personally identifiable information from children under 13. In the case
                 we discover that a child under 13 has provided us with personal information, 
                 we immediately delete this from our servers. If you are a parent or guardian
                  and you are aware that your child has provided us with personal information, 
                  please contact us so that we will be able to do necessary actions.</p>

            <h1 className="head">Changes to This Privacy Policy</h1>
            <p className="para">we may update our Privacy Policy from time to time. Thus, you are advised to review 
            this page periodically for any changes. we will notify you of any changes by posting
             the new Privacy Policy on this page.</p>


            
             <p className="para">This policy is effective as of 2020-06-04</p>

            <h1 className="head">Contact Us</h1>
            <p className="para"> If you have any questions or suggestions about our Privacy Policy, do not hesitate 
             to contact us at contact@docso.life</p>
           
        </Container>
    )
}

export default PrivacyPolicyComponent

const Container = styled.div`
    padding: 8rem; 
     @media (max-width: 600px) {
        padding:4rem;
      }

    .head{
        font-size: 25px;
        margin-left: 40px;
        color: white;
        @media (max-width: 600px) {
            text-align: left;
            font-size:3rem;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
    }
    .para{
         font-size: 15px;
        color: black;
        margin-left: 40px;
        @media (max-width: 600px) {
            text-align: justify;
            font-size:1.8rem;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

    }
    .list{
        list-style-type: square;
    }
`;