import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import logo from '../assets/logo.png'; // import the logo

const steps = [
  { path: '/', label: 'Menu' },
  { path: '/info', label: 'Your Info' },
  { path: '/confirm', label: 'Review' },
  { path: '/pay', label: 'Payment' }
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
	    <img src={logo} alt="Bombay Beauties logo" className={styles.logo} />
		<div>
			<h1>Bombay Beauties</h1>
			<p className={styles.tagline}>your favourite Indian restaurant</p>
		</div>
      </header>

      <nav className={styles.nav}>
        <ul>
          {steps.map(step => (
            <li key={step.path} className={location.pathname === step.path ? styles.active : ''}>
              <Link to={step.path}>{step.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Bombay Beauties. All rights reserved.</p>
      </footer>
    </div>
  );
}
