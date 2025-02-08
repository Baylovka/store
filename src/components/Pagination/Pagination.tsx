import { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";
import PaginationItem from "./PaginationItem";

export default function Pagination() {
    const [page, setPage] = useState<number>(1);
    const [maxPagesToShow, setMaxPagesToShow] = useState<number>(7);

    useEffect(() => {
        if (window.innerWidth < 460) {
            setMaxPagesToShow(5);
        }
    }, []);

    const gamesStore = {
        totalPages: 20,
        currentPage: page
    }

    const generatePages = (maxPagesToShow: number) => {
        // let maxPagesToShow = 7;
        // if (typeof window !== "undefined" && window.innerWidth < 400) {
        //     maxPagesToShow = 5;
        // }

        const pages = [];
        const half = Math.floor(maxPagesToShow / 2);

        if (gamesStore.totalPages <= maxPagesToShow) {
            for (let i = 1; i <= gamesStore.totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (gamesStore.currentPage <= half + 1) {
                for (let i = 1; i <= maxPagesToShow; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(gamesStore.totalPages);
            } else if (gamesStore.currentPage >= gamesStore.totalPages - half) {
                pages.push(1);
                pages.push('...');
                for (let i = gamesStore.totalPages - (maxPagesToShow - 1); i <= gamesStore.totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = gamesStore.currentPage - half + 1; i <= gamesStore.currentPage + half - 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(gamesStore.totalPages);
            }
        }
        return pages;
    };

    const pages = generatePages(maxPagesToShow);

    return (
        <div className="pagination">
            <PaginationButton
                direction="prev"
                onClick={() => { setPage((prev) => Math.max(prev - 1, 1)) }}
            />
            <fieldset className="pagination__container">
                {pages.map((page, index) => (
                    <PaginationItem
                        key={index}
                        page={page}
                        isActive={page === gamesStore.currentPage}
                        onChange={() => setPage(Number(page))}
                    />
                ))}
            </fieldset>
            <PaginationButton
                direction="next"
                onClick={() => { setPage((prev) => Math.min((prev + 1), gamesStore.totalPages)) }}
            />
        </div>
    );
}