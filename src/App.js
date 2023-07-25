import { Greeting } from "./components/Greeting/Greeting";
import { Messege } from "./components/Messege/Messege";
import { Button } from "./components/Button/Button";

export function App() {
  return (
    <>
    <Greeting
      name="Іван" />
    <Messege
      text="Як у тебе справи?" />   
    <Button/>
    </>
  );
}

export default App;
