import Link from "next/link"

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {/* Mobile Screen Tailwind */}
            <Link href="/">LAMA</Link>
        </div>
    )
}

export default Navbar