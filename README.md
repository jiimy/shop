# shop

웹의 기본적인 기능들
- 회원 
  - 장바구니
  - 회원가입, 탈퇴, 비밀번호 찾기, 아이디 찾기, 소셜 로그인
  - 문의하기
- 어드민 
  - 상품관리
  - 회원관리
- 알림 
  - 쿠폰알림
  - 이벤트알림
- 이벤트페이지
- 결제

위 기능들을 사용하는 서비스가 쇼핑몰이라고 생각되어
쇼핑몰 처럼 만들기 위한 레포지토리 입니다. 

파이어베이스를 통한 db, github page를 통한 배포를 사용하고 있습니다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

자전거를 주제로 하고있으며

상품 목업 데이터는 아래와 같습니다.
```
브랜드명 brand: string
가격 price: number 필수값
사이즈 size: string 필수값
상품이미지 image: url 필수값
타입type:  필수값
  완차 perfect: 모델명 string
  프레임 frame: 모델명 string
  휠셋 wheelset: 모델명 string
  구동계 driving system : 모델명 string
  부품 part: 모델명 string
  용품/기타 supplies : 모델명 string
  의류/패션아이템 clothes: 모델명 string
```
  
