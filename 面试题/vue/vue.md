# Vue

## 生命周期

1. 初始化阶段
    - 初始化一些属性、事件以及响应式数据，如props、methods、data、computed、watch、provide和inject等
2. 模板编译阶段
    - 判断是否有el选项，如果没有则等待vm.$mount(el)被调用
    - 判断是否template选项，如果有则通过template选项获取模板，没有则通过el选项获取模板
    - 将模板编译为渲染函数
3. 挂载阶段
    - 创建vm.$el并替换el
4. 卸载阶段
    - 卸载依赖追踪、子组件与事件监听器2