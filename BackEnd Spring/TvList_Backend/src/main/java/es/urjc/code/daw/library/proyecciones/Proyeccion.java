package es.urjc.code.daw.library.proyecciones;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.ws.rs.DELETE;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.temas.Tema;




@Entity
public class Proyeccion {

	
	interface Basico {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;

	@JsonView(Basico.class)
	private String title;
	
	@Column(length = 50000)	
	@JsonView(Basico.class)
	private String description;
	
	@JsonView(Basico.class)
	private String image;
	

	@ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private List<Tema> temas;
	
	
	public Proyeccion() {}

	public Proyeccion(String nombre, String description,String image,List<Tema> temas) {
		super();
		this.title = nombre;
		this.description = description;
		this.image=image;
		this.temas=temas;
	}

	
	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Tema> getTemas() {
		return temas;
	}

	public void setTemas(List<Tema> temas) {
		this.temas = temas;
	}


}
