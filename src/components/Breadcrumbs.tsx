'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
    const pathName = usePathname();
    const pathSegments = pathName.split('/').filter(Boolean);

    const upperCaseFirstLetter = (str: string) => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <nav className="bread-crumbs">
            <ol className="bread-crumbs__list">
                <li className="bread-crumbs__item">
                    <Link href="/" className="bread-crumbs__link">Home</Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathSegments.length - 1;
                    segment = upperCaseFirstLetter(segment);

                    return (
                        <li key={segment} className="bread-crumbs__item">
                            {isLast ? (
                                <span className="bread-crumbs__link--current">{segment}</span>
                            ) : (
                                <Link href={href} className="bread-crumbs__link">{segment}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}