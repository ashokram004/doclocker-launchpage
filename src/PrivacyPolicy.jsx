export default function PrivacyPolicy() {
  return (
    <>
      <header className="policy-header">
        <a className="brand" href="/" aria-label="SJK Handbook of English home">
          <span className="brand-mark" aria-hidden="true">SJK</span>
          <span className="brand-name">SJK Handbook of English</span>
        </a>
        <a className="policy-home-link" href="/">Back to home <span aria-hidden="true">↗</span></a>
      </header>

      <main className="policy-main">
        <div className="policy-intro">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR INFORMATION, EXPLAINED</p>
          <h1>Privacy <em>Policy</em></h1>
          <p className="policy-summary">
            SJK Handbook of English ("the App") provides authorized users with access to an educational and reference document. This policy explains what information the App processes and how it is used.
          </p>
          <div className="policy-meta">
            <p><span>Effective date</span>October 4, 2026</p>
            <p><span>Publisher</span>Ashok Kumar Thammineni</p>
            <p><span>Contact</span><a href="mailto:ak9000812219@gmail.com">ak9000812219@gmail.com</a></p>
          </div>
        </div>

        <article className="policy-content">
          <section>
            <h2>Information We Process</h2>
            <h3>Phone number</h3>
            <p>The App asks users to enter their phone number to determine whether they have been authorized to use the App. The phone number is sent to Firebase Realtime Database to check whether the user has been approved by the App publisher.</p>
            <p>The App does not use the phone number to send marketing messages or advertisements.</p>

            <h3>Firebase Anonymous Authentication</h3>
            <p>After an approved user is identified, the App uses Firebase Anonymous Authentication to obtain an anonymous Firebase identifier. This identifier is used to associate the authorized user with the App installation and manage access to the App. It is not intended to identify the user by name.</p>

            <h3>Information stored on the device</h3>
            <p>The App may store the entered phone number locally on the device so that the activation state can be remembered. The App also stores a cached copy of the document on the device so that it can be displayed to the user.</p>
          </section>

          <section>
            <h2>How We Use Information</h2>
            <p>Information processed by the App is used only to:</p>
            <ul>
              <li>Verify whether a user has been authorized to access the App.</li>
              <li>Manage access to the App.</li>
              <li>Download and display the document.</li>
              <li>Remember the user's activation state.</li>
              <li>Provide and maintain the App's functionality.</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <h3>Google Firebase</h3>
            <p>The App uses Firebase Authentication and Firebase Realtime Database to manage anonymous authentication and authorized-user access.</p>
            <h3>Google Drive</h3>
            <p>The App downloads the document from a Google Drive-hosted resource.</p>
            <p>These services may process technical information such as network information, IP address, and service-related diagnostic information as necessary to provide their services. For more information, please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google's Privacy Policy</a> and the <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase privacy and security information</a>.</p>
          </section>

          <section>
            <h2>Document Storage</h2>
            <p>The document is downloaded to the device and may be cached locally for viewing. Cached document files may remain on the device until the App or operating system removes them, the App's storage is cleared, or the App is uninstalled.</p>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>The App publisher does not sell users' personal information. The App does not display advertisements. Information may be processed by the third-party services described above as necessary to provide the App's functionality.</p>
          </section>

          <section>
            <h2>Data Retention and Deletion</h2>
            <p>The phone number and authorization information may remain in the App's Firebase database while the user is authorized to access the App. Users may request removal or reset of their authorization record by contacting <a href="mailto:ak9000812219@gmail.com">ak9000812219@gmail.com</a>.</p>
            <p>When a valid deletion request is received, the publisher will remove the applicable user record from the Firebase database where appropriate. Information stored locally on the device can be removed by clearing the App's storage or uninstalling the App.</p>
          </section>

          <section>
            <h2>Security</h2>
            <p>Reasonable technical measures are used to protect information processed by the App. However, no method of electronic storage or transmission can be guaranteed to be completely secure.</p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>The App is not specifically designed to collect personal information from children. If the App is intended for children or is directed toward children, this section and the App's data practices will be updated as necessary to comply with applicable requirements.</p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>This Privacy Policy may be updated if the App's functionality or data practices change. The latest version will always be made available at the published Privacy Policy URL.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>For questions about this Privacy Policy or requests regarding personal information, contact:</p>
            <address>
              Ashok Kumar Thammineni<br />
              <a href="mailto:ak9000812219@gmail.com">ak9000812219@gmail.com</a>
            </address>
          </section>
        </article>
      </main>

      <footer className="policy-footer">
        <span>SJK Handbook of English</span>
        <a href="/">Back to SJK Handbook of English home</a>
      </footer>
    </>
  )
}
