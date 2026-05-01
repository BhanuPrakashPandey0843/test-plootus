import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  employerNewDataSelector, 
  get_employer_list 
} from '../slices/employerSlice';

// Simplified useSearch hook
const useSearch = (actionToDispatch, deps, delay = 500, condition = true) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef();

  useEffect(() => {
    if (!condition) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(async () => {
      try {
        const result = await actionToDispatch();
        setData(result || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer.current);
  }, [deps]);

  return { data, loading, setData };
};

const useEmployerSearch = (initVal = '') => {
  const dispatch = useDispatch();
  const employerRedux = useSelector(employerNewDataSelector);
  const { employer_selected } = employerRedux;

  const [localData, setLocalData] = useState({
    value: initVal,
    showList: false,
    ein: null,
  });

  const { value, showList, ein } = localData;

  const setShowList = (show) =>
    setLocalData((prev) => ({
      ...prev,
      showList: show,
    }));

  const valIsEmpty = value === '';

  const { data, loading, setData } = useSearch(
    async () => {
      return await dispatch(get_employer_list(value));
    },
    value,
    500,
    !valIsEmpty && !employer_selected
  );

  useEffect(() => {
    if (valIsEmpty || employer_selected) {
      setData([]);
    }
  }, [valIsEmpty, employer_selected]);

  return {
    data,
    loading,
    setData,
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
