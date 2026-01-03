import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import Rightsidebar from '@/components/Rightsidebar'

const Home = () => {
  const loggedIN = { firstName: 'Aziz', lastName: 'Rabya', email:'azizrabya@1gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIN.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS 
      </div>

      <Rightsidebar 
      user={loggedIN}
      transactions={[]}
      banks={[{ currentBalance: 1250.14 }, { currentBalance: 2250.14}]}
      />
    </section>
  )
}

export default Home