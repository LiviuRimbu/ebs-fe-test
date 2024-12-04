import React from "react";

interface SortByPriceProps {

    onChange: (value: "asc" | "desc" | 'none') => void;
    value: "asc" | "desc" | "none";
}

const SortByPrice: React.FC<SortByPriceProps> = ({onChange, value}) => {

    return (
        <div className="mb-4">
            <label htmlFor="sort" className="mr-2 font-semibold">
                Sort by price:
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value as "asc" | "desc" | "none")}
            >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};

export default SortByPrice;
