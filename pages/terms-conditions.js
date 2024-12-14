import React from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";

function TermsConditions() {
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
        <title>Terms & Conditions - Qualipact</title>
        <meta
          name="description"
          content="Qualipact is a leading web and app development company offering custom web apps, mobile solutions, AI integration, and digital transformation. We empower businesses to drive growth through innovative designs, automation, and tailored technology solutions."
        />
      </Head>
      <div className="bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-p_ebold mb-8 tracking-wide text-center">
            Terms and Conditions
          </h1>

          <section className="space-y-6 font-mont font-medium text-sm 2xl:text-base">
            <p>
              Welcome to the website of Qualipact , referred to hereafter as
              "Qualipact ". By accessing or using this website and any
              associated services, you agree to be bound by these Terms and
              Conditions, as well as our Privacy Policy. If you do not agree
              with any part of these terms, you must refrain from using the
              website or its services.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Modifications to Terms
            </h2>
            <p>
              Qualipact reserves the right to amend these Terms and Conditions
              at any time without prior notice. Your continued use of the
              website after any such changes will be deemed your acceptance of
              the new terms.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Intellectual Property
            </h2>
            <p>
              All content, including but not limited to text, graphics, logos,
              trademarks, and images on this website, are the property of
              Qualipact and are protected by copyright, trademark, and other
              intellectual property laws. Any unauthorized use of this content,
              including reproduction, modification, distribution, or display, is
              strictly prohibited and may result in legal action.
            </p>
            <p>
              The images used on this website are stock photographs purchased
              from licensed sources. Qualipact does not claim ownership of these
              images.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">Website Usage</h2>
            <p>
              By using this website, you agree to not engage in any activity
              that violates copyright, trademark, or other applicable laws. This
              includes, but is not limited to, copying, reproducing,
              distributing, or creating derivative works of the content. You are
              also prohibited from submitting or transmitting any illegal,
              offensive, or harmful content.
            </p>
            <p>
              This website may contain links to third-party websites. Qualipact
              is not responsible for the content or privacy practices of these
              external sites, and any access to such sites is done at your own
              risk.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">Digital Services</h2>
            <p>
              The services provided through this website are offered "as is" and
              "as available." Digital services are governed by a legally binding
              business agreement, and your acceptance of the terms communicated
              through this agreement constitutes a binding contract between you
              and Qualipact .
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Service Notifications
            </h2>
            <p>
              All material on this website is provided without any warranty,
              either express or implied. Qualipact disclaims all warranties,
              including but not limited to, implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We reserve the right to modify, suspend, or
              terminate access to any part of the website without prior notice.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Privacy and Personal Information
            </h2>
            <p>
              Qualipact is committed to safeguarding your personal information.
              Please refer to our Privacy Policy for details on how we collect,
              use, and protect your personal data.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">Disclaimer</h2>
            <p>
              The information provided on this website is gathered from reliable
              sources, but Qualipact makes no representations or warranties
              regarding the accuracy, completeness, or adequacy of such
              information. The use of this website and any services provided is
              at your own risk, and Qualipact shall not be held liable for any
              damages arising from your use of the site.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Limitation of Liability
            </h2>
            <p>
              Qualipact shall not be liable for any damages arising out of or in
              connection with your use of this website, including but not
              limited to, loss of data, loss of profits, or any other indirect,
              incidental, or consequential damages, even if we have been advised
              of the possibility of such damages. Certain jurisdictions may not
              allow for the exclusion of certain warranties or liabilities, so
              some of the above exclusions may not apply to you.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Changes to Services and Content
            </h2>
            <p>
              Qualipact reserves the right to change, update, or discontinue any
              part of the website or the services offered, without notice. We
              also reserve the right to modify pricing and descriptions of
              services at any time.
            </p>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Web and App Development Services
            </h2>
            <p>
              Our web and app development services provide you with fully
              customized solutions to meet your business goals. These services
              include mobile apps, responsive websites, and backend systems
              designed for optimal performance.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Custom Solutions:</strong> We offer bespoke app and web
                development tailored to your specific business needs.
              </li>
              <li>
                <strong>Project Timelines:</strong> Timelines for each project
                will be mutually agreed upon at the beginning of the project.
                Any delays will be communicated promptly.
              </li>
              <li>
                <strong>Ownership:</strong> Upon full payment, intellectual
                property rights for the developed applications will transfer to
                you, except for third-party licenses that are used within the
                project.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We ensure that all
                applications undergo thorough testing to ensure functionality
                and usability.
              </li>
              <li>
                <strong>Ongoing Support:</strong> Our team will provide
                post-launch support to ensure that your application is running
                smoothly.
              </li>
            </ul>

            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              AI Development Services
            </h2>
            <p>
              In our AI development services, we focus on training small AI
              models for specific tasks. We also rely heavily on third-party
              APIs such as OpenAI to handle complex functionalities, including
              natural language processing.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Scope of AI Development:</strong> Our AI services
                primarily involve training small-scale AI models and using
                OpenAI’s API to deliver advanced AI functionalities.
              </li>
              <li>
                <strong>Data Privacy:</strong> Any data shared for AI training
                is handled securely and as per our Privacy Policy.
              </li>
              <li>
                <strong>API Dependencies:</strong> Many AI functionalities are
                powered by third-party APIs, particularly OpenAI’s API. You
                acknowledge that third-party limitations may affect the service.
              </li>
              <li>
                <strong>AI Capabilities:</strong> The AI services provided are
                limited to the capabilities of the models and APIs currently in
                use. Accuracy and results may vary depending on the nature of
                the data and model limitations.
              </li>
              <li>
                <strong>Custom AI Models:</strong> We offer custom training for
                small AI models; however, we currently do not handle large-scale
                AI model development.
              </li>
              <li>
                <strong>Ownership:</strong> Upon full payment, intellectual
                property rights for the developed applications will transfer to
                you, except for third-party licenses that are used within the
                project.
              </li>
              <li>
                <strong>Maintenance:</strong> AI solutions will be maintained
                based on the service agreement, which includes updates,
                optimizations, and troubleshooting.
              </li>
            </ul>
            <h2 className="text-xl 2xl:text-2xl font-p_sbold">Other Services</h2>
            <p>
              Qualipact also provides additional services including but not
              limited to digital marketing, SEO optimization, and content
              creation. Each of these services has its own specific terms and
              conditions that are communicated upon engagement.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pricing and Billing:</strong> Pricing for all services
                is agreed upon before work commences. We may offer customized
                pricing based on the scope and complexity of the services
                requested.
              </li>
              <li>
                <strong>Third-party Tools and Services:</strong> Where
                applicable, we may use third-party services and tools to deliver
                certain services. You agree to abide by the terms and conditions
                of these third-party providers.
              </li>
              <li>
                <strong>Service Level Agreements (SLAs):</strong> SLAs are
                offered as part of specific service agreements and ensure that
                we meet specific performance and response time targets.
              </li>
            </ul>
            <h2 className="text-xl 2xl:text-2xl font-p_sbold">
              Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact our support team directly at{" "}
              <strong>support@qualipact.com</strong>. We are here to assist you
              and provide further clarification if needed.
            </p>
          </section>
        </div>
        {/* Footer Component */}
        <Footer/>
      </div>
    </>
  );
}

export default TermsConditions;
