import Navigation from './navigation/Navigation';
import AppContextProvider from './services/app-context';
import AuthContextProvider from './services/auth-context';
import InterfaceContextProvider from './services/interface-context';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

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
