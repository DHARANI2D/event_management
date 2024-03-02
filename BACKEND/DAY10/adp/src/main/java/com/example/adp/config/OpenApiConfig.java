package com.example.adp.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI defOpenAPI(){
        Server server=new Server();
        server.setUrl("http://localhost:8080");
        server.setDescription("Birthday Event Server");
        Info information = new Info()
            .title("Connection with Swagger")
            .version("1.0")
            .description("API Connections");
        return new OpenAPI().info(information).servers(List.of(server));
    }
}
