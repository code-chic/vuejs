declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare interface Vue {
  resizes: Array<any>
}
