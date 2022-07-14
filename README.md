# dbScript-to-voField
dbscript 에서 create ddl 문의 컬럼을 복사해서 삽입하면 vo field 로 변환해줍니다.

# 개노가다 작업하느라 현타가와서 만듬

# 사용법 (큐브리드 기준임 뭐 차차 오라클이나 mysql 등 늘려나갈생각)

![tetstestestest](https://user-images.githubusercontent.com/69393030/178975351-ced58fe4-5e60-4548-acd4-b58bf1c91358.png)

보면 이렇게 테이블 ddl문이 있다고 가정하면, 저 ddl 문에 해당하는 컬럼들을 긁어다가 입력창에 입력해주기만 하면 변환이된다 ( 물론 자바 vo 로 변환한다고 ^^)
```mysql
idx NUMERIC(20,0) DEFAULT NULL NOT NULL,
	api_type VARCHAR(100) DEFAULT NULL,
	request_data VARCHAR(1000) DEFAULT NULL,
	response_data VARCHAR(1000) DEFAULT NULL,
	created_at CHAR(50) DEFAULT NULL,
	updated_at CHAR(50) DEFAULT NULL,
	mall_id VARCHAR(300) DEFAULT NULL,

```
컬럼에 해당하는 부분만 긁어다가.
![testset1!!@@1412421421](https://user-images.githubusercontent.com/69393030/178975684-a9dcdf1a-ae4d-40ab-922c-cbc9c459f47f.png)

저기  텍스트 에리어에다가 붙여넣어주고 변환하기! 버튼을 누르게되면 
![result](https://user-images.githubusercontent.com/69393030/178975845-b017c856-87fd-4ce4-878f-7681bf86ea0e.png)

이렇게 vo 로 변환 시켜준다.




# 심심해서 리액트로.. 간단하게 (코드퀄리티 보장못함 그냥 심심해서 만듬)
https://jz137c.csb.app/
