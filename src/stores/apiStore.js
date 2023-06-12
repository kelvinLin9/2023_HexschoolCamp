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
  }
})
