package es.urjc.code.daw.library.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

/**
 * This is the entity to store in database user information. It contains the
 * following basic information:
 * <ul>
 * <li>name: The name of the user. This name have to be used to logIn into the
 * service</li>
 * <li>passwordHash: The hash of the password. The password in never stored in
 * plain text to avoid information leak</li>
 * <li>roles: The roles of this user</li>
 * 
 * To check if a user can be logged into the service, this object is loaded from
 * database and password is verified. If user is authenticated, then this
 * database object is returned to the user.
 * 
 * NOTE: This class is intended to be extended by developer adding new
 * attributes. Current attributes can not be removed because they are used in
 * authentication procedures.
 */

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private String passwordHash;

	private String mail;
	
	private boolean isAdmin;

	private String rname;
	
	private String surname;
	
	private String avatar;

	private String image;


	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	public User() {
	}

	public User(String name, String password, String email,boolean adm, String n, String a,String avatar, String... roles) {
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.mail=email;
		this.isAdmin=adm;
		this.rname=n;
		this.surname=a;
		this.avatar=avatar;
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public String getPasswordHash() {
		return passwordHash;
	}
	
	
	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}
	
	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}
	
	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public Long getId() {
		return id;
	}
	
	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}


	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

}