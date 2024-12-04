import React from "react";

interface SortDropdownProps {
    value: "asc" | "desc" | "none";
    onChange: (value: "asc" | "desc" | "none") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({value, onChange}) => {
    return (
        <div className="mb-4">
            <label htmlFor="sort" className="mr-2 font-semibold">
                Sort by price:
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value as "asc" | "desc")}
                className="p-2 border rounded"
            >

                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
    );
};

export default SortDropdown;
