import { Callout, Intent } from '@blueprintjs/core'
import { lang } from 'botpress/shared'
import cx from 'classnames'
import React, { FC } from 'react'

import logo from './media/bp-logo-white.png'
import logo1 from './media/dataman-logo.png'

import style from './style.scss'

interface Props {
  title?: string
  subtitle?: React.ReactNode
  error?: string | null
  poweredBy?: boolean
  children: React.ReactNode
}

const LoginContainer: FC<Props> = props => {
  return (
    <div className={cx('centered-container', style.centered_container)}>
      <div className={cx('middle', style.middle)}>
        <div className={cx('inner', style.inner)}>
          <img className={cx('logo', style.logo)} src={logo} alt="loading" />
          {/* <h1 style={{ fontFamily: 'Fannins' }}>Botlab Login Portal</h1> */}
          <div className={cx('card', 'card_body', style.card, style.card_body)}>
            <div className={cx('card_body', 'login_box', style.card_body, style.login_box)}>
              <div>
                <div className={cx('card_title', style.card_title)}>
                  <strong>{props.title || 'Botlab'}</strong>
                </div>

                <div className={cx('card_text', style.card_text)}>{props.subtitle || ''}</div>

                {props.error && <Callout intent={Intent.DANGER}>{props.error}</Callout>}
                {props.children}
              </div>
            </div>
          </div>
          {props.poweredBy && (
  <div className={cx('homepage', style.homepage)}>
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <p style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#999' }}>
        {lang.tr('admin.poweredBy')}
        <a
          href="https://dataman.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <img
            src={logo1}
            alt="Dataman Logo"
            style={{
              maxHeight: '60px',   // Or adjust as needed
              height: 'auto',
              width: 'auto',
              objectFit: 'contain',
              imageRendering: 'auto',  // Ensures no blurring
            }}
          />
        </a>
      </p>
    </div>
  </div>
)}



        </div>
      </div>
    </div>
  )
}

export default LoginContainer
