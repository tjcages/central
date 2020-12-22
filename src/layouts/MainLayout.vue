<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-negative" style="height: 0px">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" color="white" />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to" 
        :icon="nav.icon"
        :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen" 
      overlay
      behavior="mobile"
      elevated
      side="left" 
      bordered 
      :width="232"
    >
      <div 
      class="menu column justify-between window-height" 
      >
        <q-list>
          <q-item-label
            header
            class="text-white text-h5 text-weight-bold q-mb-md"
          >
            Memos
          </q-item-label>
          <q-item 
          v-for="nav in navs"
          :key="nav.label"
          clickable
          exact
          :to="nav.to"
          class="text-white text-subtitle2"
          active-class="menu-link"
          >
            <q-item-section avatar>
              <q-icon :name="nav.icon" class="q-my-sm" size="sm" color="primary"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ nav.label }}</q-item-label>
            </q-item-section>
            
          </q-item>

          <q-item-section class="col-1 q-mb-md">
            <q-item 
            clickable
            exact
            class="text-grey-6 text-subtitle2"
            >
              <q-item-section avatar>
                <q-icon name="insert_comment" class="q-my-sm" size="sm" color="grey-6"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Feedback</q-item-label>
              </q-item-section>
            </q-item>
          </q-item-section>
        </q-list>

        <q-img
          class="q-ml-md q-mb-sm"
          src="../assets/profile_ex1.png"
          spinner-color="white"
          style="height: 72px; width: 72px"
        />
      </div>
    </q-drawer>

    <router-view />
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'

  export default {
    name: 'MainLayout',
    data () {
      return {
        leftDrawerOpen: false,
        navs: [
          {
            label: 'Dashboard',
            icon: 'home',
            to: '/',
          },
          {
            label: 'Schedule',
            icon: 'today',
            to: '/schedule',
          },
          {
            label: 'Inbox',
            icon: 'inbox',
            to: '/inbox',
          },
          {
            label: 'Settings',
            icon: 'settings',
            to: '/settings',
          }
        ]
      }
    },
    methods: {
      openURL
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router--link-exact-active {
      color: white !important;
    }
  }

  .roundedCorners {
    border-radius: 4px;
  }

  .menu {
    background: #272a41;
  }

  .menu-link {
    background: #3d3f54;
  }
</style>
