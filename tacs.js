import React, { useState } from 'react';
import { ChevronLeft, Star, Info, AlertCircle, CheckCircle } from 'lucide-react';

const TrachealAspirateDecisionTool = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [neutrophils, setNeutrophils] = useState('');
  const [clinicalStatus, setClinicalStatus] = useState('');
  const [infiltrates, setInfiltrates] = useState('');
  const [fever, setFever] = useState('');
  const [oxygenation, setOxygenation] = useState('');
  const [timeFromIntubation, setTimeFromIntubation] = useState('');
  const [procalcitonin, setProcalcitonin] = useState('');

  const calculateRecommendation = () => {
    if (!neutrophils || !clinicalStatus || !infiltrates || !fever || !oxygenation || !timeFromIntubation) {
      return null;
    }

    let infectionScore = 0;
    let colonizationScore = 0;

    // Neutrophils assessment
    if (neutrophils === 'moderate-many') infectionScore += 3;
    else if (neutrophils === 'few') colonizationScore += 1;
    else colonizationScore += 2;

    // Clinical status
    if (clinicalStatus === 'deteriorating') infectionScore += 4;
    else if (clinicalStatus === 'stable') colonizationScore += 2;
    else colonizationScore += 3;

    // Infiltrates
    if (infiltrates === 'new') infectionScore += 3;
    else colonizationScore += 2;

    // Fever
    if (fever === 'multiple-signs') infectionScore += 2;
    else if (fever === 'isolated') colonizationScore += 1;
    else colonizationScore += 1;

    // Oxygenation
    if (oxygenation === 'worsening') infectionScore += 2;
    else colonizationScore += 1;

    // Time from intubation
    if (timeFromIntubation === '>48h') colonizationScore += 2;
    else infectionScore += 1;

    // Procalcitonin (if provided)
    if (procalcitonin) {
      const pctValue = parseFloat(procalcitonin);
      if (pctValue > 0.5) infectionScore += 2;
      else if (pctValue > 0.25) infectionScore += 1;
      else colonizationScore += 1;
    }

    return {
      infectionScore,
      colonizationScore,
      recommendation: infectionScore > colonizationScore ? 'treat' : 'observe'
    };
  };

  const result = calculateRecommendation();

  if (showInfo) {
    return (
      <div className="bg-black text-white min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <button className="text-cyan-400 flex items-center">
            <ChevronLeft className="w-6 h-6 mr-1" />
            Back
          </button>
          <h1 className="text-lg font-medium">Tracheal Aspirate Decision</h1>
          <Star className="w-6 h-6 text-cyan-400" />
        </div>

        {/* Add Note Button */}
        <button className="w-full bg-yellow-700 text-white py-3 text-lg">
          Add Note
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            TRACHEAL ASPIRATE CULTURE<br />DECISION TOOL
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">CLINICAL USE</h3>
            <p className="text-gray-300 leading-relaxed">
              This tool evaluates positive tracheal aspirate cultures to distinguish colonization from infection. 
              The recommendation correlates with evidence-based outcomes and antimicrobial stewardship principles.
            </p>
          </div>

          {/* Evidence Table */}
          <div className="bg-gray-900 rounded-lg p-4 mb-8">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left py-2"></th>
                  <th className="text-center py-2">Mortality</th>
                  <th className="text-center py-2">AMR Risk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="py-3 font-bold">Observe</td>
                  <td className="text-center">No ↑</td>
                  <td className="text-center">↓ 38%</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-3 font-bold">Treat All</td>
                  <td className="text-center">No ↓</td>
                  <td className="text-center">↑ Risk</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-3 font-bold">Clinical Decision</td>
                  <td className="text-center">Optimal</td>
                  <td className="text-center">↓ 18-22%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-2">KEY PRINCIPLE</h3>
            <div className="bg-blue-900 rounded-lg p-4">
              <p className="text-blue-100">
                Clinical improvement takes precedence over positive culture results. 
                50% of positive cultures represent colonization.
              </p>
            </div>
          </div>

          {/* References */}
          <div>
            <h3 className="text-lg font-bold mb-2">REFERENCES</h3>
            <ol className="text-sm text-gray-400 space-y-2">
              <li>1. ATS/IDSA Guidelines. Clin Infect Dis. 2016;63(5):e61-e111.</li>
              <li>2. Sick-Samuels AC, et al. Pediatr Crit Care Med. 2019;20(8):e372-e379.</li>
            </ol>
          </div>

          {/* Continue Button */}
          <button 
            onClick={() => setShowInfo(false)}
            className="w-full bg-cyan-600 text-white py-4 rounded-lg mt-8 font-medium"
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <button onClick={() => setShowInfo(true)} className="text-cyan-400 flex items-center">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </button>
        <h1 className="text-lg font-medium">Tracheal Aspirate Decision</h1>
        <button onClick={() => setShowInfo(true)}>
          <Info className="w-6 h-6 text-cyan-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-400 text-center mb-6">Enter clinical parameters</p>

        {/* Input Fields */}
        <div className="space-y-4">
          {/* Neutrophils on Gram Stain */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Neutrophils on Gram Stain</label>
            <select 
              value={neutrophils} 
              onChange={(e) => setNeutrophils(e.target.value)}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
            >
              <option value="">Select...</option>
              <option value="none">None</option>
              <option value="few">Few</option>
              <option value="moderate-many">Moderate-Many</option>
            </select>
          </div>

          {/* Clinical Status */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Clinical Status</label>
            <select 
              value={clinicalStatus} 
              onChange={(e) => setClinicalStatus(e.target.value)}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
            >
              <option value="">Select...</option>
              <option value="improving">Improving</option>
              <option value="stable">Stable</option>
              <option value="deteriorating">Deteriorating</option>
            </select>
          </div>

          {/* New Infiltrates */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Chest X-ray</label>
            <select 
              value={infiltrates} 
              onChange={(e) => setInfiltrates(e.target.value)}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
            >
              <option value="">Select...</option>
              <option value="no-change">No Change</option>
              <option value="new">New Infiltrates</option>
            </select>
          </div>

          {/* Fever Pattern */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Clinical Signs</label>
            <select 
              value={fever} 
              onChange={(e) => setFever(e.target.value)}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
            >
              <option value="">Select...</option>
              <option value="none">No Fever</option>
              <option value="isolated">Isolated Fever</option>
              <option value="multiple-signs">Multiple Signs</option>
            </select>
          </div>

          {/* Oxygenation */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Oxygenation</label>
            <select 
              value={oxygenation} 
              onChange={(e) => setOxygenation(e.target.value)}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
            >
              <option value="">Select...</option>
              <option value="improving">Improving/Stable</option>
              <option value="worsening">Worsening</option>
            </select>
          </div>

          {/* Time from Intubation */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Time from Intubation</label>
            <select 
              value={timeFromIntubation} 
              onChange={(e) => setTimeFromIntubation(e.target.value)}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
            >
              <option value="">Select...</option>
              <option value="<48h">&lt; 48 hours</option>
              <option value=">48h">&gt; 48 hours</option>
            </select>
          </div>

          {/* Procalcitonin (Optional) */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Procalcitonin (optional)</label>
            <input 
              type="number" 
              step="0.01"
              value={procalcitonin} 
              onChange={(e) => setProcalcitonin(e.target.value)}
              placeholder="ng/mL"
              className="w-full bg-gray-800 rounded-lg p-3 text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-8">
            <h3 className="text-cyan-400 text-xl font-bold mb-4">
              Recommendation
            </h3>
            
            {result.recommendation === 'observe' ? (
              <div className="bg-green-900 rounded-lg p-6 mb-4">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h4 className="text-2xl font-bold text-green-100">OBSERVE</h4>
                </div>
                <p className="text-green-100 mb-3">
                  Clinical parameters suggest colonization rather than infection.
                </p>
                <ul className="text-sm text-green-200 space-y-1">
                  <li>• Continue current management</li>
                  <li>• Monitor clinical status</li>
                  <li>• No antibiotics indicated</li>
                  <li>• Reassess if deterioration</li>
                </ul>
              </div>
            ) : (
              <div className="bg-red-900 rounded-lg p-6 mb-4">
                <div className="flex items-center mb-3">
                  <AlertCircle className="w-8 h-8 text-red-400 mr-3" />
                  <h4 className="text-2xl font-bold text-red-100">TREAT</h4>
                </div>
                <p className="text-red-100 mb-3">
                  Clinical parameters suggest true infection requiring treatment.
                </p>
                <ul className="text-sm text-red-200 space-y-1">
                  <li>• Start targeted antibiotics</li>
                  <li>• Use narrowest spectrum</li>
                  <li>• Plan 7-day course</li>
                  <li>• Daily reassessment for de-escalation</li>
                </ul>
              </div>
            )}

            {/* Score Breakdown */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h5 className="text-sm font-bold text-gray-400 mb-2">SCORE ANALYSIS</h5>
              <div className="flex justify-between text-sm">
                <span>Infection Score: {result.infectionScore}</span>
                <span>Colonization Score: {result.colonizationScore}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrachealAspirateDecisionTool;
