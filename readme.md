# React Checkbox component

Function checkbox component

Usage
```
import { Checkbox } from "@lzstudio/react-ui-checkbox";
import "@lzstudio/react-ui-checkbox/src/styles/widget.css"; // --- example styles

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div>
        <Checkbox state={{value: isDarkMode, setValue: setIsDarkMode}} gui={{label: "Dark mode"}} />
        <span> Dark mode is {isDarkMode ? "enabled" : "disabled"} </span>
    </div>
  );
}

export default App;

```