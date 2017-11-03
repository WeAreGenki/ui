<template>
<!-- <div id="toasts-group"> -->
  <transition-group>
    <Toast @destroy="removeToast" v-for="(toast, key) in toasts" :key="key"
      :id="key"
      :text="toast.text"
      :type="toast.type"
      :action="toast.action"
      :callback="toast.callback"
      :timeout="toast.timeout"
    />
  </transition-group>
<!-- </div> -->
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import Toast from './Toast';

export default {
  name: 'ToastsGroup',
  components: {
    Toast,
  },
  props: [ // eslint-disable-line vue/require-prop-types
    'vuex',
  ],
  // data() {
  //   return {};
  // },
  computed: mapState([
    'scrollLock',
    'toasts',
  ]),
  mounted() {
    this.vuex.registerModule({
      state: {
        syncState: 'online', // online, offline, paused, error
      },
      mutations: {
        /* eslint-disable no-return-assign, no-param-reassign */
        setSyncState: (state, syncState) => state.syncState = syncState,
        addQuery: (state, payload) => Vue.set(state, payload.key, {}),
        removeQuery: (state, payload) => Vue.delete(state, payload.key),
        setQueryResult: (state, payload) => state[payload.key] = payload.data,
        /* eslint-enable no-return-assign, no-param-reassign */
      },
      actions: {
        // use an action to change sync state to allow for custom functionality in future
        changeSyncState({ commit }, newState) {
          commit('setSyncState', newState);
        },
      },
    });
  },
  methods: mapActions([
    'removeToast',
    'toggleStatusToast',
  ]),
};
</script>

<style>
/* @import "css/import"; */

/* #toasts-group {} */
</style>
