import Swap from 'pages/Swap';
import withPageTitle from './components/PageTitle';
import Home from './pages/Home';

export const routeNames = {
  connect: '/connect',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  presale: '/'
};

const routes: Array<any> = [
  {
    path: routeNames.connect,
    title: 'Connect',
    component: Home
  },
  {
    path: routeNames.presale,
    title: 'Presale',
    component: Swap
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title ? `${route.title} • Landboard` : 'Landboard';

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
