export default {
    '/api/': getApiSidebar(),
    '/components/': getComponentsSidebar(),
  }
  
  function getApiSidebar() {
    return [
      {
        text: '功能',
        collapsible: true,
        items: [
          {
            text: '已实现',
            link: '/api/'
          },
        ]
      }
    ]
  }
  
  function getComponentsSidebar() {
    return [
      {
        text: '组件',
        items: [
          {
            text: 'Button 按钮',
            link: '/components/button'
          }
        ]
      }
    ]
  }
  

  
  