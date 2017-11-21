Vue.component('my-dropdown', {
    
        template: `#dropdown-template`,
        props: ['buttontext', 'color', 'text1','text2','text3','url1','url2','url3', ],
        data: function() {
            
        }
})
    
    var mainVm = new Vue({
        el: "#app",
    
    })