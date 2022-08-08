package krobot.com.example.GMAO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude={SecurityAutoConfiguration.class})
///@SpringBootApplication(exclude = {ErrorMvcAutoConfiguration.class})
public class GmaoApplication {

	public static void main(String[] args) {
		SpringApplication.run(GmaoApplication.class, args);
	}

}
