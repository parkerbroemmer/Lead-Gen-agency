import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/City.module.css'

export default function CityPage() {
  const router = useRouter()
  const { city } = router.query

  // Handle array of city segments for multi-level city paths
  const cityPath = Array.isArray(city) ? city.join('/') : city || ''
  const cityName = Array.isArray(city) ? city[city.length - 1] : city || ''
  
  // Format city name for display (capitalize words)
  const formattedCityName = cityName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className={styles.container}>
      <Head>
        <title>{formattedCityName} - My Lead Agency</title>
        <meta name="description" content={`Lead generation services in ${formattedCityName}`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lead Generation in <span className={styles.cityName}>{formattedCityName}</span>
        </h1>

        <p className={styles.description}>
          Professional lead generation services tailored for {formattedCityName}
        </p>

        <section className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Local SEO</h3>
              <p>Optimize your presence for {formattedCityName} searches</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Lead Qualification</h3>
              <p>Pre-qualified leads from {formattedCityName} area</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Call Tracking</h3>
              <p>Track every call from {formattedCityName} customers</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to grow your business in {formattedCityName}?</h2>
          <button className={styles.ctaButton}>Get Started</button>
        </section>
      </main>
    </div>
  )
}
