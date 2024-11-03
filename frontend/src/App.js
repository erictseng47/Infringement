import React, { useState } from 'react';
import PatentInputForm from './components/PatentInputForm';
import ResultDisplay from './components/ResultDisplay';
import companyProducts from './data/company_products.json';
import patents from './data/patents.json';

function App() {
    const [result, setResult] = useState(null);

    const handleCheckInfringement = ({ patentId, companyName }) => {
        const patentMatch = patents.find(patent => patent.publication_number === patentId);
        const companyMatch = companyProducts.companies.find(company => company.name === companyName);

        if (patentMatch && companyMatch) {
            setResult({
                message: 'Data matches the record.',
                patent: patentMatch,
                company: companyMatch
            });
        } else {
            setResult({ message: '找不到' });
        }
    };

    return (
        <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Patent Infringement Checker</h1>
            <PatentInputForm onSubmit={handleCheckInfringement} />
            <ResultDisplay result={result} />
        </div>
    );
}

export default App;