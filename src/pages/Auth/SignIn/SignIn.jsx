import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox
} from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../redux/slices/userSlice/userThunk';
import withAuthLayout from '../AuthLayout';
const SigIn = () => {
  const [open, setOpen] = useState(false);
  const [signInData, setSignInData] = useState({
    emailOrPhone: '',
    password: ''
  });
  const dispatch = useDispatch();
  const handleOpen = () => setOpen((cur) => !cur);
  const signIn = () => {
    if (!signInData.emailOrPhone || !signInData.password) return alert('Please fill all fields');
    let userData = {};
    if (signInData.emailOrPhone.includes('@')) {
      userData = { email: signInData.emailOrPhone, password: signInData.password };
    } else {
      userData = { phone: signInData.emailOrPhone, password: signInData.password };
    }
    dispatch(loginThunk(userData)).then((data) => {
      if (data.type.split('/')[2] === 'fulfilled') {
        setOpen(false);
      } else {
        alert(data.payload);
      }
    });
  };

  const handleChange = (e) => {
    setSignInData((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email or Phone Number"
              size="lg"
              name="emailOrPhone"
              onChange={handleChange}
            />
            <Input label="Password" size="lg" name="password" onChange={handleChange} />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={signIn} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
export default withAuthLayout(SigIn);
