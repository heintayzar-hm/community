import { useSelector } from 'react-redux';

const withAuthLayout = (WrappedComponent) => {
  const AuthLayout = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    if (isLoggedIn) {
      return null; // or any other component you want to render when the user is already logged in
    }

    return <WrappedComponent />;
  };

  return AuthLayout;
};

export default withAuthLayout;
