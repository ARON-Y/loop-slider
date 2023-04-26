let ul = document.querySelector("ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let lis = document.querySelectorAll("li");

ul.style.marginLeft = "-100%";

next.addEventListener("click", (e) => {
  e.preventDefault();

  // 이 다음 슬라이더로 이동을 시키는 코드 작성
  ul.style.marginLeft = "-200%";

  ul.append(ul.firstElementChild);
});

/* DOM 구조를 변경시키는 코드 (2번 슬라이드가 중앙에 배치된 상태, 1번 슬라이드를 3번 슬라이드 뒤에 배치시키기)

부모요소의 안쪽, 가장 뒤(ul의 가장 뒤쪽에 있는 3번 슬라이드 뒤)에 자식요소를 삽입하는 방법
-부모요소명.append(자식요소)

부모요소의 안쪽, 가장 앞에 자식요소를 삽입하는 방법
-부모요소명.prepend(자식요소)

loop slider의 경우 프레임을 기준으로 양쪽에 적어도 하나 이상의 패널이 존재해야 한다. 적어도 3개의 패널이 있어야 loop가 가능하다.
loop를 시키려면 DOM구조를 변경시켜서 앞의 요소가 뒤로, 뒤의 요소가 앞으로 변경되어야 loop가 가능한데, 이렇게 했을 때 DOM의 구조순서를 따라 설정하는 nth의 css코드는 적용할 수 없다.
nth로 적용할 경우, DOM구조가 변경되어면서 순서도 변경되어 고유한 스타일이 입혀지지 않고 변경되어 순서가 입혀진 대로 css가 적용되는 결과가 발생된다.
⇒ 빨간색 1 / 파란색 2 / 초록색 3이 색과 매치되어 움직어야 하는데 빨간색 2 / 파란색 3 / 초록색 1 로 움직이게 된다.
     
해결 방법 : 1. 클래스를 매 프레임마다 적용해서 하는 방법 (클래스 무한증식, 비추천)
2. data 속성을 부여하여 적용시키는 방법 (추천)

data 속성이란? 개발자가 속성값으로 특정 정보를 은닉하는 방법.
DOM요소에는 영향을 주지 않고 data-이름자유롭게 작성 = "";
data 속성으로 지정하고, 값을 넣은 값은 개발자가 자유로게 활용이 가능. 
속성은 많이 부여를 해도 보기에만 불편할 뿐 과부하를 주지 않는다. 
해당 요소에 class가 많이 부여되면 부여될수록 css 적용시 우선순위에 영향을 미친다.(A.K.A 명시도, 그래서 class 남용을 지양하는 것)

*/

prev.addEventListener("click", (e) => {
  e.preventDefault();
  ul.style.marginLeft = "0%";
  ul.prepend(ul.lastElementChild);
});
