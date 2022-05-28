export default{
methods:{
    isDesktop(){
        const width = window.innerWidth;
        return width > 767
      },
      isPhone(){
          const width = window.innerWidth;
          return width < 767;
      }
}
}