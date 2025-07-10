# Tracheal Aspirate Culture Decision Tool

An evidence-based clinical decision support tool for interpreting positive tracheal aspirate cultures in mechanically ventilated patients. This tool helps distinguish colonization from infection to guide antimicrobial stewardship.

## Overview

This web-based tool assists clinicians in making informed decisions about whether to treat positive tracheal aspirate cultures with antibiotics. Based on current ATS/IDSA guidelines and antimicrobial stewardship principles, it provides recommendations using clinical parameters rather than culture results alone.

**Key Principle:** Clinical improvement takes precedence over positive culture results. Studies show that 50% of positive tracheal aspirate cultures represent colonization rather than infection.

## Site

Visit the tool at: [https://dcicantab5.github.io/tacs/](https://dcicantab5.github.io/tacs/)

## Clinical Deterioration Pattern Explained

The "Clinical Deterioration Pattern" checkbox should be selected when there's progressive worsening of multiple clinical indicators over 24-48 hours, suggesting true infection rather than colonization.

### Key Components:

#### 1. **Vital Sign Trends**
- **Increasing fever** (or new hypothermia <36°C)
- **Rising heart rate** (persistent tachycardia)
- **Worsening blood pressure** (requiring increased vasopressors)
- **Increased respiratory rate** or work of breathing

#### 2. **Oxygenation Decline**
- **Decreasing P/F ratio** (PaO2/FiO2)
- **Increasing FiO2 requirements** to maintain saturation
- **Rising PEEP requirements**
- **Increased ventilator support** needs

#### 3. **Laboratory Trends**
- **Rising WBC count** (or new left shift)
- **Increasing inflammatory markers** (CRP, procalcitonin)
- **Worsening metabolic acidosis**
- **Rising lactate levels**

#### 4. **Clinical Observations**
- **Increased secretions** (volume, purulence)
- **Change in secretion character** (thick, discolored)
- **Decreased lung compliance**
- **New/worsening lung sounds**

### Example Patterns:

**Deterioration Pattern (Select checkbox):**
- Day 1: Temp 37.8°C, FiO2 40%, WBC 12k
- Day 2: Temp 38.9°C, FiO2 55%, WBC 18k
- Day 3: Temp 39.2°C, FiO2 70%, WBC 22k

**Stable Pattern (Don't select):**
- Day 1: Temp 37.5°C, FiO2 40%, WBC 11k
- Day 2: Temp 37.3°C, FiO2 35%, WBC 10k
- Day 3: Temp 37.0°C, FiO2 30%, WBC 9k

## Scoring System

The tool uses a weighted scoring system to differentiate infection from colonization:

| **Clinical Parameter** | **Finding** | **Infection Score** | **Colonization Score** |
|---|---|:---:|:---:|
| **Neutrophils on Gram Stain** | Moderate-Many | +3 | 0 |
| | Few | 0 | +1 |
| | None | 0 | +2 |
| **Clinical Status** | Deteriorating | +4 | 0 |
| | Stable | 0 | +2 |
| | Improving | 0 | +3 |
| **Chest X-ray** | New Infiltrates | +3 | 0 |
| | No Change | 0 | +2 |
| **Clinical Signs** | Multiple Signs | +2 | 0 |
| | Isolated Fever | 0 | +1 |
| | No Fever | 0 | +1 |
| **Oxygenation** | Worsening | +2 | 0 |
| | Improving/Stable | 0 | +1 |
| **Time from Intubation** | < 48 hours | +1 | 0 |
| | > 48 hours | 0 | +2 |
| **Additional Risk Factors** | | | |
| | Procalcitonin >0.25 ng/mL | +2 | 0 |
| | Clinical Deterioration Pattern | +3 | 0 |
| | Multiple Positive Cultures | +1 | 0 |

### Decision Rule:
- **If Infection Score > Colonization Score** → **TREAT**
- **If Colonization Score ≥ Infection Score** → **OBSERVE**

### Maximum Possible Scores:
- **Maximum Infection Score**: 21 points
- **Maximum Colonization Score**: 11 points


## Usage Instructions

1. **Enter Clinical Parameters:**
   - Select neutrophil count from Gram stain
   - Choose current clinical status
   - Indicate chest X-ray findings
   - Select clinical signs present
   - Note oxygenation trajectory
   - Specify time since intubation

2. **Check Additional Risk Factors:**
   - Procalcitonin elevation
   - Clinical deterioration pattern
   - Multiple positive cultures

3. **Calculate Recommendations:**
   - Click the blue "Calculate Recommendations" button
   - Review the color-coded recommendation
   - Note the infection vs colonization scores

4. **Interpret Results:**
   - **Green (OBSERVE)**: Likely colonization - continue monitoring
   - **Orange/Red (TREAT)**: Likely infection - initiate targeted antibiotics

## ⚠️ Important Disclaimers

### Educational Tool Notice
This scoring system is an **EDUCATIONAL DEMONSTRATION** and:
- **Not validated** in clinical studies
- **Not peer-reviewed**
- **Not FDA approved**
- Should **NOT replace** clinical judgment

### Clinical Use Warning
- Always apply clinical judgment to individual cases
- Consider institutional guidelines and antibiograms
- Consult infectious disease specialists when appropriate
- This tool provides guidance, not definitive decisions

## Evidence Base

### Guidelines
- **Primary Source**: 2016 ATS/IDSA Guidelines for HAP/VAP Management
- **Supporting Evidence**: Multiple studies showing no mortality increase when observing stable patients with positive cultures

### Key Evidence Points
1. **50% of positive cultures** represent colonization
2. **38% reduction** in culture rates with stewardship programs
3. **No mortality increase** when stable patients are observed
4. **Tracheal aspirate specificity**: Only 23-78% for true infection

### Literature References
1. Kalil AC, et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the Infectious Diseases Society of America and the American Thoracic Society. Clin Infect Dis. 2016;63(5):e61-e111.

2. Sick-Samuels AC, et al. Diagnostic Stewardship of Endotracheal Aspirate Cultures in a PICU. Pediatr Crit Care Med. 2019;20(8):e372-e379.

### Areas for Improvement
- Add references/citations within the tool
- Implement print functionality
- Add export capabilities for documentation
- Include more detailed antimicrobial recommendations
- Add multi-language support

## Contact & Support

For questions, suggestions, or issues:
- Open an issue on GitHub
- Contact via GitHub profile

## License

This project is licensed under the AGPL-3.0 License - see the LICENSE file for details.

## Acknowledgments

- ATS/IDSA for clinical guidelines
- Healthcare providers working to reduce unnecessary antibiotic use


---

**Remember**: This tool is for educational purposes and clinical decision support only. Always use clinical judgment and follow institutional protocols when making treatment decisions.
