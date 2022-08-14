import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>


      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          navbar
        </div>
      </div>

      {/* hero section  */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          hero
        </div>
      </div>

      {/* hero section  */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          stat
          buisness
          bill
          card default
          test
          clie,t
          cta
          footer
        </div>
      </div>



    </div>
  )
}

export default App