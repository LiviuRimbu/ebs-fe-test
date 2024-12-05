import React from "react";
import {useTranslation} from "react-i18next";


interface SortDropdownProps {
    value: "asc" | "desc" | "none";
    onChange: (value: "asc" | "desc" | "none") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({value, onChange}) => {
    const {t} = useTranslation();

    return (
        <div className="mb-4">
            <label htmlFor="sort" className="mr-2 font-semibold">
                {t("sort-by-price")}
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value as "asc" | "desc")}
                className="border rounded"
            >
                <option value="asc">{t("none")}</option>
                <option value="asc">{t("low-to-high")}</option>
                <option value="desc">{t("high-to-low")}</option>
            </select>
        </div>
    );
};

export default SortDropdown;
