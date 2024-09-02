import React from "react";
import "./Policy.css";
import { Navbar } from "../Navbar/Navbar";

export const Policy = () => {
  return (
    <>
      <Navbar />
      <div className="policymaincontainer">
        <div className="policycontainer">
          <span className="policyheader">Privacy Policy</span>

          <div className="policytextcontainer">
            <span className="policytext">
              Your privacy is important to us. It is Peak Shipping Agency's
              policy to respect your privacy regarding any information we may
              collect from you across our website,
              http://www.peakshippingagency.com/, and other sites we own and
              operate.
            </span>
            <span className="policytext">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </span>
            <span className="policytext">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.
            </span>
            <span className="policytext">
              We don’t share any personally identifying information publicly or
              with third parties, except when required by law.
            </span>
            <span className="policytext">
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </span>
            <span className="policytext">
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.
            </span>
            <span className="policytext">
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </span>
            <span className="policytext">
              This policy is effective as of 23 September 2024.
            </span>

            <span className="policyheader">
              Peak Shipping Agency Terms of Service
            </span>
          </div>

          <span className="policysubheaderterm">1. Terms</span>
          <span className="policytext">
            By accessing the website at http://www.peakshippingagency.com/, you
            are agreeing to be bound by these terms of service, all applicable
            laws and regulations, and agree that you are responsible for
            compliance with any applicable local laws. If you do not agree with
            any of these terms, you are prohibited from using or accessing this
            site. The materials contained in this website are protected by
            applicable copyright and trademark law.
          </span>
          <span className="policysubheader">2. Use License</span>
          <div className="policylicense">
            <span className="policytext">
              a. Permission is granted to temporarily download one copy of the
              materials (information or software) on Peak Shipping Agency’s
              website for personal, non-commercial transitory viewing only. This
              is the grant of a license, not a transfer of title, and under this
              license you may not:
            </span>

            <div className="policylicenseroman">
              <span className="policytext">
                i. modify or copy the materials;
              </span>
              <span className="policytext">
                ii. use the materials for any commercial purpose, or for any
                public display (commercial or non-commercial);
              </span>
              <span className="policytext">
                iii. attempt to decompile or reverse engineer any software
                contained on Peak Shipping Agency’s website;
              </span>
              <span className="policytext">
                iv. remove any copyright or other proprietary notations from the
                materials; or
              </span>
              <span className="policytext">
                v. transfer the materials to another person or “mirror” the
                materials on any other server.
              </span>
            </div>
            <span className="policytext">
              b. This license shall automatically terminate if you violate any
              of these restrictions and may be terminated by Peak Shipping
              Agency at any time. Upon terminating your viewing of these
              materials or upon the termination of this license, you must
              destroy any downloaded materials in your possession whether in
              electronic or printed format.
            </span>
          </div>
          <span className="policysubheader">3. Disclaimer</span>

          <div className="policydisclaimer">
            <span className="policytext">
              a. The materials on Peak Shipping Agency’s website are provided on
              an ‘as is’ basis. Peak Shipping Agency makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of
              rights.
            </span>
            <span className="policytext">
              b. Further, Peak Shipping Agency does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </span>
          </div>
          <span className="policysubheader">4. Limitations</span>
          <span className="policytext">
            In no event shall Peak Shipping Agency or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on Peak Shipping Agency’s
            website, even if Peak Shipping Agency or a Peak Shipping Agency
            authorized representative has been notified orally or in writing of
            the possibility of such damage. Because some jurisdictions do not
            allow limitations on implied warranties, or limitations of liability
            for consequential or incidental damages, these limitations may not
            apply to you.
          </span>
          <span className="policysubheader">5. Accuracy of materials</span>
          <span className="policytext">
            The materials appearing on Peak Shipping Agency’s website could
            include technical, typographical, or photographic errors. Peak
            Shipping Agency does not warrant that any of the materials on its
            website are accurate, complete or current. Peak Shipping Agency may
            make changes to the materials contained on its website at any time
            without notice. However, Peak Shipping Agency does not make any
            commitment to update the materials.
          </span>
          <span className="policysubheader">6. Links</span>
          <span className="policytext">
            Peak Shipping Agency has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by Peak
            Shipping Agency of the site. Use of any such linked website is at
            the user’s own risk.
          </span>
          <span className="policysubheader">7. Modifications</span>
          <span className="policytext">
            Peak Shipping Agency may revise these terms of service for its
            website at any time without notice. By using this website, you are
            agreeing to be bound by the then current version of these terms of
            service.
          </span>
          <span className="policysubheader">8. Governing Law</span>
          <span className="policytext">
            These terms and conditions are governed by and construed in
            accordance with the laws of Nigeria and you irrevocably submit to
            the exclusive jurisdiction of the courts in that State or location.
          </span>
        </div>
      </div>
    </>
  );
};
