import Header from '@/components/shared/Header'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const NoStripe = async() => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  
  return (
    <>
        <Header
            title="Left for further design"
            subtitle="We need to implement payments here but because there are no registered businesses on our name, we cannot implement it using Stripe or RazorPay. Inorder to use the services again, create a new account with a new mail or delete the existing account and create it again with existing mail. Thank you."
        />
    </>
  )
}

export default NoStripe;