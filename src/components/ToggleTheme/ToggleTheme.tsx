import React from 'react'
import { useTheme } from 'next-themes'
import classNames from 'classnames'
import { GrSun, GrMoon } from 'react-icons/gr'
import styles from './ToggleTheme.module.scss'

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const isDarkActive = resolvedTheme === 'dark'
  const isLightActive = resolvedTheme === 'light'

  const darkClasses = classNames(styles.icon, styles.dark)

  const lightClasses = classNames(styles.icon, styles.light)

  const iconsContainerClasses = classNames(styles.iconsContainer, {
    [styles.darkActive]: isDarkActive,
    [styles.lightActive]: isLightActive,
  })

  const toggleTheme = () => setTheme(isDarkActive ? 'light' : 'dark')

  return (
    <button type="button" className={styles.button} onClick={toggleTheme}>
      <div className={iconsContainerClasses}>
        <GrSun
          size={25}
          className={darkClasses}
          title="Toggle between dark and light mode"
        />
        <GrMoon
          size={25}
          className={lightClasses}
          title="Toggle between dark and light mode"
        />
      </div>
    </button>
  )
}

export default ToggleTheme
