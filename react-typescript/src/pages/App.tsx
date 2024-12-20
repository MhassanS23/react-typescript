import React, { useState } from 'react';
// import Alert from './components/Alert';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Input from '../components/Input';
import Counter from './Counter';
import RefInput from '../components/ref/RefInput';

// import { ThemeProvider } from '../components/context/ThemeContext';
import { Increament } from '../components/class/increament';
// import { List } from '../components/generic/List';
import Navigation from '../components/Navigation';
// import { Private } from '../components/auth/Private';
// import Profile from '../components/auth/Profile';

type userData = {
  name: string;
  email: string;
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<userData | null>(null);
  const [input, setInput] = useState<string>('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleLogin = () => {
    setIsLogin(true);
    setUser({
      name: "Maulana",
      email: "maulanahassan366@gmail.com"
    })
  }

  const handleLogout = () => {
    setIsLogin(false);
    setUser(null);
  }
  return (
    <>
      <div className="h-screen bg-black flex items-center justify-center flex-col">
          <Heading>Solusi yang Anda Butuhkan</Heading>
          <Text>lorem impum amet dolor</Text>
          <div className="flex flex-row gap-4">
            <Button onClick={handleLogin} isLoading={false} className={'bg-red-600 hover:bg-red-400'} type='submit'>Login</Button>
            <Button onClick={handleLogout} isLoading={false} className={'bg-yellow-600 hover:bg-yellow-400'} type='submit'>Register</Button>
          </div>

          <Text>User {isLogin ? 'berhasil masuk' : 'telah keluar'}</Text>
          <Text>Nama User: {user?.name ? user.name : 'null'}</Text>
          <Text>Email User: {user?.email ? user.email : 'null'}</Text>
          <Input value={input} onChange={handleInputChange}/>
          <Counter/>
          <RefInput/>
          <Increament message='Number Berhasil di increament'/>
          {/* <Private isLogedIn={true} Component={Profile}/> */}
        {/* <List items={[
          {
            id: 1,
            name: 'neymar',
            club: 'barcelona'
          },{
            id: 2,
            name: 'messi',
            club: 'barcelona'
          },{
            id: 3,
            name: 'ronaldo',
            club: 'real madrid'
          }
        ]} onClick={(item) => console.log(item)}/> */}
        <Navigation/>
      </div>


      {/* <Alert type='Success' text='Alert Succes Berhasil' visibleAlert={true}/> */}
    </>
  );
}

export default App;
