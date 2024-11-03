import React from 'react';

function ResultDisplay({ result }) {
    if (!result) return null;

    return (
        <div className="result-display">
            <h2>Check Results</h2>
            {result.message === 'Data matches the record.' ? (
                <div>
                    <h3>Matched Details:</h3>
                    <p><strong>Patent Title:</strong> {result.patent.title}</p>
                    <p><strong>Company Name:</strong> {result.company.name}</p>
                </div>
            ) : (
                <p>{result.message}</p>
            )}
        </div>
    );
}

export default ResultDisplay;
