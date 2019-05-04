// 新建一个VueJs实例

new Vue({
    // 根DOM元素的css选择器
    el: '#notebook',
    data() {
        return {
            content: 'This is a note.'
        } 
    },
    
    // 计算属性
    computed: {
        notePreview() {
            // Markdown 渲染为HTML
            return marked(this.content)
        }
    }   
})