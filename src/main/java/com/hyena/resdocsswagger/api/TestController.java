package com.hyena.resdocsswagger.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@PostMapping("/v1")
	@ResponseStatus(HttpStatus.OK)
	public TestResponse v1(@RequestBody TestRequest request) {
		return new TestResponse(request.getTitle(), request.getContent());
	}
}
