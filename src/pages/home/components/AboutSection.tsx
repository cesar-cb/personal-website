import Image from 'next/image'
import Link from 'next/link'
import { AiFillMail, AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Typography from 'components/Typography'
import styles from './AboutSection.module.scss'

const AboutSection = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/PROFILE.jpg"
            width={150}
            height={150}
            alt="Cesar Boaventura"
          />
        </div>
      </div>

      <div className={styles.aboutRight}>
        <Typography variant="h2" as="h3" className={styles.aboutHeadline}>
          Front-end developer. <br /> Passionate about code and solutions
        </Typography>
        <Typography as="p" variant="p" className={styles.aboutDescription}>
          I am a 25 years old Front End Developer with 6+ years of professional
          experience. Self-taught, currently focused on React Experience with
          CSS methodologies like BEM and RSCSS (Styled Components for React)
          Deep JS concepts like Prototypes, Closures, Functional Programming,
          Asynchronous Programming and Event Loop
        </Typography>
        <div className={styles.aboutIcons}>
          <Link href="mailto:cesar.boaventura61@gmail.com">
            <AiFillMail />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cesar-boaventura/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link href="https://github.com/cesar-cb" target="_blank">
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
