<template>
  <div id="switcher">
    <button
      href="#"
      id="flexitems-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img :src="`/${$i18n.locale}.svg`" alt="flag" id="autoflag">
      <span id="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
    </button>
    <transition name="dropdown-fade">
      <ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown">
        <li>
          <a
            href="#"
            @click.prevent="setLocale('dk')"
            ref="account"
            
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img src="/dk.svg" alt="danish flag" id="flag">
            <span class="lan">DK</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('en')"
            
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <img src="/en.svg" alt="english flag" id="flag">
            <span id="lan">EN</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  name: 'LanguageSwitcher',
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }

    #switcher {
        margin-right: 1rem;
        position: relative;
        z-index: 9999999999999;
    }

  #flexitems-center {
      display: flex;
      align-items: center;
  }

  #ml-2 {
      margin-left: 7px;
      font-size: 20px;
  }

  #autoflag, #flag {
      height: 35px;
      width: 35px;
  }

  a{
      display: flex;
      align-items: center;
  }

  li {
    list-style: none;
    z-index: 99;
    
  }

  ul{
      position: absolute;
      z-index: 98;
      background-color: white;
      
  }

  #flag {
      margin-right: 7px;
      
  }

  #lan {
      font-size: 20px;
  }
</style>