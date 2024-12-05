import React from "react";
import { useTranslation } from "react-i18next";

interface SortByPriceProps {
    onChange: (value: "asc" | "desc" | "none") => void;
    value: "asc" | "desc" | "none";
}

const SortByPrice: React.FC<SortByPriceProps> = ({ onChange, value }) => {
    const { t } = useTranslation(); // Do not specify namespace unless configured

    return (
        <div className="mb-4">
            <label htmlFor="sort" className="mr-2 font-semibold">
                {t("sort-items.sort-by-price", "Sort by price:")} {/* Use a key for translation */}
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value as "asc" | "desc" | "none")}
                className="p-2 border rounded"
            >
                <option value="none">{t("sort-items.none", "None")}</option>
                <option value="asc">{t("sort-items.low-to-high", "Low to High")}</option>
                <option value="desc">{t("sort-items.high-to-low", "High to Low")}</option>
            </select>
        </div>
    );
};

export default SortByPrice;
