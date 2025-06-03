import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './policyCard.css'

function Home() {
  // const location = useLocation();
  // const user = location.state?.user;
  const [policies,setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      const res = await fetch('http://localhost:7000/api/policies/all');
      const data = await res.json();
      setPolicies(data);
    };

    fetchPolicies();
  }, []);
  return (
    <>   
    <div className="policy-container">
        <h2>Available Policies</h2>
            <div className="policy-row">
                {policies.map((policy) => (
                <div key={policy.id} className="policy-card">
                    <h3>{policy.name}</h3>
                    <p><strong>Coverage:</strong> {policy.coverage}</p>
                    <p><strong>Premium:</strong> ₹{policy.premium}</p>
                    <p>{policy.description}</p>
                    <button className="apply-btn">Apply Now</button>
                </div>
                ))}
            </div>
    </div>
    </>

  );
}

export default Home;
