import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  pickerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
    },
  },
  pickerItem: {
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '20px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  activeItem: {
    backgroundColor: '#4361EE',
    color: 'white',
    boxShadow: '0px 4px 10px rgba(67, 97, 238, 0.4)',
  },
  inactiveItem: {
    backgroundColor: 'white',
    color: '#64748B',
    border: '2px solid #E2E8F0',
    '&:hover': {
      backgroundColor: '#F8FAFC',
      borderColor: '#CBD5E1',
    },
  },
}));

const Picker = ({ rows, activeIndex, setIndex, myStyle }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.pickerContainer} style={myStyle}>
      {rows.map((row, index) => (
        <div
          key={row.key}
          className={`${classes.pickerItem} ${
            activeIndex === index ? classes.activeItem : classes.inactiveItem
          }`}
          onClick={() => setIndex(index)}
        >
          {row.name}
        </div>
      ))}
    </div>
  );
};

// Creating a small hook for Picker state management
export const usePickerModal = (callback, defaultIndex = 0) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

  const setIndex = (index) => {
    setActiveIndex(index);
    if (callback) {
      callback(index);
    }
  };

  return {
    picker: { activeIndex },
    setIndex,
  };
};

export default Picker;
