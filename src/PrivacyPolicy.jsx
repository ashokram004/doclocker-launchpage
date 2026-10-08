export default function PrivacyPolicy() {
  return (
    <>
      <header className="policy-header">
        <a className="brand" href="/" aria-label="SJK Handbook of English home">
          <span className="brand-mark" aria-hidden="true">SJK</span>
          <span className="brand-name">SJK Handbook of English</span>
        </a>

        <a className="policy-home-link" href="/">
          Back to home <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main className="policy-main">
        <div className="policy-intro">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            YOUR INFORMATION, EXPLAINED
          </p>

          <h1>
            Privacy <em>Policy</em>
          </h1>

          <p className="policy-summary">
            SJK Handbook of English ("the App") provides authorized users with
            access to an educational English-learning and reference resource.
            This policy explains what information the App processes, how it is
            used, and how it is handled.
          </p>

          <div className="policy-meta">
            <p>
              <span>Effective date</span>
              October 4, 2026
            </p>

            <p>
              <span>Publisher</span>
              Ashok Kumar Thammineni
            </p>

            <p>
              <span>Contact</span>
              <a href="mailto:ak9000812219@gmail.com">
                ak9000812219@gmail.com
              </a>
            </p>
          </div>
        </div>

        <article className="policy-content">

          <section>
            <h2>Information We Process</h2>

            <h3>Phone number</h3>
            <p>
              The App asks users to enter their phone number to determine
              whether they have been authorized to use the App. The phone
              number is sent to Firebase Realtime Database to check whether
              the user has been approved by the App publisher.
            </p>

            <p>
              The App does not use the phone number to send marketing messages
              or advertisements.
            </p>

            <h3>Firebase Anonymous Authentication</h3>
            <p>
              After an approved user is identified, the App uses Firebase
              Anonymous Authentication to obtain an anonymous Firebase
              identifier. This identifier is used to associate the authorized
              user with the App installation and manage access to the App.
              It is not intended to identify the user by name.
            </p>

            <h3>Information stored on the device</h3>
            <p>
              The App may store the entered phone number locally on the device
              so that the activation state can be remembered. The App may also
              store a cached copy of the educational document on the device so
              that it can be displayed to the user.
            </p>
          </section>


          <section>
            <h2>How We Use Information</h2>

            <p>
              Information processed by the App is used only to:
            </p>

            <ul>
              <li>
                Verify whether a user has been authorized to access the App.
              </li>

              <li>
                Manage access to the App.
              </li>

              <li>
                Download and display the educational document.
              </li>

              <li>
                Remember the user's activation state.
              </li>

              <li>
                Provide and maintain the App's functionality.
              </li>
            </ul>
          </section>


          <section>
            <h2>Educational Content and Examination References</h2>

            <p>
              The App provides English-learning content, including grammar,
              vocabulary, composition, reading comprehension, spoken English,
              phonetics, practice exercises, and selected questions from
              previous examinations.
            </p>

            <p>
              Examination names and references such as AP TET, DSC, SSC, IBPS,
              RRB, SI and Constable examinations, and other competitive
              examinations are included only to describe the educational and
              examination-preparation use of the English-learning material.
            </p>

            <p>
              The App is an independent educational resource and is not
              affiliated with, sponsored by, endorsed by, or officially
              connected to any government department, examination authority,
              recruitment organization, or other government entity.
            </p>

            <p>
              The App does not provide government services, application
              services, recruitment services, or official examination
              notifications.
            </p>

            <p>
              Examination-related references and questions are provided solely
              for educational, practice, and revision purposes. Users should
              verify current examination information, notifications, eligibility
              requirements, schedules, and other official information directly
              with the relevant examination authority.
            </p>
          </section>


          <section>
            <h2>Official Examination Sources</h2>

            <p>
              For official and current examination information, users should
              refer directly to the relevant examination authority websites.
              The App does not represent these organizations.
            </p>

            <ul>
              <li>
                Andhra Pradesh TET / DSC –{" "}
                <a
                  href="https://tet2dsc.apcfss.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://tet2dsc.apcfss.in/
                </a>
              </li>

              <li>
                Staff Selection Commission (SSC) –{" "}
                <a
                  href="https://ssc.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ssc.gov.in/
                </a>
              </li>

              <li>
                Institute of Banking Personnel Selection (IBPS) –{" "}
                <a
                  href="https://www.ibps.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.ibps.in/
                </a>
              </li>

              <li>
                Railway Recruitment Boards (RRB) –{" "}
                <a
                  href="https://www.rrbapply.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.rrbapply.gov.in/
                </a>
              </li>
            </ul>
          </section>


          <section>
            <h2>Third-Party Services</h2>

            <h3>Google Firebase</h3>
            <p>
              The App uses Firebase Authentication and Firebase Realtime
              Database to manage anonymous authentication and authorized-user
              access.
            </p>

            <h3>Google Drive</h3>
            <p>
              The App downloads the educational document from a
              Google Drive-hosted resource.
            </p>

            <p>
              These services may process technical information such as network
              information, IP address, and service-related diagnostic
              information as necessary to provide their services. For more
              information, please refer to{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Google's Privacy Policy
              </a>{" "}
              and the{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Firebase privacy and security information
              </a>
              .
            </p>
          </section>


          <section>
            <h2>Document Storage</h2>

            <p>
              The educational document is downloaded to the device and may be
              cached locally for viewing. Cached document files may remain on
              the device until the App or operating system removes them, the
              App's storage is cleared, or the App is uninstalled.
            </p>
          </section>


          <section>
            <h2>Data Sharing</h2>

            <p>
              The App publisher does not sell users' personal information.
              The App does not display advertisements.
            </p>

            <p>
              Information may be processed by the third-party services
              described above as necessary to provide the App's functionality.
              The App publisher does not independently share users' personal
              information with advertisers or for advertising purposes.
            </p>
          </section>


          <section>
            <h2>Data Retention and Deletion</h2>

            <p>
              The phone number and authorization information may remain in the
              App's Firebase database while the user is authorized to access
              the App.
            </p>

            <p>
              Users may request removal or reset of their authorization record
              by contacting{" "}
              <a href="mailto:ak9000812219@gmail.com">
                ak9000812219@gmail.com
              </a>
              .
            </p>

            <p>
              When a valid deletion request is received, the publisher will
              remove the applicable user record from the Firebase database
              where appropriate. Information stored locally on the device can
              be removed by clearing the App's storage or uninstalling the
              App.
            </p>
          </section>


          <section>
            <h2>Security</h2>

            <p>
              Reasonable technical measures are used to protect information
              processed by the App. However, no method of electronic storage or
              transmission can be guaranteed to be completely secure.
            </p>
          </section>


          <section>
            <h2>Children's Privacy</h2>

            <p>
              The App is an educational English-learning resource and is not
              specifically designed to collect personal information from
              children. The App does not knowingly collect personal information
              from children for advertising or marketing purposes.
            </p>

            <p>
              If you believe that a child has provided personal information
              through the App and would like it removed, please contact us at{" "}
              <a href="mailto:ak9000812219@gmail.com">
                ak9000812219@gmail.com
              </a>
              .
            </p>
          </section>


          <section>
            <h2>Changes to This Privacy Policy</h2>

            <p>
              This Privacy Policy may be updated if the App's functionality or
              data practices change. The latest version will always be made
              available at the published Privacy Policy URL.
            </p>

            <p>
              If material changes are made, the effective date shown at the
              beginning of this policy will be updated accordingly.
            </p>
          </section>


          <section>
            <h2>Contact</h2>

            <p>
              For questions about this Privacy Policy, requests regarding
              personal information, or requests to remove an authorization
              record, contact:
            </p>

            <address>
              Ashok Kumar Thammineni
              <br />
              <a href="mailto:ak9000812219@gmail.com">
                ak9000812219@gmail.com
              </a>
            </address>
          </section>

        </article>
      </main>


      <footer className="policy-footer">
        <span>SJK Handbook of English</span>

        <a href="/">
          Back to SJK Handbook of English home
        </a>
      </footer>
    </>
  )
}