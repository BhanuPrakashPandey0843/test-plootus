import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  heroSection: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    borderBottom: '1px solid #E2E8F0',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(6),
    },
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  heroTitleHighlight: {
    color: '#4361EE',
    display: 'block',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  sectionTitle: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#1E293B',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  sectionContent: {
    color: '#64748B',
    fontSize: '1rem',
    lineHeight: 1.7,
    marginBottom: theme.spacing(2),
  },
  bulletList: {
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(3),
    '& li': {
      color: '#64748B',
      fontSize: '1rem',
      lineHeight: 1.7,
      marginBottom: theme.spacing(1),
    },
  },
  nestedList: {
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(1),
    '& li': {
      color: '#64748B',
      fontSize: '1rem',
      lineHeight: 1.7,
      marginBottom: theme.spacing(1),
    },
  },
  link: {
    color: '#4361EE',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const sections = [
  {
    title: null,
    content: `This Privacy Policy explains how Plootus collects, uses, and shares information about you. Plootus is owned and operated by Analyze Future LLC ("we," "us," or "our") and includes our mobile applications and website (collectively, the "Services"). By using the Services, you consent to the data practices described herein. We may update this policy periodically; material changes will be communicated via email, a website notice, or an updated policy page. Continued use after changes constitutes acceptance.`,
  },
  {
    title: 'Information We Collect',
    content: 'We collect personal and non-personal information to provide and improve our services.',
    subsections: [
      {
        title: 'Information You Provide:',
        bullets: [
          'Personal Information: Name, Email Address, Phone Number, Zip Code, Gender, Date of Birth, Employer',
          'Financial Information: Account information (with your consent) from linked financial institutions (banks, investment accounts, etc.)',
        ],
      },
      {
        title: 'Information Automatically Collected:',
        bullets: [
          'Device Information: Device type, operating system, unique device identifiers',
          'Usage Data: IP address, browser type, pages visited, time spent on the Services',
        ],
      },
    ],
    additionalContent: `We may collect additional PII when voluntarily provided, such as when you:`,
    additionalBullets: [
      'Register for an account;',
      'Enter a sweepstakes/contest;',
      'Sign up for third-party offers (with your consent);',
      'Contact us via email;',
      'Submit payment information (handled securely via third-party processors).',
    ],
    finalContent: 'We may aggregate anonymized user data to improve the Services or design promotions.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use your information to:',
    bullets: [
      'Provide and improve the Services: Deliver the Services you request, personalize your experience, and improve the functionality of the Services.',
      'Communicate with you: Send you service-related communications, such as account updates, notifications, and responses to your inquiries.',
      'Provide customer support: Assist you with any questions or issues you may have.',
      'Conduct research and analysis: Analyze user behavior and trends to improve the Services and develop new features.',
      'Personalize your experience: Show you relevant content and advertisements within the Services.',
    ],
  },
  {
    title: 'Sharing Your Information',
    content: 'We do not sell, rent, or lease your personal data. However, we may share information with:',
    bullets: [
      'Service Providers: Trusted third-party service providers who assist us in providing the Services (e.g., data processing, customer support, security). These partners are contractually obligated to protect your data and prohibited from independent use.',
      'Business Partners: With your consent, we may share your information with select business partners for marketing purposes. You can opt-out of these communications at any time.',
      'Legal and Safety: We may disclose your information to comply with legal requirements, enforce our agreements, protect our rights, or prevent harm.',
    ],
  },
  {
    title: 'Data Retention',
    content: 'We retain personal data only as long as needed for:',
    bullets: ['Providing services', 'Legal compliance', 'Fraud prevention'],
    additionalContent: 'Once data is no longer necessary, we securely delete or anonymize it.',
  },
  {
    title: 'California Privacy Rights (CCPA Notice)',
    content: 'If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):',
    rights: [
      {
        title: 'A. Right to Know & Access:',
        content: 'You can request details about:',
        bullets: [
          'The personal data we collect',
          'How we use and share your data',
          'To request this, email: privacy@plootus.com with the subject line "CCPA Data Request."',
        ],
      },
      {
        title: 'B. Right to Delete:',
        content: 'You may request deletion of your personal data, subject to legal exceptions.',
      },
      {
        title: 'C. Right to Opt-Out of Data Sharing:',
        content:
          'Plootus does not sell personal data, but if you prefer not to share information with trusted service providers, you can opt out by emailing privacy@plootus.com.',
      },
      {
        title: 'D. Right to Non-Discrimination:',
        content:
          'We will not deny services, charge different fees, or reduce service quality based on CCPA rights requests.',
      },
      {
        title: 'E. Authorized Agents:',
        content:
          'You may designate an authorized agent to submit requests on your behalf by providing written permission.',
      },
    ],
  },
  {
    title: 'Cookies and Tracking Technologies',
    content:
      'We use cookies and similar technologies to collect information about your use of the Services. You can control cookies through your browser settings. Note that disabling cookies may limit features of our services.',
  },
  {
    title: 'Links to Third-Party Sites',
    content:
      'We are not responsible for the privacy practices of linked sites. Review their policies before providing information.',
  },
  {
    title: 'Security of your Information',
    content:
      'We are dedicated to safeguarding your personal data and employ a range of security technologies and measures to protect it from unauthorized access, use, or disclosure. While we strive to maintain the highest security standards, no system is entirely risk-free, and we acknowledge that security vulnerabilities or errors may still occur.',
  },
  {
    title: 'Children Under Thirteen',
    content: `Plootus does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website. If you believe a child has provided information, contact us at privacy@plootus.com.`,
  },
  {
    title: 'Opt-Out & Unsubscribe from Third Party Communications',
    content: 'To stop receiving marketing emails, click "Unsubscribe" in emails or email privacy@plootus.com.',
  },
  {
    title: 'E-mail Communications',
    content:
      'From time to time, Plootus may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Service, we may receive a notification when you open an email from Plootus or click on a link therein.',
  },
  {
    title: 'International Data Transfers',
    content:
      'Your information may be transferred to and processed in countries outside of your jurisdiction. We will take steps to ensure that your data is processed in accordance with applicable data protection laws.',
  },
  {
    title: 'Changes to this Policy',
    content:
      'We may update this policy periodically; material changes will be communicated via email, a website notice, or an updated policy page. Continued use after changes constitutes acceptance.',
  },
  {
    title: 'Contact Information',
    content: 'For any privacy-related concerns, please contact:',
    contact: [
      'Plootus, Attn: Privacy',
      '470 James St, New Haven, CT 06513',
      'privacy@plootus.com',
    ],
  },
];

const PrivacyPage = () => {
  const { classes } = useStyles();

  return (
    <Box component="main">
      {/* Hero */}
      <Box className={classes.heroSection}>
        <Container maxWidth="md">
          <Typography variant="h1" className={classes.heroTitle}>
            <Box component="span" className={classes.heroTitleHighlight}>
              Privacy Policy
            </Box>
          </Typography>
          <Typography variant="h6" className={classes.heroSubtitle}>
            Effective as of Feb 1, 2025
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="md" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <Box display="flex" flexDirection="column">
          {sections.map((section, index) => (
            <Box key={index} mb={4}>
              {section.title && (
                <Typography variant="h2" className={classes.sectionTitle}>
                  {section.title}
                </Typography>
              )}

              {section.content && (
                <Typography className={classes.sectionContent}>
                  {section.content}
                </Typography>
              )}

              {section.bullets && (
                <Box component="ul" className={classes.bulletList}>
                  {section.bullets.map((bullet, idx) => (
                    <Box component="li" key={idx}>
                      {bullet}
                    </Box>
                  ))}
                </Box>
              )}

              {section.subsections &&
                section.subsections.map((subsection, subIdx) => (
                  <Box key={subIdx} mt={2}>
                    {subsection.title && (
                      <Typography
                        className={classes.sectionContent}
                        style={{ fontWeight: 600 }}
                      >
                        {subsection.title}
                      </Typography>
                    )}
                    {subsection.bullets && (
                      <Box component="ul" className={classes.nestedList}>
                        {subsection.bullets.map((bullet, bulletIdx) => (
                          <Box component="li" key={bulletIdx}>
                            {bullet}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}

              {section.additionalContent && (
                <Typography className={classes.sectionContent}>
                  {section.additionalContent}
                </Typography>
              )}

              {section.additionalBullets && (
                <Box component="ul" className={classes.bulletList}>
                  {section.additionalBullets.map((bullet, idx) => (
                    <Box component="li" key={idx}>
                      {bullet}
                    </Box>
                  ))}
                </Box>
              )}

              {section.finalContent && (
                <Typography className={classes.sectionContent}>
                  {section.finalContent}
                </Typography>
              )}

              {section.rights &&
                section.rights.map((right, rightIdx) => (
                  <Box key={rightIdx} mb={2}>
                    <Typography
                      className={classes.sectionContent}
                      style={{ fontWeight: 600 }}
                    >
                      {right.title}
                    </Typography>
                    {right.content && (
                      <Typography className={classes.sectionContent}>
                        {right.content}
                      </Typography>
                    )}
                    {right.bullets && (
                      <Box component="ul" className={classes.nestedList}>
                        {right.bullets.map((bullet, bulletIdx) => (
                          <Box component="li" key={bulletIdx}>
                            {bullet}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}

              {section.contact && (
                <Box component="ul" className={classes.bulletList}>
                  {section.contact.map((line, idx) => (
                    <Box component="li" key={idx}>
                      {idx === 2 ? (
                        <a href={`mailto:${line}`} className={classes.link}>
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPage;
