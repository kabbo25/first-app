import Link from "next/link";

const DashboardLayout = ({children}) => {
    return (
        <>
            <ul className={'flex gap-5 p-4'}>
                <Link href={'/'}>Home</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/about'}>About</Link>
            </ul>

            {children}
        </>
    )
}
export default DashboardLayout;
