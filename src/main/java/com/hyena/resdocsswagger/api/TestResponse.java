package com.hyena.resdocsswagger.api;

public class TestResponse {

	private String title;

	private String content;

	public TestResponse(String title, String content) {
		this.title = title;
		this.content = content;
	}

	public String getTitle() {
		return title;
	}

	public String getContent() {
		return content;
	}
}
