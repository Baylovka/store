import PersonalInfo from "./sections/PersonalInfo";
import OrdersList from "./sections/OrdersList";
import Address from "./sections/Address";
import Wishlist from "./sections/Wishlist";
import Notifications from "./sections/Notifications";
import { notFound } from "next/navigation";



export async function generateStaticParams() {
    const sections = ["personal", "address", "orders", "wishlist", "notifications"];
    return sections.map((section) => ({ section }));
}

export default async function AccountSectionPage({ params }: { params: Promise<{ section: string }> }) {
    const { section } = await params;

    switch (section) {
        case "personal":
            return <PersonalInfo />;
        case "address":
            return <Address />;
        case "orders":
            return <OrdersList />;
        case "wishlist":
            return <Wishlist />;
        case "notifications":
            return <Notifications />;
        default:
            return notFound();
    }
}