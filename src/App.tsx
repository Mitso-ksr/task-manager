import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <p className="bg-red-primary font-heading text-heading-m text-center">
          This is a test page
        </p>
        <Button name="Click me" />
      </div>
    </>
  );
}

export default App;
