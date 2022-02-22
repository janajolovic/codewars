function solution(str){
    let arr=[];
    for(let i = 0; i < str.split('').length; i += 2){
    arr.push(str.slice(i,i+2))}
  
    return arr.map(el => el.length === 1 ? el + '_' : el)
  }