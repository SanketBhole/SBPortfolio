import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../ContactManager/ContactManager.css'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import generateExcelFile from './ExcelGenerator'; // Make sure to have this utility function

const pageVariants = {
    in: {
      opacity: 1,
      transition: "opacity 1000ms ease-in",
      y:0
    },
    out: {
      opacity: 0,
      transition: "opacity 1000ms ease-in",
      y:"100%"
    },
  }

const firebaseConfig = {
    apiKey: "AIzaSyA3FPut_uN6OclPrSFU0OraEhnWFfDMUaM",
    authDomain: "sportfoliob.firebaseapp.com",
    projectId: "sportfoliob",
    storageBucket: "sportfoliob.appspot.com",
    messagingSenderId: "369047986987",
    appId: "1:369047986987:web:fb1a18f6e9a621bb95db6e",
    measurementId: "G-J626JNE2X7"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(firebaseApp);

const ContactManager = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFormDataList(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [db]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      setFormDataList((prevData) => prevData.filter((data) => data.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  const handleRefresh = async () => {
    // Fetch the updated data from Firestore
    try {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFormDataList(data);
    } catch (error) {
      console.error('Error refreshing data:', error.message);
    }
  };

  const handleDownloadExcel = () => {
    generateExcelFile(formDataList);
  };

  const handleDeleteAll = async () => {
    try {
      // Delete all records in Firestore
      const batch = writeBatch(db);
      formDataList.forEach((data) => {
        const docRef = doc(db, 'contacts', data.id);
        batch.delete(docRef);
      });
      await batch.commit();
  
      // Clear the local state
      setFormDataList([]);
    } catch (error) {
      console.error('Error deleting all data:', error.message);
    }
  };
  

  return (
    <motion.div className="text-light" id="contact_detail" initial="out" animate="in" exit="out" variants={pageVariants}>
      <div className="container" id="contact">
        {/* Buttons for Download Excel and Delete All */}
          <div className="text-center mt-4">
            <button className="btn btn-success mx-2" onClick={handleRefresh}>
              Refresh
            </button>
            <button className="btn btn-primary mx-2" onClick={handleDownloadExcel}>
              Download Excel
            </button>
            <button className="btn btn-danger mx-2" onClick={handleDeleteAll}>
              Delete All
            </button>
          </div>
        <div className="row p-3">
          {/* Display cards */}
          {formDataList.map((data) => (
            <div className="col-md-4" key={data.id}>
              <div className="card mb-3" id='glassCard'>
                <div className="card-body">
                  <p className="card-text">Name: {data.name}</p>
                  <p className="card-text">Mobile: {data.mobile}</p>
                  <p className="card-text">Company Name: {data.cname}</p>
                  <p className="card-text">Company Email: {data.cemail}</p>
                  <p className="card-text">Message: {data.message}</p>
                  <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default ContactManager;
