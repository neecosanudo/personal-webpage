import Link from 'next/link';

const NavPage = () => {
    return (
        <nav>
            <Link href='/'>
                <a>Inicio</a>
            </Link>
            <Link href='/posts'>
                <a>Posts</a>
            </Link>
            <Link href='/proyectos'>
                <a>Proyectos</a>
            </Link>
            <Link href='/sobre-mi'>
                <a>Sobre mí</a>
            </Link>
            <Link href='/contacto'>
                <a>Contacto</a>
            </Link>
        </nav>
    )
}

export default NavPage;