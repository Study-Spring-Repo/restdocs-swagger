window.swaggerSpec={
  "openapi" : "3.0.1",
  "info" : {
    "title" : "restdocs-swagger API Documentation",
    "description" : "Spring REST Docs with SwaggerUI.",
    "version" : "0.0.1"
  },
  "servers" : [ {
    "url" : "http://localhost:8080"
  } ],
  "tags" : [ ],
  "paths" : {
    "/v1" : {
      "post" : {
        "tags" : [ "v1" ],
        "operationId" : "test-controller-test/v1-test",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "$ref" : "#/components/schemas/v1486549215"
              },
              "examples" : {
                "test-controller-test/v1-test" : {
                  "value" : "{\n  \"title\" : \"v1 테스트 제목\",\n  \"content\" : \"v1 테스트 내용\"\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "200",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/v1486549215"
                },
                "examples" : {
                  "test-controller-test/v1-test" : {
                    "value" : "{\n  \"title\" : \"v1 테스트 제목\",\n  \"content\" : \"v1 테스트 내용\"\n}"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "v1486549215" : {
        "type" : "object"
      }
    }
  }
}