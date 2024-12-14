import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
// PrivacyPolicy Component
function PrivacyPolicy() {
  // Footer style as per your original definition
  const footerStyle = {
    backgroundColor: "white",
    boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.2)", // Shadow upward (-5) footer
    padding: "10px 20px",
    textAlign: "center",
    position: "relative",
  };
  return (
    <>
    <Head>
        <title>Privacy Policy - Qualipact</title>
        <meta
          name="description"
          content="Qualipact is a leading web and app development company offering custom web apps, mobile solutions, AI integration, and digital transformation. We empower businesses to drive growth through innovative designs, automation, and tailored technology solutions."
        />
      </Head>
      <div className="max-w-screen-lg mx-auto py-6 md:px-20 px-10 bg-[#197cd0] shadow-2xl text-white">
        <h1 className="text-4xl font-p_ebold text-white mb-4 tracking-wide text-center">
          Privacy Policy
        </h1>
        <p className="text-sm 2xl:text-base font-p_regular text-white/75 text-center mb-12 leading-relaxed">
          Effective Date: December 7, 2024
        </p>

        <section className="mb-5">
          <p className="leading-relaxed font-mont font-normal text-sm 2xl:text-base text-white">
            Welcome to the website of Qualipact , referred to hereafter as
            "Qualipact ". At Qualipact, we are committed to protecting your
            privacy. This Privacy Policy outlines the types of personal
            information we collect, how we use it, how we share it, and the
            steps we take to safeguard your data when you visit our website or
            use our services. By accessing or using our website and services,
            you consent to the collection and use of your data as described in
            this policy.
          </p>
        </section>
        <hr className="my-5 border-gray-200 rounded-full" />
        {/* 1. Data Collection */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            1. Data Collection
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We gather different types of information to enhance your experience,
            improve our services, and comply with legal requirements. This data
            may include both personal information you provide directly to us and
            data automatically collected during your interaction with our
            website.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Information You Provide Directly: Details you share with us
              voluntarily
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                <span className="font-medium">Contact Information:</span> Your
                name, email address, phone number, and physical address when
                submitting forms, requests, or inquiries.
              </li>
              <li className="mt-1">
                <span className="font-medium">Account Information:</span> Any
                details you provide when creating an account, including
                usernames, passwords, and preferences.
              </li>
              <li className="mt-1">
                <span className="font-medium">
                  Employment-Related Information:
                </span>{" "}
                If you apply for a position with us, we collect your resume,
                work experience, educational background, and any other
                information relevant to the application process.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Information Collected Automatically: Data gathered through your
              usage of our website and services
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may automatically collect technical information when you visit
              our website or use our services. This includes, but is not limited
              to, your IP address, browser type, device information, referral
              sources, and browsing behavior through cookies and similar
              tracking technologies. This data helps us improve our website,
              personalize your experience, and analyze usage patterns.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Information from Third-Party Sources: Data we receive from
              external platforms
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may collect additional information from third-party sources,
              such as social media platforms or authentication services (e.g.,
              Google, LinkedIn), to enhance the accuracy and completeness of
              your profile.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Location Data: Information about your physical location
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may collect information about your physical location through
              GPS, IP address, or other location-tracking technologies when you
              use our services. This data helps us provide location-based
              features and services, such as personalized content or offers.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Communication Data: Information from your interactions with us
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              When you communicate with us, whether through email, chat, phone,
              or other means, we may collect information regarding the content
              of your communication, your preferences, and any feedback you
              provide. This data helps us improve our customer support and
              communication efforts.
            </p>
          </div>
        </section>
        {/* 2. Use of Information */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            2. Use of Information
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We use the information we collect to provide, personalize, and
            improve our services. We may also use it for communication,
            marketing, security purposes, and legal compliance.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Service Delivery: Providing and enhancing services for you
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We use your information to provide, personalize, and enhance the
              services you use. This includes account management, feature
              personalization, and providing customer support.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Communication and Notifications: Keeping you informed
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may use your data to send notifications, updates, and news
              about our services, including product updates, newsletters, and
              marketing materials. You can opt-out of these communications at
              any time.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Marketing and Advertising: Tailoring content and offers for you
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may use your information to serve personalized ads, offers, and
              recommendations based on your preferences and browsing history.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Security and Fraud Prevention: Protecting our services
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We use your data to detect and prevent fraudulent activities,
              ensure the security of our services, and protect against
              unauthorized access.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Legal Compliance and Obligations: Meeting legal and regulatory
              requirements
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may use your information to comply with legal obligations, such
              as responding to subpoenas, court orders, or other legal
              processes. This also includes cooperating with law enforcement
              authorities when required.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Data Analytics and Research: Improving our services and offerings
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We use your information for data analysis and research purposes,
              such as understanding trends, measuring the effectiveness of our
              services, and improving our offerings. This data may be aggregated
              or anonymized.
            </p>
          </div>
        </section>
        {/* 3. Data Sharing and Disclosure */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            3. Data Sharing and Disclosure
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We may share your information with trusted third-party service
            providers, business partners, or as required by law. We ensure that
            your data is handled responsibly and securely.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Third-Party Service Providers: Sharing data with trusted vendors
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may share your data with trusted third-party vendors who help
              us deliver our services, such as payment processors, analytics
              providers, and cloud storage services. These third parties are
              contractually obligated to protect your information.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Legal Compliance: Sharing data to fulfill legal obligations
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may disclose your information to comply with legal obligations,
              including responding to subpoenas, court orders, or other legal
              requests from authorities.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Business Transfers: Data transfer during mergers or acquisitions
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              In the event of a merger, acquisition, or sale of our assets, your
              personal data may be transferred as part of the transaction.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Partners and Affiliates: Sharing data with trusted business
              partners
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may share your data with our trusted business partners and
              affiliates to offer you additional services or promotions. These
              partners are bound by confidentiality agreements.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Public or Aggregated Data: Sharing non-personal information
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may share non-personal, aggregated, or anonymized data for
              research, marketing, or public purposes. This data does not
              identify individuals.
            </p>
          </div>
        </section>

        {/* 4. Data Security */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            4. Data Security
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We take the security of your data seriously and employ a variety of
            technical and organizational measures to protect it from
            unauthorized access, alteration, or disclosure.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Encryption: Protecting sensitive data during transmission
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We use encryption to protect sensitive data during transmission,
              ensuring that your information is secure when it is transferred
              over the internet.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Access Control: Restricting data access to authorized personnel
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              Access to your personal data is restricted to authorized employees
              and third-party service providers who need it to perform their
              duties.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Security Audits: Regular assessments to identify vulnerabilities
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We regularly conduct security audits to identify vulnerabilities
              and improve our systems to better protect your personal data.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Multi-Factor Authentication (MFA): Adding an extra layer of
              security
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              To further protect your account and personal data, we implement
              multi-factor authentication (MFA) wherever possible, requiring
              more than just a password for access.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Backup and Data Recovery: Ensuring data availability in case of
              loss
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We regularly back up your data and have disaster recovery plans in
              place to restore your information in the event of an unexpected
              incident or data loss.
            </p>
          </div>
        </section>

        {/* 5. Cookies and Tracking Technologies */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We do not currently use cookies or other tracking technologies.
            However, in the future, we may use them to enhance your experience,
            analyze traffic, and serve personalized content and advertisements.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Purpose of Cookies: Enhancing user experience and personalized
              content
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              In the future, cookies may be used to remember your preferences,
              provide personalized recommendations, and ensure a smoother user
              experience on our site.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Cookie Types: Different types of cookies used for various purposes
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                <span className="font-medium">Essential Cookies:</span> These
                cookies would be necessary for the basic functionality of the
                website.
              </li>
              <li>
                <span className="font-medium">Performance Cookies:</span> These
                cookies would help us analyze the performance of our website.
              </li>
              <li>
                <span className="font-medium">Targeting Cookies:</span> These
                cookies would be used to serve personalized advertisements.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Cookie Settings: Managing your cookie preferences
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              Once cookies are implemented, you will be able to control your
              cookie preferences through your browser settings, including
              disabling or deleting cookies.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Do Not Track (DNT) Signals: Respecting user privacy preferences
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We recognize Do Not Track (DNT) signals and make efforts to honor
              your preferences regarding tracking and cookies when possible,
              once implemented.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Third-Party Tracking: Sharing data with external partners
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              In the future, we may share data with third-party tracking
              partners for advertising, analytics, and other purposes. You can
              learn more by reviewing their privacy policies.
            </p>
          </div>
        </section>

        {/* 6. International Data Transfers */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            6. International Data Transfers
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            Your data may be transferred to and processed in countries other
            than your own. These countries may have different data protection
            laws than those in your country of residence.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Global Data Processing: Handling data across different
              jurisdictions
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We process your data in multiple jurisdictions to provide seamless
              services worldwide. Our global data infrastructure is designed to
              handle sensitive information with the highest level of security,
              and we comply with all relevant international data protection
              laws.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Legal Safeguards: Protecting data during international transfers
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We implement legal safeguards such as standard contractual clauses
              to protect your data during international transfers.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Compliance with Data Protection Laws: Adhering to international
              standards
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We comply with international data protection laws, such as GDPR
              and CCPA, to ensure your data is handled appropriately during
              cross-border transfers.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Data Transfer Agreements: Safeguarding cross-border transfers
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We enter into specific data transfer agreements with our service
              providers to ensure the protection of your data when it is
              transferred internationally.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Regional Data Protection Authorities: Enforcing privacy
              regulations
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We work closely with regional data protection authorities to
              ensure compliance with local data privacy laws and resolve any
              data-related issues.
            </p>
          </div>
        </section>

        {/* 7. Data Retention */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            7. Data Retention
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this policy. Once no longer
            required, we will either anonymize or securely delete your data.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Retention Periods: Duration of data retention for legal or
              operational purposes
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We will retain your personal data only for as long as necessary to
              provide our services or as required for legal purposes. The
              retention periods vary based on the data and its usage.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Data Deletion and Anonymization: Ensuring secure deletion of data
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              After the retention period expires, we will anonymize or securely
              delete your data to ensure it cannot be used or reconstructed.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Special Retention Conditions: Retention due to legal or regulatory
              obligations
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              In some instances, we may need to retain your data longer due to
              legal obligations, regulatory requirements, or ongoing disputes.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Backup and Archive Retention: Safeguarding data in backup systems
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may retain data in backup systems for a defined period to
              ensure recoverability in case of system failure, in accordance
              with our backup and recovery procedures.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Retention for Research and Analysis: Using data for statistical
              purposes
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              In certain cases, we may retain anonymized data for statistical,
              research, or analytical purposes, to improve our services or for
              other legitimate business interests.
            </p>
          </div>
        </section>

        {/* 8. Third-Party Websites and Services */}
        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            8. Third-Party Websites and Services
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            Our website may contain links to third-party websites and services
            that are not governed by this Privacy Policy. We encourage you to
            review their privacy practices before engaging with them.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              External Links: Third-party websites not covered by this Privacy
              Policy
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We are not responsible for the privacy practices of third-party
              websites that are linked to from our site. Please review their
              policies for more details.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Social Media Integrations: Personalizing your experience via
              social media
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              If you use social media logins (e.g., Facebook, Google), we may
              receive information about your profile, which we use to
              personalize your experience.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Payment Processors: Secure processing of payment information
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We do not collect or store payment details directly. All payment
              transactions are processed securely by third-party payment
              processors.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Advertising Partners: Collaborations for targeted advertising
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may work with advertising partners to deliver personalized ads
              based on your browsing behavior. Please refer to their privacy
              policies for more information on how your data is used for
              advertising.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Analytics Services: Gathering insights to improve our services
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We may use third-party analytics services, such as Google
              Analytics, to analyze how visitors interact with our website and
              services, helping us improve the user experience.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            9. Children's Privacy
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            Our services are specifically designed for users aged 14 and older,
            and we do not actively target or collect personal information from
            children under the age of 14. If we collect data from children, we
            do so only with explicit parental consent, ensuring full compliance
            with applicable privacy laws. Below are the important aspects of how
            we handle children's data.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Age Restriction: Our Services Are Not Intended for Children Under
              14
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                Our services are restricted to users child under 14. We do not
                knowingly collect or store any personal information from
                children under this age unless we have received verified
                parental consent.
              </li>
              <li>
                We advise parents and guardians to ensure that children under 14
                do not use our services without supervision and consent. If we
                discover that we have inadvertently collected data from a child
                under 14, we will take immediate steps to delete such data.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Parental Consent: Ensuring Compliance with Privacy Laws for
              Children
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We take the privacy of children very seriously. If we collect data
              from children under the age of 14, we ensure that we obtain
              verifiable parental consent before proceeding. This includes
              providing parents with clear information on what data is
              collected, how it will be used, and how they can exercise their
              rights regarding their child's data. We make sure that parents
              have the ability to access, review, and delete their child's data
              if they choose to do so.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Data Collection Limitations: What Information We Collect from
              Children
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              If parental consent is obtained, we limit the personal information
              we collect from children to only the basic data necessary for
              providing the services. Typically, this may include a child’s
              email address for authentication purposes, and in some cases,
              their username or other identifiers for account management. We do
              not collect sensitive data like social security numbers, financial
              details, or location data from children.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Right to Withdraw Consent: How Parents Can Manage Data
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              Parents have the right to withdraw their consent at any time. If
              consent is withdrawn, we will stop processing the child’s data and
              ensure that it is deleted from our systems. Parents can exercise
              this right by contacting us directly through the channels listed
              in this Privacy Policy.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Actions on Data Deletion: What Happens If Data Is Collected
              Without Consent
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              In the rare event that we discover that we have inadvertently
              collected personal data from a child under 14 without parental
              consent, we will take immediate steps to delete all such data. We
              make it a priority to address any unintentional data collection
              swiftly and in compliance with privacy laws.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            10. Your Rights
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            As a user of our services, you have several rights related to your
            personal data. These rights include access to the data we hold, the
            ability to correct or update information, the right to have your
            data deleted in certain circumstances, and more. Below is a detailed
            explanation of these rights and how you can exercise them.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Right to Access: Requesting Information About the Personal Data We
              Hold
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                You have the right to request a copy of the personal data we
                hold about you, including information on how it was collected,
                used, and shared. This allows you to verify the accuracy and
                legality of our processing activities.
              </li>
              <li>
                To request access to your personal data, you can submit a
                request to our Data Protection Officer using the contact
                information provided in this Privacy Policy.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Right to Rectification: Correcting Inaccurate or Incomplete
              Information
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              If you believe that any of the personal information we hold about
              you is inaccurate or incomplete, you have the right to request
              that we correct or update it. We will make the necessary
              amendments as soon as possible to ensure the information is
              accurate.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Right to Erasure: Deleting Your Personal Data Under Certain
              Conditions
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              You may request the deletion of your personal data in certain
              situations, such as when the data is no longer needed for the
              purposes it was collected, or if you withdraw your consent and we
              have no other lawful basis for processing your data. Please note
              that there may be legal or operational reasons that prevent us
              from deleting certain data.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Right to Restrict Processing: Limiting How We Use Your Data
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              You have the right to request that we limit the processing of your
              personal data. This may apply if you contest the accuracy of your
              data or if you object to our legitimate interests. We will
              restrict processing until the issue is resolved or if we no longer
              have a legal basis for processing the data.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Right to Data Portability: Moving Your Data to Another Service
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              You have the right to receive your personal data in a structured,
              commonly used, and machine-readable format. You can request to
              transfer this data to another service provider, provided that the
              transfer is technically feasible.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            11. Updates to This Policy
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            We may periodically update this Privacy Policy to reflect changes in
            our practices, legal obligations, or to address new privacy
            concerns. We encourage you to review this policy periodically to
            stay informed of any updates. Below are the details regarding how we
            handle updates to this policy.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Periodic Review: How We Regularly Update Our Privacy Policy
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                We review and update this Privacy Policy at regular intervals to
                ensure it reflects our current practices and legal requirements.
              </li>
              <li>
                Major updates are typically made on an annual basis, but changes
                may occur sooner if required by law or changes to our services.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Notification of Changes: How We Inform You About Major Updates
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              Any significant changes to this Privacy Policy will be
              communicated to you through prominent notices, such as a banner on
              our website or direct communication to your registered email
              address.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Effective Date: When the Updated Privacy Policy Will Take Effect
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              The updated Privacy Policy will be effective immediately after it
              is posted on our website. The date of the most recent update will
              be indicated at the top of this document.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Impact of Changes: What Happens if You Continue Using Our Services
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              By continuing to use our services after the updated Privacy Policy
              is posted, you are agreeing to the revised terms and conditions
              outlined in the new policy.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Tracking of Changes: How You Can Review Previous Versions of the
              Policy
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              If you wish to review previous versions of this Privacy Policy,
              you can do so by visiting our website where past versions are
              archived.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            12. Contact Information
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the way we handle your personal data, please do
            not hesitate to contact us. Below are the contact details to reach
            out to us.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Contact for Privacy Inquiries: Who to Reach Out to for Data
              Protection Issues
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                For any privacy-related inquiries, please contact our Data
                Protection Officer at [email address]. They will be able to
                assist with any concerns about your personal data and how we
                process it.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Data Access Requests: How to Submit Requests for Your Personal
              Data
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              To submit a request for accessing, correcting, or deleting your
              personal data, please use the contact details provided. You will
              be guided through the process to ensure your request is handled
              promptly and securely.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Privacy Complaints: What to Do if You Have Concerns About Data
              Handling
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              If you have any complaints regarding how your data is handled or
              believe that your rights have been violated, please contact us
              immediately. We take all complaints seriously and will do our best
              to resolve the issue.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Updates to Contact Info: Keeping Us Informed of Your Updated
              Contact Information
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              It is important that you keep us informed of any changes to your
              contact details. If your email or phone number changes, please
              notify us to ensure we can communicate effectively with you.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Complaints to Regulatory Bodies: How to File a Complaint with
              Authorities
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              If you are not satisfied with our response to your privacy
              concerns, you have the right to lodge a complaint with a
              supervisory authority in your jurisdiction. We encourage you to
              reach out to us first so we can try to resolve the matter
              directly.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            13. Consent and Acceptance
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base mb-4 leading-relaxed">
            By accessing or using our website or services, you explicitly
            consent to the collection, use, and processing of your personal data
            as outlined in this Privacy Policy. If you do not agree with this
            policy, please refrain from using our services. Below are additional
            details about how we handle consent and your rights.
          </p>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Providing Consent: How You Grant Us Permission to Process Your
              Data
            </h3>
            <ul className="list-none list-inside text-white font-mont font-normal text-sm 2xl:text-base leading-relaxed">
              <li>
                By using our services, you grant us explicit consent to process
                and store your personal data as described in this Privacy
                Policy. This includes processing for the purposes of providing
                services, improving user experience, and complying with legal
                obligations.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Withdrawing Consent: How You Can Revoke Your Data Sharing Consent
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              You have the right to withdraw your consent at any time by
              contacting us. Once consent is withdrawn, we will cease processing
              your data for the purposes you initially consented to, unless
              there is a legitimate reason for continued processing under
              applicable law.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Limitations of Consent: Understanding When Consent May Be Required
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              While you can withdraw consent at any time, in some cases, certain
              data may be necessary for providing our services. For example, we
              may still need to process data for legal, accounting, or
              contractual purposes even after you withdraw consent.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Minors' Consent: Our Policy Regarding Data Collection from
              Children
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              We do not knowingly collect data from individuals under 14 years
              of age. If we discover that we have collected data from a child
              without appropriate parental consent, we will take immediate
              action to delete the data.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg 2xl:text-xl font-p_md text-white mb-4">
              Scope of Consent: What Your Consent Covers Under This Policy
            </h3>
            <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
              Your consent applies to all personal data we collect from you
              through your use of our website or services, as outlined in this
              Privacy Policy. This includes any data you provide directly, as
              well as data we collect automatically.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            14. Acceptance of Policy
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
            By accessing or using this website or any services provided through
            it, you acknowledge and agree to comply with our Privacy Policy. If
            you do not agree with any part of this policy, please refrain from
            using the website or its services. We reserve the right to modify,
            update, or revise this policy at our discretion, with any changes
            being effective upon posting on the website. Your continued use of
            the site following such changes constitutes your acceptance of the
            updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-p_sbold text-white mb-4">
            15. Contact Information
          </h2>
          <p className="font-mont font-normal text-sm 2xl:text-base text-white leading-relaxed">
            If you have any questions regarding these policies, please contact
            our support team directly at <strong>support@qualipact.com</strong>.
            We are here to assist you and provide further clarification if
            needed.
          </p>
        </section>
      </div>
      {/* Footer Component */}
      <Footer/>
    </>
  );
}

export default PrivacyPolicy;
