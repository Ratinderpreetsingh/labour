"use client";

import { FC, ReactNode } from "react";
import { TiArrowSortedDown } from "react-icons/ti";



interface SelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  icon?: ReactNode; // ✅ safer than 'any'
}


const Select: FC<SelectProps> = ({ options, value, onChange, placeholder, className, icon }) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-6 py-3 rounded-xl bg-[#1a2226] text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md transition pr-10 ${
          icon ? "pl-10" : ""
        }`}
      >
        {placeholder && (
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Dropdown arrow */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <TiArrowSortedDown />
      </div>
    </div>
  );
};

export default Select;
