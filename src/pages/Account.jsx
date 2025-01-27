import React from 'react';
import { motion } from 'framer-motion';

const AccountPage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <motion.section 
                className="bg-blue-600 text-white text-center py-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold">Bank Accounts</h2>
                <p className="mt-4 text-lg">Choose the right account for your financial needs.</p>
                <a href="#account-options" className="mt-6 inline-block bg-white text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
                    Explore Our Account Options
                </a>
            </motion.section>

            {/* Account Options Section */}
            <motion.section 
                id="account-options" 
                className="py-20 max-w-7xl mx-auto px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center">Our Account Options</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Savings Account", "Checking Account", "Business Account"].map((account, idx) => (
                        <motion.div 
                            key={idx}
                            className="bg-white shadow-lg rounded-lg p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold">{account}</h3>
                            <p className="mt-2">
                                {account === "Savings Account"
                                    ? "Save for your future with high-interest rates."
                                    : account === "Checking Account"
                                    ? "Manage your daily expenses with ease."
                                    : "Tailored solutions for your business needs."}
                            </p>
                            <a href="#apply" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg">
                                Apply Now
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Account Application Section */}
            <motion.section 
                id="apply" 
                className="py-20 bg-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Ready to Open an Account?</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        Join us today and take the first step towards your financial goals!
                    </p>
                    <div className="text-center mt-6">
                        <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
                            Start Application
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* Footer */}
            <motion.footer 
                className="bg-blue-800 text-white py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p>Email: support@mybank.com</p>
                    <p>Phone: 1-800-123-4567</p>
                    <p>&copy; {new Date().getFullYear()} My Bank. All rights reserved.</p>
                </div>
            </motion.footer>
        </div>
    );
};

export default AccountPage;