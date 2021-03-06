import React from 'react'
import styled from "styled-components"
import Img5 from "components/ScreenShot/bg.jpg"


function TermAndConditionComponent() {
    return (
        <Container style={{backgroundImage: `url(${Img5})`,
        backgroundRepeat: 'no-repeat',
         width:'100%', backgroundAttachment:'fixed',
          backgroundSize:'100% 100%' }}>
            <h1 className="head">Term AND Condition</h1>
            <p className="para">
              1. By downloading or using the app, these terms will automatically apply 
            to you – you should make sure therefore that you read them carefully 
            before using the app. You’re not allowed to copy, or modify the app, 
            any part of the app, or our trademarks in any way. You’re not allowed 
            to attempt to extract the source code of the app, and you also shouldn’t 
            try to translate the app into other languages, or make derivative versions. 
            The app itself, and all the trade marks, copyright, database rights and other
             intellectual property rights related to it, still belong to QuartileLabs. 
             QuartileLabs is committed to ensuring that the app is as useful and 
             efficient as possible.
             </p>

             <p className="para">
               2. For that reason, we reserve the right to make changes to the app or to
             charge for its services, at any time and for any reason. We will never 
             charge you for the app or its services without making it very clear to 
             you exactly what you’re paying for. The Docs'O app stores and processes 
             personal data that you have provided to us, in order to provide our Service.
             </p>

             <p className="para">
               3. It’s your responsibility to keep your phone and access to the app secure. 
            We therefore recommend that you do not jailbreak or root your phone, 
            which is the process of removing software restrictions and limitations
             imposed by the official operating system of your device.
             </p>

            <p className="para">
              4. It could make your phone vulnerable to malware/viruses/malicious programs, 
            compromise your phone’s security features and it could mean that the Docs'O 
            app won’t work properly or at all. The app does use third party services that 
            declare their own Terms and Conditions.
            </p>
            <p className="para">5. Link to privacy policy of third party service providers used by the app
                <ul className="list">
                <li>Google Play Services</li>
                <li>Expo</li>
                </ul>
            </p>

             <p className="para">
               6. You should be aware that there are certain things that QuartileLabs will not 
            take responsibility for. Certain functions of the app will require the app to
             have an active internet connection. The connection can be Wi-Fi, or provided 
             by your mobile network provider, but QuartileLabs cannot take responsibility 
             for the app not working at full functionality if you don’t have access to Wi-Fi, 
             and you don’t have any of your data allowance left. If you’re using the app 
             outside of an area with Wi-Fi, you should remember that your terms of the 
             agreement with your mobile network provider will still apply.
            </p>
            
            <p className="para">
              7. As a result, you may be charged by your mobile provider for the cost of data 
            for the duration of the connection while accessing the app, or other third 
            party charges. In using the app, you’re accepting responsibility for any such 
            charges, including roaming data charges if you use the app outside of your home 
            territory (i.e. region or country) without turning off data roaming.
            </p>
            <p className="para">
            8. If you are not the bill payer for the device on which you’re using the app, 
            please be aware that we assume that you have received permission from the bill 
            payer for using the app.
            </p>
            <p className="para">
            9. Along the same lines, QuartileLabs cannot always take responsibility for the 
            way you use the app i.e. You need to make sure that your device stays charged 
            – if it runs out of battery and you can’t turn it on to avail the Service, 
            QuartileLabs cannot accept responsibility.
            </p>
            <p className="para">
            10. With respect to QuartileLabs’s responsibility for your use of the app, 
            when you’re using the app, it’s important to bear in mind that although 
            we endeavour to ensure that it is updated and correct at all times, 
            we do rely on third parties to provide information to us so that we 
            can make it available to you.
            </p>
            <p className="para">
               11. QuartileLabs accepts no liability for any loss, direct or indirect, 
            you experience as a result of relying wholly on this functionality of the app. 
            At some point, we may wish to update the app. The app is currently available 
            on Android – the requirements for system(and for any additional systems we
             decide to extend the availability of the app to) may change, and you’ll need 
             to download the updates if you want to keep using the app. QuartileLabs does 
             not promise that it will always update the app so that it is relevant to you 
             and/or works with the Android version that you have installed on your device.
             </p>

            <p className="para">
              12. However, you promise to always accept updates to the application when offered
             to you, We may also wish to stop providing the app, and may terminate use of 
             it at any time without giving notice of termination to you. Unless we tell you 
             otherwise, upon any termination, (a) the rights and licenses granted to you in 
             these terms will end; (b) you must stop using the app, and (if needed) delete 
            it from your device.</p>

            <h1 className="head">Changes to This Terms and Conditions</h1>
            <p className="para">
              13. we may update our Terms and Conditions from time to time. Thus, you are advised
             to review this page periodically for any changes. we will notify you of any changes 
             by posting the new Terms and Conditions on this page. These terms and conditions are
              effective as of 2020-06-04
            </p>
           
        </Container>
    )
}

export default TermAndConditionComponent

const Container = styled.div`
padding: 8rem; 

@media (max-width: 600px) {
   padding:4rem;
   padding-top:8rem;
 }

.head{
   font-size: 25px;
   color: white;
   @media (max-width: 600px) {
       text-align: left;
       font-size:2.5rem;
       
      
     }
}
  .para{
    
    font-family: system-ui;
    font-size: 15px;
    color: black;
    @media (max-width: 600px) {
      text-align: justify;
      font-size:1.5rem;
      width: 100%;
    }
  }
  .list{
    list-style-type: square;
  }
    
`;