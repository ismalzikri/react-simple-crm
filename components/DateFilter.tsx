import React from "react";

interface DateFilterProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function DateFilter({ selectedDate, onDateChange }: DateFilterProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(e.target.value);
  };

  return (
    <input
      className="border border-black px-4 py-2 rounded-lg"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
}
