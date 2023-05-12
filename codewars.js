
arr =[1,2,3] // 6
arr2 =[-1,-2,-3] // 0
arr3 = [-1,2,3,4,-5] //9

function positiveSum(arr) {
    const arrPositive=[]

    for (let i= 0;i<arr.length;i++){
        const element = arr[i];

        if(element>0){
            arrPositive.push(element)
            console.log()

            // if(arrPositive.length >=2){
            //     console.log('arrPositive: ', arrPositive)

            //     const result = arrPositive.reduce((a,b)=> a+b,0)
             
            //     return console.log('return result:',result)

            // }else{

            // }

        }else{
            return 0
        }
        
    }
}


  console.log('risultato funzione:',positiveSum(arr))












// export function positiveSum(arr:number[]):number {
//     let arrPositive=[]
//     for (let i= 0;i<arr.length;i++){
//       const element = arr[i]
      
//       if(element>0){
//         arrPositive.push(element)
//         console.log(arrPositive)
//         if(arr.length=>2){
//         const result = arr.reduce((a,b)=> a+b,0)
//          return result
//         }else{
//           return element
//         }
//       }else{
//       return console.log(arr)
//       }
//     }
//   }







