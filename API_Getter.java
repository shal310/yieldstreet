import org.testng.Assert;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import io.restassured.response.Response;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import org.hamcrest.Matcher;

public class Test_GET {

	//Get the weather details for London,UK successfully when the right parameters are passed - 200 (success)
	@Test
	void test_1() {
		given()
			.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=951d080745b04310c281038409c5582f")
		.then()
			.statusCode(200);
		
	}
	
	
	//Pass invalid api Key - should return 401 ( unauthorized)
	@Test
	void test_2() {
		given()
			.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=951d080745b04310c281038409c558f")
		.then()
			.statusCode(401);
		
	}
	
	//Passino geocode - should return 400 ( bad request)
		@Test
		void test_3() {
			given()
				.get("https://api.openweathermap.org/data/2.5/weather?q=&APPID=951d080745b04310c281038409c5582f")
			.then()
				.statusCode(400);
			
		}
		

}
