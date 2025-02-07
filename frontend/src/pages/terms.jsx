import React from "react";

const TermsAndCondition = () => {
    return (

    <div className="flex flex-col items-center justify-center">

    <div className="flex flex-col items-center justify-center mt-5 mx-2 w-full max-w-2xl">

        <h1 className="text-[36px] font-semibold text-center my-2 text-accent-color">Terms and Conditions</h1>

        <p className="font-semibold my-3">
            Effective Date: February 02, 2025
        </p>

        <p>
            Welcome to <span className="font-semibold text-accent-color">HoopTrack! </span>By using our web application, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the application.
        </p>
            
        <div className="flex flex-col gap-y-4 mt-3">

            <div>

                <h2 className='font-semibold text-accent-color'>1. Acceptance of Terms</h2>

                <p className="ml-5 mt-2">
                By accessing or using HoopTrack, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree, please do not use the application.
                </p>

            </div>
            
            <div>

                <h2 className='font-semibold text-accent-color'>2. User Accounts</h2>

                    <ul className="list-inside list-disc ml-5 mt-2">

                        <li>
                            To use certain features, you may be required to create an account.
                        </li>

                        <li>
                            You are responsible for maintaining the confidentiality of your login credentials.
                        </li>

                        <li>
                            Any activity under your account is your responsibility.
                        </li>

                        <li>
                            We reserve the right to suspend or terminate accounts that violate our policies
                        </li>

                    </ul>
            </div>
            
            <div>

                <h2 className='font-semibold text-accent-color'>3. Use of the Application</h2>

                <ul className="list-inside list-disc ml-5 mt-2">

                    <li>
                        You may use this application for personal and non-commercial purposes.
                    </li>

                    <li>
                        You agree not to misuse the application, including but not limited to:
                    </li>

                    <li>
                        Hacking, attempting unauthorized access, or disrupting services.
                    </li>

                    <li>
                        Uploading harmful content, spam, or malicious software.
                    </li>
                    
                    <li>
                        Violating applicable laws and regulations.
                    
                    </li>

                </ul>

            </div>
            
            <div>

                <h2 className='font-semibold text-accent-color'>4. Data and Privacy</h2>

                <ul className="list-inside list-disc ml-5 mt-2">

                    <li>
                        We collect and store personal information as outlined in our Privacy Policy.
                    </li>

                    <li>
                        Your data is protected, but we are not liable for data loss due to unforeseen circumstances.
                    </li>

                </ul>

            </div>

            <div>
                <h2 className='font-semibold text-accent-color'>5. Intellectual Property</h2>

                <ul className="list-inside list-disc ml-5 mt-2">

                    <li>
                        All content, logos, and design elements of the application are owned by HoopTrack.
                    </li>

                    <li>
                        You may not reproduce, distribute, or modify any part of the application without permission.
                    </li>

                </ul>
               
            </div>
   
            <div>

                <h2 className='font-semibold text-accent-color'>6. Limitation of Liability</h2>
                
                <ul className="list-inside list-disc ml-5 mt-2">
                    <li>
                        We do not guarantee that the application will be error-free or always available.
                    </li>

                    <li>
                        We are not responsible for any damages, data loss, or service interruptions.
                    </li>

                    <li>
                        Use the application at your own risk.
                    </li>
                </ul>
    
            </div>
            
            <div>

                <h2 className='font-semibold text-accent-color'>7. Modifications to Terms</h2>
                
                <ul className="list-inside list-disc ml-5 mt-2">
                    <li>
                        We reserve the right to modify these Terms at any time.
                    </li>
                    <li>
                         Users will be notified of changes, and continued use of the application constitutes acceptance of the revised terms.
                    </li>
                </ul>

            </div>
           
            <div>

               <h2 className='font-semibold text-accent-color'>8. Termination of Use</h2>

               <ul className="list-inside list-disc ml-5 mt-2">
                <li>
                     We may terminate or suspend your access to the application for violations of these terms.
                </li>
                <li>
                    You may also delete your account at any time.
                </li>

               </ul> 
            </div>
           
            <div>

                <h2 className='font-semibold text-accent-color'>9. Contact Information</h2>

                <ul className="list-inside list-disc ml-5 mt-2">
                    <li>
                        For any questions or concerns, please contact us at hooptrackofficial@gmail.com.
                    </li>
                </ul>
        
            </div>
          
        </div>

    </div>

    <footer className="mt-10 bg-accent-color text-white w-full text-center p-2">
         By using HoopTrack, you acknowledge and agree to these Terms and Conditions.
        </footer>

    </div>
)
};

export default TermsAndCondition;