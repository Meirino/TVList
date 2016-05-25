package es.urjc.code.daw.library;

//import org.h2.tools.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationConfig;
import com.fasterxml.jackson.databind.ser.DefaultSerializerProvider;

@SpringBootApplication
public class Application {
	
/*
	@Bean
	org.h2.tools.Server h2Server() {
	    Server server = new Server();
	    try {
	        server.runTool("-tcp");
	        server.runTool("-tcpAllowOthers");
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return server;

	}
	*/
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}