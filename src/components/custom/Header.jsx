import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { FcGoogle } from "react-icons/fc";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json',
        },
      })
      .then((resp) => {
        console.log(resp);
        localStorage.setItem('user', JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <div className='flex items-center gap-2'>
        {/* Logo */}
        <img src='/logo.svg' alt='Logo' />

        {/* App name next to logo */}
        <h2 className='font-bold text-xl text-gray-800'>WanderWise</h2>
      </div>

      <div>
        {user ? (
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
              <Button variant='outline' className='rounded-full'>
                + Create Trips
              </Button>
            </a>
            <a href='/my-trips'>
              <Button variant='outline' className='rounded-full'>
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className='h-[35px] w-[35px] rounded-full'
                  alt='User profile'
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className='cursor-pointer'
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              {/* Adding website name next to the logo */}
              <div className='flex items-center gap-2'>
                <img src='/logo.svg' alt='Logo' />
                <h2 className='font-bold text-xl text-gray-800'>WanderWise</h2>
              </div>
              <h2 className='font-bold text-lg mt-4'>Sign In With Google</h2>
              <p>Sign into the App with Google authentication security</p>

              <Button
                onClick={login}
                className='w-full mt-5 flex gap-4 items-center'
              >
                <FcGoogle className='h-7 w-7' />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
