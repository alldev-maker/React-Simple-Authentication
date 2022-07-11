import { useDispatch } from 'react-redux';
import { clearUser } from 'redux/actions';

import PatientChart from 'features/dashboard/patient-chart';
import { ButtonPurple } from 'components/button';

export const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="container py-5">
      <PatientChart />
      <div className="mt-5 text-end">
        <ButtonPurple type="button" onClick={() => dispatch(clearUser())}>
          Sign out
        </ButtonPurple>
      </div>
    </div>
  );
};
