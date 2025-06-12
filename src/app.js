import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
// Import other forms similarly...

function App() {
  const steps = [ProfileForm /*, EducationForm, SkillsForm, etc. */];
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];

  return (
    <div>
      <StepComponent
        next={() => setStep(step + 1)}
        back={() => setStep(step - 1)}
      />
    </div>
  );
}

export default App;
