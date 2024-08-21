import { useEffect, useId, useRef, useState } from "react";
import { es } from "date-fns/locale";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import React from "react";
import "./DayPicker.css";

export function PickerDay() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const headerId = useId();

  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState(new Date());

  // Hold the selected date in state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Hold the input value in state
  const [inputValue, setInputValue] = useState("");

  // Hold the dialog visibility in state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to toggle the dialog visibility
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  // Hook to handle the body scroll behavior and focus trapping.
  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    if (!dialogRef.current) return;
    if (isDialogOpen) {
      handleBodyScroll(true);
      dialogRef.current.showModal();
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
    }
    return () => {
      handleBodyScroll(false);
    };
  }, [isDialogOpen]);

  const handleDayPickerSelect = (date: Date) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "dd/MM/yyyy"));
    }
    dialogRef.current?.close();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // keep the input value in sync

    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div style={{ marginTop: "1.5em", fontSize: "16px" }}>
      <label htmlFor="date-input">Fecha:</label>
      <input
        style={{ marginLeft: "24px" }}
        id="date-input"
        type="text"
        value={inputValue}
        placeholder={"MM/dd/yyyy"}
        onChange={handleInputChange}
      />{" "}
      <button
        style={{
          backgroundColor: "#BDD7EE",
          border: "0.5px solid #53a5dc",
        }}
        onClick={toggleDialog}
        aria-controls="dialog"
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-label="Open calendar to choose booking date"
      >
        <i className="fa-regular fa-calendar-days"></i>
      </button>
      <dialog
        role="dialog"
        ref={dialogRef}
        id={dialogId}
        aria-modal
        aria-labelledby={headerId}
        onClose={() => setIsDialogOpen(false)}
      >
        <div className="div-close-button">
          <button
            className="close-button"
            onClick={() => setIsDialogOpen(false)}
          >
            x
          </button>
        </div>
        <DayPicker
          locale={es}
          required
          fixedWeeks
          month={month}
          onMonthChange={setMonth}
          autoFocus
          mode="single"
          selected={selectedDate}
          onSelect={handleDayPickerSelect}
        />
      </dialog>
    </div>
  );
}
