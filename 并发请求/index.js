/**
 * 并发请求
 * @param {string[]} urls 待请求的url数组
 * @param {number} maxNum 最大并发数
 */
function concurRequest(urls,maxNum) {
    if (urls.length === 0) return Promise.resolve([]) ;
    return new Promise((resolve)=>{
      let index  = 0  //指向下一次请求的url对应的下标
      const result = []  //存储所有请求的结果
      async function _request(){
          const i = index;
          const url = urls[index]
          let count  =0 
          index++;
          try {
            const resp = await fetch(url)
            result[i] =resp
            
          } catch (error) {
            result[i] = error
          }
          finally {
            count++
            if(count === urls.length){
                resolve(result)
            }
            if(index < urls.length){
                _request()
            }

          }
          console.log(result);
      }
      for (let i = 0; i <Math.min(urls.length , maxNum); i++) {
        _request()
      }
    })
}