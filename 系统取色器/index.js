// /$$
//  $ @Author: tianleiyu 
//  $ @Date: 2024-03-09 17:06:27
//  $ @LastEditTime: 2024-03-09 17:06:28
//  $ @LastEditors: tianleiyu
//  $ @Description: 系统取色器
//  $ @FilePath: /抖音小tips/index.js
//  $ @可以输入预定的版权声明、个性签名、空行等
//  $/
const btu = document.querySelector('button')
const box = document.querySelector('.box')
const lable = document.querySelector('label')

btu.onclick = async ()=>{
    if (!window.EyeDropper) {
        resultElement.textContent =
          "Your browser does not support the EyeDropper API";
        return;
      }
    const dropper = new EyeDropper()
    try{
        const result  = await dropper.open()
        console.log(result);
        box.computedStyleMap.backgroundColor = lable.textContent = result.sRGBHex;

    }catch(error){
        console.log(error);
    }
}