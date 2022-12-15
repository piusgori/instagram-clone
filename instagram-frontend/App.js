import Navigation from './navigation/Navigation';
import AppContextProvider from './services/app-context';
import AuthContextProvider from './services/auth-context';
import InterfaceContextProvider from './services/interface-context';

export default function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <InterfaceContextProvider>
          <Navigation></Navigation>
        </InterfaceContextProvider>
      </AppContextProvider>
    </AuthContextProvider>
  );
}
