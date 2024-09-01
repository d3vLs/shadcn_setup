import logo from "./logo.svg";
// import "./App.css";
import "./globals.css";
import { Calendar } from "./components/ui/calendar";
import { useState } from "react";
import Page from "./components/ui/userComponents/page";
import { Button } from "./components/ui/button";
import { DatePicker } from "./components/ui/userComponents/datePicker";
import InputOtpForm from "./components/ui/userComponents/inputOtpForm";
import { Progress } from "./components/ui/progress";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { Close } from "@radix-ui/react-toast";
import { Switch } from "./components/ui/switch";
import TableComponent from "./components/ui/userComponents/tableComponent";
import TooltipComponent from "./components/ui/userComponents/tooltipComponent";
import { Toggle } from "./components/ui/toggle";
import { SelectScrollable } from "./components/ui/userComponents/selectScrollable";
import {
  BarChartComponent,
  AreaChartComponent,
  PieChartComponent,
  RadarChartComponent,
} from "./components/ui/userComponents/chartComponent";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className=" h-full w-full ">
        {/* <p className="">Working</p> */}
        <div>
          <h1 className="font-bold text-3xl py-3">Calender Example</h1>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className=" rounded-md border"
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Button Example</h1>
          <Button>Button</Button>
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Date Picker Example</h1>
          <DatePicker />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Input OTP Form Example</h1>
          <InputOtpForm />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Progress Bar Example</h1>
          <Progress value={50} className="w-[200px]" />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Sonner Example</h1>
          <Button
            onClick={() => {
              // toast.message("Event has been created", {
              //   description: "Monday, January 3rd at 6:00pm",
              // });
              toast.custom((t) => (
                <div className="px-6 py-2">
                  <h1>Custom toast</h1>
                  <p>Event has been created</p>
                  <Button onClick={() => toast.dismiss(t)}>Dismiss</Button>
                </div>
              ));
            }}
          >
            Sonner Toast
          </Button>
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Switch Example</h1>
          <Switch />
        </div>

        <div>
          <h1 className="font-bold text-3xl py-3">Table Example</h1>
          <TableComponent />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Tooltip Example</h1>
          <TooltipComponent />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Toogle Example</h1>
          <Toggle variant="outline" color={"red"} aria-label="Toggle italic">
            <p>Toggle this</p>
          </Toggle>
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Scrollable Select Example</h1>
          <SelectScrollable />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-3">Charts Example</h1>
          <div className="flex-row">
            <BarChartComponent />
            <PieChartComponent />
            <RadarChartComponent />
            <AreaChartComponent />
          </div>
        </div>
        {/* <Page /> */}
      </div>
      <Toaster position="bottom-center" expand={false} />
    </div>
  );
}

export default App;
