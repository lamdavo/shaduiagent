'use client';

import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/app/context/store';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { DEFAULTAVATAR } from '@/app/constants/index';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

function UserNavigation() {
  const { username, setIsLogin, setUsername } = useGlobalContext();
  const router = useRouter();
  const logOut = () => {
    setIsLogin(false);
    setUsername('');
    router.replace('/');
  };

  return (
    <div>
      <h1>User Navigation Component</h1>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='flex item-center'>
              <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src={DEFAULTAVATAR} alt='user-avatar' />
                  <AvatarFallback> Avatar </AvatarFallback>
                </Avatar>
              </Button>
              :{username}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem onClick={() => logOut()}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
export default UserNavigation;
