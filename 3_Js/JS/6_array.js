test1.onclick=function(){
    /**
     * 자바스크립트의 배열ㅇ은 크기제한이나 , 타입제한이 없으며 유용한 메서드존재한다.
     * (ArrayList와 비슷)
     */
    var arr1=[];//권장
    var arr2= new Array();
    var arr3 = new Array(3);//크기지정

    console.log(arr1, arr2, arr3);

    //값대입
     arr1[0]='a';
     arr1[1]='b';
     arr2[0]='c';
    //값 가져오기
    console.log(arr1[2]);
    console.log(arr1[100]);//undifined 반환

    //반복문
    for( var i=0; i<arr1.length; i++){
        console.log(arr1[i]);
    }
    //향상된 반복문 -객체 반복해라
    //1. for.. in문 
    // -객체 , 배열 모두 반복이 가능
    // -객체 반복시 i에는 객체의 속성명이 대입
    // - 배열 반복시 i에는 배열의 인덱스가 대입된다.
    for(var i in arr1){
        console.log(i, arr1[i]);
    }

    /**
     * 2. for ..of문 -배열 반복해라 
     * - 자바의 향산된 반복문과 가장 비슷한 구문으로, 배열유형의 데이터를 반복시키기 위해 사용된다.
     * - i에는 각 인덱스에 저장된 값이 대입된다.
     * - 객체는 반복이 불가능학다,.
     *  
     */
    for(var item of arr1){
        console.log(item);
    }

}
test2.onclick=function(){
    var arr1= [1,2,3];
    var arr2= new Array("철수", "영희", "김밥");

    var arr3=[
        1,2,3,
        "안녕",true,{id : "mkm"}, ['a','b'],
        function(){console.log('zz')}
    ]
    arr3[7]();
}
test3.onclick=function(){
    var arr= ['apple','melon','maggo','banana','melon'];
    console.log(arr.indexOf('melon'));
    console.log(arr.lastIndexOf('melon'));
    console.log(arr.indexOf('strawverry'))//값이 없으면 -1을 반환 

}
test4.onclick=function(){
    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3,4,5];

    var newArr= arr1.concat(arr2);
    console.log(newArr);
    console.log(arr1);
}
test5.onclick=function(){
    //join : 배열내부의 요소를 하나로 뭉친 문자열 리턴
    var arr= [1,2,3,4,5];
    var str = arr.join();
    console.log(str);

    var str= arr.join("");
    console.log(str);
};
test6.onclick=function(){
    var arr=[1,2,3,4,5];
    arr.reverse();// 원본 배열의 정렬 순서를 변경함
    console.log(arr);

}
test7.onclick=function(){
    var arr=[4,2,6,4,1,3];
    console.log(arr.sort());//원본 배열을 정렬.

    //내림차순 정렬
    //정렬기준을 "함수"로 만든다.
    arr.sort(function(a,b){
        return b-a;
    }); 
    console.log(arr);

    //문자열 정렬 오름차순 
    var names= ["홍길동", "김성규", "김선호", "고윤정","다나카"]
    console.log(names.sort());

    //문자열 기준 내림차순?
    names.sort(function(a,b){
        if(a>b) return -1;
        if(a<b) return 1;
        return 0;
    })
    console.log(names);

    //sort 메서드의 기본 정렬은 "문자열 기준"정렬
    arr=[1,2,15];
    console.log(arr.sort());//1,15,2
    //"2">"15" true
   
}
/**
 * push : 배열 마지막에 요소를 추가한 후 변경된 길이를 반환
 * pop : 배열 마지막 요소를 제거한 후, 제거되ㅣㄴ 요소를 반환
 */
test8.onclick=function(){
var arr=[];
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr);
}
/**
 * unshift : 배열의 0인덱스에 요소 추가 후, 변경된 길이 반환
 * shift : 배열의 0번 인덱스의 요소 제거 후, 제거 된 요소를 반환 
 */
test9.onclick=function(){
    var arr= ["사과","배","귤"];
    arr.unshift('감자');
    arr.unshift('양파');

    console.log(arr);
    console.log(arr.shift());// 양파를 반환 및 제거 배열에서 양파만 제거

}
/**
 * slice(start,end)
 *   - start인덱스부터 end인덱스 까지의 요소를 가져와서 세배여르반환
 */
test10.onclick=function(){
    var arr=['a','b','c','d','e'];

    //b,c만 추출
    var oo= arr.slice(1,4);
    console.log(oo);
    console.log(arr);
    
}
/**
 * splice()
 * -중간위치에 요소를 추가하거나 삭재ㅔ하는 메서드
 * -인덱스부터 
 */
test11.onclick=function(){
    var arr =['a','b','c','d','e'];
    //axycde
    arr.splice(1,1,'x','y');
    console.log(arr);

    //axkhe
    arr.splice(2,3,'k','h');
    //axfrikhe
    arr.splice(1,0,'f','r','i');
    //ab
     arr.splice(1,7,'b');
}
/** <!--* prompt를 이용해 사용자의 취미리스트를 입력받으세요.
         * 예) 농구,수영,캠핑,낚시    
     * ,구분자로 잘라서 배열로 담은후, 
        * 사전순 정렬이후, ul#hobby-list의 자식li태그로 추가하세요.--> */
test12.onclick=function(){
    var hobb=prompt("취미를 입력하세요");
    var arr=hobb.split(",");
    arr.sort();
    var re="";
    for(var hobby of arr){
        re +="<li>"+hobby+"</li>";
    }
    var ul=document.querySelector("#hobby-list");
    ul.innerHTML=re;

}
/*
    foreach(fuanction(value, index){
        //실행할 구문 
    })
*/
test13.onclick=function(){
    var arr= [1,2,3,4,5];
    var sum = 0;

    arr.forEach((num, index ,arr2)=>{
        console.log(num, index, arr2);
        sum+=num;
    })
    console.log(sum);

    //forEach 메서드는 유사배열도 사용이 가능 
    var btnArr=document.querySelectorAll("input[type=button]")
    var btnValues =[];
    btnArr.forEach(function(btn){
        btnValues.push(btn.value);
    })
    console.log(btnValues);
}
/*
    array에서만 사용 가능한 함수
    find : 배열에서 내가 지정한 조건을 만족하는 1개의 요소 반환
    filter :  베열에서 내가 지정한 조건을 만족하는 n개의 요소를 담은 배열
    map: 배열안의 데이터를 내가 원하느 ㄴ요소로 변경시켜 반환 
*/
test14.onclick=function(){
    var objArr=[
        {id : 'tae0' ,name : "태경1"},
        {id : 'tae02' ,name : "태경2"},
        {id : 'tae03' ,name : "태경3"},
        {id : 'tae04' ,name : "태경4"},
    ];

    var find1=objArr.find(function(obj){
        if(obj.id=='tae0'){
            return true;
        }
    })
    console.log(find1)//존재하지 않으면 ㅇundifind반환

    var filterArray = objArr.filter(function(obj){
    if(obj.id.includes('tae0')){
         return true;
    }
    })
    console.log(filterArray);

    var mapArr= objArr.map(function(obj){
        return obj.name;

    })
    console.log(mapArr);
    
}
/**
     * 1) 배열 drink에 #drink태그의 자식li태그 텍스트를 추가. (forEach활용)
     * ['coke', 'juice', 'coffee', 'beer', 'wine']
     * 2) 배열 drink에서 'ff'가 들어가는 요소를 선택해서 findOne 반환. (find 활용)
     *  coffee
     * 3) 배열 drink에서  'o'가 들어가는 요소들을 선택해서 filteredArr 반환. (filter활용)
     * ['coke','coffee']
     * 4) 배열 drink를 활용하여 음료객체 배열을 생성 한후 mappedDrink에 반환(map 활용)     *
     * [{"menu": "coke","price": 2000},{"menu": "juice","price": 1600},{"menu": "coffee","price": 4000},
     *  {"menu": "beer","price": 8000},{"menu": "wine","price": 15000}]
     * 
     * 


     */

test15.onclick=function(){
  
    var drink= [];
    document.querySelectorAll("#drink>li").forEach(function(dd){
        drink.push(dd.innerHTML);
    })
    

      var findOne =drink.find(function(o){
        if(o.includes("ff")){
            return true;
        }
      })
     
      var filteredArr=drink.filter(function(d){
        if(d.includes('o'))
            return true;
      })
       var priceArr = [2000, 1600, 4000, 8000, 15000];
      var mappedDrink= drink.map(function(d,i){
        return{menu : d, price : priceArr[i]};
      })
      console.log(mappedDrink);
     
    
      
}