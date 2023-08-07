import UserNavigation from '@/components/UserNavigation';

function HomePage() {
  return (
    <div className='flex-1 mt-10 mx-10'>
      <div className='flex justify-end'>
        <UserNavigation />
      </div>
      HOME DASHBOARD
    </div>
  );
}

export default HomePage;
