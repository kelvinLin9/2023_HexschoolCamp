import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('apiStore', {
  state: () => ({
    parameter: {
      type: '',
      sort: 0,
      page: 1,
      search: ''
    },
    worksData: [],
    pagesData: [],
    tagName: ['全部', '問答服務', '虛擬客服', '生活應用', '程式知識', '翻譯助手', '行銷文案']
  }),
  actions: {
    getData ({ type, sort, page = 1, search }) {
      console.log(type, sort, page, search)
      const apiPath = 'https://2023-engineer-camp.zeabur.app'
      const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`
      axios.get(apiUrl).then((res) => {
        console.log(res)
        this.worksData = res.data.ai_works.data
        this.pagesData = res.data.ai_works.page
        console.log('worksData', this.worksData[0])
        console.log('pagesData', this.pagesData)
      }).catch(() => {
        console.log('QQ')
      })
    }
  },
  getters: {
    filterWorksData () {
      let filterWorksData
      if (this.cacheSearch === '') {
        switch (this.category) {
          case 'all':
            filterWorksData = this.worksData.filter((item) => {
              return item
            })
            break
          case 'S':
            filterWorksData = this.worksData.filter((item) => {
              return item.category === 'S'
            })
            break
          case 'A':
            filterWorksData = this.worksData.filter((item) => {
              return item.category === 'A'
            })
            break
          case 'B':
            filterWorksData = this.worksData.filter((item) => {
              return item.category === 'B'
            })
            break
          case 'C':
            filterWorksData = this.worksData.filter((item) => {
              return item.category === 'C'
            })
            break
          case '馬鞍':
            filterWorksData = this.worksData.filter((item) => {
              return item.description === '馬鞍'
            })
            break
          case '馬蹄鐵':
            filterWorksData = this.worksData.filter((item) => {
              return item.description === '馬蹄鐵'
            })
            break
          case '馬飼料':
            filterWorksData = this.worksData.filter((item) => {
              return item.description === '馬飼料'
            })
            break
        }
        return filterWorksData
      } else {
        return this.worksData.filter((item) => {
          return item.title.match(this.cacheSearch)
        })
      }
    }
  }
})
