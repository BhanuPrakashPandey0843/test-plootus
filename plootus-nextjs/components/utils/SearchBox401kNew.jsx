import React, { useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Import our newly created Redux actions and selectors
import {
  BLUE_PLOOT,
  employerNewDataSelector,
  fetch_allocations,
  generalEmployerNew,
} from '../../lib/slices/employerSlice';

const useStyles = makeStyles()((theme) => ({
  searchWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputWithIcon: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
    padding: '8px 16px',
    height: '60px',
    transition: 'all 0.3s ease',
    '&:focus-within': {
      borderColor: BLUE_PLOOT,
      boxShadow: `0 0 0 3px rgba(67, 97, 238, 0.1)`,
    },
  },
  searchCont: {
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
    color: '#64748B',
  },
  inputIcon: {
    fontSize: '24px',
  },
  inputCont: {
    flex: 1,
    height: '100%',
  },
  inputField: {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    color: '#1E293B',
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: '#94A3B8',
    },
  },
  dropDownDiv: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: '0 0 12px 12px',
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
    maxHeight: '300px',
    overflowY: 'auto',
    zIndex: 1000,
    border: '1px solid #E2E8F0',
    borderTop: 'none',
  },
  hideDiv: {
    display: 'none',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '12px 16px',
    cursor: 'pointer',
    borderBottom: '1px solid #F1F5F9',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#F8FAFC',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  innerDiv: {
    fontSize: '1rem',
    color: '#334155',
    fontWeight: 500,
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  disabled: {
    opacity: 0.6,
    pointerEvents: 'none',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
  },
  spinnerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: '8px',
    fontSize: '0.875rem',
    color: BLUE_PLOOT,
    fontWeight: 500,
  },
  noMatchFound: {
    padding: '16px',
    textAlign: 'center',
    color: '#64748B',
    fontSize: '0.95rem',
    lineHeight: 1.5,
  },
}));

function SearchBox401k({
  style,
  setSignupData,
  setUpdateData,
  style1,
  disable = false,
  dontNull,
  fromStatic,
  myStyles,
  ...rest
}) {
  const { classes } = useStyles();
  const [isSelectionLoading, setIsSelectionLoading] = useState(false);
  const router = useRouter();

  const {
    setShowList,
    value,
    showList,
    valIsEmpty,
    data,
    loading,
    setLocalData,
  } = rest;

  const dispatch = useDispatch();
  const employerRedux = useSelector(employerNewDataSelector);
  const { employer_selected } = employerRedux;
  const myL = useRef('/');
  myL.current = router.pathname;

  const handleEmployerSelect = async (item) => {
    try {
      setIsSelectionLoading(true);
      setShowList(false);

      if (setUpdateData) {
        setUpdateData((prev) => ({
          ...prev,
          employerEin: { ...prev.employerEin, value: item.ein },
          sponsor_name: {
            ...prev.sponsor_name,
            value: item.sponsor_name.split(' (EIN')[0],
          },
        }));

        setLocalData((prev) => ({
          ...prev,
          value: item.sponsor_name.split(' (EIN')[0],
          ein: item.ein,
        }));
      } else if (setSignupData) {
        setSignupData((prev) => ({
          ...prev,
          employerEin: item.ein,
          sponser_name: item.sponsor_name.split(' (EIN')[0],
        }));

        setLocalData((prev) => ({
          ...prev,
          value: item.sponsor_name.split(' (EIN')[0],
          ein: item.ein,
        }));
      } else {
        localStorage.setItem(
          'empData',
          JSON.stringify({
            ein: item.ein,
            name: item.sponsor_name.split(' (EIN')[0],
          })
        );

        await dispatch(
          fetch_allocations(
            {
              ein: item.ein,
              name: item.sponsor_name.split(' (EIN')[0],
              showLimitExceedError: true,
            },
            true
          )
        );

        setLocalData((prev) => ({ ...prev, value: '' }));

        if (!dontNull && fromStatic) {
          router.push('/employer');
        } else if (fromStatic) {
          router.push('/employer');
        }
      }
    } catch (error) {
      console.error('Error selecting employer:', error);
    } finally {
      setTimeout(() => {
        setIsSelectionLoading(false);
      }, 100);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {isSelectionLoading && (
        <div className={classes.loadingOverlay}>
          <div className={classes.spinnerWrapper}>
            <CircularProgress size={40} style={{ color: BLUE_PLOOT }} />
            <div className={classes.loadingText}>Loading employer data...</div>
          </div>
        </div>
      )}
      <div className={classes.searchWrapper} style={style1}>
        <div
          className={classes.inputWithIcon}
          style={{
            ...(showList
              ? {
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '0px',
                  borderBottom: '0px',
                }
              : {}),
            ...style,
          }}
        >
          <div className={classes.searchCont}>
            <SearchIcon
              style={{
                fontSize: '25px',
                ...myStyles?.icon,
              }}
              className={classes.inputIcon}
            />
          </div>
          <div className={classes.inputCont}>
            <input
              value={dontNull ? employer_selected || value : value}
              type="text"
              disabled={disable || isSelectionLoading}
              placeholder="Search for your 401k Plan"
              onChange={(e) => {
                if (employer_selected) {
                  dispatch(
                    generalEmployerNew({
                      funds: [],
                      employer_selected: '',
                    })
                  );
                }

                setLocalData({
                  value: e.target.value,
                  showList: true,
                });
              }}
              className={classes.inputField}
              onBlur={() => {
                // Delay hiding list slightly to allow clicks to register
                setTimeout(() => setShowList(false), 200);
              }}
              style={{ ...style, ...myStyles?.inputStyle }}
            />
          </div>
        </div>

        <div className={showList ? classes.dropDownDiv : classes.hideDiv}>
          <ul className={classes.list}>
            {loading ? (
              <div className={classes.loader}>
                <CircularProgress size={30} style={{ color: BLUE_PLOOT }} />
              </div>
            ) : data && data.length ? (
              data.map((item, index) => {
                return (
                  <li
                    key={item.ein}
                    onMouseDown={(e) => {
                      e.preventDefault(); // Prevent input blur from firing before this
                      if (!isSelectionLoading) handleEmployerSelect(item);
                    }}
                    className={`${classes.listItem} ${
                      isSelectionLoading ? classes.disabled : ''
                    }`}
                  >
                    <div className={classes.innerDiv} style={myStyles?.innerDiv}>
                      {item.sponsor_name}
                    </div>
                  </li>
                );
              })
            ) : !valIsEmpty &&
              !data?.length &&
              !loading &&
              employer_selected === '' ? (
              <div className={classes.noMatchFound}>
                Don’t see your employer? Use the{' '}
                <Link
                  href="/faqs#contact"
                  style={{
                    color: '#416ce1',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    router.push('/faqs#contact');
                  }}
                >
                  Contact Us
                </Link>{' '}
                form below to send us their name, and we’ll add it!
              </div>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBox401k;
