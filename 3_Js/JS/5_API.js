test1.onclick=function(){
    var str="Sammsumg Apple Xiolo";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.indexOf('pl)'));
    console.log(str.lastIndexOf('i'));
    console.log(str.charAt(0));
    console.log(str[0]);

    //문자열의 일부를 잘라서 리턴
    console.log(str.substring(2,4));//2,3번 인덱스값 추출
    console.log(str.substring(2));//2번부터 끝까지

    var arr= str.split(" ");
    console.log(arr);

}
test2.onclick=function(){
    var num =123.456;
    console.log(Math.round(num*10)/10);
    console.log(Math.ceil(num));
    console.log(Math.floor(num));
    //그외에 자바의 메서드명과 동일한 메서드 다수 존재 
}
test3.onclick=function(){
    var now = new Date();
    console.log(now);

    //내가 원하는 시간정보를 가진 DAte객체
    var time1= new Date(20206,0,20);//2026-01-20
    console.log(time1);

    // 날짜형식의 문자열로 객체 생성 가능
    var time2= new Date("1999/03/01 15:44:21")
    console.log(time2);

    //Date객체를 yyyy/mm/dd(e) HH:MM:SS 형식으로 출ㅎ력하고 싶다며?
    displayDate(time2);

}
function displayDate(date){

    var yyyy= date.getFullYear();
    var mm= date.getMonth()+1;
    var dd= date.getDate();

    var dayArr=['일', '월', '화','수','목','금',토];
    var day= date.getDay();//0(일)~6(토)

    alert(yyyy+"/"+mm+"/"+day+"("+dayArr[day]+")");

}
test4.onclick= function(){
    console.log(3+7+"7");//값은107 stromg

    //7은  number 자료형으로 변환 돤 후 연산
    console.log(7 ,-7); //0 나옴 
    confirm
    //ejttp

    console.log(7 %'a');//숫자형태가 아닌 문자열을 숫자로 현변한시느 문자열을 슷자료 하여
console.log(7+ true);//tr

// 산술연산, ㅁㄱ자자ㅡㅁ
// //[]->ㅅㄷ                                                                                                                                                                                             

// console.log


//  functionfn(){
//     console.log(fn+1);
//  }
 }
test5.onclick=function(){
    var num ="121.456원";
    console.log(Number(num));
    //Number는 정수/실수로 변환이 가능. 단, 변환불가 문자가 있는 경우 nan을 반환
    console.log(parseInt(num));
    //문자열을 정수로 반환. 단, 변환부라 문자가 있는 경우 해당문자의 앞까지만 변환

    console.log(parseFloat(num));
    //문자열을 실수로 반환. 단, 변환부라 문자가 있는 경우 해당문자의 앞까지만 변환
}
test6.onclick=function(){
    console.log(10/0);//infinity
    console.log(typeof(10/0));//Number

    console.log(10/"a");//NaN
     console.log(typeof(10/"a"));//Number

     var num = prompt("숫자를 입력하ㅛㅔ려");
     if( ! isNaN(num)){
        alert("숫자입니다");
     }else{
        alert("숫자 아님");
     }
}
test7.onclick=function(){
    /*
    자바스크립트에서는 변수나 리터럴이 boolean형으로 형변환이 가능하다.

    -if(값), Booleam(값)
    값이 존재하지 않는 것들은 false로 변환한다.
    ex) 0 ,-0, 0.0, "", undefinded, null, NaN

    값이 존재하는 것들은 true로 반환된다.
    ex) 123, -123, 1.1, "한ㄷ글자 이상이면", new Date(),  [],{}=>얘네 주소값이 존재하니까 true임  
    */
   console.log(Boolean(123));//true;
   console.log(Boolean(-500));//true;
   console.log(Boolean(0));//false;

   console.log(Boolean("abs"));//true;
   console.log(Boolean(""));//false;
   console.log(Boolean(undefined));//false;
   console.log(Boolean(null));//false;
   console.log(Boolean([]+""));//얘는 빈문자열이 되서 false;
   console.log(Boolean(NaN))//false;
   
   

}
function fn(){
    console.log(Boolean(fn));//true

    console.log("0"==0);//true
    console.log([]==0); //true 빈문자열이 투스트링으로 되고 빈 문자열이 넘버로 자료형 바뀌명 0이더;ㅣㅁ
    console.log([]=="0")//false
   }
test8.onclick=function(){
    /*
    일반 동등비교 연산자
    == ,!= 
    왼쪽 오른쪽 타입이 다르다면 "자동형변환" 후 비교 수행

    엄격 동등 연산자
    ===. !== 
    - 왼쪽 오른쪽 타입이 다르다면 바로 false를 반환하는 연산자(===기준)
    즉, 두 값간의 자료형검시 또한 수행한다. 
    */
   console.log(3=="3");//t
   console.log(3!="3");//f

    console.log(3==="3");//false 자료형이 달라
    console.log(3=== 3);//true

    console.log(3!=="3");//true
    console.log(3===Number("3"))//t
    console.log(null==undefined)//t
    console.log(null===undefined)//f 널은 객체 지료형, undefined는 고유의 자료형 

}
test9.onclick=function(){
    var num = prompt("정수를 입력하세요");
    //입력한 값이 홀수 인지 짝수인지 출력 
    if(num%2==0){
        alert("짝수");
    }else{
        alert("호료ㅜ");
    }
    //짧은 조건문 
    //a(조건문) && ㅠ (실행문)-> a가 참인경우 b 실행
    //a조건문 || b(실행문)-> a가 거직인 경우 b실향

    num %2 ==0 && alert("짝수");
    num%2==1 && alert("홀수");
}