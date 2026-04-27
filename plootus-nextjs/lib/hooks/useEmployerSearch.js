import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearch } from './useSearch';
import { employerNewDataSelector, get_employer_list } from '../slices/employerSlice';

const useEmployerSearch = (initVal = '') => {
  const dispatch = useDispatch();

  const employerRedux = useSelector(employerNewDataSelector);
  const { employer_selected } = employerRedux;

  const [{ value, showList, ein }, setLocalData] = useState({
    value: initVal,
    showList: false,
    ein: null,
  });

  const setShowList = (show) =>
    setLocalData((prev) => ({
      ...prev,
      showList: show,
    }));

  const valIsEmpty = value === '';

  const useSearchState = useSearch(
    async () => {
      return await dispatch(get_employer_list(value));
    },
    value,
    500,
    !valIsEmpty
  );

  const { setData } = useSearchState;

  useEffect(() => {
    if (valIsEmpty || employer_selected) {
      setData([]);
    }
  }, [employerRedux, valIsEmpty, setData]);

  return {
    ...useSearchState,
    setShowList,
    value,
    showList,
    valIsEmpty,
    employer_selected,
    ein,
    setLocalData,
  };
};

export default useEmployerSearch;
