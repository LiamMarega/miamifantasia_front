import { useNavigate } from 'react-router';

function navigateHome() {
  const navigate = useNavigate();
  navigate('/');
}

export default { navigateHome };
