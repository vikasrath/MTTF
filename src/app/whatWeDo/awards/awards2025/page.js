"use client"

import React from 'react'
import { useState } from 'react';
import Header from '@/components/Header/Header';


function Award2025() {

    const buttons = [
        "IEARG Award 2025",
        "Why IEARG Awards?",
        "Objectives And Benefits",
        "Categories And Eligibility",
        "Panel Of Judges",
        "Important Dates",
        "How To Apply?",
        "Call For Nomination",
        "Registration Fee"
    ];

    const [show, setShow] = useState({
        IEARGAward2025: true,
        WhyIEARGAwards: false,
        ObjectivesAndBenefits: false,
        CategoriesAndEligibility: false,
        PanelOfJudges: false,
        ImportantDates: false,
        HowToApply: false,
        CallForNomination: false,
        RegistrationFee: false,
    });

    const handleBtn = (btnName) => {
        setShow({
            IEARGAward2025: btnName === "IEARG Award 2025",
            WhyIEARGAwards: btnName === "Why IEARG Awards?",
            ObjectivesAndBenefits: btnName === "Objectives And Benefits",
            CategoriesAndEligibility: btnName === "Categories And Eligibility",
            PanelOfJudges: btnName === "Panel Of Judges",
            ImportantDates: btnName === "Important Dates",
            HowToApply: btnName === "How To Apply?",
            CallForNomination: btnName === "Call For Nomination",
            RegistrationFee: btnName === "Registration Fee",
        });

        console.log(show)
    };


    return (
        <>
            <Header


                title="IEARG Award 2025"
                description="The 2025 Awards will be held on National Science Day, February 28, to honor the discovery of the Raman effect by Sir C. V. Raman. In partnership with Sharda University, India, the event will recognize outstanding achievements across various fields, with a prize fund of 500,000 INR."
            />



            <section className="py-8 ">
                <div className="flex justify-center mb-8 p-12">
                    <img
                        src="https://www.mttf.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-26-at-14.02.49.jpeg"
                        alt=""
                        className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                </div>
                <div className="  w-full lg:w-[80%] lg:mx-auto">
                    <div className="flex justify-center flex-wrap gap-3 mb-6">
                        {buttons.map((btnname) => (
                            <button
                                key={btnname}
                                className="w-24 h-24 flex items-center justify-center text-white bg-blue-500 rounded-xl shadow-lg hover:bg-blue-600 active:scale-95 focus:ring-4 focus:ring-blue-300 transition-all"
                                onClick={() => handleBtn(btnname)}
                            >
                                {btnname}
                            </button>
                        ))}
                    </div>

                    {show.IEARGAward2025 && (
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">IEARG Awards 2025</h2>
                            <p>
                                The Awards 2025 will be held on National Science Day, observed each year on February 28 in honor of the discovery of the Raman effect by Indian physicist Sir C. V. Raman in 1928. This event, in collaboration with Sharda University, celebrates achievements across fields, awarding a total prize fund of 500,000 INR.
                            </p>
                            <p>
                                Organized by the MathTech Thinking Foundation (MTTF), a non-profit registered under the Companies Act 2013, MTTF promotes excellence in STEM through programs like the EARG Awards. Join us in honoring outstanding contributions that advance progress and innovation, continuing the pioneering legacy of Sir C. V. Raman.
                            </p>
                        </div>
                    )}
                    {show.WhyIEARGAwards && (
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">Why IEARG Awards?</h2>
                            <p>
                                The International EARG Awards honor achievements in entrepreneurship, academia, and research, recognizing leaders who inspire innovation and collaboration. Established by the MathTech Thinking Foundation (MTTF) in 2024, the awards celebrate contributions with global impact.
                            </p>
                            <h3 className="text-xl font-semibold">Nomination and Selection Process</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Online registration for nominations is available on the official website.</li>
                                <li>Separate applications are required for each award category.</li>
                                <li>Comprehensive documentation is essential for evaluation.</li>
                                <li>Final recipients will be informed via email.</li>
                            </ul>
                            <h3 className="text-xl font-semibold">Judging Criteria</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Innovation and Originality:</strong> New ideas and uniqueness of work.</li>
                                <li><strong>Impact and Contribution:</strong> Broader significance in the field and society.</li>
                                <li><strong>Research Excellence:</strong> Quality and rigor of research.</li>
                                <li><strong>Practical Application:</strong> Feasibility and real-world impact.</li>
                                <li><strong>Sustainability and Ethics:</strong> Long-term viability and ethical standards.</li>
                                <li><strong>Collaboration and Leadership:</strong> Leadership and mentorship in the field.</li>
                            </ul>
                        </div>
                    )}
                    {show.ObjectivesAndBenefits && (
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">Objectives</h2>
                            <p>
                                The International EARG Awards aim to honor and celebrate exceptional achievements in STEM fields, promote innovation, and foster global collaboration. By recognizing groundbreaking research and contributions, the awards encourage knowledge exchange and the development of interdisciplinary partnerships.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Recognize Excellence:</strong> To honor and celebrate exceptional achievements in science, technology, engineering, and mathematics (STEM) fields. To acknowledge innovative research and significant contributions to the advancement of knowledge and technology.</li>
                                <li><strong>Promote Innovation:</strong> To encourage the development of groundbreaking ideas, methods, and technologies. To inspire researchers and professionals to pursue innovative projects that have the potential to transform industries and societies.</li>
                                <li><strong>Foster Collaboration:</strong> To promote collaboration and networking among researchers, professionals, and organizations worldwide. To create opportunities for knowledge exchange and the development of interdisciplinary partnerships.</li>
                                <li><strong>Enhance Visibility:</strong> To provide a platform for outstanding individuals and teams to gain international recognition. To highlight the importance of research and development efforts in addressing global challenges.</li>
                                <li><strong>Support Professional Growth:</strong> To motivate and support young scholars, researchers, and professionals in their career development. To encourage the pursuit of excellence and continuous learning in STEM fields.</li>
                            </ul>
                            <h2 className="text-2xl font-semibold">Benefits</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>International Recognition:</strong> Award recipients will gain prestigious recognition at an international level, enhancing their professional reputation. Public acknowledgment of their achievements through media coverage and official announcements.</li>
                                <li><strong>Monetary Rewards:</strong> A total cash prize of 500,000 INR distributed across different categories, providing financial support for future research and development efforts.</li>
                                <li><strong>Networking Opportunities:</strong> Opportunities to connect with leading experts, researchers, and professionals in various fields. Invitations to participate in conferences, workshops, and symposiums organized by MTTF and other partners.</li>
                                <li><strong>Career Advancement:</strong> Enhanced visibility and recognition can lead to new career opportunities, collaborations, and funding prospects. Support in securing research grants, scholarships, and other forms of financial assistance.</li>
                                <li><strong>Mentorship and Guidance:</strong> Access to mentorship and guidance from distinguished experts and leaders in STEM fields. Opportunities to engage in discussions and receive feedback on ongoing and future projects.</li>
                                <li><strong>Contribution to Global Progress:</strong> The chance to contribute to the advancement of science and technology on a global scale. Participation in efforts to address critical challenges and improve the quality of life through innovative solutions.</li>
                            </ul>
                        </div>
                    )}
                    {show.PanelOfJudges && (
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">Chairperson</h2>
                            <p>
                                <strong>Prof. (Dr.) Praveen Agarwal</strong>, Vice-Principal & Chief Coordinator-International Relations, Anand International College of Engineering, Jaipur, India. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                            </p>
                            <h2 className="text-2xl font-semibold">Co-Chairperson(s)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Prof. (Dr.) Dumitru Baleanu</strong>, Lebanese American University, Beirut, Professor at Institute of Space Sciences, Bucharest, Romania. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) V.P. Saxena</strong>, Ex-Vice Chancellor Jiwaji University, Gwalior, Madhya Pradesh, India. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                            </ul>
                            <h2 className="text-2xl font-semibold">Panel Member(s)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Prof. (Dr.) Essam H. Houssein</strong>, Professor of Artificial Intelligence, Dean of Faculty of Computers & Information, Minia University, Minia 61519, Egypt. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) Valentina E. Balas</strong>, Faculty of Engineering, Aurel Vlaicu University of Arad / Academy of Romanian Scientists, ROMANIA. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) Zakia Hammouch</strong>, Department of Medical Research, China Medical University Hospital, Taichung 40402, Taiwan & Department of Sciences Ecole Normale Superieure, Moulay Ismail University of Meknes, Morocco. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) Ali A. Taani</strong>, Associate Professor, Physics Department-Al Balqa Applied University, Jordan. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) Ezekiel Ayoola</strong>, Deputy Vice-Chancellor (Administration), University of Ibadan, Nigeria. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) Shilpi Jain</strong>, Department Of Mathematics, Poornima College of Engineering, Jaipur-302022, India. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Prof. (Dr.) Pooja</strong>, Dean, Faculty of Engineering and Technology, Sharda University Uzbekistan. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Dr. Jaswinder Pal</strong>, Professor of Physics, Baba Farid College, Bathinda affiliated to Punjabi University, Patiala, India & Co-Founder at MTTF, India. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                                <li>
                                    <strong>Dr. Gurmej Singh Sandhu</strong>, Professor of Mathematics, Mata Sahib Kaur Girls College, Bathinda affiliated to Punjabi University, Patiala, India & Co-Founder at MTTF, India. <a href="https://scholar.google.com" className="text-blue-500 hover:underline">Google Scholar Profile</a>
                                </li>
                            </ul>
                        </div>
                    )}
                    {show.ImportantDates && (
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">Important Dates for EARG Awards 2025</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Nomination Registration:</strong> October 1, 2024</li>
                                <li><strong>Application Deadline:</strong> November 30, 2024</li>
                                <li><strong>Result Declaration:</strong> December 10, 2024</li>
                                <li><strong>Award Ceremony:</strong> February 28, 2025</li>
                            </ul>
                        </div>
                    )}
                    {show.HowToApply && (
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">Application Process for EARG Awards 2025</h2>
                            <ol className="list-decimal pl-5 space-y-4">
                                <li>
                                    <strong>Eligibility Check:</strong> Ensure that you meet the eligibility criteria for the award.
                                </li>
                                <li>
                                    <strong>Nomination Form:</strong> Obtain and complete the official nomination form, available on the organization’s website.
                                </li>
                                <li>
                                    <strong>Supporting Documents:</strong> Gather all required supporting documents, including a CV, list of achievements, recommendation letters, and research publications (Candidates with h-Index, D-Index are exempt from submitting proof of publications).
                                </li>
                                <li>
                                    <strong>Submission:</strong> Submit the completed application form and supporting documents online by the deadline.
                                    <ol className="list-decimal pl-5 space-y-2">
                                        <li>Click on registration for nomination.</li>
                                        <li>Enter your email address and click on verify email.</li>
                                        <li>Enter the OTP code sent to your email for verification.</li>
                                        <li>Select the award category and fill in the details.</li>
                                        <li>Upload PDF files as per guidelines (Nomination Form and CV must be a single PDF).</li>
                                        <li>Maximum PDF file size: 200 MB (preferred size: up to 100 MB).</li>
                                        <li>Click on Submit for your application.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Confirmation:</strong> Await a confirmation receipt from the award committee to ensure all materials are received.
                                </li>
                                <li>
                                    <strong>Review Process:</strong> The committee will review applications; shortlisted candidates may be contacted for further information.
                                </li>
                                <li>
                                    <strong>Announcement:</strong> Winners will be announced via email according to the committee's schedule.
                                </li>
                            </ol>
                        </div>
                    )}
                    {/* Call for Nomination */}
                    {show.CallForNomination && (
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">Call for Nomination of International EARG Awards 2025</h2>
                            <p><strong>Call for Nomination:</strong> Started October 1, 2024</p>
                            <p><strong>Application Deadline:</strong> November 30, 2024</p>
                            <p>
                                Before applying, review the details about each award category, eligibility criteria, and required supportive documents.
                                Ensure your application is complete, as incomplete submissions will be rejected.
                            </p>
                            <h3 className="text-xl font-semibold">Steps to Apply</h3>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Click on registration for nomination.</li>
                                <li>Enter your email address in the blue strip and click on verify email.</li>
                                <li>Enter the OTP code sent to your email for verification.</li>
                                <li>Select the award category and fill in the details.</li>
                                <li>Upload PDF files as per guidelines (Nomination Form and CV must be a single PDF).</li>
                                <li>Maximum PDF file size: 200 MB (preferred size: up to 100 MB).</li>
                                <li>Click on Submit for your application.</li>
                            </ol>
                        </div>
                    )}
                    {/* ARG Award Categories and Eligibility */}
                    {show.CategoriesAndEligibility && (
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold">EARG Award Categories and Eligibility</h2>
                            <p>
                                Each award category has distinct eligibility criteria designed to match its specific focus area. This approach ensures that a wide variety of individuals contributing to the fields of science, technology, engineering, and mathematics (STEM) are acknowledged for their outstanding work and influence on society.
                            </p>
                            <h3 className="text-xl font-semibold">1. Lifetime Achievement Award in Academia and Research</h3>
                            <p>
                                This prestigious award recognizes decades of dedication, innovation, and profound impact on respective fields, inspiring future generations and shaping the future of knowledge.
                            </p>
                            <h4 className="font-semibold">Eligibility Criteria:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Career Duration:</strong> Minimum of 25 years in academia.</li>
                                <li><strong>Academic Contributions:</strong> Significant contributions through teaching and mentoring.</li>
                                <li><strong>Research Achievements:</strong> Record of publications and major projects.</li>
                                <li><strong>Innovation and Impact:</strong> Development of new theories or technologies.</li>
                                <li><strong>Leadership and Service:</strong> Evidence of leadership roles.</li>
                                <li><strong>Global Recognition:</strong> Recognition by peers worldwide.</li>
                                <li><strong>Mentorship:</strong> Strong record of mentoring future researchers.</li>
                                <li><strong>Collaboration:</strong> Active participation in national and international collaborations.</li>
                            </ul>
                            <h3 className="text-xl font-semibold">2. Excellence in Academic Leadership Award</h3>
                            <p>
                                This award honors individuals demonstrating outstanding leadership in academia, contributing to the advancement of education, research, and innovation.
                            </p>
                            <h4 className="font-semibold">Eligibility Criteria:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Academic Position:</strong> Senior academic leadership position required.</li>
                                <li><strong>Experience:</strong> Minimum of 10 years in leadership roles.</li>
                                <li><strong>Contributions to Education:</strong> Development of innovative educational programs.</li>
                                <li><strong>Research Excellence:</strong> Strong research contributions and mentorship.</li>
                                <li><strong>Innovation and Impact:</strong> Proven ability to drive institutional growth.</li>
                                <li><strong>Professional Recognition:</strong> Recognition from professional bodies.</li>
                                <li><strong>Community Engagement:</strong> Active involvement in outreach activities.</li>
                                <li><strong>Ethical Leadership:</strong> Adherence to high ethical standards.</li>
                            </ul>
                            <h3 className="text-xl font-semibold">3. Excellence in Research and Development</h3>
                            <p>
                                This award recognizes individuals or teams making significant contributions to Research and Development, leading to impactful innovations.
                            </p>
                            <p><strong>Monetary Award for Winners:</strong> 10,000 INR</p>
                            <h4 className="font-semibold">Awards Categories:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Sir V. Raman Award</li>
                                <li>Ramanujan Award</li>
                                <li>Évariste Galois Award</li>
                                <li>Henry Moseley Award</li>
                                <li>Hugo Junkers Award</li>
                            </ul>
                        </div>
                    )}
                    {/* Registration Fee */}
                    {show.RegistrationFee && (
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold mb-4">Registration for International EARG Awards 2025</h2>
                            <p>Join us in celebrating excellence in STEM at the International EARG Awards 2025 on February 28, 2025.</p>
                            <h3 className="text-xl font-semibold">Registration Fees:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Early Bird Registration (until Dec 10, 2024): INR 3,000</li>
                                <li>MTTF Life-Time Member Early Bird (until Dec 10, 2024): INR 2,000</li>
                                <li>Regular Registration (Dec 11-31, 2024): INR 4,000</li>
                                <li>International Applicant: USD 150</li>
                                <li className="text-sm text-gray-600">Note: MTTF Membership benefit for early registration before Sep 30, 2024</li>
                            </ul>
                            <h3 className="text-xl font-semibold">Registration Includes:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Award Certificate and Memento</li>
                                <li>Event Photographs and Videography</li>
                                <li>Materials (bag, pen, letter pad, event materials)</li>
                                <li>Networking Events for collaboration</li>
                                <li>Breakfast and Lunch during scheduled events</li>
                            </ul>
                            <h3 className="text-xl font-semibold">Exclusions:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Travel and accommodation expenses</li>
                                <li>Meals outside of scheduled events</li>
                                <li>Activities not specified in the program</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>


        </>
    )
}

export default Award2025