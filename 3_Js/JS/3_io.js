confirmBtn.onclick=function(){
    //confirm : 확인 / 최소 버튼을 통해 논리적인 처리를 지원하는 팝업창
    var bool = confirm("정먈 삭제하시겠습니까?");
    console.log(bool);

    if(bool){
        //파일삭제 로직..
        //alert : 메세지 내용을 출력하는 팝업
        alert("파일을 삭제했습니다.");
    }
};
promptBtn.onclick=function(){
    //prompt : 사용자로부터 문자열을 입력받ㄴ을수 있는 모달
    var name = prompt("당신의이름은 무엇입니까?")
    console.log(name);//값이 있는 경우, 값이 없는 경우(null, '')
    //자바ㅡ크립에서는 "값이 존재한 ㄴ경우 true, 값이 존재하지 않는 경ㅇ false로 처리"
    // if(!name) 이 아래 긴 조건문 이거 하나로 끝
    if(name==null|| name==" "){
        alert("올바른이름을 입력하세요ㅕ");
    }else{
        alert("얀ㅇ영하세여 +"+name+"님!!");
    }
}

innerH.onclick=function(){
    /**innerHtml : 각 html 태그의 content영역을 의미한다.
     * -getter 방식 : html이 포함된 conent를 반환
     * -setter 방식 : 주어진문자열을 html로 변환하여 출력
     */
    var str= "<h1>치킨먹고싶다</h1>";
    wrapper.innerHTML=str;//setter반식
    console.log(wrapper.innerHTML);//getter방식
};

innerT.onclick=function(){
    /*
        innerText/textContent: 
        
    */
   var str ="<h1>배고파</h1>";
   wrapper.innerText=str;
   wrapper.textContent=str;
   console.log(wrapper.innerText);


};
outerH.onclick=function(){
    //선택된 요소 내부의 컨텐츠값과 선택된 요소값을 합쳐 반환
    console.log(wrapper.outerHTML);
    wrapper.outerHTML="<mark>붕어빵먹고싶어요</mark>";
};