import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import CustomerHomepage from '../views/CustomerHomepage.vue'
import OwnerDashboard from '../views/OwnerDashboard.vue'
import OwnerHomepage from '../views/OwnerHomepage.vue'
import HotelBooking from '../views/HotelBooking.vue'
import HotelDetail from '../views/HotelDetail.vue'
import HotelRegister from '../views/HotelRegister.vue'
import Product from '../views/Product.vue'
import OwnerUpdate from '../components/Owner/OwnerUpdate'
import Dashboard from '../components/Dashboard/Dashboard'
import DashboardHotelListing from '../components/Dashboard/DashboardHotelListing'
import DashboardAddHotel from '../components/Dashboard/DashboardAddHotel'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CustomerHomepage',
    component: CustomerHomepage
  },
  {
    path: '/owner',
    name: 'OwnerHomepage',
    component: OwnerHomepage
  },
  {
    path: '/dashboard/:id',
    // name: 'OwnerDashboard',
    component: OwnerDashboard,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'profile',
        component: OwnerUpdate
      },
      {
        path: 'listing',
        component: DashboardHotelListing
      },
      {
        path: 'hotels',
        component: DashboardAddHotel
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/details/:id',
    name: 'HotelDetail',
    component: HotelDetail
  },
  {
    path: '/booking',
    name: 'HotelBooking',
    component: HotelBooking
  },
  {
    path: '/register',
    name: 'HotelRegister',
    component: HotelRegister
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  // {
  //   path: '/dashboard/:id/profile',
  //   name: 'OwnerUpdate',
  //   component: OwnerUpdate
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
