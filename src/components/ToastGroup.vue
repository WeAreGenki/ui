<template>
  <transition-group>
    <ToastItem @destroy="hide" v-for="toast in toasts" :key="toast.id"
      :id="toast.id"
      :text="toast.text"
      :type="toast.type"
      :action="toast.action"
      :cb="toast.cb"
      :timeout="toast.timeout"
    />
  </transition-group>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ToastItem from './ToastItem';

let count = 0;

export default {
  name: 'ToastGroup',
  components: {
    ToastItem,
  },
  computed: mapState([
    'toasts',
  ]),
  created() {
    this.$store.registerModule('toasts', {
      namespaced: true,
      state: [],
      mutations: {
        /* eslint-disable no-return-assign, no-param-reassign */
        show: (state, toast) => state.push(toast),
        // hide: state => state.shift(),
        hide: (state, id) => id !== undefined // eslint-disable-line no-confusing-arrow
          ? state.shift()
          : state.filter(toast => toast.id !== id),
        /* eslint-enable no-return-assign, no-param-reassign */
      },
      actions: {
        removeToast({ commit }, id) {
          commit('hide', id);
        },

        // TODO: May be worth setting up a que in case there's a high priority
        //  toast that needs a certain amount of user attention/time
        createToast({ commit, state }, { text, type, action, cb, timeout }) {
          // dismiss existing toast (only one toast at a time)
          if (state[0] !== undefined) commit('hide');

          count += 1;
          commit('show', { id: count, text, type, action, cb, timeout });
          return count; // toast id
        },
      },
    });
  },
  methods: mapMutations('toasts', [
    'hide',
  ]),
};
</script>
