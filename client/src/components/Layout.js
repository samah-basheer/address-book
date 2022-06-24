import Navbar from "./Navbar"

const Layout = ( { navbar = true, children} ) => {
    return <>
        {navbar && <Navbar/>}
        <div className="">{children}</div>
    </>
}

export default Layout;