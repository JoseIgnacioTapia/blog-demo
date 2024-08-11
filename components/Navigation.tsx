import Link from 'next/link';
import Logo from './Logo';
import classes from './main-navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
