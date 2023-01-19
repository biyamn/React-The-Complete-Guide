# Exports & Imports(Modules)

- 차세대 자바스크립트에는 모듈 방식의 코드를 작성할 수 있는 기능이 있다,
    
    → 코드를 여러 개의 파일로 코드를 분할할 수 있다
    
    → HTML 파일에 올바른 순서로 코드를 가져오기만 하면 된다
    
    ![캡처 PNG (1)](https://user-images.githubusercontent.com/101965666/213484701-8b02288b-1881-45cc-b1e4-84e51b60d98c.png)
    
    ![캡처 PNG (2)](https://user-images.githubusercontent.com/101965666/213484704-b27f9141-a39b-41ee-9448-1edd890fb1b9.png)
    
    - default export: import 시에 이름을 바꿀 수 있다
    - named export: import 시에 이름을 바꿀 수는 없지만 as를 통해서 바꿀 수는 있다.
    - named export: 모든 named export를 가지고 올 때에는 import * as bundled from ~를 쓰면 된다.
    - 이때 default의 의미는?
        
        파일에서 어떤 것을 가져오면 항상 default export가 내보낸 것을 기본값으로 가져온다는 뜻. 위의 경우에서는 `const person`이 된다
        

---

# Exports & Imports(Modules) - 두번째 수강

![캡처 PNG (3)](https://user-images.githubusercontent.com/101965666/213484718-dfb3d3f9-898c-492d-9170-4f41a69ad0ac.png)

- default 키워드를 붙여서 내보내면 특별한 키워드를 붙여서 파일을 내보낼 수 있다.
    - export default person
    - export default: '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있다.
    - default를 붙여서 모듈을 내보내면 중괄호 없이 모듈을 가져올 수 있다.
- 여러개를 export 하는 파일
    - 중괄호를 이용하여 ‘그 파일에서 특정한 어떤 것을 정확하게’ 가리킬 수 있다. 그러려면 이름을 정확하게 입력해야 함
    - 중괄호를 이용한다면 이름을 바꿀 수 없다. 하지만 as를 이용하여 별칭을 사용할 수는 있다.
- named export 한 모듈을 가져오려면 중괄호가 필요하고, default export 한 모듈을 가져오려면 중괄호가 필요하지 않다.
- 한 파일엔 named export나 default export 둘 중 하나만 사용한다(실무에서 보통)