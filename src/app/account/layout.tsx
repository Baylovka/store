import AsideAccount from "./components/AsideAccount";

export default function AccountLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className='account-page'>
            <div className='container'>
                <div className='account-page__container'>
                    <AsideAccount />
                    <main className='account-page__main'>{children}</main>
                </div>
            </div>
        </div>
    );
}
