import BAButton from './components/BAButton';
import BAInput from './components/BAInput';
import BAIconButton from './components/BAIconButton';
import BADatePicker from './components/BADatePicker';
import BASelect from './components/BASelect';
import BASwitch from './components/BASwitch';

import './App.css';

function App() {
  const options = [
    {
      value: "khi",
      displayName: "Karachi",
    },
    {
      value: "lhr",
      displayName: "Lahore",
    },
    {
      value: "isl",
      displayName: "Islamabad",
    },
    {
      value: "quetta",
      displayName: "Quetta",
    },
    {
      value: "peshawar",
      displayName: "Peshawar",
    },
  ];
  return (
    <div className="App">
      <div>
        <h1>Button</h1>
        <BAButton
          label='Submit'
          buttonClick={() => {
            alert("Submitted Successfully!")
          }}
        />
      </div>

      <div>
        <h1>Input</h1>
        <BAInput
          label='Enter Your Name'
        />
      </div>

      <div>
        <h1>Icon Button</h1>
        <BAIconButton
          label='Shop Now'
          buttonClick={() => {
            alert("Deleted Successfully!")
          }}
        />
      </div>

      <div>
        <h1>Date Picker</h1>
        <BADatePicker
          change={(e: any) => {
            console.log(e.target.value);
          }}
        />
      </div>

      <div>
        <h1>Select</h1>
        <BASelect
          label='Choose Your City'
          option={options}
        />
      </div>

      <div>
        <h1>Switch</h1>
        <BASwitch/>
      </div>
    </div>
  );
}

export default App;