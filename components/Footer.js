import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>My Lead Agency</h3>
          <p>Your trusted partner for quality lead generation</p>
        </div>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>Email: info@myleadagency.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} My Lead Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}
