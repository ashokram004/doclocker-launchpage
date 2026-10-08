import { useEffect } from 'react'
import './App.css'
import PrivacyPolicy from './PrivacyPolicy.jsx'

const downloadUrl =
  'https://github.com/ashokram004/doclocker-launchpage/releases/download/1.0.0/SJK_Grammar.apk'

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.75v9.5m0 0 3.5-3.5m-3.5 3.5-3.5-3.5M3.5 13v3.25h13V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DownloadLink({ className = '' }) {
  return (
    <a className={`download-link ${className}`} href={downloadUrl}>
      <DownloadIcon />
      <span>Download for Android</span>
    </a>
  )
}

function App() {
  const isPrivacyPolicy =
    window.location.pathname.replace(/\/+$/, '') === '/privacy-policy'

  useEffect(() => {
    if (!isPrivacyPolicy) return

    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'Privacy Policy | SJK Handbook of English'

    description?.setAttribute(
      'content',
      'Read the SJK Handbook of English privacy policy, including details about information processing, Firebase, document storage, educational content, and contact information.'
    )

    return () => {
      document.title = previousTitle

      if (previousDescription !== undefined) {
        description?.setAttribute('content', previousDescription)
      }
    }
  }, [isPrivacyPolicy])

  if (isPrivacyPolicy) return <PrivacyPolicy />

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="SJK Handbook of English home"
        >
          <span className="brand-mark" aria-hidden="true">
            SJK
          </span>

          <span className="brand-name">
            SJK Handbook of English
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#inside">What's inside</a>
          <a href="#download">Get the app</a>
          <a href="/privacy-policy">Privacy</a>
        </nav>

        <DownloadLink className="header-download" />
      </header>


      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            THE COMPANION APP FOR SJK'S HANDBOOK
          </p>

          <h1>
            English that takes you <em>further.</em>
          </h1>

          <p className="hero-description">
            A bilingual Telugu + English learning companion for
            SJK's Handbook of English Proficiency, designed to help
            learners build strong English skills and prepare for
            competitive examinations.
          </p>

          <div className="hero-actions">
            <DownloadLink />

            <a className="text-link" href="#inside">
              Explore the handbook{' '}
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-rule" />

            <p>
              Learn <b>•</b> Understand <b>•</b> Speak <b>•</b> Succeed
            </p>
          </div>
        </div>


        <div
          className="cover-scene"
          aria-label="SJK's Handbook of English Proficiency cover"
        >
          <div className="scene-label">
            BILINGUAL EDITION <span>01 / 04</span>
          </div>

          <div className="cover-frame">
            <img
              src="/handbook-cover.png"
              alt="Cover of SJK's Handbook of English Proficiency, a bilingual English-learning resource for competitive examination preparation"
            />
          </div>

          <div className="cover-caption">
            <span className="caption-line" />
            TELUGU + ENGLISH <span>ENGLISH LEARNING</span>
          </div>
        </div>
      </section>


      <section
        className="audience-strip"
        aria-label="Handbook highlights"
      >
        <div>
          <span>01</span>
          <strong>English learning</strong>
        </div>

        <div>
          <span>02</span>
          <strong>Telugu explanations</strong>
        </div>

        <div>
          <span>03</span>
          <strong>Practice + previous questions</strong>
        </div>

        <p>
          FOR AP TET, DSC, SSC, IBPS, RRB &amp; MORE
        </p>
      </section>


      <section className="inside-section" id="inside">
        <div className="section-heading">
          <p className="eyebrow">
            A SMARTER WAY TO LEARN
          </p>

          <h2>
            One handbook.
            <br />
            <em>More ways to learn.</em>
          </h2>
        </div>


        <div className="feature-list">
          <article className="feature-item">
            <span className="feature-number">01</span>

            <div>
              <h3>Listen as you learn</h3>

              <p>
                Scan a page's QR code for its Telugu voice
                explanation and extend your learning beyond the
                printed page.
              </p>
            </div>
          </article>


          <article className="feature-item">
            <span className="feature-number">02</span>

            <div>
              <h3>Practice with purpose</h3>

              <p>
                Build confidence with clear concepts, focused
                exercises, grammar practice, and selected
                previous examination questions.
              </p>
            </div>
          </article>


          <article className="feature-item">
            <span className="feature-number">03</span>

            <div>
              <h3>Prepare with confidence</h3>

              <p>
                Strengthen grammar, vocabulary, writing, spoken
                English, and other language skills useful for
                competitive examination preparation.
              </p>
            </div>
          </article>
        </div>
      </section>


      <section className="download-band" id="download">
        <div className="download-copy">
          <p className="eyebrow">
            YOUR STUDY COMPANION IS READY
          </p>

          <h2>
            Take the next step
            <br />
            toward <em>your goal.</em>
          </h2>

          <p>
            Get the SJK Handbook of English app for Android and
            start learning with your book through bilingual
            explanations, practice material, and audio learning
            support.
          </p>

          <DownloadLink className="download-light" />
        </div>


        <div className="download-aside" aria-hidden="true">
          <span className="aside-seal">SJK</span>

          <p>
            LEARN
            <br />
            UNDERSTAND
            <br />
            SUCCEED
          </p>

          <span className="aside-rule" />

          <span className="aside-edition">
            TELUGU · ENGLISH · COMPETITIVE EXAM PREP
          </span>
        </div>
      </section>


      <footer className="site-footer">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            SJK
          </span>

          <span className="brand-name">
            SJK Handbook of English
          </span>
        </a>

        <p>
          SJK's Handbook of English Proficiency · Independent
          Educational Resource
        </p>

        <a className="footer-link" href="/privacy-policy">
          Privacy policy
        </a>

        <a className="footer-link" href={downloadUrl}>
          Android app <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  )
}

export default App