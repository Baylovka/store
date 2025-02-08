'use client'
import { useState } from "react";
import FilterList from "./FilterList";
import PriceSlider from "./PriceSlider";
import Products from "./Products";
import Pagination from "../Pagination/Pagination";
import SortBlock from "./SortBlock";

const categories = [
    {
        name: "House Plants",
        count: 33,
    },
    {
        name: "Potter Plants",
        count: 12,
    },
    {
        name: "Seeds",
        count: 65,
    },

    {
        name: "Small Plants",
        count: 39,
    },
    {
        name: "Big Plants",
        count: 23,
    },
    {
        name: "Succulents",
        count: 17,
    },
    {
        name: "Terrariums",
        count: 19,
    },
    {
        name: "Gardening",
        count: 13,
    },
    {
        name: "Accessories",
        count: 18,
    },
]
const size = [
    {
        name: "Small",
        count: 119,
    },
    {
        name: "Medium",
        count: 86,
    },
    {
        name: "Large",
        count: 78,
    },
]
const MIN = 39;
const MAX = 1230;

export default function ProductSection() {
    const [range, setRange] = useState<number[]>([MIN, MAX]);

    return (
        <section className="product-section">
            <aside className="product-section__filters filters">
                <FilterList rows={categories}>Categories</FilterList>
                <PriceSlider
                    isShowTooltip={false}
                    max={MAX}
                    min={MIN}
                    onChange={setRange}
                    step={1}
                    value={range}
                />
                <FilterList rows={size}>Size</FilterList>
            </aside>
            <main className="product-section__main products">
                <SortBlock />
                <Products />
                <Pagination />
            </main>
        </section>
    );
}