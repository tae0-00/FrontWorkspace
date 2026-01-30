test1.onclick=function(){
    /*
    Object
    - {속성명 : 속성값}으로 구성된 요소를 관리하는 객체를 의미
    - 속성명 :식별자의 역할을 하며 보통 문자열을 작성
    - 속성값 : 모든타입의 ㄱ밧을 저장할수 있다.
    */
   var obj1={
    name : '홍길동',
    age : 33,
    married : true,
    hoppy :['축구', '야구'],
    pet :{
        name : '구리구리', 
        breed : '말티즈'
    },
    1: 456,
    'user-name': 'zzz'
}

    var obj2= new Object();
    //객체내부 속성(프로파티)에 접근하는 방법
    //1) 점표기법(dot notation)
    obj2.pname = '말린망고';//{pname : '말린망고}
    obj2.price -300; //{pname:... ,price:300}
    //2) 브레이킷 표기법(braket notation)
    //- 브레킷표기법은 속성명을 반드시 문자열 리터럴 혹은 문자열 변수를 제시해야한다. 
    obj2['orign']='필리핀';
    //문자열에 띄어쓰기나 특수문자가 포함된 경우 대괄호 표기법 사용할것
    obj2['ty-pe']='피클';

    console.log(obj1,obj2)
}
test2.onclick=function(){
    //자바애서는 클래스안에 선언한 함수를 메서드라고 불럿다.
    //js에서는 객체/class 안에 선언한 함수를 메서드라 부른다.
    const pet={
        petName: '코코',
        eat : function(food){
            //그냥 petName으로 부르면 안됨
            console.log(this.petName+"가"+food+ "맛잇게 먹는다.") 
            //메서드서의 this는 메서드를 호출한 객체의 주소값 바인딩 
        }
    }
     console.log(pet);
     pet.eat('츄르');
     pet["eat"]('우유');
}
var game;
test3.onclick=function(){
    game={
        title : '디아블로4',
        price : 35000,
        lang : ['ko', 'en','cn'],
        run :function(){
            console.log(this.title+ "을 실행합니다.");
            //시작시간 기록
            this['start-time']= new Date();
        },
        shutdowm : function(){
            console.log(this.title+"을 종료합니다");
            this['end-time']=new Date();
        },
        duration : function(){
           var dur= this['end-time']- this['start-time'];
           dur=Math.floor( dur/1000/60);
           console.log(dur+"몇분동안 게임했네요")
        }

    }
    //객체 반복문 돌리기 
    for(var key in game){
        console.log("key:"+key);

        console.log("value: " +game.key);//점표기법으로는 조회 불가, value도 아님 []가 값을 의미
        console.log("value: " +game[key]);
    }
    game.run();
}
test4.onclick=function(){//짧은 반복문으로 널포인트 에러 발생 예방 
    game && game.shutdowm();
    game && game.duration();
}
test5.onclick=function(){
    //객체는 생성ㄷ괸 이후, 자유롭게 속성을 '추가"하거나 삭제 가능
    var student ={};
    student.name= '홍길동';
    student["class"]='g';
    student.no=33;

    //객체내부의 속성을 제거하고 싶으면ㅇ?
    delete student.class;
    console.log(student);
}


/*
toString메소드 오버라이딩
    - 자바 스크립트응 모든 객체가 Object를 상속한다.
    - 즉, Object의 메서드를 사용하거나 재정의 가능하다,.
*/
test6.onclick=function(){
    var noteb={
        title: '오늘의 일기',
        content: '오늘은 붕어빵을 먹엇다',
        date : new Date(),
        soString : function(){
            return "{title : "+ this.title+", contents :"+this.content+", date :"+this.date+"}";
        }
    }
    console.log(noteb);
}
test7.onclick=function(){
    /*
     * 생성자 함수=> 클래스와 비슷한 작용
        - 자바스크립에서 객체지향 프로그래밍을 자원하는 핵심 기능이다
        - 클래스를 정의하기 위한 용도의 함수로, 생성자 함수로 만든 함수는
          new 연산자와 함께 호출해야한다.
        - 생성자 함수는 첫 글자를 클래스와 같이 대문자로 작설하는 것이 관례
        - 모든 함수는 보이지 않는 Prototype이라는 속성을 가지고 잇으며,
         이속성을 통해 상속관계를 유지한다.

         *Prototype*=> 자바의 super개념이랑 비슷함 
         - 모든 함수가 묵시적으로 가지고 있는 속성으러, 부모객체를 저장해두는 저장공간
     * 
     */
    function Pet(kind, name, breed, weight){//대문자로 
        //필드부
        //- 생성자 함수 내부에서 this는 현재 생성된 객체의 주소값을 의미한다.
        this.kind=kind;
        this.nam=name;
        this.breed=breed;
        this.weight=weight;

        // //메서드부
        // this.bark=function(){
        //     return this.weight>10 ? '멍명': '왈왈';

        // }
        //현재 클래스의 부모객체에 속성/메소드를 추가하는 방법 
        Pet.prototype.bark=function(){
              return this.weight>10 ? '멍명': '왈왈';

        }
    }
    var coco= new Pet('고양이','코코','브숏',3);
     console.log(coco);
    console.log(coco.bark());
}
test8.onclick=function(){
    /*
    JAVAscript의 class 생성문법(es6)
    */
   class Animal {
    //생성자함수(필수)
    constructor(kind){
        this.kind=kind;
    }
   }
   class Pet extends Animal{
    #hobby;
     constructor(kind, name, breed, weight){
        super(kind);
        this.name=name;
        this.breed=breed;
        this.weight=weight;
    }
    //메서드부 방식으로 
    //get//setter를 생성하는거고
    //hobby속성에 값을 setter메서드
    setHobby(value){
        this.#hobby=value;

    }
    getHobby(){
        return this.#hobby;
    }
    //모던 js의 setter/gertter 방식을 쓰는거고
        //접근자 프로퍼피 사용
     set hobby(value){
            this.#hobby=value
        }
   }
   var cat= new Pet("고양이", "코코", "브숏",3);
   console.log(cat);

   cat.setHobby("츄르먹기")
   console.log(cat.getHobby());//변수??가 private인경우
   
   cat.hobby="츄르먹기";
   console.log(cat.hobby);
}