const routes = [
  {
    path: '/',
    component: require('./views/Home'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/chapters/:chapter',
    component: require('./views/Chapter'),
    props: true,
    meta: {
      keepAlive:  false
    }
  },
  {
    path: '/contacts',
    component: require('./views/Contacts'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/reservations',
    component: require('./views/Reservations'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/princing',
    component: require('./views/Pricing'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/bookmarket',
    component: require('./views/bookmarket'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/bookdinner',
    component: require('./views/Bookdinner'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/bookworkshop',
    component: require('./views/Bookworkshop'),
    meta: {
      keepAlive:  true
    }
  }
]

export default routes