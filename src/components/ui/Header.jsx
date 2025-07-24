import React, {useEffect, useState } from 'react'
import { Link ,useSearchParams} from 'react-router-dom'
import { Button } from './button'
import { SignedIn, SignedOut, SignIn,UserButton,useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Folder, PenBox } from 'lucide-react'
const Header = () => {
  const[showSignIn, setShowSignIn] = useState(false);
    const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);
  const handelOverlayClick = (e) => {
    if(e.target===e.currentTarget){
      setShowSignIn(false);
    }
  };
  return (
    <>
    <nav class ="py-4 flex justify-between items-center">
     <Link>
        <img src="/logo.png" className="h-20"/>
        </Link>

        <div className="flex gap-2">
         <SignedOut>
          <Button variant="outline" onClick={()=>setShowSignIn(true)} >Login</Button>
       
      </SignedOut>
      <SignedIn>
        <Button variant="destructive" className="rounded-full">
          <PenBox size={20} className='mr-2'/>
          Post a job</Button>
        <Link to="/post-job">
          </Link>
        <UserButton appearance={{
          elements:{
            avatarBox: 'h-10 w-10',
          },
        }}>
          <UserButton.MenuItems>
            <UserButton.Link
             label='My Jobs'
             labelIcon={<BriefcaseBusiness size={15} />}
             href="/MyJobs"
            />
             <UserButton.Link
             label='Saved Jobs'
             labelIcon={<Folder size={15} />}
             href="/SaveJobs"
            />


          </UserButton.MenuItems>

</UserButton>
      </SignedIn> 
          </div>   
    </nav>
    {showSignIn && (
      <div className='fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm'
      onClick={handelOverlayClick}>

      
      <SignIn
      signupForceRedirectUrl="/onboarding"
      fallbackRedirectUrl="/onboarding"
      />
    </div>
    )}
    </>
  )
}

export default Header