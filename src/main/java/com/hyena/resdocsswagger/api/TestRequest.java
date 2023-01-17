package com.hyena.resdocsswagger.api;

public class TestRequest {

	private String title;

	private String content;

	public TestRequest(String title, String content) {
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
