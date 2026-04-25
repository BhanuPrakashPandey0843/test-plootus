import { Box, Typography, Link, Divider } from '@mui/material';
import styles from './PartnerCard.module.css';

const PartnerCard = ({
  logo,
  logoAlt,
  description,
  link,
  hyperlinkText,
  infoPrefix = 'For more information, visit ',
  showDivider = true,
  rightBelow,
}) => {
  return (
    <>
      <Box className={styles['partner-card']}>
        <Box className={styles['partner-logo-container']}>
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['partner-logo-link']}
              aria-label={(hyperlinkText || link).replace('https://', '').replace('http://', '')}
            >
              <img src={logo} alt={logoAlt} className={styles['partner-logo']} />
            </Link>
          ) : (
            <img src={logo} alt={logoAlt} className={styles['partner-logo']} />
          )}
        </Box>
        <Box className={styles['partner-content']}>
          <Typography className={styles['partner-description']}>{description}</Typography>
          {link && (
            <Typography className={styles['partner-link-text']}>
              <span>{infoPrefix}</span>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['partner-link']}
              >
                {(hyperlinkText || link).replace('https://', '').replace('http://', '')}
              </Link>
              <span>.</span>
            </Typography>
          )}
          {rightBelow}
        </Box>
      </Box>
      {showDivider && <Divider className={styles['partner-separator']} />}
    </>
  );
};

export default PartnerCard;
