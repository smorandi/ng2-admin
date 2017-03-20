export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'tpa-login',
        data: {
          menu: {
            title: 'Login',
            icon: 'fa fa-sign-in',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            auth: false,
            order: 0
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            auth: true,
            order: 0
          }
        }
      },
      {
        path: 'tpa-trade-overview',
        data: {
          menu: {
            title: 'Trade Overview',
            icon: 'fa fa-money',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            auth: true,
            order: 0
          }
        }
      },
      {
        path: 'tpa-notifications',
        data: {
          menu: {
            title: 'Notifications',
            icon: 'fa fa-flag',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            auth: true,
            order: 0
          }
        }
      },
    ]
  }
];
