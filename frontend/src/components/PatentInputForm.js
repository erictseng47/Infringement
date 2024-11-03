import React, { useState } from 'react';

function PatentInputForm({ onSubmit }) {
    const [patentId, setPatentId] = useState('');
    const [companyName, setCompanyName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ patentId, companyName });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="patentId">Patent ID:</label>
                <input
                    type="text"
                    id="patentId"
                    value={patentId}
                    onChange={(e) => setPatentId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="companyName">Company Name:</label>
                <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Check Infringement</button>
        </form>
    );
}

export default PatentInputForm;
